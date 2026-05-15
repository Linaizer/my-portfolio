interface HeroProps {
  copied: boolean
  onCopy: () => void
}

export function Hero({ copied, onCopy }: HeroProps) {
  return (
    <div id="about" className="pt-40 pb-28">
      <p className="text-[12px] tracking-[0.2em] text-blue-500 uppercase mb-5">
        Available for work
      </p>
      <h1 className="font-display font-extrabold text-[72px] leading-none text-slate-100 mb-6 max-md:text-5xl">
        Mykola<br />
        <span className="text-transparent" style={{ WebkitTextStroke: '1px #2563eb' }}>Ponomar</span>
        <span className="cursor-dot" />
      </h1>
      <p className="text-sm text-slate-500 max-w-130 leading-relaxed mb-10">
        Frontend Developer focused on{' '}
        <span className="text-blue-300">React + TypeScript</span>.
        {' '}Building scalable UIs with clean architecture — from PostgreSQL schema to polished interface.
      </p>
      <div className="flex gap-3 flex-wrap">
        <a
          href="https://github.com/Linaizer"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-blue-600 text-white text-[11px] tracking-wide uppercase no-underline hover:bg-blue-700 transition-colors"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/mykola-ponomar"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center px-3.5 py-1.5 rounded border border-[#1e3a5f] text-slate-500 text-[11px] tracking-wide uppercase no-underline hover:border-blue-500 hover:text-blue-400 transition-all"
        >
          LinkedIn
        </a>
        <button
          onClick={onCopy}
          className="inline-flex items-center px-3.5 py-1.5 rounded border border-[#1e3a5f] text-slate-500 text-[11px] tracking-wide uppercase cursor-pointer bg-transparent hover:border-blue-500 hover:text-blue-400 transition-all font-mono"
        >
          {copied ? '✓ Copied!' : 'ponomar.kolya10@gmail.com'}
        </button>
      </div>
    </div>
  )
}
