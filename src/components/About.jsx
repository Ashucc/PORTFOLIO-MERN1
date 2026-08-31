import useReveal from '../hooks/useReveal'
import SectionBackground from './SectionBackground'
import './About.css'

export default function About() {
  const ref = useReveal()

  return (
    <section className="section about" id="about">
      <SectionBackground />
      <div className="shell about__grid reveal" ref={ref}>
        <div className="about__left">
          <span className="section__label">About Me</span>
          <h2 className="section__title">
            Building at the intersection of{' '}
            <span className="about__highlight">development & security</span>
          </h2>
        </div>
        <div className="about__right">
          <p className="about__text">
            I'm a full-stack developer with a B.Tech in Computer Science
            (Cybersecurity) who builds web applications that don't just work —
            they work securely. My development practice is shaped by a foundation
            in digital forensics and network security, giving me a perspective
            that most developers simply don't have.
          </p>
          <p className="about__text">
            From investigating real cybercrime cases with the Nagpur Cyber Police
            to building full-stack MERN applications, I bring a unique blend of
            security awareness and modern development expertise.
          </p>
          <div className="about__stats">
            <div className="about__stat">
              <span className="about__stat-value">B.Tech</span>
              <span className="about__stat-label">CS — Cybersecurity</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-value">MERN</span>
              <span className="about__stat-label">Stack Focused</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-value">₹56K</span>
              <span className="about__stat-label">Fraud Recovered</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
