import { useRef, useState, useEffect } from 'react'
import { GitHubIcon, LinkedInIcon } from './icons'
import './Hero.css'

const HERO_VIDEO_URL = '/hero.mp4'

export default function Hero() {
  const videoRef = useRef(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const play = video.play()
    if (play?.catch) play.catch(() => {})
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      video.pause()
      setReady(true)
    }
  }, [])

  return (
    <section className="hero" id="home">
      {/* Video background */}
      <div className="hero__media" aria-hidden="true">
        <video
          ref={videoRef}
          className={`hero__video ${ready ? 'is-ready' : ''}`}
          src={HERO_VIDEO_URL}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={() => setReady(true)}
        />
        <div className="hero__scrim" />
      </div>

      {/* Copy block */}
      <div className="hero__body shell">
        <p className="hero__greeting">Hi, I'm</p>
        <h1 className="hero__name">Ashutosh Dixit</h1>
        <p className="hero__role">
          Full Stack Developer
          <span className="hero__sep">|</span>
          MERN
          <span className="hero__sep">|</span>
          AI
          <span className="hero__sep">|</span>
          Cybersecurity
        </p>
        <p className="hero__intro">
          A full-stack developer focused on building scalable, secure, and user-centric
          web applications using modern technologies. Combines full-stack development
          experience with a cybersecurity background to build reliable and
          security-conscious software.
        </p>
        <div className="hero__actions">
          <a className="btn" href="#projects">View Projects</a>
          <a className="btn btn--outline" href="#contact">Contact Me</a>
        </div>
        <div className="hero__socials">
          <a href="https://github.com/Ashucc" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GitHubIcon size={22} />
          </a>
          <a href="https://www.linkedin.com/in/ashutosh-dixit-57483a240/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedInIcon size={22} />
          </a>
        </div>
      </div>
    </section>
  )
}
