"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PART_C_QUESTIONS,
  PART_C_CLUSTER_LABELS,
  PART_C_LABELS,
} from "../utils/questions";

interface Props {
  onComplete: (answers: number[]) => void;
}

export function ParentObservationQuestionsScreen({ onComplete }: Props) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(PART_C_QUESTIONS.length).fill(null),
  );
  const [pulse, setPulse] = useState(false);

  const question = PART_C_QUESTIONS[current];
  const selected = answers[current];
  const progress = (current / PART_C_QUESTIONS.length) * 100;
  const isLastInCluster =
    current < PART_C_QUESTIONS.length - 1 &&
    PART_C_QUESTIONS[current + 1].cluster !== question.cluster;

  // Check if this is the first question of its cluster
  const isFirstInCluster =
    current === 0 || PART_C_QUESTIONS[current - 1].cluster !== question.cluster;

  function handleRating(val: number) {
    const updated = [...answers];
    updated[current] = val;
    setAnswers(updated);
  }

  function handleNext() {
    if (selected === null) {
      setPulse(true);
      setTimeout(() => setPulse(false), 600);
      return;
    }
    if (current < PART_C_QUESTIONS.length - 1) {
      setCurrent((c) => c + 1);
    } else {
      onComplete(answers as number[]);
    }
  }

  const clusterColors: Record<number, string> = {
    1: "#2BBCB0",
    2: "#4FC3F7",
    3: "#F4845F",
    4: "#F5C518",
  };

  return (
    <div className="space-y-5 py-2">
      {/* Part badge */}
      <div className="flex items-center justify-between">
        <span
          className="text-xs font-extrabold px-3 py-1 rounded-full bg-[#E8F8F7] text-teal"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Part 3 — Parent
        </span>
        <span className="text-xs font-semibold text-gray-400">
          Question {current + 1} of {PART_C_QUESTIONS.length}
        </span>
      </div>

      {/* Progress bar */}
      <div
        className="h-2 rounded-full overflow-hidden"
        style={{ background: "#F3F4F6" }}
      >
        <motion.div
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4 }}
          className="h-full rounded-full"
          style={{ background: "#2BBCB0" }}
        />
      </div>

      {/* Cluster header — shown on first question of each cluster */}
      {isFirstInCluster && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 px-3 py-2 rounded-xl"
          style={{
            background: `${clusterColors[question.cluster]}20`,
            border: `1px solid ${clusterColors[question.cluster]}40`,
          }}
        >
          <div
            className="w-2 h-2 rounded-full shrink-0"
            style={{ background: clusterColors[question.cluster] }}
          />
          <p
            className="text-xs font-extrabold"
            style={{
              color: clusterColors[question.cluster],
              fontFamily: "var(--font-heading)",
            }}
          >
            {PART_C_CLUSTER_LABELS[question.cluster]}
          </p>
        </motion.div>
      )}

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.25 }}
          className="space-y-5"
        >
          <div
            className="rounded-2xl p-5 min-h-27.5 flex items-center"
            style={{ background: "#FAFAF8", border: "1.5px solid #F3F4F6" }}
          >
            <p className="text-sm sm:text-base font-semibold text-brand-black leading-relaxed">
              {question.text}
            </p>
          </div>

          {/* Rating buttons */}
          <div
            className={`grid grid-cols-5 gap-1.5 transition-all ${pulse ? "ring-2 ring-red-300 ring-offset-2 rounded-xl" : ""}`}
          >
            {PART_C_LABELS.map((label, i) => {
              const val = i + 1;
              const isSelected = selected === val;
              return (
                <motion.button
                  key={val}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.94 }}
                  onClick={() => handleRating(val)}
                  className="flex flex-col items-center py-3 px-1 rounded-xl border-2 text-xs font-extrabold transition-all"
                  style={{
                    borderColor: isSelected ? "#2BBCB0" : "#E5E7EB",
                    background: isSelected ? "#E8F8F7" : "#FFFFFF",
                    color: isSelected ? "#1A8C84" : "#1A1A1A",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  <span className="text-base font-extrabold">{val}</span>
                  <span className="text-[8px] font-semibold text-center leading-tight mt-1 text-gray-400">
                    {label}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Cluster transition hint */}
      {isLastInCluster && selected !== null && (
        <p className="text-[11px] text-center text-gray-400 font-semibold">
          Next: {PART_C_CLUSTER_LABELS[PART_C_QUESTIONS[current + 1].cluster]}
        </p>
      )}

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        onClick={handleNext}
        className="w-full py-4 rounded-2xl font-extrabold text-sm"
        style={{
          background: selected !== null ? "#F5C518" : "#F3F4F6",
          color: selected !== null ? "#1A1A1A" : "#9CA3AF",
          fontFamily: "var(--font-heading)",
          boxShadow:
            selected !== null ? "0 4px 16px rgba(245,197,24,0.35)" : "none",
        }}
      >
        {current < PART_C_QUESTIONS.length - 1
          ? "Next →"
          : "Continue to Part 4 →"}
      </motion.button>
    </div>
  );
}
