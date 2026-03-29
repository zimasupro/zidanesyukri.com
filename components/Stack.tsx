"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, ease } from "../lib/motion";

const stack = [
  { name: "Vercel",          role: "Hosting & Deployment", badge: "Active", active: true  },
  { name: "Next.js / React", role: "Frontend Framework",   badge: "Active", active: true  },
  { name: "Supabase",        role: "Database & Auth",       badge: "Ready",  active: false },
  { name: "Render",          role: "Server Logic",          badge: "Ready",  active: false },
  { name: "Cloudflare",      role: "Security & DNS",        badge: "Ready",  active: false },
  { name: "TypeScript",      role: "Language",              badge: "Active", active: true  },
  { name: "GitHub",          role: "Version Control",       badge: "Active", active: true  },
  { name: "Figma",           role: "Design",                badge: "Active", active: true  },
];

export default function Stack() {
  return (
    <section id="stack" className="h-[calc(100vh-var(--navbar-height))] flex flex-col justify-between relative z-1 px-8 py-12">
      <div className="max-w-275 mx-auto w-full flex flex-col justify-between h-full">

        <div className="flex items-center gap-3 font-mono text-[10px] text-[#525260] tracking-[0.15em] uppercase after:content-[''] after:flex-1 after:h-px after:bg-[#1e1e24]">
          03 — Stack
        </div>

        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1e1e24]" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
          {stack.map(({ name, role, badge, active }) => (
            <motion.div key={name} variants={fadeUp} transition={ease} className="bg-[#0b0b0d] p-7 flex flex-col gap-2 transition-colors duration-200 hover:bg-[#111115]">
              <div className="font-mono text-[14px] text-[#f0f0f5] font-medium">{name}</div>
              <div className="text-[12px] text-[#525260]">{role}</div>
              <span className={`inline-block font-mono text-[9px] px-2 py-0.5 tracking-widest uppercase w-fit mt-1 ${active ? "bg-[rgba(35,209,139,0.1)] text-[#23d18b]" : "bg-[rgba(255,255,255,0.04)] text-[#525260]"}`}>
                {badge}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <div />

      </div>
    </section>
  );
}