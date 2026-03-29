export default function About() {
    return (
      <section id="about" className="py-[100px] relative z-[1]">
        <div className="max-w-[1100px] mx-auto px-8">
          <div className="flex items-center gap-3 font-mono text-[10px] text-[#525260] tracking-[0.15em] uppercase mb-12 after:content-[''] after:flex-1 after:h-px after:bg-[#1e1e24]">
            01 — About
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
            <div>
              <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(40px,5vw,60px)] leading-none text-[#f0f0f5] mb-7 reveal">
                Developer.<br />Builder.<br />Based in<br />Germany.
              </h2>
              <p className="text-[16px] leading-[1.8] text-[#c8c8d8] mb-4 reveal reveal-delay-1">
                I work with small to mid-size businesses that need a technical co-pilot — someone who can ship real product, not just wireframes. From landing pages to full SaaS tools, I handle the end-to-end.
              </p>
              <p className="text-[16px] leading-[1.8] text-[#c8c8d8] mb-4 reveal reveal-delay-2">
                My approach is straightforward: understand your business first, then build the simplest system that solves the actual problem — not the over-engineered one.
              </p>
            </div>
            <div className="pt-3 reveal reveal-delay-2">
              <div className="flex flex-col py-6 border-b border-[#1e1e24] border-t">
                <span className="font-[family-name:var(--font-bebas)] text-[48px] text-[#10a37f] leading-none">B2B</span>
                <span className="text-[13px] text-[#525260] mt-1">Focus — tools that serve teams and businesses</span>
              </div>
              <div className="flex flex-col py-6 border-b border-[#1e1e24]">
                <span className="font-[family-name:var(--font-bebas)] text-[48px] text-[#10a37f] leading-none">EU</span>
                <span className="text-[13px] text-[#525260] mt-1">Based — Germany, aligned with European standards</span>
              </div>
              <div className="flex flex-col py-6 border-b border-[#1e1e24]">
                <span className="font-[family-name:var(--font-bebas)] text-[48px] text-[#10a37f] leading-none">0→1</span>
                <span className="text-[13px] text-[#525260] mt-1">Specialty — ideas to live products, fast</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }