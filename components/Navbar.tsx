"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = ["about", "services", "stack", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleNav(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: "smooth" });

    if (id === "stack") {
      window.dispatchEvent(new CustomEvent("stack:wave"));
    }
  }

  return (
    <nav className={[
      "fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center justify-between px-8 transition-colors duration-300",
      scrolled ? "bg-[rgba(11,11,13,0.88)] backdrop-blur-md" : "",
    ].join(" ")}>

      
       <a href="#"
        onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
        className="font-mono text-[13px] text-[#10a37f] tracking-[0.05em] no-underline"
      >
        zidane.syukri
      </a>

      <ul className="flex gap-1 list-none m-0 p-0">
        {links.map((id) => (
          <li key={id}>
            
              <a href={`#${id}`}
              onClick={(e) => handleNav(e, id)}
              className="block px-3 py-2 font-mono text-[11px] text-[#525260] no-underline tracking-widest uppercase transition-colors duration-200 hover:text-[#f0f0f5]"
            >
              {id}
            </a>
          </li>
        ))}
      </ul>

      <AnimatePresence>
        {scrolled && (
          <motion.div
            className="absolute bottom-0 left-1/2 h-px bg-[#1e1e24]"
            initial={{ width: "0%", x: "-50%", opacity: 0 }}
            animate={{ width: "100%", x: "-50%", opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 0.3, ease: "easeInOut" },
              width:   { duration: 0.6, ease: "easeInOut", delay: 0.6 },
            }}
          />
        )}
      </AnimatePresence>

    </nav>
  );
}