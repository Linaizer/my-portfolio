export interface Job {
  title: string
  meta: string
  bullets: string[]
  skills: string[]
}

export const experience: Job[] = [
  {
    title: 'Full Stack Developer',
    meta: 'TCB Fiber (USA) · Contract · Remote',
    bullets: [
      'Built a production field documentation platform: offline-first PWA, native Android app, and real-time admin dashboard',
      'Built offline-first job submission via outbox pattern with automatic retry on reconnect (IndexedDB)',
      'Developed NestJS REST APIs with JWT authentication, refresh tokens, RBAC, and rate limiting',
      'Prevented double job assignment under concurrent access using atomic conditional updates',
      'Implemented BullMQ + Redis queues for asynchronous photo uploads and background processing',
      'Integrated Google Drive API for folder management, file uploads, and DOCX generation',
      'Built role-based interfaces (Field Workers, Managers, Vendors, Admins) with EN / ES / PT support',
      'Packaged for Android via Capacitor; configured Docker, GitHub Actions CI/CD, and Nginx deployment',
    ],
    skills: ['React', 'TypeScript', 'NestJS', 'PostgreSQL', 'Redis', 'BullMQ', 'Docker', 'Capacitor'],
  },
  {
    title: 'Frontend Developer',
    meta: 'WinWin.travel · Remote',
    bullets: [
      'Refactored frontend architecture to Feature-Sliced Design, improving maintainability and onboarding for new developers',
      'Built reusable custom hooks library, reducing code duplication across components',
      'Integrated REST API via Axios, enabling dynamic data rendering and improving UX',
      'Added i18n (internationalization) support for multi-language users',
      'Resolved legacy bugs, improving application stability and performance',
    ],
    skills: ['React', 'TypeScript', 'FSD', 'Axios', 'i18n', 'REST API'],
  },
]