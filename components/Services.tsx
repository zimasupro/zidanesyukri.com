"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, ease } from "../lib/motion";

const services = [
  { num: "01", title: "Web Applications", body: "Custom tools, internal dashboards, and client-facing platforms. Built to scale with your business, not against it." },
  { num: "02", title: "SaaS Products",    body: "From MVP to launch — product scoping, design, development, and deployment. I handle the full cycle." },
  { num: "03", title: "Digital Presence", body: "Landing pages and marketing sites that convert. Fast, accessible, and designed to work across every device." },
];

export default function Services() {
  return (
    <section id="services" className="h-[calc(100vh-var(--navbar-height))] flex flex-col justify-between bg-[#111115] border-t border-b border-[#1e1e24] relative z-1 px-8 py-12">
      <div className="max-w-275 mx-auto w-full flex flex-col justify-between h-full">

        <div className="flex items-center gap-3 font-mono text-[10px] text-[#525260] tracking-[0.15em] uppercase after:content-[''] after:flex-1 after:h-px after:bg-[#1e1e24]">
          02 — Services
        </div>

        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1e1e24]" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
          {services.map(({ num, title, body }) => (
            <motion.div key={num} variants={fadeUp} transition={ease} className="service-card bg-[#111115] p-10 relative overflow-hidden transition-colors duration-300 hover:bg-[#16161c]">
              <div className="font-mono text-[11px] text-[#23d18b] tracking-widest mb-6">{num}</div>
              <div className="font-bebas text-[28px] text-[#f0f0f5] tracking-[0.02em] mb-4 leading-none">{title}</div>
              <p className="text-[14px] leading-[1.7] text-[#525260]">{body}</p>
            </motion.div>
          ))}
        </motion.div>

        <div />

      </div>
    </section>
  );
}