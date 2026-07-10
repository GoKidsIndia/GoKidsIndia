"use client";

import { motion } from "framer-motion";

interface Props {
  onStart: () => void;
}

export function MotivationInstructionsScreen({ onStart }: Props) {
  return (
    <div className="space-y-6 py-2">
      <div className="flex items-center gap-2">
        <span
          className="text-xs font-extrabold px-3 py-1 rounded-full bg-[#FFFBEA] text-primary-dark"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Part 4 of 4
        </span>
        <span className="text-xs text-gray-400 font-semibold">
          Motivation Check
        </span>
      </div>

      <div className="space-y-2">
        {/* <div className="text-4xl">⚡</div> */}
        <h2
          className="text-2xl font-extrabold text-brand-black"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          ⚡Motivation Check
        </h2>
        <p className="text-sm text-gray-500 font-semibold leading-relaxed">
          This is the <strong>most important part</strong>. Answer based on
          consistent patterns you&apos;ve observed, not a single incident.
        </p>
      </div>

      {/* Scale */}
      <div
        className="rounded-2xl p-4 space-y-3"
        style={{
          background: "#FFFBEA",
          border: "1.5px solid rgba(245,197,24,0.4)",
        }}
      >
        <p className="text-xs font-extrabold uppercase tracking-wider text-primary-dark">
          Rating Scale
        </p>
        <div className="grid grid-cols-5 gap-1 text-center">
          {["Never", "Rarely", "Sometimes", "Often", "Always"].map(
            (label, i) => (
              <div key={i} className="space-y-1">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center mx-auto text-xs font-extrabold"
                  style={{
                    background: "#F5C518",
                    color: "#1A1A1A",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  {i + 1}
                </div>
                <p className="text-[9px] font-semibold text-gray-400 leading-tight">
                  {label}
                </p>
              </div>
            ),
          )}
        </div>
      </div>

      <div
        className="rounded-xl px-4 py-3 flex items-start gap-3"
        style={{ background: "#F3F4F6" }}
      >
        <span className="text-lg shrink-0">💡</span>
        <p className="text-xs font-semibold text-gray-600 leading-relaxed">
          Part D helps us understand whether attention challenges are about{" "}
          <strong>capacity</strong> (can&apos;t focus) or{" "}
          <strong>motivation</strong> (won&apos;t focus when disengaged). This
          distinction changes everything about how to help.
        </p>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        onClick={onStart}
        className="w-full py-4 rounded-2xl font-extrabold text-sm"
        style={{
          background: "#F5C518",
          color: "#1A1A1A",
          fontFamily: "var(--font-heading)",
          boxShadow: "0 4px 16px rgba(245,197,24,0.35)",
        }}
      >
        Start Part 4 →
      </motion.button>
    </div>
  );
}
