"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { signIn } from "next-auth/react";

type GoogleButtonProps = {
  callbackUrl?: string;
  isLoading?: boolean;
  disabled?: boolean;
  label?: string;
};

export default function GoogleButton({
  callbackUrl = "/parent/dashboard",
  isLoading = false,
  disabled = false,
  label = "Continue with Google",
}: GoogleButtonProps) {
  const isDisabled = disabled || isLoading;
  const [hovered, setHovered] = useState(false);

  return (
    <motion.button
      type="button"
      whileTap={{ scale: isDisabled ? 1 : 0.97 }}
      onClick={() => signIn("google", { callbackUrl })}
      disabled={isDisabled}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex w-full items-center justify-center gap-3 rounded-full px-6 py-3.5 text-sm font-bold transition-all duration-200"
      style={{
        fontFamily: "var(--font-nunito)",
        opacity: isDisabled ? 0.65 : 1,
        cursor: isDisabled ? "not-allowed" : "pointer",
        background: hovered && !isDisabled
          ? "linear-gradient(135deg, #FFFDF9 0%, #FFF9E6 100%)"
          : "linear-gradient(135deg, #FFFFFF 0%, #FAFAFA 100%)",
        border: hovered && !isDisabled
          ? "1.5px solid #F5C518"
          : "1.5px solid #E5E7EB",
        color: "#1A1A1A",
        boxShadow: hovered && !isDisabled
          ? "0 4px 20px rgba(245, 197, 24, 0.2), 0 1px 4px rgba(0,0,0,0.06)"
          : "0 1px 6px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,0.9)",
        letterSpacing: "-0.01em",
      }}
    >
      {/* Icon area */}
      <span
        className="flex items-center justify-center rounded-full"
        style={{
          width: 28,
          height: 28,
          background: "white",
          boxShadow: "0 1px 3px rgba(0,0,0,0.12)",
          flexShrink: 0,
        }}
      >
        {isLoading ? (
          <Loader2 size={15} className="animate-spin" style={{ color: "#9CA3AF" }} />
        ) : (
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
        )}
      </span>

      <span style={{ flex: 1, textAlign: "center", paddingRight: 28 }}>
        {label}
      </span>
    </motion.button>
  );
}
