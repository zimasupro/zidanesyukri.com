"use client";

import { motion } from "framer-motion";
import PrimaryButton from "./ui/PrimaryButton";
import { ArrowRight } from "lucide-react";

// ─── Animation Config ─────────────────────────────────────────────────────────

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeInOut" as const, delay },
});

// ─── Sub-components ───────────────────────────────────────────────────────────

function AvailableBadge() {
  return (
    <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 font-mono text-[11px] text-[#10a37f] tracking-[0.12em] uppercase mb-7 before:content-[''] before:w-5 before:h-px before:bg-[#10a37f]">
      Available for new projects
    </motion.div>
  );
}

function HeroHeading() {
  return (
    <motion.h1 {...fadeUp(0.1)} className="font-bebas text-[clamp(80px,12vw,148px)] leading-[0.92] text-[#f0f0f5] tracking-[-0.01em]">
      ZI<br />DA<br />
      <span className="text-transparent [-webkit-text-stroke:1.5px_#10a37f]">NE</span>
    </motion.h1>
  );
}

function HeroBody() {
  return (
    <motion.p {...fadeUp(0.2)} className="text-[17px] leading-[1.7] text-[#c8c8d8] max-w-95 mb-10">
      I build web products and digital systems for businesses that want to move faster — clean interfaces, solid backends, no overhead.
    </motion.p>
  );
}

function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.7 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 font-mono text-[10px] text-[#525260] tracking-widest uppercase"
    >
      <div className="w-px h-10 bg-linear-to-b from-[#525260] to-transparent animate-[scrollPulse_2s_ease-in-out_infinite]" />
      <span>scroll</span>
    </motion.div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

export default function Hero() {
  return (
    <div className="relative">
      <section
        id="hero"
        className="min-h-screen grid grid-cols-1 md:grid-cols-2 items-stretch pt-24 pb-20 px-8 max-w-275 mx-auto gap-10"
      >
        {/* Left — heading */}
        <div className="self-end">
          <AvailableBadge />
          <HeroHeading />
        </div>

        {/* Right — body + CTA */}
        <motion.div {...fadeUp(0.3)} className="self-end pb-2 flex flex-col items-end md:items-start">
          <HeroBody />
          <PrimaryButton href="#contact">
            Start a project
            <ArrowRight size={16} />
          </PrimaryButton>
        </motion.div>

      </section>
      <ScrollIndicator />
    </div>
  );
}