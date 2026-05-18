import { motion } from 'framer-motion'
import { ArrowDown, BookOpen, Lightbulb, Mail, Linkedin, Github, Instagram } from 'lucide-react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Data Projects', href: '#data-projects' },
  { label: 'Creative & PR', href: '#creative-pr' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

const dataProjects = [
  {
    title: 'Social Media Addiction Classification',
    description: [
      'Multiclass classification comparing Random Forest and XGBoost.',
      '10-fold cross-validation, confusion matrix analysis, and evaluation metrics.',
      'End-to-end machine learning pipeline from preprocessing to model comparison.',
    ],
    tags: ['Python', 'Random Forest', 'XGBoost', 'Machine Learning'],
  },
  {
    title: 'Tableau Life Expectancy Analysis',
    description: ['Interactive dashboard analyzing life expectancy patterns using visualization and socio-economic indicators.'],
    tags: ['Tableau', 'Dashboard', 'Visualization'],
  },
  {
    title: 'Maxim UX Analysis',
    description: ['Analyzed usability flow, payment experience, and interaction pain points to propose more human-centered product improvements.'],
    tags: ['Figma', 'UX', 'Product Analysis'],
  },
  {
    title: 'Hotel Management System Database Design',
    description: ['Designed relational database schema, key constraints, and normalization strategy for hotel management operations.'],
    tags: ['Database', 'CDM', 'PDM', 'SQL'],
  },
]

const creativeProjects = [
  {
    title: 'HMP Sains Data Unesa',
    role: 'Head of Public Relations Division',
    description: 'Managed public communication, copywriting, media publication, and event coordination for student organization programs.',
  },
  {
    title: 'Banacle',
    description: 'Sustainability branding and product innovation project utilizing banana peel waste as part of circular economy implementation.',
  },
  {
    title: 'Wirausaha Merdeka Batch 3',
    description: 'Developed sustainable business ideas and collaborated in entrepreneurship-based innovation projects.',
  },
]

const skillGroups = {
  'Data & Analytics': ['Python', 'R', 'SQL', 'Tableau', 'Looker Studio'],
  'Creative Tools': ['Canva', 'Figma', 'Microsoft Office'],
  Communication: ['Public Speaking', 'Copywriting', 'Stakeholder Communication'],
  Leadership: ['Team Leadership', 'Project Coordination', 'Adaptability'],
}

const fadeUp = { hidden: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.25 }, transition: { duration: 0.6 } }

const Pill = ({ children, filled = false }) => (
  <span className={`rounded-full px-4 py-2 text-sm font-medium ${filled ? 'bg-accent text-cream' : 'bg-white/70 border border-accent text-mediumBrown'}`}>
    {children}
  </span>
)

