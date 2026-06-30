 export const CONFIG = {
  // ── Identity ────────────────────────────────────────────
  name: "Yousra",
  brand: "atelier",
  tagline: ["I build the", "quiet", "machinery", "behind loud ideas."],
  bio: "CS student & backend developer. I treat code like cabinetry — joints tight, surfaces smooth, every drawer slides shut with a hush.",
  email: "yousra.oulahcene.dev@gmail.com",
  github: "https://github.com/youssi12",
  linkedin: "https://www.linkedin.com/in/yousra-oulahcene-949477383/",
  resumeUrl: "/resume.pdf",
  status: "Open for collaboration",
  edition: "MMXXVI · EDITION 01",

  // ── Stats bar ───────────────────────────────────────────
  stats: [
    { value: "03+", label: "Years Coding" },
    { value: "05",  label: "Shipped Projects" },
    { value: "∞",   label: "Cups of Coffee" },
    { value: "100%", label: "Curiosity" },
  ],

  // ── About section ───────────────────────────────────────
  about: {
    headline: ["I treat", "software", "the way luthiers treat", "wood."],
    paragraphs: [
      "I'm Yousra. I got obsessed with what happens under the hood — not the flashy stuff. The part where an API handles ten thousand requests without blinking, or a query drops from three seconds to thirty milliseconds because you finally indexed the right column.",
      "Lately I've been pushing into frontend too. React, Tailwind, a bit of motion. Mostly because I got tired of handing off solid backend work to interfaces that didn't do it justice.",
    ],
  },

  // ── Tech stack marquee ──────────────────────────────────
  stack: [
    "Node.js", "Express", "MySQL", "MongoDB",
    "TypeScript", "React", "Tailwind", "Docker",
    "Python", "Prisma", "Git & Github", "REST APIs",
  ],

  // ── Toolbench cards ─────────────────────────────────────
  toolbench: {
    headline: ["The", "instruments", "I reach for."],
    subtitle: "A small, sharp set. I'd rather know a few tools deeply than collect a wall full of them.",
    categories: [
      {
        title: "Backend",
        icon: "server",
        items: ["Node.js", "Express", "REST APIs", "Auth flows"],
      },
      {
        title: "Data",
        icon: "database",
        items: ["MySQL", "MongoDB", "Prisma", "Excel"],
      },
      {
        title: "Languages",
        icon: "code",
        items: ["JavaScript", "TypeScript", "Python", "SQL", "C++"],
      },
      {
        title: "Frontend",
        icon: "layers",
        items: ["React", "Tailwind", "Motion", "Vite"],
      },
    ],
  },

  // ── Projects ─────────────────────────────────────────────
  projects: [
    {
      id: "001",
      year: "2026",
      title: "Ledger — minimalist finance API",
      description:
        "Double-entry bookkeeping, done properly. Every transaction debits one account and credits another — no shortcuts. Idempotency keys stop duplicates on retries, every action writes to an audit log, and the whole thing exports to CSV on demand. Built to outlive whatever frontend points at it.",
      tags: ["Node.js", "SQLite", "Express"],
      caseStudyUrl: "https://ledger-minimalist-finance.netlify.app/",
      sourceUrl: "https://github.com/youssi12/Ledger",
      visual: "green",
    },
    {
      id: "002",
      year: "2025",
      title: "ConcoursDoctor — in development",
      description:
        "A team project at ESI-SBA. We built the platform that manages doctoral competition applications end to end. I owned the backend: API design, database schema, the Prisma layer connecting everything to MySQL. Working on a shared codebase under real deadlines teaches you things solo projects don't.",
      tags: ["Node.js", "Express.js", "Prisma", "MySQL"],
      caseStudyUrl: "#",
      sourceUrl: "https://github.com/samiabelhadj/Back-end-concour",
      visual: "purple",
    },
    {
      id: "003",
      year: "2025",
      title: "RouteOpt — Logistics Optimization Engine",
      description:
        "The interesting part wasn't the CRUD — it was fitting Dijkstra and A* into a system with real constraints: vehicle capacity, deadlines, multi-stop ordering. Redis caches repeated route queries so nothing recomputes from scratch. MySQL keeps fleet and order state across sessions.",
      tags: ["Express", "TypeScript", "MySQL", "React", "Graph Algorithms"],
      caseStudyUrl: "https://routeopt-optimizer.netlify.app/",
      sourceUrl: "https://github.com/youssi12/Routeopt",
      visual: "orange",
    },
    {
      id: "004",
      year: "2025",
      title: "MovieApp",
      description:
        "A clean frontend project — search, browse, save. Good exercise in thinking purely in components and keeping state from turning into a mess. Nothing groundbreaking, but everything works exactly the way it should.",
      tags: ["React", "JavaScript", "Tailwind"],
      caseStudyUrl: "https://movie-app-netify.netlify.app/",
      sourceUrl: "https://github.com/youssi12/MovieApp",
      visual: "blue",
    },
    {
      id: "005",
      year: "2024",
      title: "Sweet Crumbs",
      description:
        "A bakery storefront — warm, unhurried, a little indulgent. First project where I really thought about how a site should feel, not just what it should do.",
      tags: ["React", "Tailwind"],
      caseStudyUrl: "https://yousra-sweet-crumbs.netlify.app",
      sourceUrl: "https://github.com/youssi12/sweet-crumbs",
      visual: "pink",
    },
    {
      id: "006",
      year: "2024",
      title: "Restaurant — L'Ambre",
      description:
        "A restaurant site built to feel like the place itself: unhurried, considered, a bit atmospheric. Focused on getting the typography and spacing right so the food could do the talking.",
      tags: ["React", "Tailwind"],
      caseStudyUrl: "https://lambre.netlify.app/",
      sourceUrl: "https://github.com/youssi12/Restaurant",
      visual: "green",
    },
  ],

  // ── Journey / timeline ───────────────────────────────────
  journey: [
    {
      year: "2023",
      title: "Web foundations",
      text: "HTML, CSS, JavaScript. Learned how the browser thinks, how pages are built, and why things break in weird ways when you ignore the box model.",
    },
    {
      year: "2024",
      title: "First real backend",
      text: "Built a platform connecting developers, recruiters, and companies. First time I had to think seriously about auth, data relationships, and what happens when two users hit the same endpoint at once.",
    },
    {
      year: "2025",
      title: "Algorithms & React",
      text: "Picked up React properly and started thinking in components. Also fell into graph algorithms — Dijkstra, A*, the whole rabbit hole. Turns out they're useful outside of interviews.",
    },
    {
      year: "2026",
      title: "Full-stack, start to finish",
      text: "Shipped a complete system on my own — frontend, backend, database. The kind of project where you're responsible for every layer and there's nobody else to blame when something breaks at 2am.",
    },
  ],

  // ── Services / commissions ───────────────────────────────
  services: [
    {
      number: "01",
      title: "API Design & Build",
      description:
        "REST or GraphQL, properly documented, versioned from day one. The kind of API another developer can pick up without having to call you.",
    },
    {
      number: "02",
      title: "Database Architecture",
      description:
        "Schema design, indexing, migrations. Getting this right at the start saves six months of slow queries and painful refactors later.",
    },
    {
      number: "03",
      title: "Full-stack Delivery",
      description:
        "Frontend, backend, deployment — one person, one coherent system. No handoff friction, no 'that's not my part' conversations.",
    },
    {
      number: "04",
      title: "Code Audit & Refactor",
      description:
        "I read the codebase as it actually is, find what's going to cause problems, and fix it quietly. No rewrites for the sake of rewrites.",
    },
  ], 
  contact: {
    headline: ["Have something", "worth building?", "Let's talk."],
    sub: "A quiet API, a stubborn database problem, or a full product from scratch — send a note. I read everything and reply to all of it.",
  },
};