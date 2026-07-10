"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Band, BAND_CONFIG } from "../utils/bandConfig";
import { useBurstChallenge, BurstCounters } from "../hooks/useBurstChallenge";

interface Props {
  band: Band;
  onBurstEnd: (counters: BurstCounters) => void;
}

export function BurstChallengeScreen({ band, onBurstEnd }: Props) {
  const duration = BAND_CONFIG[band].phase2Seconds;
  const {
    secondsLeft,
    currentStar,
    tapCount,
    totalStars,
    startBurst,
    handleStarTap,
  } = useBurstChallenge({ durationSeconds: duration, onBurstEnd });

  useEffect(() => {
    startBurst();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      className="min-h-130 flex flex-col items-center pt-6 pb-4 px-2 rounded-2xl relative overflow-hidden"
      style={{ background: "#FFF8DC" }}
    >
      {/* Header */}
      <div className="text-center space-y-1 z-10 relative">
        <h2
          className="text-3xl font-extrabold text-brand-black"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          STAR BURST! ⚡
        </h2>
        <p className="text-sm font-extrabold text-amber-700">
          Tap every star as fast as you can!
        </p>
        <p className="text-2xl font-extrabold text-brand-black mt-1">
          {secondsLeft}s
        </p>
      </div>

      {/* Stars arena */}
      <div
        className="relative flex-1 w-full mt-4"
        style={{ maxWidth: 400, minHeight: 300 }}
      >
        <AnimatePresence>
          {currentStar && (
            <motion.button
              key={currentStar.id}
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.5 }}
              transition={{ duration: 0.15 }}
              onClick={handleStarTap}
              className="absolute select-none cursor-pointer"
              style={{
                left: `${currentStar.x}%`,
                top: `${currentStar.y}%`,
                transform: "translate(-50%, -50%)",
                fontSize: 48,
                color: "#F5C518",
                filter: "drop-shadow(0 4px 8px rgba(245,197,24,0.6))",
                background: "none",
                border: "none",
                padding: 0,
                lineHeight: 1,
              }}
            >
              ★
            </motion.button>
          )}
        </AnimatePresence>

        {/* Background decorative stars (faint) */}
        <div
          className="absolute inset-0 pointer-events-none opacity-10 select-none"
          style={{ fontSize: 20, color: "#F5C518" }}
        >
          {["★", "★", "★", "★", "★"].map((s, i) => (
            <span
              key={i}
              style={{
                position: "absolute",
                left: `${15 + i * 18}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Counter */}
      <div
        className="mt-4 px-6 py-3 rounded-2xl text-center z-10 relative"
        style={{ background: "rgba(245,197,24,0.25)" }}
      >
        <p
          className="text-2xl font-extrabold text-brand-black"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {tapCount}
        </p>
        <p className="text-xs text-[#92700A] font-extrabold">
          Stars tapped {totalStars > 0 ? `of ${totalStars}` : ""}
        </p>
      </div>
    </div>
  );
}
