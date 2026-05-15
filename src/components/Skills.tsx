import { Section } from './Section'
import { SkillTag } from './SkillTag'
import { skills } from '../data/skills'

export function Skills() {
  return (
    <Section id="skills">
      <div  className="pb-24">
        <p className="text-[10px] tracking-[0.25em] uppercase text-blue-500 mb-2">02 // skills</p>
        <h2 className="font-display font-bold text-4xl text-slate-100 mb-12">Tech Stack</h2>
        <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
          {Object.entries(skills).map(([cat, items]) => (
            <div key={cat} className="p-6 border border-[#111827] rounded-lg bg-[#0d1117]">
              <p className="text-[10px] tracking-[0.2em] uppercase text-blue-500 mb-4">{cat}</p>
              <div className="flex flex-wrap gap-2">
                {items.map(s => <SkillTag key={s} label={s} />)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
