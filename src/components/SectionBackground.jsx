import Lightning from './Lightning'

export default function SectionBackground() {
  return (
    <div className="section-bg" aria-hidden="true">
      <Lightning hue={44} speed={0.35} intensity={0.3} size={1.1} />
    </div>
  )
}
