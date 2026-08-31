import { useEffect, useLayoutEffect, useRef, useState, useCallback } from 'react'

const TOTAL = 7
const CENTER = 3
const WHEEL_THRESHOLD = 50
const COOLDOWN = 700
const DEBOUNCE = 150

export default function useHorizontalScroll() {
  const ref = useRef(null)
  const [active, setActive] = useState(CENTER)

  /* 1. Instant scroll to centre on mount */
  useLayoutEffect(() => {
    const el = ref.current
    if (el) el.scrollLeft = CENTER * window.innerWidth
  }, [])

  /* 2. Vertical wheel → horizontal panel navigation */
  useEffect(() => {
    const el = ref.current
    if (!el) return

    let acc = 0
    let debounce = null
    let cool = false

    const onWheel = (e) => {
      // Let native horizontal trackpad scrolling pass through
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return

      e.preventDefault()
      if (cool) return

      acc += e.deltaY
      clearTimeout(debounce)
      debounce = setTimeout(() => { acc = 0 }, DEBOUNCE)

      if (Math.abs(acc) > WHEEL_THRESHOLD) {
        cool = true
        const dir = acc > 0 ? 1 : -1
        const cur = Math.round(el.scrollLeft / window.innerWidth)
        const next = Math.max(0, Math.min(TOTAL - 1, cur + dir))
        el.scrollTo({ left: next * window.innerWidth, behavior: 'smooth' })
        acc = 0
        setTimeout(() => { cool = false }, COOLDOWN)
      }
    }

    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [])

  /* 3. Track active section on scroll */
  useEffect(() => {
    const el = ref.current
    if (!el) return

    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const idx = Math.round(el.scrollLeft / window.innerWidth)
          setActive(idx)
          ticking = false
        })
        ticking = true
      }
    }

    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  /* 4. Arrow key navigation */
  useEffect(() => {
    const el = ref.current
    const onKey = (e) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
      e.preventDefault()
      const dir = e.key === 'ArrowRight' ? 1 : -1
      const cur = Math.round(el.scrollLeft / window.innerWidth)
      const next = Math.max(0, Math.min(TOTAL - 1, cur + dir))
      el.scrollTo({ left: next * window.innerWidth, behavior: 'smooth' })
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  /* 5. Re-align on window resize */
  useEffect(() => {
    const el = ref.current
    const onResize = () => {
      if (el) el.scrollTo({ left: active * window.innerWidth, behavior: 'instant' })
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [active])

  /* 6. Programmatic scroll to a section index */
  const scrollTo = useCallback((index) => {
    ref.current?.scrollTo({ left: index * window.innerWidth, behavior: 'smooth' })
  }, [])

  return { ref, active, scrollTo, total: TOTAL }
}
