"use client";

import { motion } from "framer-motion";
import { fadeUp, layer, ease } from "../lib/motion";

const stats = [
  { value: "B2B", label: "Focus — tools that serve teams and businesses" },
  { value: "EU",  label: "Based — Germany, aligned with European standards" },
  { value: "0—1", label: "Specialty — ideas to live products, fast" },
];

export default function About() {
  return (
    <section id="about" className="h-[calc(100vh-var(--navbar-height))] flex flex-col justify-between relative z-1 px-8 py-12">
      <div className="max-w-275 mx-auto w-full flex flex-col justify-between h-full">

        <div className="flex items-center gap-3 font-mono text-[10px] text-[#525260] tracking-[0.15em] uppercase after:content-[''] after:flex-1 after:h-px after:bg-[#1e1e24]"
        >
          01 — About
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          <div>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-72px" }}
              variants={fadeUp(layer.heading)}
              className="font-bebas text-[clamp(40px,5vw,64px)] leading-none text-[#f0f0f5] mb-4"
            >
              Developer.<br />Builder.<br />Based in<br />Germany.
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-72px" }}
              variants={fadeUp(layer.body)}
              className="text-[15px] leading-[1.8] text-[#c8c8d8] mb-4"
            >
              I work with small to mid-size businesses that need a technical co-pilot — someone who can ship real product, not just wireframes. From landing pages to full SaaS tools, I handle the end-to-end.
            </motion.p>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-72px" }}
              variants={fadeUp(layer.body)}
              className="text-[15px] leading-[1.8] text-[#525260]"
            >
              My approach is straightforward: understand your business first, then build the simplest system that solves the actual problem — not the over-engineered one.
            </motion.p>
          </div>

          <div>
            {stats.map(({ value, label }, i) => (
              <motion.div
                key={value}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-72px" }}
                variants={fadeUp(layer.stat1 + i * 0.1)}
                className="flex flex-col py-4 border-b border-[#1e1e24] first:border-t"
              >
                <span className="font-bebas text-[56px] text-[#23d18b] leading-none tracking-tight">{value}</span>
                <span className="text-[12px] text-[#525260] mt-2 tracking-[0.04em]">{label}</span>
              </motion.div>
            ))}
          </div>

        </div>

        <div />

      </div>
    </section>
  );
}