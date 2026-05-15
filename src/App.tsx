import { useEffect } from "react"
import { useState } from "react"
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  const [active, setActive] = useState('about')
  const [copied, setCopied] = useState(false)
  
  useEffect(() => {
  const sections = ['about', 'skills', 'experience', 'projects', 'contact']
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id)
        }
      })
    },
    { rootMargin: '0px 0px -50% 0px', threshold: 0 }
  )


  const timer = setTimeout(() => {
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
  }, 100)

  return () => {
    clearTimeout(timer)
    observer.disconnect()
  }
}, [])

  const copy = () => {
    navigator.clipboard.writeText('ponomar.kolya10@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const scrollTo = (id: string) => {
    setActive(id)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="font-mono bg-[#080c14] text-slate-200 min-h-screen">
      <Nav active={active} onNav={scrollTo} />
      <main className="relative z-10 max-w-225 mx-auto px-6">
        <Hero copied={copied} onCopy={copy} />
        <Skills />
        <Experience />
        <Projects />
        <Contact copied={copied} onCopy={copy} />
        <Footer />
      </main>
    </div>
  )
}