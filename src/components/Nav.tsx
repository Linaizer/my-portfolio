import { useState } from 'react'

interface NavProps {
  active: string
  onNav: (id: string) => void
}

const navItems = ['about', 'skills', 'experience', 'projects', 'contact']

export function Nav({ active, onNav }: NavProps) {
  const [expanded, setExpanded] = useState(false)

  const handleNav = (id: string) => { onNav(id); setExpanded(false) }

  const others = navItems.filter(n => n !== active)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 bg-[#080c14]/85 backdrop-blur-md border-b border-[#0f172a]">
      <span className="font-display font-bold text-base text-slate-100 tracking-wide shrink-0">
        mp<span className="text-blue-500">.</span>dev
      </span>

      <div className="hidden md:flex gap-8">
        {navItems.map(n => (
          <button key={n} onClick={() => handleNav(n)}
            className={`text-[11px] tracking-[0.15em] uppercase transition-colors duration-200 bg-transparent border-none cursor-pointer relative pb-1
              ${active === n ? 'text-blue-500 after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-blue-500' : 'text-slate-500 hover:text-blue-500'}`}>
            {n}
          </button>
        ))}
      </div>

      <div className="flex md:hidden items-center gap-3">
        <div className={`flex items-center gap-3 overflow-hidden transition-all duration-300 ${expanded ? 'max-w-xs opacity-100' : 'max-w-0 opacity-0'}`}>
          {others.map(n => (
            <button key={n} onClick={() => handleNav(n)}
              className="text-[10px] tracking-[0.12em] uppercase text-slate-500 hover:text-blue-500 transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap">
              {n}
            </button>
          ))}
        </div>
        <button onClick={() => setExpanded(o => !o)}
          className="text-[10px] tracking-[0.12em] uppercase text-blue-500 bg-transparent border-none cursor-pointer whitespace-nowrap flex items-center gap-1">
          {expanded ? '✕' : (
            <><span className="text-slate-300">{active}</span> <span className="text-slate-600">/ ···</span></>
          )}
        </button>
      </div>
    </nav>
  )
}