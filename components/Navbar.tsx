"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-100 flex items-center justify-between px-8 py-5 border-b transition-all duration-400ms ${scrolled ? "bg-[rgba(11,11,13,0.88)] backdrop-blur-md border-[#1e1e24]" : "border-transparent"}`}>
      <div className="font-mono text-[13px] text-[#10a37f] tracking-[0.05em]">
        zidane.syukri
      </div>
      <ul className="hidden md:flex gap-8 list-none">
        <li><a href="#about" className="text-[13px] text-[#525260] no-underline tracking-[0.05em] transition-colors duration-200 hover:text-[#f0f0f5]">About</a></li>
        <li><a href="#services" className="text-[13px] text-[#525260] no-underline tracking-[0.05em] transition-colors duration-200 hover:text-[#f0f0f5]">Services</a></li>
        <li><a href="#stack" className="text-[13px] text-[#525260] no-underline tracking-[0.05em] transition-colors duration-200 hover:text-[#f0f0f5]">Stack</a></li>
        <li><a href="#contact" className="text-[13px] text-[#525260] no-underline tracking-[0.05em] transition-colors duration-200 hover:text-[#f0f0f5]">Contact</a></li>
      </ul>
    </nav>
  );
}