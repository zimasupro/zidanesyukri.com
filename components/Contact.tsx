// Contact.tsx
/* eslint-disable react/no-unescaped-entities */
"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { fadeUp, stagger, ease } from "../lib/motion";
import Footer from "./Footer";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);

  return (
    <>
      <section ref={ref} id="contact" className="h-[calc(100vh-var(--navbar-height))] flex flex-col justify-center items-center text-center relative z-1 px-8 bg-[#0b0b0d]">
        <motion.div className="max-w-275 mx-auto w-full flex flex-col items-center justify-center h-full" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
          <motion.span variants={fadeUp} transition={ease} className="font-mono text-[11px] text-[#525260] tracking-[0.15em] uppercase mb-6 block">
            04 — Let's talk
          </motion.span>
          <motion.h2 variants={fadeUp} transition={ease} className="font-bebas text-[clamp(56px,10vw,120px)] text-[#f0f0f5] leading-[0.9] mb-10">
            Let's<br />Build<br />
            <span className="text-[#23d18b]">Together</span>
          </motion.h2>
          <motion.a variants={fadeUp} transition={ease} href="mailto:hello@zidanesyukri.com" className="inline-block text-[18px] text-[#c8c8d8] no-underline border-b border-[#1e1e24] pb-1 transition-colors duration-200 hover:text-[#23d18b] hover:border-[#23d18b]">
            hello@zidanesyukri.com
          </motion.a>
        </motion.div>
      </section>
      <Footer contactRef={ref} />
    </>
  );
}