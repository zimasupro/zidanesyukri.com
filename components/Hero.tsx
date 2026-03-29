"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PrimaryButton from "./ui/PrimaryButton";
import { fadeUp, stagger, ease } from "../lib/motion";

const nameLines = [
  { text: "ZI", accent: false },
  { text: "DA", accent: false },
  { text: "NE", accent: true },
];

function AvailableBadge() {
  return (
    <motion.div
      variants={fadeUp}
      className="inline-flex items-center gap-2 font-mono text-[11px] text-[#10a37f] tracking-[0.12em] uppercase mb-7 before:content-[''] before:w-5 before:h-px before:bg-[#10a37f]"
    >
      Available for new projects
    </motion.div>
  );
}

function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ...ease, delay: 1.2 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 font-mono text-[10px] text-[#525260] tracking-widest uppercase"
    >
      <div className="w-px h-10 bg-linear-to-b from-[#525260] to-transparent animate-[scrollPulse_2s_ease-in-out_infinite]" />
      <span>scroll</span>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <div className="relative">
      <section
        id="hero"
        className="h-screen flex items-end pb-24 px-8 max-w-275 mx-auto gap-8"
      >
        {/* Left — fixed anchor, pb-1 aligns NE baseline to button bottom */}
        <motion.div
          className="shrink-0 translate-y-5"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <AvailableBadge />
          <h1 className="font-bebas text-[148px] leading-[0.92] tracking-[-0.01em]">
            {nameLines.map(({ text, accent }, i) => (
              <motion.span
                key={text}
                className={`block ${
                  accent
                    ? "text-transparent [-webkit-text-stroke:1.5px_#10a37f]"
                    : "text-[#f0f0f5]"
                }`}
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...ease, delay: 0.15 + i * 0.12 }}
              >
                {text}
              </motion.span>
            ))}
          </h1>
        </motion.div>

        {/* Right — button is nowrap so it defines w-min, p stretches to match */}
        <div className="flex-1 min-w-fit flex flex-col items-end">
          <div className="w-min flex flex-col items-stretch gap-8">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...ease, delay: 0.5 }}
              className="w-full text-[16px] leading-[1.8] text-[#c8c8d8] text-justify"
            >
              Clean interfaces, solid backends, no overhead.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...ease, delay: 0.6 }}
            >
              <PrimaryButton href="#contact">
                Start a project <ArrowRight size={16} />
              </PrimaryButton>
            </motion.div>
          </div>
        </div>
      </section>

      <ScrollIndicator />
    </div>
  );
}