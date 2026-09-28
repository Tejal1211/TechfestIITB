import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { Menu, X, Zap } from 'lucide-react'
import { NAV, SITE } from '../data'

export default function Navbar() {
  const [open, setOpen] = useState(false); const [solid, setSolid] = useState(false)
  const { scrollYProgress } = useScroll(); const bar = useSpring(scrollYProgress, { stiffness: 120, damping: 24 })
  useEffect(() => { const f = () => setSolid(window.scrollY > 40); f(); addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f) }, [])
  useEffect(() => { const k = e => e.key === 'Escape' && setOpen(false); addEventListener('keydown', k); return () => removeEventListener('keydown', k) }, [])
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors ${solid || open ? 'bg-ink/85 backdrop-blur-md border-b border-line' : ''}`}>
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-2 font-display text-2xl font-black uppercase"><Zap className="h-5 w-5 text-neon" aria-hidden />Techfest<span className="text-white/50">IITB</span></a>
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV.map(([l, id]) => <li key={id}><a href={`#${id}`} className="text-sm text-white/70 transition-colors hover:text-neon">{l}</a></li>)}
        </ul>
        <div className="flex items-center gap-3">
          <a href={SITE} target="_blank" rel="noreferrer" className="hidden rounded-full bg-neon px-5 py-2 text-sm font-semibold text-ink transition hover:bg-white sm:block">Register on techfest.org</a>
          <button className="lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        </div>
      </nav>
      <motion.div style={{ scaleX: bar }} className="h-0.5 origin-left bg-gradient-to-r from-volt to-neon" />
      <AnimatePresence>{open && (
        <motion.ul id="mobile-nav" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden bg-ink px-5 lg:hidden">
          {NAV.map(([l, id]) => <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)} className="block border-b border-line py-4 font-display text-3xl font-bold uppercase">{l}</a></li>)}
          <li className="py-5"><a href={SITE} className="block rounded-full bg-neon py-3 text-center font-semibold text-ink">Register on techfest.org</a></li>
        </motion.ul>)}
      </AnimatePresence>
    </header>
  )
}
