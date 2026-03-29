"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ringX = 0, ringY = 0, mouseX = 0, mouseY = 0;
    let animId: number;

    const handleMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.left = mouseX + "px";
        cursorRef.current.style.top = mouseY + "px";
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = ringX + "px";
        ringRef.current.style.top = ringY + "px";
      }
      animId = requestAnimationFrame(animate);
    };

    const handleEnter = () => {
      if (cursorRef.current) cursorRef.current.style.transform = "translate(-50%,-50%) scale(2)";
      if (ringRef.current) {
        ringRef.current.style.width = "60px";
        ringRef.current.style.height = "60px";
        ringRef.current.style.borderColor = "rgba(16,163,127,0.7)";
      }
    };

    const handleLeave = () => {
      if (cursorRef.current) cursorRef.current.style.transform = "translate(-50%,-50%) scale(1)";
      if (ringRef.current) {
        ringRef.current.style.width = "36px";
        ringRef.current.style.height = "36px";
        ringRef.current.style.borderColor = "rgba(16,163,127,0.4)";
      }
    };

    document.addEventListener("mousemove", handleMove);
    animate();
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      document.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="w-2 h-2 bg-[#10a37f] rounded-full fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-[transform,width,height] duration-100 md:block hidden" />
      <div ref={ringRef} className="w-9 h-9 border border-[rgba(16,163,127,0.4)] rounded-full fixed pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-[left,top,width,height,border-color] duration-[120ms] md:block hidden" />
    </>
  );
}