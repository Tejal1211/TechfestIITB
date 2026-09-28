import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Trophy, Wrench, Mic, Lightbulb, MapPin, Music, Ticket, CalendarClock, Radio, Zap } from 'lucide-react'
const Icons = { Trophy, Wrench, Mic, Lightbulb, MapPin, Music, Ticket, CalendarClock, Radio, Zap }
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react'
import { Reveal, Counter, Magnetic, SectionHead } from './ui'
import { STATS, EXPLORE, EVENTS, WORKSHOP_POINTS, CITIES, INDIA, LINKS, SITE } from '../data'

const wrap = 'mx-auto max-w-7xl px-5'

export function About() {
  return (
    <section id="about" className={`${wrap} py-28`}>
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <SectionHead kicker="About Techfest" title="Built by students. Seen by thousands." />
        <Reveal delay={0.1} className="space-y-6 text-xl leading-relaxed text-white/75 lg:pt-32">
          <p>Techfest is the annual science and technology festival of IIT Bombay, regarded as Asia's largest. It has run every year since 1998 and is organised by the student community of the institute.</p>
          <p>The festival brings together cut-throat competitions, motivating lectures, state-of-the-art technology, exhibitions and breathtaking performances, and reaches beyond campus through outreach campaigns and zonal rounds.</p>
          <p className="border-l-2 border-neon pl-5 text-white">This year's theme for the 30th edition: <strong>An Aetherial Renaissance</strong>. Dates are announced on techfest.org.</p>
        </Reveal>
      </div>
    </section>
  )
}

export function Stats() {
  return (
    <section aria-label="Techfest in numbers" className="border-y border-line bg-panel">
      <dl className={`${wrap} grid grid-cols-2 divide-line lg:grid-cols-4 lg:divide-x`}>
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="p-6 py-12 lg:px-8">
            <dd className="font-display text-6xl font-black text-white sm:text-7xl"><span className="bg-gradient-to-r from-volt to-neon bg-clip-text text-transparent"><Counter to={s.value} suffix={s.suffix} /></span></dd>
            <dt className="mt-3 text-white/70">{s.label}</dt>
            <p className="mt-1 text-xs text-white/35">Source: {s.note}</p>
          </Reveal>))}
      </dl>
    </section>
  )
}

