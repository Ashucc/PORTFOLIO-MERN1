import useReveal from '../hooks/useReveal'
import SectionBackground from './SectionBackground'
import { TrophyIcon } from './icons'
import './Achievements.css'

export default function Achievements() {
  const ref = useReveal()

  return (
    <section className="section achievements" id="achievements">
      <SectionBackground />
      <div className="shell">
        <div className="section__header reveal" ref={ref}>
          <span className="section__label">Achievements</span>
          <h2 className="section__title">Recognition & Projects</h2>
        </div>

        <div className="achievements__grid">
          <AchievementPrimary />
          <AchievementSecondary />
        </div>
      </div>
    </section>
  )
}

function AchievementPrimary() {
  const ref = useReveal()
  return (
    <div className="achievements__card glass-card achievements__card--primary reveal" ref={ref}>
      <div className="achievements__icon">
        <TrophyIcon size={22} />
      </div>
      <div className="achievements__content">
        <div className="achievements__award">
          <span className="achievements__place">1st Place</span>
          <span className="achievements__prize">₹10,000</span>
        </div>
        <h3 className="achievements__title">Best Academic Project</h3>
        <p className="achievements__desc">
          Won first place and INR 10,000 for the Rubber Ducky Attack
          Prevention project — a Python-based security system that detects
          and blocks BadUSB keystroke injection attacks in real time.
        </p>
      </div>
    </div>
  )
}

function AchievementSecondary() {
  const ref = useReveal()
  return (
    <div className="achievements__card glass-card reveal" ref={ref} style={{ '--delay': '0.1s' }}>
      <div className="achievements__content">
        <span className="achievements__tag">Educational Project</span>
        <h3 className="achievements__title">MERN Evolution Learning Platform</h3>
        <p className="achievements__desc">
          Created a React-based educational website explaining the evolution
          of the MERN stack and helping beginners understand modern
          full-stack web development.
        </p>
      </div>
    </div>
  )
}
