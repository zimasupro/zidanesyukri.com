export default function PrimaryButton({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <a href={href} className="inline-flex items-center gap-3 bg-[#10a37f] text-white font-medium text-[14px] tracking-[0.04em] px-7 py-3.5 no-underline transition-all duration-200 hover:bg-[#0d8a6a] hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(16,163,127,0.2)]">
      {children}
    </a>
  )
}