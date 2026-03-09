export interface Startup {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  foundedYear: number;
  founders: string;
  founderTitle: string;
  founderStory: string;
  location: string;
  website: string;
  email: string;
  stage: string;
  image: string;
  featured?: boolean;
}

export const categories = [
  { name: "AI", icon: "🤖", count: 2 },
  { name: "Climate", icon: "🌱", count: 2 },
  { name: "HealthTech", icon: "🏥", count: 2 },
  { name: "EdTech", icon: "📚", count: 1 },
  { name: "Fintech", icon: "💳", count: 1 },
  { name: "Consumer", icon: "🛍️", count: 1 },
  { name: "B2B SaaS", icon: "⚙️", count: 1 },
  { name: "Design", icon: "🎨", count: 0 },
  { name: "DevTools", icon: "🛠️", count: 0 },
  { name: "Logistics", icon: "📦", count: 0 },
  { name: "Social", icon: "💬", count: 0 },
  { name: "Security", icon: "🔒", count: 0 },
];

export const startups: Startup[] = [
  {
    id: "verdant",
    name: "Verdant",
    tagline: "Turning carbon data into actionable net-zero roadmaps",
    description: "Verdant is building the operating system for corporate sustainability. Our platform ingests emissions data across Scope 1, 2, and 3, then uses proprietary ML models to generate actionable decarbonization roadmaps tailored to each company's industry, supply chain, and growth targets. We help enterprises move from pledges to measurable progress.",
    category: "Climate",
    foundedYear: 2023,
    founders: "Elena Torres",
    founderTitle: "CEO & Co-founder",
    founderStory: "After spending 8 years in environmental consulting, I realized that most companies genuinely want to reduce emissions but lack the tools to translate ambition into action. Verdant was born from that gap — we make sustainability strategy as rigorous and data-driven as financial planning.",
    location: "San Francisco, CA",
    website: "https://verdant.earth",
    email: "hello@verdant.earth",
    stage: "Seed",
    image: "verdant",
    featured: true,
  },
  {
    id: "medlink",
    name: "MedLink",
    tagline: "Connecting rural patients to specialist care in 60 seconds",
    description: "MedLink bridges the healthcare access gap by connecting patients in underserved areas with board-certified specialists via instant telemedicine consultations. Our platform integrates with local clinics and pharmacies to enable end-to-end care delivery, from diagnosis to prescription fulfillment.",
    category: "HealthTech",
    foundedYear: 2022,
    founders: "Dr. Priya Sharma",
    founderTitle: "CEO & Founder",
    founderStory: "Growing up in rural India, I saw firsthand how distance from quality healthcare cost lives. After completing my residency in the US, I built MedLink to ensure that geography never determines health outcomes. Every patient deserves specialist care.",
    location: "Boston, MA",
    website: "https://medlink.health",
    email: "team@medlink.health",
    stage: "Series A",
    image: "medlink",
    featured: true,
  },
  {
    id: "skillbridge",
    name: "SkillBridge",
    tagline: "Micro-credentials that employers actually trust",
    description: "SkillBridge partners with industry leaders to create verified, stackable micro-credentials that map directly to in-demand job skills. Unlike traditional certifications, our credentials are co-designed with hiring managers and continuously updated to reflect real workplace needs.",
    category: "EdTech",
    foundedYear: 2023,
    founders: "Marcus Johnson",
    founderTitle: "CEO & Co-founder",
    founderStory: "As a hiring manager at a Fortune 500 company, I saw resumes full of certifications that told me nothing about a candidate's actual abilities. SkillBridge was built to fix this — creating credentials that both learners and employers can truly trust.",
    location: "Austin, TX",
    website: "https://skillbridge.io",
    email: "info@skillbridge.io",
    stage: "Pre-seed",
    image: "skillbridge",
    featured: true,
  },
  {
    id: "flowpay",
    name: "FlowPay",
    tagline: "Instant cross-border payroll for remote teams",
    description: "FlowPay simplifies global payroll by enabling companies to pay remote workers in 150+ countries with local currency, instant settlement, and full compliance. No more wire transfer delays, currency conversion headaches, or compliance nightmares.",
    category: "Fintech",
    foundedYear: 2022,
    founders: "Alex Chen & Maria Lopez",
    founderTitle: "Co-founders",
    founderStory: "Running a remote-first startup ourselves, we experienced the pain of paying team members across 12 countries. Banks took days, fees were opaque, and compliance was a nightmare. FlowPay is the payroll tool we wished existed.",
    location: "New York, NY",
    website: "https://flowpay.co",
    email: "hello@flowpay.co",
    stage: "Series A",
    image: "flowpay",
    featured: true,
  },
  {
    id: "lumosai",
    name: "Lumos AI",
    tagline: "Visual AI that reads your brand and writes on-brand copy",
    description: "Lumos AI analyzes your existing brand assets — logos, websites, social posts, ads — and learns your unique voice, tone, and visual language. It then generates perfectly on-brand marketing copy, social captions, and ad creative that feels authentically yours.",
    category: "AI",
    foundedYear: 2024,
    founders: "Sarah Kim",
    founderTitle: "CEO & Founder",
    founderStory: "As a brand strategist, I watched AI tools generate generic copy that sounded like everyone else. Lumos was born from the belief that AI should amplify a brand's unique voice, not flatten it into sameness.",
    location: "Los Angeles, CA",
    website: "https://lumosai.com",
    email: "hello@lumosai.com",
    stage: "Pre-seed",
    image: "lumosai",
  },
  {
    id: "shelflife",
    name: "ShelfLife",
    tagline: "Subscription boxes curated by independent bookshops",
    description: "ShelfLife connects book lovers with independent bookshops around the world through curated monthly subscription boxes. Each box is hand-picked by a different indie bookshop, featuring their favorite reads, local treats, and a personal note from the bookseller.",
    category: "Consumer",
    foundedYear: 2023,
    founders: "Jamie O'Brien",
    founderTitle: "Founder",
    founderStory: "I fell in love with indie bookshops while traveling and wanted to share that magic with people everywhere. ShelfLife lets you experience the joy of discovery from the world's best independent booksellers, delivered to your door.",
    location: "Portland, OR",
    website: "https://shelflife.co",
    email: "books@shelflife.co",
    stage: "Seed",
    image: "shelflife",
  },
  {
    id: "gridbase",
    name: "GridBase",
    tagline: "The ops platform built for lean startup teams",
    description: "GridBase combines project management, team communication, resource planning, and lightweight CRM into a single platform designed specifically for startups with teams of 5-50. No bloat, no enterprise complexity — just the tools lean teams actually need.",
    category: "B2B SaaS",
    foundedYear: 2023,
    founders: "David Park",
    founderTitle: "CEO & Co-founder",
    founderStory: "After my third startup, I was tired of stitching together 8 different tools just to run a small team. GridBase is the all-in-one ops platform I built because I needed it — and so does every other lean startup out there.",
    location: "Seattle, WA",
    website: "https://gridbase.io",
    email: "team@gridbase.io",
    stage: "Seed",
    image: "gridbase",
  },
  {
    id: "canopy",
    name: "Canopy",
    tagline: "Urban tree-planting logistics, managed end-to-end",
    description: "Canopy provides cities and organizations with a complete urban reforestation platform — from species selection and site assessment to planting logistics and long-term maintenance tracking. We make it easy to green cities at scale.",
    category: "Climate",
    foundedYear: 2024,
    founders: "Liam Foster",
    founderTitle: "CEO & Founder",
    founderStory: "Working in urban planning, I saw how cities struggled to execute tree-planting programs despite having the funding and desire. Canopy removes the logistical barriers so cities can focus on what matters — building greener, cooler, healthier communities.",
    location: "Denver, CO",
    website: "https://canopy.green",
    email: "hello@canopy.green",
    stage: "Pre-seed",
    image: "canopy",
  },
  {
    id: "helix",
    name: "Helix",
    tagline: "At-home diagnostics with same-day lab-quality results",
    description: "Helix brings laboratory-grade diagnostic testing to your home. Our compact testing device and smartphone app deliver results for 40+ biomarkers in under an hour, with accuracy that matches clinical labs. No appointments, no waiting rooms, no delays.",
    category: "HealthTech",
    foundedYear: 2023,
    founders: "Dr. Rachel Wang",
    founderTitle: "CEO & Co-founder",
    founderStory: "As an ER physician, I saw patients arrive with conditions that could have been caught months earlier with routine testing. Helix makes diagnostic testing as convenient as checking your phone — because early detection saves lives.",
    location: "San Diego, CA",
    website: "https://helix.health",
    email: "info@helix.health",
    stage: "Series A",
    image: "helix",
  },
];

export const getStartupsByCategory = (category: string) =>
  startups.filter((s) => s.category === category);

export const getFeaturedStartups = () =>
  startups.filter((s) => s.featured);

export const getStartupById = (id: string) =>
  startups.find((s) => s.id === id);