export function Explore() {
  const [i, setI] = useState(0); const cur = EXPLORE[i]; const Icon = Icons[cur.icon]
  const onKey = e => { if (e.key === 'ArrowDown' || e.key === 'ArrowRight') setI((i + 1) % EXPLORE.length); if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') setI((i - 1 + EXPLORE.length) % EXPLORE.length) }
  return (
    <section id="explore" className={`${wrap} py-28`}>
      <SectionHead kicker="Explore" title="Six ways into the fest" />
      <div className="grid gap-8 lg:grid-cols-2">
        <div role="tablist" aria-label="Explore Techfest" onKeyDown={onKey} className="divide-y divide-line border-y border-line">
          {EXPLORE.map((e, k) => (
            <button key={e.id} role="tab" aria-selected={k === i} tabIndex={k === i ? 0 : -1} onClick={() => setI(k)} onMouseEnter={() => setI(k)}
              className={`group flex w-full items-center justify-between py-5 text-left font-display text-5xl font-black uppercase transition-all sm:text-6xl ${k === i ? 'pl-4 text-neon' : 'text-white/40 hover:text-white'}`}>
              {e.id}<ArrowUpRight className={`h-8 w-8 transition-transform ${k === i ? 'rotate-45' : ''}`} aria-hidden />
            </button>))}
        </div>
        <div className="relative min-h-[280px] overflow-hidden rounded-2xl border border-line bg-panel p-8 sm:p-10" role="tabpanel">
          <div className="grid-bg absolute inset-0 opacity-50" aria-hidden />
          <AnimatePresence mode="wait">
            <motion.div key={cur.id} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.25 }} className="relative">
              <Icon className="mb-8 h-14 w-14 text-neon" aria-hidden />
              <h3 className="mb-4 font-display text-4xl font-bold uppercase">{cur.id}</h3>
              <p className="text-lg text-white/70">{cur.text}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export function Events() {
  const rail = useRef(null)
  const go = d => rail.current.scrollBy({ left: d * 400, behavior: 'smooth' })
  return (
    <section id="events" className="bg-panel py-28">
      <div className={wrap}>
        <div className="flex items-end justify-between gap-6">
          <SectionHead kicker="Featured competitions" title="Where teams go head to head" />
          <div className="mb-14 hidden gap-2 sm:flex">
            {[-1, 1].map(d => <button key={d} onClick={() => go(d)} aria-label={d < 0 ? 'Previous events' : 'Next events'} className="grid h-12 w-12 place-items-center rounded-full border border-line transition hover:border-neon hover:text-neon">{d < 0 ? <ChevronLeft /> : <ChevronRight />}</button>)}
          </div>
        </div>
      </div>
      <div ref={rail} tabIndex={0} aria-label="Featured competitions, scroll horizontally" className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:px-[max(1.25rem,calc((100vw-80rem)/2+1.25rem))]">
        {EVENTS.map((e, k) => (
          <motion.article key={e.name} whileHover={{ y: -10 }} tabIndex={0}
            className="group relative flex h-[420px] w-[82vw] shrink-0 snap-start flex-col justify-between overflow-hidden rounded-2xl border border-line bg-ink p-7 transition-colors hover:border-neon focus-visible:border-neon sm:w-[380px]">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-volt/20 blur-3xl transition-all group-hover:bg-neon/25" aria-hidden />
            <span className="relative w-fit rounded-full border border-neon/50 px-3 py-1 text-xs text-neon">{e.tag}</span>
            <div className="relative">
              <h3 className="mb-4 font-display text-5xl font-black uppercase leading-[0.9]">{e.name}</h3>
              <p className="max-h-0 overflow-hidden text-white/70 opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100 group-focus-visible:max-h-40 group-focus-visible:opacity-100 max-sm:max-h-40 max-sm:opacity-100">{e.text}</p>
            </div>
          </motion.article>))}
        <a href={SITE} target="_blank" rel="noreferrer" className="flex h-[420px] w-[82vw] shrink-0 snap-start flex-col items-start justify-end rounded-2xl bg-neon p-7 font-display text-5xl font-black uppercase leading-[0.9] text-ink sm:w-[380px]">
          See every competition on techfest.org<ArrowUpRight className="mt-4 h-10 w-10" aria-hidden /></a>
      </div>
    </section>
  )
}

export function Workshops() {
  return (
    <section id="workshops" className={`${wrap} py-28`}>
      <SectionHead kicker="Workshops" title="Learn by building">Practical sessions that turn what you saw on stage into something you can make. Specific workshop listings appear on techfest.org as registrations open.</SectionHead>
      <div className="grid gap-5 md:grid-cols-3">
        {WORKSHOP_POINTS.map((w, i) => { const I = Icons[w.icon]; return (
          <Reveal key={w.title} delay={i * 0.1}>
            <div className="h-full rounded-2xl border border-line p-8 transition-colors hover:border-volt hover:bg-panel">
              <I className="mb-10 h-10 w-10 text-neon" aria-hidden /><h3 className="mb-3 font-display text-3xl font-bold uppercase">{w.title}</h3><p className="text-white/65">{w.text}</p>
            </div></Reveal>) })}
      </div>
    </section>
  )
}

export function Lectures() {
  return (
    <section id="lectures" className="relative overflow-hidden border-y border-line py-28">
      <div className="absolute inset-0 overflow-hidden" aria-hidden><div className="flex w-max whitespace-nowrap font-display text-[16rem] font-black uppercase leading-none text-white/[0.04] [animation:marquee_40s_linear_infinite]">
        {Array(2).fill('Lectures · Ideas · Journeys · Lectures · Ideas · Journeys · ').map((t, i) => <span key={i}>{t}</span>)}</div></div>
      <div className={`${wrap} relative grid gap-12 lg:grid-cols-2`}>
        <SectionHead kicker="Lectures" title="Voices that shape technology" />
        <Reveal className="space-y-6 text-xl text-white/75 lg:pt-32">
          <p>Lectures is one of Techfest's flagship events, bringing renowned personalities from across the globe to IIT Bombay to share their ideas, experiences and journeys.</p>
          <div className="rounded-2xl border border-neon/40 bg-ink/70 p-6 text-base backdrop-blur"><Icons.Radio className="mb-3 h-6 w-6 text-neon" aria-hidden />The 2026 speaker lineup has not been announced yet. Follow techfest.org and Techfest's social channels for the reveal.</div>
          <Magnetic href={LINKS.instagram} variant="ghost">Follow for announcements</Magnetic>
        </Reveal>
      </div>
    </section>
  )
}

const K = 14, px = ([lo, la]) => [(lo - 67) * K, (37 - la) * K]
export function Zonals() {
  const [a, setA] = useState(CITIES[0])
  const d = INDIA.map((p, i) => `${i ? 'L' : 'M'}${px(p).join(' ')}`).join('') + 'Z'
  return (
    <section id="zonals" className={`${wrap} py-28`}>
      <SectionHead kicker="Zonals" title="Techfest comes to your city">Regional rounds run in cities across India, with winners advancing to the Grand Finale at IIT Bombay. Zonals have also expanded to international cities. Cities shown are those named on current competition pages; each competition lists its own centres.</SectionHead>
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
        <svg viewBox="0 0 440 430" role="img" aria-label="Map of India showing Techfest zonal cities" className="mx-auto w-full max-w-xl">
          <defs><pattern id="dots" width="10" height="10" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="#2b6bff" opacity=".6" /></pattern></defs>
          <path d={d} fill="url(#dots)" stroke="#2b6bff" strokeWidth="1.5" strokeLinejoin="round" />
          {CITIES.map(c => { const [x, y] = px([c.lon, c.lat]); const on = a.name === c.name; return (
            <g key={c.name} tabIndex={0} role="button" aria-label={c.name} onMouseEnter={() => setA(c)} onFocus={() => setA(c)} onClick={() => setA(c)} className="cursor-pointer outline-none [&:focus-visible>circle:last-of-type]:stroke-white">
              {(on || c.host) && <circle cx={x} cy={y} r="6" fill="none" stroke="#19ffa3"><animate attributeName="r" values="6;22" dur="1.8s" repeatCount="indefinite" /><animate attributeName="opacity" values="1;0" dur="1.8s" repeatCount="indefinite" /></circle>}
              <circle cx={x} cy={y} r={on ? 7 : 5} fill={c.host ? '#fff' : '#19ffa3'} stroke="#05070b" strokeWidth="2" />
            </g>) })}
        </svg>
        <div>
          <div className="mb-6 rounded-2xl border border-line bg-panel p-6" aria-live="polite"><p className="text-sm text-neon">{a.host ? 'Host city' : 'Zonal city'}</p>
            <p className="font-display text-6xl font-black uppercase">{a.name}</p>{a.host && <p className="text-white/60">Grand Finale at the IIT Bombay campus</p>}</div>
          <ul className="flex flex-wrap gap-2">{CITIES.map(c => <li key={c.name}><button onClick={() => setA(c)} aria-pressed={a.name === c.name} className={`rounded-full border px-4 py-2 text-sm transition ${a.name === c.name ? 'border-neon bg-neon text-ink' : 'border-line text-white/70 hover:border-neon'}`}>{c.name}</button></li>)}</ul>
        </div>
      </div>
    </section>
  )
}

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,#000,transparent_70%)]" aria-hidden />
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-volt/30 blur-[140px]" aria-hidden />
      <Reveal className={`${wrap} relative text-center`}>
        <h2 className="font-display text-[16vw] font-black uppercase leading-[0.85] sm:text-[11rem]">Be part of<br /><span className="outline-text">the 30th</span></h2>
        <p className="mx-auto mt-8 max-w-xl text-xl text-white/70">General entry is free with a valid ID. Competitions open their own registrations on techfest.org. Want to bring Techfest to your college?</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4"><Magnetic href={SITE}>Register on techfest.org <ArrowUpRight className="h-5 w-5" /></Magnetic><Magnetic href={LINKS.ca} variant="ghost">Become a College Ambassador</Magnetic></div>
      </Reveal>
    </section>
  )
}

