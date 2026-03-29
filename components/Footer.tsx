"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import React from "react";

export default function Footer({ contactRef }: { contactRef: React.RefObject<HTMLElement | null> }) {
  const [visible, setVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setVisible(v >= 0.99);
  });

  return (
    <motion.footer
      className="fixed bottom-0 left-0 right-0 flex items-center justify-between px-8 py-7 border-t border-[#1e1e24] bg-[#0b0b0d] z-10"
      initial={{ y: "100%" }}
      animate={{ y: visible ? "0%" : "100%" }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      <span className="font-mono text-[11px] text-[#525260]">© 2025 Zidane Syukri</span>
      <div className="flex gap-6">
        <a href="https://github.com/zimasupro" target="_blank" rel="noopener" className="font-mono text-[11px] text-[#525260] no-underline transition-colors duration-200 hover:text-[#10a37f]">GitHub</a>
        <a href="https://linkedin.com/in/zidanesyukri" target="_blank" rel="noopener" className="font-mono text-[11px] text-[#525260] no-underline transition-colors duration-200 hover:text-[#10a37f]">LinkedIn</a>
      </div>
    </motion.footer>
  );
}