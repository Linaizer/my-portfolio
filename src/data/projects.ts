export interface Project {
  title: string
  desc: string
  stack: string[]
  github: string | null
  live: string | null
  type: string
}

export const projects: Project[] = [
  {
    title: 'Messenger Lize',
    desc: 'Fullstack real-time messenger built from scratch. Designed DB schema, built REST API + WebSocket server, implemented JWT auth, architected frontend with FSD.',
    stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'WebSockets', 'Prisma', 'FSD'],
    github: 'https://github.com/Linaizer/Messenger-Lize',
    live: null,
    type: 'Fullstack',
  },
  {
    title: 'E-Commerce Shop',
    desc: 'Frontend with product catalog, cart, smooth animations and Zustand state management. Includes demo auth with real API.',
    stack: ['React', 'TypeScript', 'Zustand', 'Framer Motion', 'Tailwind CSS'],
    github: 'https://github.com/Linaizer/Shop',
    live: 'https://shop-tau-dun.vercel.app',
    type: 'Frontend',
  },
  {
    title: 'Weather App',
    desc: 'Weather dashboard with hourly/weekly forecasts, Recharts data visualization and live background animations based on city and time of day.',
    stack: ['React', 'TypeScript', 'Recharts', 'OpenWeather API', 'Vite'],
    github: 'https://github.com/Linaizer/WeatherApp',
    live: 'https://weather-app-two-blue-57.vercel.app',
    type: 'Frontend',
  },
]
