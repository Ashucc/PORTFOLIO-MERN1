import useReveal from '../hooks/useReveal'
import SectionBackground from './SectionBackground'
import './Projects.css'

const PROJECTS = [
  {
    label: 'Real Estate',
    title: 'Nagpur-ED',
    subtitle: 'Real Estate Price Negotiation Platform',
    points: [
      'Built a full-stack MERN application designed to improve real-estate price discovery and negotiation.',
      'Developed the backend using Node.js, Express.js, REST APIs, and MongoDB Atlas for property and market-related data.',
      'Designed valuation functionality using infrastructure and market trends to help users make more informed property pricing decisions.',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB Atlas', 'REST API'],
  },
  {
    label: 'Cybersecurity',
    title: 'Rubber Ducky Attack Prevention',
    subtitle: 'BadUSB Detection Using Behaviour Analysis',
    points: [
      'Developed a Python-based security system to detect suspicious USB/HID behavior using keystroke dynamics and inter-arrival timing.',
      'Implemented behavioral analysis and a rule-based engine to distinguish automated BadUSB injections from legitimate human typing.',
      'Designed a real-time mitigation mechanism that detects, flags, and blocks suspicious USB devices.',
    ],
    tech: ['Python', 'Cybersecurity', 'HID Detection', 'Behaviour Analysis', 'Real-Time Monitoring'],
  },
]

export default function Projects() {
  const headerRef = useReveal()

  return (
    <section className="section projects" id="projects">
      <SectionBackground />
      <div className="shell">
        <div className="section__header reveal" ref={headerRef}>
          <span className="section__label">Projects</span>
          <h2 className="section__title">Selected Work</h2>
        </div>

        <div className="projects__grid">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }) {
  const ref = useReveal()

  return (
    <article
      className="projects__card glass-card reveal"
      ref={ref}
      style={{ '--delay': `${index * 0.12}s` }}
    >
      <span className="projects__label">{project.label}</span>
      <h3 className="projects__title">{project.title}</h3>
      <p className="projects__subtitle">{project.subtitle}</p>

      <ul className="projects__points">
        {project.points.map((point, j) => (
          <li key={j}>{point}</li>
        ))}
      </ul>

      <div className="projects__tech">
        {project.tech.map((t) => (
          <span className="tag" key={t}>{t}</span>
        ))}
      </div>
    </article>
  )
}
