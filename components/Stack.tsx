const stackItems = [
    { name: "Vercel", role: "Hosting & Deployment", badge: "Active", active: true },
    { name: "Next.js / React", role: "Frontend Framework", badge: "Active", active: true },
    { name: "Supabase", role: "Database & Auth", badge: "Ready", active: false },
    { name: "Render", role: "Server Logic", badge: "Ready", active: false },
    { name: "Cloudflare", role: "Security & DNS", badge: "Ready", active: false },
    { name: "TypeScript", role: "Language", badge: "Active", active: true },
    { name: "GitHub", role: "Version Control", badge: "Active", active: true },
    { name: "Figma", role: "Design", badge: "Active", active: true },
  ];
  
  export default function Stack() {
    return (
      <section id="stack" className="py-[100px] relative z-[1]">
        <div className="max-w-[1100px] mx-auto px-8">
          <div className="flex items-center gap-3 font-mono text-[10px] text-[#525260] tracking-[0.15em] uppercase mb-12 after:content-[''] after:flex-1 after:h-px after:bg-[#1e1e24]">
            03 — Stack
          </div>
          <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(40px,5vw,60px)] text-[#f0f0f5] leading-none reveal">
            Tools I Trust
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1e1e24] mt-14">
            {stackItems.map((item, i) => (
              <div key={item.name} className={`bg-[#0b0b0d] p-7 flex flex-col gap-2 transition-colors duration-200 hover:bg-[#111115] reveal ${i % 4 !== 0 ? `reveal-delay-${i % 4}` : ""}`}>
                <div className="font-mono text-[14px] text-[#f0f0f5] font-medium">{item.name}</div>
                <div className="text-[12px] text-[#525260]">{item.role}</div>
                <span className={`inline-block font-mono text-[9px] px-2 py-0.5 tracking-[0.1em] uppercase w-fit mt-1 ${item.active ? "bg-[rgba(16,163,127,0.1)] text-[#10a37f]" : "bg-[rgba(255,255,255,0.04)] text-[#525260]"}`}>
                  {item.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }