import { Section } from './Section'
import { SkillTag } from './SkillTag'
import { projects } from '../data/projects'

export function Projects() {
  return (
    <Section id="projects" >
      <div className="pb-24">
        <p className="text-[10px] tracking-[0.25em] uppercase text-blue-500 mb-2">04 // projects</p>
        <h2 className="font-display font-bold text-4xl text-slate-100 mb-12">What I've Built</h2>
        <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
          {projects.map(p => (
            <div
              key={p.title}
              className="project-card relative border border-[#111827] rounded-lg p-7 bg-[#0d1117] overflow-hidden transition-all duration-300 hover:border-[#1e3a5f] hover:-translate-y-0.5"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-display font-bold text-lg text-slate-100">{p.title}</h3>
                <span className="text-[10px] tracking-widest uppercase px-2 py-0.5 rounded-sm bg-blue-950/20 text-blue-400 border border-[#1e3a5f]">
                  {p.type}
                </span>
              </div>
              <p className="text-[13px] text-slate-500 leading-relaxed mb-5">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {p.stack.map(s => <SkillTag key={s} label={s} />)}
              </div>
              <div className="flex gap-2">
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer"
                    className="inline-flex items-center px-3 py-1.5 rounded border border-[#1e3a5f] text-slate-500 text-[10px] tracking-wide uppercase no-underline hover:border-blue-500 hover:text-blue-400 transition-all">
                    GitHub ↗
                  </a>
                )}
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer"
                    className="inline-flex items-center px-3 py-1.5 rounded bg-blue-600 text-white text-[10px] tracking-wide uppercase no-underline hover:bg-blue-700 transition-colors">
                    Live Demo ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
