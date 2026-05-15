interface NavProps {
  active: string
  onNav: (id: string) => void
}

const navItems = ['about', 'skills', 'experience', 'projects', 'contact']

export function Nav({ active, onNav }: NavProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-10 py-5 bg-[#080c14]/85 backdrop-blur-md border-b border-[#0f172a]">
      <span className="font-display font-bold text-base text-slate-100 tracking-wide">
        mp<span className="text-blue-500">.</span>dev
      </span>
      <div className="flex gap-8">
        {navItems.map(n => (
          <button
            key={n}
            onClick={() => onNav(n)}
            className={`text-[11px] tracking-[0.15em] uppercase transition-colors duration-200 bg-transparent border-none cursor-pointer relative pb-1
              ${active === n
                ? 'text-blue-500 after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-blue-500'
                : 'text-slate-500 hover:text-blue-500'
              }`}
          >
            {n}
          </button>
        ))}
      </div>
    </nav>
  )
}
