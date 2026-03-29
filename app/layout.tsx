import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans, JetBrains_Mono } from "next/font/google";
import SmoothScroll from "../components/SmoothScroll";
import "./globals.css";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-bebas" });
const dm    = DM_Sans({ subsets: ["latin"], weight: ["300", "400", "500"], variable: "--font-dm" });
const mono  = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Zidane Syukri — Developer & Founder",
  description: "I build web products and digital systems for businesses that want to move faster.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${bebas.variable} ${dm.variable} ${mono.variable} bg-[#0b0b0d] text-[#c8c8d8] font-light overflow-x-hidden antialiased pt-[--navbar-height]`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}