"use client";

import { motion } from "framer-motion";

interface Props {
  onContinue: () => void;
}

export function HandToParentScreen({ onContinue }: Props) {
  return (
    <div className="space-y-6 py-2 text-center">
      <div className="text-6xl">🤝</div>
      <div className="space-y-2">
        <h2 className="text-2xl font-extrabold text-[#1A1A1A]" style={{ fontFamily: "var(--font-heading)" }}>
          Time to hand the device to a parent or guardian
        </h2>
        <p className="text-sm text-gray-500 font-semibold leading-relaxed max-w-sm mx-auto">
          The child&apos;s part is done — great work! The next two sections are for parents to complete.
        </p>
      </div>

      {/* What&apos;s next cards */}
      <div className="space-y-3 text-left">
        <div className="rounded-2xl p-4 flex items-start gap-4" style={{ background: "#E8F8F7", border: "1px solid #2BBCB0" }}>
          <span className="text-2xl shrink-0">👀</span>
          <div>
            <p className="text-sm font-extrabold text-[#1A1A1A]" style={{ fontFamily: "var(--font-heading)" }}>Part 3 — Parent Observations</p>
            <p className="text-xs text-gray-500 font-semibold mt-0.5">12 questions · 8–10 minutes · Based on what you see at home</p>
          </div>
        </div>
        <div className="rounded-2xl p-4 flex items-start gap-4" style={{ background: "#FFFBEA", border: "1px solid rgba(245,197,24,0.4)" }}>
          <span className="text-2xl shrink-0">⚡</span>
          <div>
            <p className="text-sm font-extrabold text-[#1A1A1A]" style={{ fontFamily: "var(--font-heading)" }}>Part 4 — Motivation Check</p>
            <p className="text-xs text-gray-500 font-semibold mt-0.5">10 questions · 5 minutes · Most important section</p>
          </div>
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        onClick={onContinue}
        className="w-full py-4 rounded-2xl font-extrabold text-sm"
        style={{
          background: "#F5C518",
          color: "#1A1A1A",
          fontFamily: "var(--font-heading)",
          boxShadow: "0 4px 16px rgba(245,197,24,0.35)",
        }}
      >
        I&apos;m the parent — continue →
      </motion.button>
    </div>
  );
}
