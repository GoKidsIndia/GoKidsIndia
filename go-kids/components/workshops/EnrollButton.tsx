"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, Loader2, CheckCircle2 } from "lucide-react";

interface EnrollButtonProps {
  workshopId: string;
  price: number;
  isFree: boolean;
  slug: string;
  isLoggedIn: boolean;
  initialIsEnrolled: boolean;
  isEnrollmentOpen: boolean;
}

export default function EnrollButton({
  workshopId,
  price,
  isFree,
  slug,
  isLoggedIn,
  initialIsEnrolled,
  isEnrollmentOpen,
}: EnrollButtonProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(initialIsEnrolled);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleEnroll = async () => {
    if (!isEnrollmentOpen) return;
    if (!isLoggedIn) {
      router.push(
        `/login?callbackUrl=${encodeURIComponent(`/workshops/${slug}`)}`,
      );
      return;
    }

    try {
      setLoading(true);
      setErrorMsg(null);

      const res = await fetch("/api/payments/initiate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ workshopId }),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || "Failed to initiate enrollment");
      }

      const data = await res.json();

      if (data.free) {
        // Free workshop enrollment success
        setIsEnrolled(true);
        router.push(
          data.redirect || "/parent/dashboard?tab=workshops&enrolled=true",
        );
      } else {
        // Paid workshop: open Razorpay Checkout modal
        const options = {
          key: data.keyId,
          amount: data.order.amount,
          currency: data.order.currency,
          name: "Go Kids India",
          description: `Enrollment: ${data.workshopTitle}`,
          order_id: data.order.id,
          handler: async function (response: any) {
            try {
              setLoading(true);
              const verifyRes = await fetch("/api/payments/verify", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_signature: response.razorpay_signature,
                }),
              });

              if (!verifyRes.ok) {
                throw new Error("Payment verification failed");
              }

              const verifyData = await verifyRes.json();
              if (verifyData.success) {
                window.location.href =
                  "/parent/dashboard?tab=workshops&enrolled=true";
              } else {
                window.location.href = `/workshops/${slug}?payment=failed`;
              }
            } catch (err) {
              console.error("[Razorpay Handler Error]", err);
              window.location.href = `/workshops/${slug}?payment=failed`;
            }
          },
          prefill: {
            name: data.prefill.name,
            email: data.prefill.email,
          },
          theme: {
            color: "#F5C518",
          },
          modal: {
            ondismiss: function () {
              setLoading(false);
            },
          },
        };

        const rzp = new (window as any).Razorpay(options);
        rzp.open();
      }
    } catch (err: any) {
      console.error("[EnrollButton Error]", err);
      setErrorMsg(err.message || "Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  if (!isEnrollmentOpen) {
    return (
      <div className="w-full">
        <button
          disabled
          className="w-full py-4 rounded-2xl text-base font-extrabold mb-2 flex items-center justify-center gap-2 border-none text-white cursor-not-allowed"
          style={{ background: "#9CA3AF", fontFamily: "var(--font-nunito)" }}
        >
          🔒 Enrollment Opens Soon
        </button>
        <p className="text-xs text-center" style={{ color: "#9CA3AF", fontFamily: "var(--font-nunito)" }}>
          Enrollment shall open soon. Stay tuned!
        </p>
      </div>
    );
  }

  if (isEnrolled) {
    return (
      <div className="w-full">
        <button
          disabled
          className="w-full py-4 rounded-2xl text-base font-extrabold mb-2 flex items-center justify-center gap-2 border-none text-white cursor-not-allowed bg-teal"
        >
          <CheckCircle2 size={17} />
          Already Enrolled ✓
        </button>
      </div>
    );
  }

  return (
    <div className="w-full">
      {errorMsg && (
        <p className="text-xs text-red-500 font-semibold mb-2 text-center">
          ⚠️ {errorMsg}
        </p>
      )}
      <motion.button
        whileHover={{ scale: loading ? 1 : 1.025 }}
        whileTap={{ scale: loading ? 1 : 0.97 }}
        onClick={handleEnroll}
        disabled={loading}
        className="w-full py-4 rounded-2xl text-base font-extrabold mb-3 transition-shadow flex items-center justify-center gap-2 border-none cursor-pointer text-brand-black"
        style={{
          background: loading
            ? "#E5E7EB"
            : "linear-gradient(135deg, #F5C518 0%, #FFD740 100%)",
          color: loading ? "#9CA3AF" : "#1A1A1A",
          fontFamily: "var(--font-nunito)",
          boxShadow: loading ? "none" : "0 8px 24px rgba(245,197,24,0.45)",
        }}
      >
        {loading ? (
          <>
            <Loader2 size={17} className="animate-spin" />
            Processing...
          </>
        ) : isFree ? (
          <>
            Enroll for Free
            <ArrowRight size={17} />
          </>
        ) : (
          <>
            Enroll Now for ₹{price.toLocaleString("en-IN")}
            <ArrowRight size={17} />
          </>
        )}
      </motion.button>
    </div>
  );
}