export default function App() {
  return (
    <div className="min-h-screen bg-background text-darkBrown">
      <header className="sticky top-0 z-50 border-b border-[#d9c4a6]/50 bg-[#fffaf2cc] backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <p className="font-serif text-lg md:text-xl">Dian Ayu Fauziah</p>
          <ul className="hidden md:flex gap-6 text-sm text-mediumBrown">
            {navItems.map((item) => <li key={item.label}><a href={item.href} className="hover:text-darkBrown transition">{item.label}</a></li>)}
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className="relative min-h-[calc(100vh-4.5rem)] flex items-center px-6 py-20 overflow-hidden bg-gradient-to-b from-[#fffaf2] via-[#f7ecd9] to-background">
          <div className="absolute -top-16 -left-12 h-64 w-64 rounded-full bg-[#f0d9b8]/45 blur-3xl" />
          <div className="absolute -bottom-10 right-0 h-60 w-60 rounded-full bg-[#e2c5a9]/35 blur-3xl" />
          <motion.div {...fadeUp} className="relative mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full border border-[#d9c4a6] bg-white/70 px-4 py-2 text-sm text-mediumBrown shadow-soft">✨ Welcome to my portfolio</span>
            <h1 className="mt-6 font-serif text-5xl md:text-7xl text-darkBrown">Dian Ayu Fauziah</h1>
            <p className="mt-4 text-lg md:text-xl text-mediumBrown">Data Science Student | Public Relations Enthusiast | Creative Problem Solver</p>
            <p className="mt-2 text-sm md:text-base text-accent">Data Science • Universitas Negeri Surabaya</p>
            <p className="mt-6 max-w-2xl mx-auto text-mediumBrown">I combine analytical thinking, communication clarity, and creative strategy to solve meaningful problems.</p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <a href="#data-projects" className="rounded-full bg-darkBrown px-7 py-3 text-sm text-cream shadow-soft transition hover:-translate-y-0.5">View Data Projects</a>
              <a href="#creative-pr" className="rounded-full border border-[#ceb18c] bg-white/80 px-7 py-3 text-sm text-darkBrown shadow-soft transition hover:-translate-y-0.5">View Creative & PR Works</a>
            </div>
            <div className="mt-10 flex flex-col items-center text-mediumBrown/70">
              <ArrowDown size={20} className="animate-bounce" />
            </div>
          </motion.div>
        </section>

        <section id="about" className="bg-[#fffaf2] px-6 py-20">
          <motion.div {...fadeUp} className="mx-auto max-w-6xl">
            <h2 className="text-center text-4xl font-bold">About Me</h2>
            <div className="mx-auto mt-3 h-1.5 w-20 rounded-full bg-[#7b6252]" />
            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              <div className="space-y-6">
                <div className="scrapbook-card bg-[#fff3e5] p-7"><p className="text-mediumBrown leading-relaxed">I am an adaptable undergraduate student majoring in Data Science, eager to contribute meaningfully as a Data Analyst. I possess the ability to collaborate effectively in teams and possess a strong desire to continuously learn and develop both hard and soft skills.</p></div>
                <article className="scrapbook-card bg-[#fff3e5] p-7"><BookOpen className="mb-3 text-accent"/><h3 className="font-serif text-2xl mb-2">Education</h3><p><b>Major:</b> Data Science</p><p><b>University:</b> Universitas Negeri Surabaya</p><p><b>GPA:</b> 3.75</p></article>
                <article className="scrapbook-card bg-[#fff3e5] p-7"><Lightbulb className="mb-3 text-accent"/><h3 className="font-serif text-2xl mb-2">My Approach</h3><p>Combining analytical thinking with creative problem-solving to deliver impactful solutions.</p></article>
              </div>
              <div className="scrapbook-card bg-[#fff3e5] p-7">
                <h3 className="font-serif text-2xl mb-4">Technical Skills</h3>
                <div className="mb-8 flex flex-wrap gap-3">{['Python', 'R', 'SQL', 'Tableau', 'Looker Studio', 'Microsoft Office', 'Canva', 'Figma'].map((s) => <Pill key={s} filled>{s}</Pill>)}</div>
                <h3 className="font-serif text-2xl mb-4">Soft Skills</h3>
                <div className="flex flex-wrap gap-3">{['Leadership', 'Public Speaking', 'Teamwork', 'Adaptability', 'Communication', 'Problem Solving', 'Critical Thinking'].map((s) => <Pill key={s}>{s}</Pill>)}</div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="data-projects" className="px-6 py-20">
          <div className="mx-auto max-w-6xl"><h2 className="font-serif text-4xl mb-10">Data Science & Tech</h2><div className="grid gap-6 md:grid-cols-2">{dataProjects.map((p) => <motion.article {...fadeUp} key={p.title} className="scrapbook-card bg-[#fffaf2] p-6"><h3 className="font-serif text-2xl mb-3">{p.title}</h3><ul className="list-disc list-inside text-mediumBrown space-y-1 mb-4">{p.description.map((d) => <li key={d}>{d}</li>)}</ul><div className="flex flex-wrap gap-2">{p.tags.map((t) => <Pill key={t}>{t}</Pill>)}</div></motion.article>)}</div></div>
        </section>

        <section id="creative-pr" className="px-6 py-20 bg-[#fffaf2]">
          <div className="mx-auto max-w-6xl"><h2 className="font-serif text-4xl mb-10">Creative & PR</h2><div className="grid gap-6 md:grid-cols-3">{creativeProjects.map((p) => <motion.article {...fadeUp} key={p.title} className="scrapbook-card bg-[#fff3e5] p-6"><h3 className="font-serif text-2xl mb-2">{p.title}</h3>{p.role && <p className="text-sm font-semibold text-accent mb-2">{p.role}</p>}<p className="text-mediumBrown leading-relaxed">{p.description}</p></motion.article>)}</div></div>
        </section>

        <section id="skills" className="px-6 py-20">
          <div className="mx-auto max-w-6xl"><h2 className="font-serif text-4xl mb-10">Skills</h2><div className="grid md:grid-cols-2 gap-6">{Object.entries(skillGroups).map(([g, items]) => <motion.div {...fadeUp} key={g} className="scrapbook-card bg-[#fffaf2] p-6"><h3 className="font-semibold text-xl mb-4">{g}</h3><div className="flex flex-wrap gap-2">{items.map((i) => <Pill key={i}>{i}</Pill>)}</div></motion.div>)}</div></div>
        </section>

        <section id="contact" className="px-6 py-20 bg-darkBrown text-cream">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-serif text-4xl md:text-5xl">Let’s Build Meaningful Projects Together.</h2>
            <div className="mt-8 flex flex-wrap justify-center gap-5 text-sm">
              <a className="inline-flex items-center gap-2 hover:opacity-80" href="mailto:dianayu@example.com"><Mail size={16}/>Email</a>
              <a className="inline-flex items-center gap-2 hover:opacity-80" href="#"><Linkedin size={16}/>LinkedIn</a>
              <a className="inline-flex items-center gap-2 hover:opacity-80" href="#"><Github size={16}/>GitHub</a>
              <a className="inline-flex items-center gap-2 hover:opacity-80" href="#"><Instagram size={16}/>Instagram</a>
            </div>
            <button className="mt-8 rounded-full bg-[#fffaf2] px-7 py-3 text-darkBrown shadow-soft transition hover:-translate-y-0.5">Download CV</button>
          </div>
        </section>
      </main>

      <footer className="bg-darkBrown/95 py-6 text-center text-xs text-cream/85">© 2026 Dian Ayu Fauziah — Multidisciplinary Portfolio</footer>
    </div>
  )
}
