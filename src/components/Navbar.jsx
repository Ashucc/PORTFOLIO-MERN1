import { useState, useEffect } from 'react'
import { GitHubIcon, LinkedInIcon, MenuIcon } from './icons'
import './Navbar.css'

export default function Navbar({ sections, activeIndex, onNavigate }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className="nav">
      <div className="nav__inner shell">
        {/* Brand — navigates to Home (center) */}
        <a
          className="nav__brand"
          href="#home"
          onClick={(e) => { e.preventDefault(); onNavigate(3) }}
        >
          ASHUTOSH
        </a>

        {/* Rail — floating glass capsule */}
        <nav className="nav__rail" aria-label="Primary">
          {sections.map((section, i) => (
            <span className="nav__slot" key={section.id}>
              {i > 0 && <span className="nav__dot" aria-hidden="true" />}
              <a
                href={`#${section.id}`}
                className={i === activeIndex ? 'is-active' : ''}
                onClick={(e) => { e.preventDefault(); onNavigate(i) }}
              >
                {section.label}
              </a>
            </span>
          ))}
        </nav>

        {/* Social actions */}
        <div className="nav__actions">
          <a
            href="https://github.com/Ashucc"
            target="_blank"
            rel="noopener noreferrer"
            className="nav__social"
            aria-label="GitHub"
          >
            <GitHubIcon size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/ashutosh-dixit-57483a240/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav__social"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={18} />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="nav__toggle"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          <MenuIcon open={open} />
        </button>
      </div>

      {/* Mobile sheet */}
      {open && (
        <div className="nav__sheet">
          {sections.map((section, i) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={i === activeIndex ? 'is-active' : ''}
              onClick={(e) => { e.preventDefault(); onNavigate(i); setOpen(false) }}
            >
              {section.label}
            </a>
          ))}
          <div className="nav__sheet-socials">
            <a href="https://github.com/Ashucc" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GitHubIcon size={20} />
            </a>
            <a href="https://www.linkedin.com/in/ashutosh-dixit-57483a240/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedInIcon size={20} />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
