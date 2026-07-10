"use client";

import { motion } from "framer-motion";
import { Band, BAND_CONFIG } from "../utils/bandConfig";

interface Props {
  band: Band;
  childName: string;
  onStart: () => void;
}

export function CptInstructionsScreen({ band, childName, onStart }: Props) {
  const config = BAND_CONFIG[band];
  const totalMins = Math.round(config.totalSeconds / 60);

  return (
    <div className="space-y-6 py-2">
      {/* Part badge */}
      <div className="flex items-center gap-2">
        <span
          className="text-xs font-extrabold px-3 py-1 rounded-full bg-[#E8F8F7] text-teal"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Part 1 of 4
        </span>
        <span className="text-xs text-gray-400 font-semibold">
          Digital Shape Task
        </span>
      </div>

      {/* Heading */}
      <div>
        <h2
          className="text-2xl font-extrabold text-brand-black"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Hey {childName}! 👋
        </h2>
        <p className="text-sm text-gray-500 font-semibold mt-1 leading-relaxed">
          You&apos;re about to do a fun shape-spotting task. Here&apos;s how it
          works:
        </p>
      </div>

      {/* Target shape */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl p-6 text-center space-y-3"
        style={{ background: "#E8F8F7", border: "2px solid #2BBCB0" }}
      >
        <p className="text-xs font-extrabold uppercase tracking-wider text-teal">
          Your target shape
        </p>
        <div
          className="text-[80px] leading-none mx-auto"
          style={{ color: "#1A1A1A", fontFamily: "monospace" }}
        >
          {config.target}
        </div>
        <p
          className="text-lg font-extrabold text-brand-black"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          The {config.targetName}
        </p>
        <p className="text-sm text-teal font-extrabold">
          TAP this one. Ignore everything else.
        </p>
      </motion.div>

      {/* Rules */}
      <div className="space-y-3">
        {[
          { icon: "👁️", text: "Shapes will appear one at a time on screen" },
          {
            icon: "👆",
            text: `Tap only the ${config.targetName}; ignore all other shapes`,
          },
          {
            icon: "⚡",
            text: "Halfway through, you'll get a fun STAR BURST challenge!",
          },
          {
            icon: "⏱️",
            text: `This part takes about ${totalMins} minutes total`,
          },
        ].map((rule, i) => (
          <div
            key={i}
            className="flex items-start gap-3 p-3 rounded-xl"
            style={{ background: "#FAFAF8" }}
          >
            <span className="text-xl shrink-0">{rule.icon}</span>
            <p className="text-sm font-semibold text-gray-700 leading-relaxed">
              {rule.text}
            </p>
          </div>
        ))}
      </div>

      {/* Duration note */}
      <div
        className="rounded-xl px-4 py-3 flex items-center gap-3"
        style={{
          background: "#FFFBEA",
          border: "1px solid rgba(245,197,24,0.4)",
        }}
      >
        <span className="text-lg">⏳</span>
        <p className="text-xs font-semibold text-[#92700A] leading-relaxed">
          <strong>Give the device to {childName}</strong> and let them sit
          comfortably. Parent can leave the room or sit quietly.
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
        I understand. Start Task 🚀
      </motion.button>
    </div>
  );
}
