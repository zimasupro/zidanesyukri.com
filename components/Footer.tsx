export default function Footer() {
    return (
      <footer className="flex items-center justify-between px-8 py-7 border-t border-[#1e1e24] relative z-1">
        <span className="font-mono text-[11px] text-[#525260]">
          © 2025 Zidane Syukri
        </span>
        <div className="flex gap-6">
          <a href="https://github.com/zimasupro" target="_blank" rel="noopener" className="font-mono text-[11px] text-[#525260] no-underline transition-colors duration-200 hover:text-[#10a37f]">GitHub</a>
          <a href="https://linkedin.com/in/zidanesyukri" target="_blank" rel="noopener" className="font-mono text-[11px] text-[#525260] no-underline transition-colors duration-200 hover:text-[#10a37f]">LinkedIn</a>
        </div>
      </footer>
    );
  }