import { Section } from './Section'

interface ContactProps {
  copied: boolean
  onCopy: () => void
}

export function Contact({ copied, onCopy }: ContactProps) {
  return (
    <Section id="contact" >
      <div className="pb-28">
        <p className="text-[10px] tracking-[0.25em] uppercase text-blue-500 mb-2">05 // contact</p>
        <h2 className="font-display font-bold text-4xl text-slate-100 mb-3">Let's Work Together</h2>
        <p className="text-sm text-slate-500 mb-12">Open to remote Junior Frontend or Fullstack positions.</p>
        <div className="flex flex-col gap-3 max-w-120">
          <button
            onClick={onCopy}
            className="flex items-center gap-3 px-5 py-4 border border-[#111827] rounded-lg bg-[#0d1117] cursor-pointer hover:border-[#1e3a5f] hover:bg-[#0f172a] transition-all text-left font-mono"
          >
            <span className="text-lg">✉</span>
            <div>
              <p className="text-[10px] tracking-[0.15em] uppercase text-blue-500 mb-0.5">Email</p>
              <p className="text-[13px] text-slate-400">{copied ? 'Copied!' : 'ponomar.kolya10@gmail.com'}</p>
            </div>
          </button>
          <a href="https://linkedin.com/in/mykola-ponomar" target="_blank" rel="noreferrer"
            className="flex items-center gap-3 px-5 py-4 border border-[#111827] rounded-lg bg-[#0d1117] no-underline hover:border-[#1e3a5f] hover:bg-[#0f172a] transition-all">
            <span className="text-lg">💼</span>
            <div>
              <p className="text-[10px] tracking-[0.15em] uppercase text-blue-500 mb-0.5">LinkedIn</p>
              <p className="text-[13px] text-slate-400">linkedin.com/in/mykola-ponomar</p>
            </div>
          </a>
          <a href="https://github.com/Linaizer" target="_blank" rel="noreferrer"
            className="flex items-center gap-3 px-5 py-4 border border-[#111827] rounded-lg bg-[#0d1117] no-underline hover:border-[#1e3a5f] hover:bg-[#0f172a] transition-all">
            <span className="text-lg">🐙</span>
            <div>
              <p className="text-[10px] tracking-[0.15em] uppercase text-blue-500 mb-0.5">GitHub</p>
              <p className="text-[13px] text-slate-400">github.com/Linaizer</p>
            </div>
          </a>
        </div>
      </div>
    </Section>
  )
}
