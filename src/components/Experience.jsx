import useReveal from '../hooks/useReveal'
import SectionBackground from './SectionBackground'
import { ShieldIcon } from './icons'
import './Experience.css'

const EXPERIENCES = [
  {
    role: 'Cyber Police Intern',
    org: 'Nagpur Police',
    unit: 'Cyber Police Station, Sadar, Nagpur',
    featured: true,
    points: [
      'Assisted the Nagpur Cyber Police in investigating phishing, financial fraud, and cybercrime cases through digital evidence analysis.',
      'Conducted digital evidence acquisition, forensic analysis, transaction tracing, and documentation to support active law-enforcement investigations.',
      'Contributed to the recovery of INR 56,000 by identifying fraudulent transaction trails and coordinating with banking nodal officers.',
    ],
  },
  {
    role: 'Python Developer Intern',
    org: 'Yash Industries',
    unit: null,
    featured: false,
    points: [
      'Contributed to Python-based development projects, building automation scripts and backend utilities.',
    ],
  },
]

export default function Experience() {
  const headerRef = useReveal()

  return (
    <section className="section experience" id="experience">
      <SectionBackground />
      <div className="shell">
        <div className="section__header reveal" ref={headerRef}>
          <span className="section__label">Experience</span>
          <h2 className="section__title">Where I've Worked</h2>
        </div>

        <div className="experience__list">
          {EXPERIENCES.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceCard({ exp, delay }) {
  const ref = useReveal()

  return (
    <div
      className={`experience__card glass-card reveal ${exp.featured ? 'experience__card--featured' : ''}`}
      ref={ref}
      style={{ '--delay': `${delay}s` }}
    >
      {exp.featured && (
        <div className="experience__badge">
          <ShieldIcon size={14} />
          <span>Law Enforcement</span>
        </div>
      )}
      <div className="experience__header">
        <h3 className="experience__role">{exp.role}</h3>
        <p className="experience__org">{exp.org}</p>
        {exp.unit && <p className="experience__unit">{exp.unit}</p>}
      </div>
      <ul className="experience__points">
        {exp.points.map((point, j) => (
          <li key={j}>{point}</li>
        ))}
      </ul>
    </div>
  )
}
