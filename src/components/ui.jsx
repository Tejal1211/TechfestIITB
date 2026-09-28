import { useRef, useEffect, useState } from 'react'
import { motion, useInView, useMotionValue, useSpring, animate, useReducedMotion } from 'framer-motion'

export function Reveal({ children, delay = 0, className = '', as = 'div' }) {
  const reduce = useReducedMotion(); const M = motion[as]
  return <M className={className} initial={reduce ? false : { opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</M>
}

export function Counter({ to, suffix = '' }) {
  const ref = useRef(null); const inView = useInView(ref, { once: true }); const [n, setN] = useState(0)
  useEffect(() => { if (!inView) return; const c = animate(0, to, { duration: 2, ease: 'easeOut', onUpdate: v => setN(Math.round(v)) }); return () => c.stop() }, [inView, to])
  return <span ref={ref}>{n.toLocaleString('en-IN')}{suffix}</span>
}

export function Magnetic({ children, className = '', variant = 'solid', ...props }) {
  const x = useMotionValue(0), y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 16 }), sy = useSpring(y, { stiffness: 220, damping: 16 })
  const move = e => { const r = e.currentTarget.getBoundingClientRect(); x.set((e.clientX - r.left - r.width / 2) * 0.3); y.set((e.clientY - r.top - r.height / 2) * 0.3) }
  const reset = () => { x.set(0); y.set(0) }
  const style = variant === 'solid' ? 'bg-neon text-ink hover:bg-white' : 'border border-white/30 text-white hover:border-neon hover:text-neon'
  return <motion.a onMouseMove={move} onMouseLeave={reset} style={{ x: sx, y: sy }} whileTap={{ scale: 0.95 }} target="_blank" rel="noreferrer"
    className={`inline-flex items-center gap-2 rounded-full px-7 py-4 font-semibold transition-colors ${style} ${className}`} {...props}>{children}</motion.a>
}

export function SectionHead({ kicker, title, children }) {
  return <Reveal className="mb-14 max-w-4xl">
    <p className="mb-4 flex items-center gap-3 text-sm text-neon"><span className="h-px w-10 bg-neon" />{kicker}</p>
    <h2 className="font-display text-6xl font-black uppercase leading-[0.9] sm:text-8xl">{title}</h2>
    {children && <p className="mt-6 max-w-2xl text-lg text-white/65">{children}</p>}
  </Reveal>
}
