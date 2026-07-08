"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Band, BAND_CONFIG } from "../utils/bandConfig";
import { useCptPhase, PhaseCounters } from "../hooks/useCptPhase";

interface Props {
  band: Band;
  phase: 1 | 3;
  onPhaseEnd: (counters: PhaseCounters) => void;
}

function CircularCountdown({ seconds, total }: { seconds: number; total: number }) {
  const r = 44;
  const circumference = 2 * Math.PI * r;
  const progress = Math.max(0, seconds / total);
  const strokeDashoffset = circumference * (1 - progress);

  return (
    <svg width={100} height={100} viewBox="0 0 100 100" className="shrink-0">
      <circle cx={50} cy={50} r={r} fill="none" stroke="#F3F4F6" strokeWidth={8} />
      <circle
        cx={50} cy={50} r={r} fill="none"
        stroke="#F5C518" strokeWidth={8}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        transform="rotate(-90 50 50)"
        style={{ transition: "stroke-dashoffset 0.8s linear" }}
      />
      <text x={50} y={50} textAnchor="middle" dominantBaseline="middle" className="text-xl font-extrabold" style={{ fontSize: 22, fontWeight: 800, fill: "#1A1A1A", fontFamily: "var(--font-heading)" }}>
        {seconds}
      </text>
    </svg>
  );
}

export function CptPhaseScreen({ band, phase, onPhaseEnd }: Props) {
  const config = BAND_CONFIG[band];
  const phaseDuration = phase === 1 ? config.phase1Seconds : config.phase3Seconds;

  const { state, startPhase, handleTap } = useCptPhase({
    band,
    phaseDuration,
    onPhaseEnd,
  });

  useEffect(() => {
    startPhase();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const { secondsLeft, currentShape, shapeVisible, counters, tapFeedback, missText, shapeCount } = state;

  const tapBg =
    tapFeedback === "hit" ? "#D1FAE5" :
    tapFeedback === "false_alarm" ? "#FEE2E2" :
    "#FFFFFF";

  const tapBorder =
    tapFeedback === "hit" ? "#10B981" :
    tapFeedback === "false_alarm" ? "#EF4444" :
    "#2BBCB0";

  return (
    <div className="space-y-5 py-2">
      {/* Phase header */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-extrabold text-gray-400 uppercase tracking-wider">
          Phase {phase} of 3 — {phase === 1 ? "Baseline" : "Endurance"}
        </span>
        <span className="text-xs font-bold px-2 py-1 rounded-full bg-[#E8F8F7] text-[#2BBCB0]">
          Part 1
        </span>
      </div>

      {/* Countdown + counters row */}
      <div className="flex items-center gap-4">
        <CircularCountdown seconds={secondsLeft} total={phaseDuration} />
        <div className="flex-1 grid grid-cols-3 gap-2">
          {[
            { label: "Shown", value: counters.targets },
            { label: "Hits ✓", value: counters.hits },
            { label: "False ✗", value: counters.falseAlarms },
          ].map(({ label, value }) => (
            <div key={label} className="text-center rounded-xl py-2 px-1" style={{ background: "#F3F4F6" }}>
              <p className="text-lg font-extrabold text-[#1A1A1A]" style={{ fontFamily: "var(--font-heading)" }}>{value}</p>
              <p className="text-[10px] text-gray-400 font-semibold">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Shape display area */}
      <div
        className="relative flex items-center justify-center rounded-2xl mx-auto"
        style={{ width: 200, height: 200, background: "#FAFAF8", border: "2px solid #F3F4F6" }}
      >
        <AnimatePresence mode="wait">
          {shapeVisible && currentShape ? (
            <motion.div
              key={`${currentShape}-${shapeCount}`}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.15 }}
              className="text-[72px] leading-none select-none"
              style={{ fontFamily: "monospace", color: "#1A1A1A" }}
            >
              {currentShape}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-gray-300 text-3xl select-none"
            >
              · · ·
            </motion.div>
          )}
        </AnimatePresence>

        {/* Target reminder */}
        <div className="absolute bottom-2 right-2 text-[10px] font-extrabold text-gray-300">
          Target: {config.target}
        </div>
      </div>

      {/* Miss / false-alarm feedback */}
      <AnimatePresence>
        {missText && (
          <motion.p
            key="miss"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-center text-sm font-extrabold text-red-400"
          >
            Missed!
          </motion.p>
        )}
        {tapFeedback === "false_alarm" && (
          <motion.p
            key="false-alarm"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-center text-sm font-extrabold text-red-400"
          >
            Not the target!
          </motion.p>
        )}
      </AnimatePresence>

      {/* Tap button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleTap}
        className="w-full py-5 rounded-2xl font-extrabold text-lg border-2 transition-colors"
        style={{
          background: tapBg,
          borderColor: tapBorder,
          color: "#1A1A1A",
          fontFamily: "var(--font-heading)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
        }}
      >
        {tapFeedback === "hit" ? "✅ Hit!" :
         tapFeedback === "false_alarm" ? "❌ Not it!" :
         "TAP IT! 👋"}
      </motion.button>

      {/* Target reminder strip */}
      <p className="text-center text-xs font-semibold text-gray-400">
        Only tap when you see the <strong className="text-[#1A1A1A]">{config.targetName} {config.target}</strong>
      </p>
    </div>
  );
}
