import useReveal from '../hooks/useReveal'
import SectionBackground from './SectionBackground'
import { GitHubIcon, LinkedInIcon, MailIcon } from './icons'
import './Contact.css'

const CONTACT_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/Ashucc',
    icon: GitHubIcon,
    handle: '@Ashucc',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ashutosh-dixit-57483a240/',
    icon: LinkedInIcon,
    handle: 'Ashutosh Dixit',
  },
  {
    label: 'Email',
    href: 'mailto:ashutoshdixit.dev@gmail.com',
    icon: MailIcon,
    handle: 'ashutoshdixit.dev@gmail.com',
  },
]

export default function Contact() {
  const ref = useReveal()

  return (
    <section className="section contact" id="contact">
      <SectionBackground />
      <div className="shell">
        <div className="contact__inner reveal" ref={ref}>
          <span className="section__label">Contact</span>
          <h2 className="contact__title">Let's Work Together</h2>
          <p className="contact__desc">
            I'm currently open to full-stack development and cybersecurity opportunities.
            Feel free to reach out if you'd like to connect.
          </p>

          <div className="contact__links">
            {CONTACT_LINKS.map(({ label, href, icon: Icon, handle }) => (
              <a
                key={label}
                href={href}
                target={label !== 'Email' ? '_blank' : undefined}
                rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
                className="contact__link glass-card"
              >
                <span className="contact__link-icon">
                  <Icon size={22} />
                </span>
                <span className="contact__link-info">
                  <span className="contact__link-label">{label}</span>
                  <span className="contact__link-handle">{handle}</span>
                </span>
              </a>
            ))}
          </div>

          <p className="contact__footer">
            © {new Date().getFullYear()} Ashutosh Dixit. Built with React.
          </p>
        </div>
      </div>
    </section>
  )
}
