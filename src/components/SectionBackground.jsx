import Scanner from './Scanner'

export default function SectionBackground() {
  return (
    <div className="section-bg" aria-hidden="true">
      <Scanner
        color1="#14110e"
        color2="#e8a33d"
        color3="#f4f2ee"
        speed={0.3}
        sweepSpeed={0.2}
        sweepWidth={1.8}
        sweepFalloff={5}
        scale={1.6}
        frequency={1.8}
        ripple={0.18}
        bandDensity={10}
        lineSharpness={4.5}
        glow={0.18}
        scanDirection="vertical"
        colorSpread={0.5}
        brightness={0.4}
        contrast={1.1}
        softness={1.6}
        vignette={0.6}
        scanline={true}
        grain={true}
        grainIntensity={0.04}
        opacity={0.35}
        mouseInteraction={false}
      />
    </div>
  )
}
