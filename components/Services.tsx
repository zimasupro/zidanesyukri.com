export default function Services() {
    return (
      <section id="services" className="py-[100px] bg-[#111115] border-t border-b border-[#1e1e24] relative z-[1]">
        <div className="max-w-[1100px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 items-end">
            <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(40px,5vw,60px)] leading-none text-[#f0f0f5] reveal">
              What I<br />Build
            </h2>
            <p className="text-[15px] text-[#525260] max-w-[340px] reveal reveal-delay-1">
              Focused on outcomes, not deliverables. Every project starts with a conversation about what you are actually trying to achieve.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1e1e24]">
            <div className="service-card bg-[#111115] p-10 relative overflow-hidden transition-colors duration-300 hover:bg-[#16161c] reveal">
              <div className="font-mono text-[11px] text-[#10a37f] tracking-[0.1em] mb-6">01</div>
              <div className="font-[family-name:var(--font-bebas)] text-[28px] text-[#f0f0f5] tracking-[0.02em] mb-4 leading-none">Web Applications</div>
              <p className="text-[14px] leading-[1.7] text-[#525260]">Custom tools, internal dashboards, and client-facing platforms. Built to scale with your business, not against it.</p>
            </div>
            <div className="service-card bg-[#111115] p-10 relative overflow-hidden transition-colors duration-300 hover:bg-[#16161c] reveal reveal-delay-1">
              <div className="font-mono text-[11px] text-[#10a37f] tracking-[0.1em] mb-6">02</div>
              <div className="font-[family-name:var(--font-bebas)] text-[28px] text-[#f0f0f5] tracking-[0.02em] mb-4 leading-none">SaaS Products</div>
              <p className="text-[14px] leading-[1.7] text-[#525260]">From MVP to launch — product scoping, design, development, and deployment. I handle the full cycle.</p>
            </div>
            <div className="service-card bg-[#111115] p-10 relative overflow-hidden transition-colors duration-300 hover:bg-[#16161c] reveal reveal-delay-2">
              <div className="font-mono text-[11px] text-[#10a37f] tracking-[0.1em] mb-6">03</div>
              <div className="font-[family-name:var(--font-bebas)] text-[28px] text-[#f0f0f5] tracking-[0.02em] mb-4 leading-none">Digital Presence</div>
              <p className="text-[14px] leading-[1.7] text-[#525260]">Landing pages and marketing sites that convert. Fast, accessible, and designed to work across every device.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }