// All content is drawn from public Techfest sources (techfest.org, Techfest LinkedIn, coordi.techfest.org,
// and public event pages). Nothing here is invented; where 2026 details are unannounced, the UI says so.
export const SITE = 'https://techfest.org'
export const LINKS = { site: SITE, ca: 'https://ca.techfest.org', coordi: 'https://coordi.techfest.org',
  instagram: 'https://www.instagram.com/techfest_iitbombay/', linkedin: 'https://in.linkedin.com/company/techfest' }
export const NAV = [['About','about'],['Explore','explore'],['Events','events'],['Workshops','workshops'],['Lectures','lectures'],['Zonals','zonals']]
export const STATS = [
  { value: 175000, suffix: '+', label: 'People in attendance', note: 'Techfest LinkedIn' },
  { value: 2500, suffix: '+', label: 'Colleges reached across India', note: 'Techfest LinkedIn' },
  { value: 500, suffix: '+', label: 'Overseas colleges reached', note: 'Techfest LinkedIn' },
  { value: 30, suffix: 'th', label: 'Edition, running since 1998', note: 'techfest.org' },
]
export const EXPLORE = [
  { id: 'Competitions', icon: 'Trophy', text: 'From International Robowars to coding challenges and drone racing, teams from across the world compete on the IIT Bombay campus.' },
  { id: 'Workshops', icon: 'Wrench', text: 'Hands-on learning sessions. Workshops and select international summits are paid; each opens its own registration on techfest.org.' },
  { id: 'Lectures', icon: 'Mic', text: 'A flagship event bringing renowned personalities from across the globe to IIT Bombay to share their ideas, experiences and journeys.' },
  { id: 'Ideates', icon: 'Lightbulb', text: 'The ideas track of Techfest, where concepts are pitched and shaped into something real. Current tracks are listed on techfest.org.' },
  { id: 'Zonals', icon: 'MapPin', text: 'Regional rounds hosted in cities across India and abroad. Winners advance to the Grand Finale at IIT Bombay.' },
  { id: 'Technoholix', icon: 'Music', text: 'The festival\'s entertainment nights, with live performances and spectacles such as the drone light show first staged at Techfest in 2022.' },
]
export const EVENTS = [
  { name: 'International Robowars', tag: 'Combat robotics', text: 'India\'s largest and most intense combat robotics event, where top teams from around the world build robots and battle for the championship.' },
  { name: 'International Drone Racing League', tag: 'Aerial', text: 'High-speed drone racing, run as one of Techfest\'s large-scale international events.' },
  { name: 'International Full Throttle', tag: 'RC racing', text: 'RC nitro buggy racing, a long-running Techfest competition with international participation.' },
  { name: 'AlgoNinja', tag: 'Coding', text: 'Techfest\'s competitive coding championship, one of the festival\'s largest prize pools in 2025.' },
  { name: 'ZeroCode — Vibe Coding Challenge', tag: 'AI · Web', text: 'Build a working web app in a few hours using prompts and AI tools. Zonal rounds lead to a Grand Finale at IIT Bombay.' },
  { name: 'OLL Robotics Championship', tag: 'Robotics', text: 'Multi-city qualifiers with RoboSumo and RoboRacer tracks; winners fast-track to the Grand Finale at IIT Bombay.' },
]
export const WORKSHOP_POINTS = [
  { icon: 'Wrench', title: 'Hands-on by design', text: 'Workshops are practical sessions run during the festival, and robotics workshops also run alongside Zonals.' },
  { icon: 'Ticket', title: 'Paid registration', text: 'Workshops and select international summits are paid. General entry to the campus is free with a valid ID.' },
  { icon: 'CalendarClock', title: 'Opens per event', text: 'There is no single deadline. Each workshop and competition opens its own registration on techfest.org.' },
]
export const CITIES = [
  { name: 'Mumbai', lon: 72.88, lat: 19.08, host: true }, { name: 'Pune', lon: 73.86, lat: 18.52 },
  { name: 'Nagpur', lon: 79.09, lat: 21.15 }, { name: 'Jaipur', lon: 75.79, lat: 26.91 },
  { name: 'Delhi', lon: 77.21, lat: 28.61 }, { name: 'Bengaluru', lon: 77.59, lat: 12.97 },
  { name: 'Hyderabad', lon: 78.48, lat: 17.39 }, { name: 'Chennai', lon: 80.27, lat: 13.08 },
  { name: 'Kolkata', lon: 88.36, lat: 22.57 }, { name: 'Ahmedabad', lon: 72.57, lat: 23.02 },
]
// Simplified, stylised outline of India as [lon, lat] pairs
export const INDIA = [[68.1,23.7],[70,20.8],[72.8,21],[72.8,19],[73.5,16],[74.8,12.5],[76.3,9.5],[77.5,8.1],[78.2,8.9],[79.8,10.3],[80.3,13],[80.1,15.5],[82.3,16.8],[84.8,19.3],[87,21.5],[88.8,22],[89,25.2],[90.5,25.2],[92.2,24.8],[92.3,22.6],[93.3,24],[94.6,25.5],[95.2,26.8],[97,27.8],[96,29],[93,28.3],[91.5,27.3],[89.5,28],[88.1,27.9],[84,28.6],[80.2,30.1],[79,32.5],[78.5,34.5],[77,35.5],[75,36.8],[74,35],[74.5,34],[73.5,32.5],[74.5,31.5],[74,30.5],[72,28.5],[70.5,27.5],[69.5,26],[70.2,24.5]]
