# Techfest, IIT Bombay — Landing Page Redesign

Original 2D redesign concept for [techfest.org](https://techfest.org). React + Vite + Tailwind CSS + Framer Motion + Lucide.

## Run
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview

Requires Node 18+.

## Structure
- `src/data.js` — all copy, stats, events and cities (edit content here)
- `src/components/ui.jsx` — Reveal, Counter, Magnetic button, SectionHead
- `src/components/Navbar.jsx`, `Hero.jsx`, `Sections.jsx`

## Content sourcing
Only publicly available information was used: 30th edition and theme "An Aetherial Renaissance" (techfest.org), 1,75,000+ attendance / 2500+ colleges in India / 500+ overseas (Techfest LinkedIn), running since 1998, student-organised, Lectures / Robowars / Drone Racing League (Techfest coordi portal), and event pages for Full Throttle, AlgoNinja, ZeroCode and OLL Robotics Championship. Zonal cities are those named on current competition pages. **2026 dates and the speaker lineup are not published, so none are shown.** Verify everything against techfest.org before launch.

## Notes
The India outline is a simplified, stylised SVG, not a survey-accurate map. Reduced-motion preferences, keyboard navigation and visible focus states are supported.
