import { type ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

interface SectionProps {
  children: ReactNode
  id?: string
}

export function Section({ children, id }: SectionProps) {
  const [ref, inView] = useInView()
  return (
    <section
      id={id}
      ref={ref}
      className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      {children}
    </section>
  )
}