import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, ChevronDown } from 'lucide-react'
import { Magnetic } from './ui'
import { SITE } from '../data'

const dots = Array.from({ length: 28 }, (_, i) => ({ x: (i * 37) % 100, y: (i * 53) % 100, d: 4 + (i % 6), s: 1 + (i % 3) }))

function Blueprint() {
  const reduce = useReducedMotion()
  const spin = (d, r) => reduce ? {} : { animate: { rotate: r * 360 }, transition: { duration: d, repeat: Infinity, ease: 'linear' } }
  return (
    <svg viewBox="0 0 800 800" className="absolute right-[-25%] top-1/2 h-[130vw] max-h-[1000px] w-[130vw] max-w-[1000px] -translate-y-1/2 opacity-60 lg:right-[-8%] lg:h-[90vh] lg:w-[90vh]" aria-hidden>
      <defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stopColor="#2b6bff" /><stop offset="1" stopColor="#19ffa3" /></linearGradient></defs>
      <g fill="none" stroke="url(#g)" strokeWidth="1.2" style={{ transformOrigin: '400px 400px' }}>
        <circle cx="400" cy="400" r="380" strokeOpacity=".35" />
        <motion.g style={{ transformOrigin: '400px 400px' }} {...spin(60, 1)}><circle cx="400" cy="400" r="320" strokeDasharray="2 14" strokeWidth="3" />
          {[0, 60, 120, 180, 240, 300].map(a => <line key={a} x1="400" y1="70" x2="400" y2="95" transform={`rotate(${a} 400 400)`} />)}</motion.g>
        <motion.g style={{ transformOrigin: '400px 400px' }} {...spin(40, -1)}><circle cx="400" cy="400" r="250" strokeDasharray="40 12 4 12" />
          <circle cx="400" cy="150" r="8" fill="#19ffa3" stroke="none" /></motion.g>
        <motion.g style={{ transformOrigin: '400px 400px' }} {...spin(25, 1)}><polygon points="400,250 530,325 530,475 400,550 270,475 270,325" strokeOpacity=".8" /></motion.g>
        <circle cx="400" cy="400" r="70" strokeOpacity=".6" /><line x1="0" y1="400" x2="800" y2="400" strokeOpacity=".2" /><line x1="400" y1="0" x2="400" y2="800" strokeOpacity=".2" />
        <path d="M330 400h50l15-30 20 60 15-30h40" stroke="#19ffa3" strokeWidth="2" />
      </g>
    </svg>
  )
}

export default function Hero() {
  const reduce = useReducedMotion()
  return (
    <section id="top" className="relative flex min-h-screen items-end overflow-hidden pb-20 pt-32">
      <div className="grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_at_60%_40%,#000_30%,transparent_75%)]" aria-hidden />
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-volt/25 blur-[120px]" aria-hidden />
      <Blueprint />
      {dots.map((p, i) => <motion.span key={i} aria-hidden className="absolute rounded-full bg-neon" style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.s + 1, height: p.s + 1 }}
        animate={reduce ? {} : { y: [0, -30, 0], opacity: [0.15, 0.9, 0.15] }} transition={{ duration: p.d, repeat: Infinity, delay: i * 0.2 }} />)}
      {!reduce && <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-neon/40 [animation:scan_7s_linear_infinite]" aria-hidden />}
      <div className="relative mx-auto w-full max-w-7xl px-5">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mb-6 max-w-md text-sm text-neon">
          30th edition · An Aetherial Renaissance</motion.p>
        <h1 className="font-display font-black uppercase leading-[0.82] tracking-tight">
          {['Techfest,', 'IIT Bombay'].map((w, i) => (
            <span key={w} className="block overflow-hidden pb-2">
              <motion.span className={`block text-[22vw] sm:text-[17vw] lg:text-[13rem] ${i ? 'outline-text' : ''}`} initial={{ y: '105%' }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.3 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}>{w}</motion.span>
            </span>))}
        </h1>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <p className="max-w-xl text-xl text-white/75">Asia's Largest Science and Technology Festival. Organised entirely by the students of IIT Bombay: competitions, lectures, workshops and performances, in one place.</p>
          <div className="flex flex-wrap gap-4">
            <Magnetic href={SITE}>Participate now <ArrowUpRight className="h-5 w-5" /></Magnetic>
            <Magnetic href="#explore" target="_self" rel="" variant="ghost">Explore Techfest <ChevronDown className="h-5 w-5" /></Magnetic>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
