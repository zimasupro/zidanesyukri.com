"use client";

import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Stack from "../components/Stack";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Cursor from "../components/Cursor";

export default function Home() {

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    setTimeout(() => {
      document.querySelectorAll("#hero .reveal").forEach((el) => el.classList.add("visible"));
    }, 500);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Stack />
      <Contact />
      <Footer />
    </>
  );
}