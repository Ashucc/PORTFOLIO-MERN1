import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import useHorizontalScroll from './hooks/useHorizontalScroll'

const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'home', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
]

function App() {
  const { ref, active, scrollTo, total } = useHorizontalScroll()

  return (
    <>
      <Navbar sections={SECTIONS} activeIndex={active} onNavigate={scrollTo} />

      <main className="h-scroll" ref={ref}>
        <About />
        <Experience />
        <Projects />
        <Hero />
        <Skills />
        <Achievements />
        <Contact />
      </main>

      {/* Progress dots */}
      <nav className="progress" aria-label="Section progress">
        {SECTIONS.map((s, i) => (
          <button
            key={s.id}
            className={`progress__dot ${i === active ? 'is-active' : ''}`}
            onClick={() => scrollTo(i)}
            aria-label={s.label}
            aria-current={i === active ? 'step' : undefined}
          />
        ))}
      </nav>

      {/* Edge fade gradients */}
      <div className={`edge-fade edge-fade--left ${active > 0 ? 'is-visible' : ''}`} aria-hidden="true" />
      <div className={`edge-fade edge-fade--right ${active < total - 1 ? 'is-visible' : ''}`} aria-hidden="true" />

      {/* Directional arrows */}
      {active > 0 && (
        <button className="h-arrow h-arrow--left" onClick={() => scrollTo(active - 1)} aria-label="Previous section">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}
      {active < total - 1 && (
        <button className="h-arrow h-arrow--right" onClick={() => scrollTo(active + 1)} aria-label="Next section">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}
    </>
  )
}

export default App
