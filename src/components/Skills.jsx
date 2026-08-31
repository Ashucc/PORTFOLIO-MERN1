import useReveal from '../hooks/useReveal'
import SectionBackground from './SectionBackground'
import './Skills.css'

const SKILL_GROUPS = [
  { category: 'Languages', skills: ['Python', 'JavaScript', 'C++', 'HTML5', 'CSS3'] },
  { category: 'Frontend', skills: ['React.js', 'Tailwind CSS'] },
  { category: 'Backend', skills: ['Node.js', 'Express.js', 'REST APIs'] },
  { category: 'Database', skills: ['MongoDB', 'MongoDB Atlas', 'Mongoose'] },
  { category: 'Tools', skills: ['Git', 'GitHub', 'Postman', 'Linux'] },
  { category: 'Cybersecurity', skills: ['Digital Forensics', 'HID Attack Mitigation', 'Network Traffic Analysis'] },
]

export default function Skills() {
  const headerRef = useReveal()

  return (
    <section className="section skills" id="skills">
      <SectionBackground />
      <div className="shell">
        <div className="section__header reveal" ref={headerRef}>
          <span className="section__label">Technical Skills</span>
          <h2 className="section__title">Technologies & Tools</h2>
        </div>

        <div className="skills__grid">
          {SKILL_GROUPS.map((group, i) => (
            <SkillGroup key={group.category} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillGroup({ group, index }) {
  const ref = useReveal()

  return (
    <div
      className="skills__group glass-card reveal"
      ref={ref}
      style={{ '--delay': `${index * 0.05}s` }}
    >
      <h3 className="skills__category">{group.category}</h3>
      <div className="skills__tags">
        {group.skills.map((skill) => (
          <span className="tag" key={skill}>{skill}</span>
        ))}
      </div>
    </div>
  )
}
