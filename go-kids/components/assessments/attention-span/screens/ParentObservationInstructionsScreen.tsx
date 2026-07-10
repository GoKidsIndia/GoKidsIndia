"use client";

import { motion } from "framer-motion";

interface Props {
  onStart: () => void;
}

export function ParentObservationInstructionsScreen({ onStart }: Props) {
  return (
    <div className="space-y-6 py-2">
      <div className="flex items-center gap-2">
        <span
          className="text-xs font-extrabold px-3 py-1 rounded-full bg-[#E8F8F7] text-teal"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Part 3 of 4
        </span>
        <span className="text-xs text-gray-400 font-semibold">
          Parent Observations
        </span>
      </div>

      <div className="space-y-2">
        <h2
          className="text-2xl font-extrabold text-brand-black"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Parent Observations 👀
        </h2>
        <p className="text-sm text-gray-500 font-semibold leading-relaxed">
          Answer based on your child&apos;s behaviour over the{" "}
          <strong>past 6 months</strong> (not just today).
        </p>
      </div>

      {/* Scale explanation */}
      <div
        className="rounded-2xl p-4 space-y-3"
        style={{ background: "#FAFAF8", border: "1.5px solid #F3F4F6" }}
      >
        <p className="text-xs font-extrabold uppercase tracking-wider text-gray-400">
          Rating Scale
        </p>
        <div className="grid grid-cols-5 gap-1 text-center">
          {[
            { val: 1, label: "Never" },
            { val: 2, label: "Rarely" },
            { val: 3, label: "Sometimes" },
            { val: 4, label: "Often" },
            { val: 5, label: "Almost always" },
          ].map(({ val, label }) => (
            <div key={val} className="space-y-1">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center mx-auto text-xs font-extrabold"
                style={{
                  background: "#F5C518",
                  color: "#1A1A1A",
                  fontFamily: "var(--font-heading)",
                }}
              >
                {val}
              </div>
              <p className="text-[9px] font-semibold text-gray-400 leading-tight">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 4 clusters */}
      <div className="space-y-2">
        <p className="text-xs font-extrabold uppercase tracking-wider text-gray-400">
          4 topic areas, 12 questions total
        </p>
        {[
          { emoji: "🎯", label: "Sustaining Attention", n: 3 },
          { emoji: "🧘", label: "Impulse & Patience", n: 3 },
          { emoji: "🌍", label: "Real-world Attention", n: 3 },
          { emoji: "⚡", label: "Motivation vs Attention", n: 3 },
        ].map((c) => (
          <div
            key={c.label}
            className="flex items-center gap-3 px-3 py-2 rounded-xl"
            style={{ background: "#F3F4F6" }}
          >
            <span className="text-lg">{c.emoji}</span>
            <p className="flex-1 text-sm font-semibold text-gray-700">
              {c.label}
            </p>
            <span className="text-[10px] font-extrabold text-gray-400">
              {c.n} Qs
            </span>
          </div>
        ))}
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
        Start Part 3 →
      </motion.button>
    </div>
  );
}
