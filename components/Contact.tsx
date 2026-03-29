export default function Contact() {
    return (
      <section id="contact" className="py-[120px] text-center relative z-[1]">
        <div className="max-w-[1100px] mx-auto px-8">
          <span className="font-mono text-[11px] text-[#525260] tracking-[0.15em] uppercase mb-6 block reveal">04 - Lets talk</span>
          <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(56px,10vw,120px)] text-[#f0f0f5] leading-[0.9] mb-10 reveal reveal-delay-1">
            Lets<br />Build<br />
            <span className="text-[#10a37f]">Together</span>
          </h2>
          <div>
            <a href="mailto:hello@zidanesyukri.com" className="inline-block text-[18px] text-[#c8c8d8] no-underline border-b border-[#1e1e24] pb-1 transition-colors duration-200 mb-12 hover:text-[#10a37f] hover:border-[#10a37f] reveal reveal-delay-2">hello@zidanesyukri.com</a>
          </div>
        </div>
      </section>
    );
  }