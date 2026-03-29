"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PrimaryButton from "./ui/PrimaryButton";
import { fadeUp, layer } from "../lib/motion";
import { useEffect, useState } from "react";

const nameLines = [
  { text: "ZI", accent: false },
  { text: "DA", accent: false },
  { text: "NE", accent: true },
];

function AvailableBadge() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeUp(layer.marker)}
      className="inline-flex items-center gap-2 font-mono text-[11px] text-[#10a37f] tracking-[0.12em] uppercase mb-7 before:content-[''] before:w-5 before:h-px before:bg-[#10a37f]"
    >
      Available for new projects
    </motion.div>
  );
}

function ScrollIndicator() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) setHidden(true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: hidden ? 0 : 1 }}
      transition={{ duration: 0.7, ease: "easeInOut", delay: hidden ? 0 : 1.8 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 font-mono text-[10px] text-[#525260] tracking-widest uppercase"
    >
      <span>scroll</span>
      <div className="w-px h-10 bg-linear-to-b from-transparent to-[#525260] animate-[scrollPulse_2s_ease-in-out_infinite]" />
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
        <div className="shrink-0 translate-y-0.5">
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
                initial="hidden"
                animate="visible"
                variants={fadeUp(layer.heading + i * 0.12)}
              >
                {text}
              </motion.span>
            ))}
          </h1>
        </div>

        <div className="flex-1 min-w-fit flex flex-col items-end">
          <div className="w-min flex flex-col items-stretch gap-8">
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp(layer.body)}
              className="w-full text-[16px] leading-[1.8] text-[#c8c8d8] text-justify"
            >
              Clean interfaces, solid backends, no overhead.
            </motion.p>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp(layer.stat1)}
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