export function Footer() {
  const cols = [['Festival', [['techfest.org', SITE], ['College Ambassador', LINKS.ca], ['Coordi Portal', LINKS.coordi]]], ['Follow', [['Instagram', LINKS.instagram], ['LinkedIn', LINKS.linkedin]]]]
  return (
    <footer className="border-t border-line bg-panel">
      <div className={`${wrap} grid gap-10 py-14 md:grid-cols-[2fr_1fr_1fr]`}>
        <div><p className="flex items-center gap-2 font-display text-4xl font-black uppercase"><Icons.Zap className="h-6 w-6 text-neon" aria-hidden />Techfest, IIT Bombay</p>
          <p className="mt-3 max-w-sm text-white/60">Asia's Largest Science and Technology Festival. Organised by the student community of the Indian Institute of Technology Bombay, Powai, Mumbai.</p></div>
        {cols.map(([t, l]) => <nav key={t} aria-label={t}><p className="mb-4 text-sm text-neon">{t}</p><ul className="space-y-2">{l.map(([n, h]) => <li key={n}><a href={h} target="_blank" rel="noreferrer" className="text-white/70 hover:text-white">{n}</a></li>)}</ul></nav>)}
      </div>
      <p className={`${wrap} border-t border-line py-6 text-sm text-white/40`}>An independent design concept for Techfest, IIT Bombay. All event information belongs to Techfest; confirm current details at techfest.org.</p>
    </footer>
  )
}
