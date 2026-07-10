"use client";

import { motion } from "framer-motion";
import { Band } from "../utils/bandConfig";
import { CptRawData, scorePartA } from "../utils/scoring";

interface Props {
  band: Band;
  childName: string;
  cptRaw: CptRawData;
  onNext: () => void;
  nextLabel: string; // "Hand to parent — Part C" or "Hand back to childName — Part B"
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div
      className="text-center py-3 px-2 rounded-xl"
      style={{ background: "#FAFAF8" }}
    >
      <p
        className="text-xl font-extrabold text-brand-black"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {value}
      </p>
      <p className="text-[10px] text-gray-400 font-semibold mt-0.5 leading-tight">
        {label}
      </p>
    </div>
  );
}

export function CptDoneScreen({
  band,
  childName,
  cptRaw,
  onNext,
  nextLabel,
}: Props) {
  void band; // may be used for styling future improvements

  const { cptBaseScore } = scorePartA(cptRaw);

  return (
    <div className="space-y-5 py-2">
      {/* Celebration header */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="text-center space-y-2"
      >
        <div className="text-4xl sm:text-6xl">✅</div>
        <h2
          className="text-2xl font-extrabold text-brand-black"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Part 1 Complete!
        </h2>
        <p className="text-sm text-gray-500 font-semibold">
          Great work, {childName}! Here&apos;s what we measured:
        </p>
      </motion.div>

      {/* Stats card */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="rounded-2xl p-5 space-y-4 border border-gray-100 shadow-sm"
        style={{ background: "#FFFFFF" }}
      >
        {/* Phase 1 — now 4 columns including false taps */}
        <div>
          <p className="text-[10px] font-extrabold uppercase tracking-wider text-teal mb-2">
            Phase 1: Baseline
          </p>
          <div className="grid grid-cols-4 gap-2">
            <Stat label="Shapes shown" value={cptRaw.phase1Targets} />
            <Stat label="Correct hits" value={cptRaw.phase1Hits} />
            <Stat
              label="Hit rate"
              value={`${Math.round(cptRaw.phase1HitRatePct)}%`}
            />
            <Stat label="False taps" value={cptRaw.phase1FalseAlarms} />
          </div>
        </div>

        {/* Burst */}
        <div>
          <p className="text-[10px] font-extrabold uppercase tracking-wider text-primary mb-2">
            Star Burst ⚡
          </p>
          <div className="grid grid-cols-2 gap-2">
            <Stat label="Stars tapped" value={cptRaw.burstStarsTapped} />
            <Stat label="Total stars" value={cptRaw.burstStarsTotal} />
          </div>
        </div>

        {/* Phase 3 — now 4 columns including false taps */}
        <div>
          <p className="text-[10px] font-extrabold uppercase tracking-wider text-coral mb-2">
            Phase 3: Endurance
          </p>
          <div className="grid grid-cols-4 gap-2">
            <Stat label="Shapes shown" value={cptRaw.phase3Targets} />
            <Stat label="Correct hits" value={cptRaw.phase3Hits} />
            <Stat
              label="Hit rate"
              value={`${Math.round(cptRaw.phase3HitRatePct)}%`}
            />
            <Stat label="False taps" value={cptRaw.phase3FalseAlarms} />
          </div>
        </div>

        {/* Focus trend */}
        {cptRaw.totalTargets > 0 && (
          <div className="pt-2 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold text-gray-400">
                Focus trend (Phase 1 → Phase 3)
              </p>
              <p
                className="text-xs font-extrabold"
                style={{
                  color:
                    cptRaw.fatigueIndex >= 0
                      ? "#16a34a"
                      : cptRaw.fatigueIndex >= -15
                        ? "#F5C518"
                        : "#E24B4A",
                }}
              >
                {cptRaw.fatigueIndex >= 0
                  ? "↑ Improving"
                  : cptRaw.fatigueIndex >= -15
                    ? "→ Stable"
                    : "↓ Fading"}
              </p>
            </div>
          </div>
        )}
      </motion.div>

      {/* CPT Base Score highlight */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="rounded-2xl px-5 py-4 flex items-center justify-between"
        style={{ background: "#F5F9FF", border: "1.5px solid #DBEAFE" }}
      >
        <div>
          <p
            className="text-[10px] font-extrabold uppercase tracking-wider"
            style={{ color: "#3B82F6" }}
          >
            Digital Task Score
          </p>
          <p className="text-[11px] text-gray-400 font-semibold mt-0.5">
            Based on hits, false taps &amp; fatigue
          </p>
        </div>
        <span
          className="text-3xl font-extrabold"
          style={{ color: "#3B82F6", fontFamily: "var(--font-heading)" }}
        >
          {cptBaseScore}%
        </span>
      </motion.div>

      {/* Footer note */}
      <p className="text-[11px] text-center text-gray-400 font-semibold">
        Full results and your child&apos;s attention profile will appear at the
        end.
      </p>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        onClick={onNext}
        className="w-full py-4 rounded-2xl font-extrabold text-sm"
        style={{
          background: "#F5C518",
          color: "#1A1A1A",
          fontFamily: "var(--font-heading)",
          boxShadow: "0 4px 16px rgba(245,197,24,0.35)",
        }}
      >
        {nextLabel}
      </motion.button>
    </div>
  );
}



