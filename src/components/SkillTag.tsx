interface SkillTagProps {
  label: string
}

export function SkillTag({ label }: SkillTagProps) {
  return (
    <span className="inline-block px-2.5 py-1 border border-[#1e3a5f] rounded-sm text-[11px] text-blue-300 tracking-wide bg-blue-950/10 hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400 transition-all duration-200">
      {label}
    </span>
  )
}
