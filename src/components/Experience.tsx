import { Section } from './Section'
import { SkillTag } from './SkillTag'
import { experience } from '../data/experience'

export function Experience() {
  return (
    <Section  id="experience">
      <div className="pb-24">
        <p className="text-[10px] tracking-[0.25em] uppercase text-blue-500 mb-2">03 // experience</p>
        <h2 className="font-display font-bold text-4xl text-slate-100 mb-12">Experience</h2>
        <div className="relative pl-6 border-l border-[#1e3a5f]">
          <div className="absolute -left-1.25 top-1.5 w-2.25 h-2.25 rounded-full bg-blue-600" />
          <div className="bg-[#0d1117] border border-[#111827] rounded-lg p-7">
            <div className="flex justify-between items-start mb-3 flex-wrap gap-2">
              <div>
                <h3 className="font-display font-bold text-lg text-slate-100 mb-1">Frontend Developer</h3>
                <p className="text-[13px] text-blue-500">WinWinTravel · Volunteer · Remote</p>
              </div>
              <span className="text-[11px] text-slate-500 tracking-wide">Dec 2025 – Feb 2026</span>
            </div>
            <ul className="flex flex-col gap-2 mb-5">
              {experience.map((item, i) => (
                <li key={i} className="flex gap-2.5 text-[13px] text-slate-500 leading-relaxed">
                  <span className="text-blue-600 mt-0.5 shrink-0">▸</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-1.5">
              {['React', 'TypeScript', 'FSD', 'Axios', 'i18n', 'REST API'].map(s => (
                <SkillTag key={s} label={s} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
