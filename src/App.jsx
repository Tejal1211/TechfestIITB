import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { About, Stats, Explore, Events, Workshops, Lectures, Zonals, FinalCTA, Footer } from './components/Sections'
export default function App() {
  return (<>
    <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-neon focus:px-4 focus:py-2 focus:text-ink">Skip to content</a>
    <Navbar /><main><Hero /><About /><Stats /><Explore /><Events /><Workshops /><Lectures /><Zonals /><FinalCTA /></main><Footer />
  </>)
}
