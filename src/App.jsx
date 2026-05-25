import { useState } from 'react'
// import hmpsains from './assets/humas.jpg'
// import pkkmb from './assets/banacle.jpg'
// import wm from './assets/wmk.jpg'
import hmpImage from './assets/humas2.jpeg'
import wmImage from './assets/wmk all.jpeg'
import banacleImage from './assets/banacle2.jpeg'
import { motion } from 'framer-motion'
import { ArrowDown, BookOpen, Lightbulb, Mail, Linkedin, Github, Instagram, Award, MapPin, Calendar, Sparkles, Users } from 'lucide-react'
import dianPortrait from './assets/aku.png'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Data Projects', href: '#data-projects' },
  { label: 'Creative & PR', href: '#creative-pr' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

const dataProjects = [
  {
    id: 1,
    title: 'Social Media Addiction Classification',
    category: 'Machine Learning Research',
    description:
      'Classification model comparing Random Forest and XGBoost using three train-test split scenarios and 10-fold Cross Validation to predict social media addiction patterns.',
    tags: ['Python', 'Machine Learning', 'Random Forest', 'XGBoost', 'Social Media', 'Addiction'],
    image:
      'https://media.istockphoto.com/id/1292258619/id/foto/pemuda-memiliki-mata-yang-sakit-dan-lelah-saat-menggunakan-smartphone-saat-berbaring-di-tempat.webp?a=1&b=1&s=612x612&w=0&k=20&c=YevtZ0y1KXkMdNDxq9Lkqk7ASdmOZ8dnMQp2B8gVoUM=',
    details:
      'Focused on multiclass classification and behavioral pattern analysis using mental health and user activity indicators.',
    status: 'In Progres',
  },

  {
    id: 2,
    title: 'Sentiment Analysis through Twitter Data Collection on the Palestine-Israel Conflict',
    category: 'Sentiment Analysis',
    description:
      'Sentiment analysis surrounding the Palestine-Israel conflict by leveraging the Support Vector Machine (SVM) algorithm',
    tags: ['Sentiment Analysis', 'SVM', 'Israel', 'Palestine'],
    image:
      'https://plus.unsplash.com/premium_photo-1708038152579-f7d74634faa5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBhbGVzdGluZSUyMGlzcmFlbHxlbnwwfHwwfHx8MA%3D%3D',
    details:
      'Analyzed relationships between life expectancy, smoking rates, and unmet health needs.',
  },
  
  // {
  //   id: 2,
  //   title: 'Life Expectancy Analysis Indonesia 2020–2022',
  //   category: 'Data Visualization',
  //   description:
  //     'Interactive Tableau dashboard analyzing life expectancy differences between males and females in Indonesia using BPS datasets.',
  //   tags: ['Tableau', 'Dashboard', 'Visualization', 'Statistical Analysis'],
  //   image:
  //     'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
  //   details:
  //     'Analyzed relationships between life expectancy, smoking rates, and unmet health needs.',
  // },

  {
    id: 3,
    title: 'Sentiment Analysis of Kartu Indonesia Pintar Kuliah (KIPK) Recipients from Tweets on Platform X',
    category: 'Data Mining',
    description:
      'Collected data from X platforms and used various sentiment analysis methods to gain deep insight into public opinion.',
    tags: ['Sentiment analysis', 'NLP', 'Data Mining', 'KIPK'],
    image:
      'data:image/jpeg;base64,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',
    details:
      'The analysis process includes exploring positive, negative, and neutral sentiments, as well as identifying the main topic that are often discussed related to the program.',
  },

  // {
  //   id: 4,
  //   title: 'Hotel Management Database System',
  //   category: 'Database Design',
  //   description:
  //     'Designed relational database architecture for hotel management operations using Microsoft Access.',
  //   tags: ['Database', 'MS Access', 'CDM', 'PDM'],
  //   image:
  //     'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop',
  //   details:
  //     'Developed conceptual and physical data models for operational efficiency and reservation management.',
  // },
]

// const dataProjects = [
//   {
//     id: 1,
//     title: "COMPARATIVE ANALYSIS OF RANDOM FOREST AND XGBOOST MODELS FOR SOCIAL MEDIA ADDICTION LEVEL CLASSIFICATION",
//     category: "Skripsi/Thesis",
//     description: "A comparative machine learning study using Random Forest and XGBoost with three train-test split scenarios and 10-fold cross-validation to classify social media addiction levels.",
//     tags: ["Python", "Machine Learning", "Random Forest", "XGBoost", "Cross Validation", "Social Media Addiction"],
//     image: "https://images.pexels.com/photos/8088493/pexels-photo-8088493.jpeg",
//     details: "Multiclass classification project for social media addiction level prediction.",
//     status: "In Progress"
//   },
//   {
//     id: 2,
//     title: "Life Expectancy Analysis Indonesia 2020-2022",
//     category: "Data Visualization",
//     description: "Visualization and analysis of life expectancy between males and females in Indonesia using Tableau based on BPS data.",
//     tags: ["Tableau", "Data Visualization", "Statistical Analysis", "BPS Data"],
//     image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
//     details: "Key finding: female life expectancy is higher than male life expectancy across the analyzed period."
//   },
//   {
//     id: 3,
//     title: "Maxim Application UI/UX Optimization",
//     category: "UI/UX Analysis",
//     description: "Analysis of Maxim application reviews to improve user satisfaction through payment feature optimization using Figma.",
//     tags: ["Figma", "UI/UX Design", "User Research", "Payment Systems"],
//     image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80",
//     details: "Focused on improving the payment feature user experience."
//   },
//   {
//     id: 4,
//     title: "Hotel Management System",
//     category: "Database Design",
//     description: "Hotel management system database design using Microsoft Access, including CDM and PDM.",
//     tags: ["MS Access", "Database Design", "CDM", "PDM", "Data Modeling"],
//     image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
//     details: "Database architecture for hotel operational management."
//   },
//   {
//     id: 5,
//     title: "Customer Segmentation using K-Means",
//     category: "Machine Learning",
//     description: "Analysis of customer shopping behavior segmentation using the K-Means clustering algorithm.",
//     tags: ["Python", "Clustering", "K-Means", "Data Mining"],
//     image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
//     details: "Grouped customers based on shopping behavior patterns."
//   },
//   {
//     id: 6,
//     title: "Sentiment Analysis on Social Media",
//     category: "Natural Language Processing",
//     description: "Sentiment analysis using social media data collected from Twitter/X.",
//     tags: ["Python", "NLP", "Sentiment Analysis", "Twitter/X"],
//     image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
//     details: "Analyzed public sentiment from social media text data."
//   }
// ]

const experiences = [
  {
    id: 1,
    title: 'Data Analyst Intern',
    company: 'SEAL — Social Economic Accelerator Lab',
    location: 'Malang, Indonesia',
    period: 'Feb 2025 – Present',
    vibe: 'Turning public service data into meaningful dashboard insights.',
    description:
      'Supported the development of MajaDigi Super App through data collection, ETL processing, and executive dashboard preparation.',
    highlights: ['MajaDigi Super App', 'AWS Glue', 'BPS Data', 'Executive Dashboard'],
  },
  {
    id: 2,
    title: 'Statistical Data Analyst Intern',
    company: 'East Java Provincial Department of Communication and Informatics',
    location: 'Surabaya, Indonesia',
    period: 'Mar 2025 – Jun 2025',
    vibe: 'Using data to support digital transformation in public services.',
    description:
      'Contributed to statistical analysis and data-driven solutions for government digital service improvement.',
    highlights: ['Public Service Data', 'Statistical Analysis', 'Digital Policy', 'AI-Powered System'],
  },
]


const organizationProjects = [
  {
    id: 1,
    title: 'Head of Public Relations Division',
    organization: 'HMP Sains Data Unesa',
    image: hmpImage,
    period: 'Mar 2024 – Feb 2025',
    description:
      'Led public relations initiatives, managed organizational communication, created compelling copy, and coordinated publication needs for student association programs.',

    tags: ['Leadership', 'Communication', 'Event Management', 'Copywriting'],
  },
  {
    id: 2,
    title: 'Wirausaha Merdeka Batch 3',
    organization: 'Entrepreneurship Program',
    image: wmImage,
    period: 'Sep 2024 – Dec 2024',
    description:
      'Participated in an entrepreneurial development program focused on sustainable business models, eco-friendly product development, and practical business implementation.',

    tags: ['Entrepreneurship', 'Sustainability', 'Business Development', 'Innovation'],
  },
  {
    id: 3,
    title: 'Banacle - Eco-Friendly Soap Innovation',
    organization: 'Sustainability Project',
    image: banacleImage,
    period: '2024',
    description:
      'Developed Banacle, an innovative eco-friendly soap product made from banana peel waste as part of circular economy implementation.',

    tags: ['Sustainability', 'Product Innovation', 'Branding', 'Eco-Friendly'],
    highlight: true,
  },
]

const skillGroups = {
  Programming: ['Python (Advanced)', 'SQL (Advanced)', 'R (Intermediate)'],
  'Data Visualization': ['Tableau', 'Looker Studio', 'Power BI', 'Google Colab'],
  Design: ['Canva', 'Figma'],
  Productivity: ['Excel', 'Word', 'Access', 'Google Forms', 'Google Sheets', 'Google Docs'],
  Languages: ['Indonesian (Fluent)', 'English (Intermediate)', 'Arabic (Intermediate)'],
}

const certifications = [
  { title: 'Data Analysis with Python', issuer: 'FreeCodeCamp', year: '2025' },
  { title: 'Student Developer Initiative', issuer: 'IBM SkillsBuild', year: '2025' },
  { title: 'Google Cloud Roadshow Surabaya', issuer: 'Google Cloud', year: '2025' },
  { title: 'BISA AI Certification', issuer: 'BISA AI', year: '2025' },
]

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55 },
}
const Pill = ({ children, filled = false }) => (
  <span className={`rounded-full px-4 py-2 text-sm font-medium ${filled ? 'bg-accent text-cream' : 'bg-white/70 border border-accent text-mediumBrown'}`}>
    {children}
  </span>
)

const CertificationStack = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextCert = () => {
    setActiveIndex((prev) => (prev + 1) % certifications.length)
  }

  const prevCert = () => {
    setActiveIndex((prev) =>
      prev === 0 ? certifications.length - 1 : prev - 1
    )
  }

  const activeCert = certifications[activeIndex]

  return (
    <div className="grid items-center gap-10 lg:grid-cols-2">
      <div className="relative mx-auto h-[340px] w-full max-w-md">
        {certifications.map((cert, index) => {
          const offset = index - activeIndex
          const isActive = index === activeIndex

          return (
            <motion.div
              key={cert.title}
              onClick={() => setActiveIndex(index)}
              animate={{
                x: isActive ? 0 : offset > 0 ? 24 * offset : -24,
                y: isActive ? 0 : 18 * Math.abs(offset),
                rotate: isActive ? 0 : offset * 4,
                scale: isActive ? 1 : 0.92,
                opacity: isActive ? 1 : 0.45,
                zIndex: isActive ? 20 : certifications.length - Math.abs(offset),
              }}
              transition={{ duration: 0.35 }}
              className="absolute inset-0 cursor-pointer rounded-[2rem] border border-[#d7c2b0] bg-white p-8 shadow-soft"
            >
              <div className="flex h-full flex-col justify-between">
                <div>
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f3e6e0] text-2xl">
                    🏅
                  </div>

                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#7b1e3a]">
                    Certificate
                  </p>

                  <h3 className="mt-4 font-serif text-3xl text-[#1f2a44]">
                    {cert.title}
                  </h3>

                  <p className="mt-3 text-lg font-semibold text-[#7b1e3a]">
                    {cert.issuer}
                  </p>
                </div>

                <div className="flex items-end justify-between">
                  <span className="rounded-full bg-[#f8efe3] px-4 py-2 text-sm text-[#1f2a44]">
                    {cert.year}
                  </span>

                  <span className="text-sm text-mediumBrown">
                    {activeIndex + 1} / {certifications.length}
                  </span>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      <div>
        <h3 className="font-serif text-4xl text-[#1f2a44]">
          {activeCert.title}
        </h3>

        <p className="mt-3 text-xl font-semibold text-[#7b1e3a]">
          {activeCert.issuer}
        </p>

        <p className="mt-5 leading-relaxed text-mediumBrown">
          This certification reflects my continuous learning journey and
          supports my professional growth in data science, analytics, and
          technology.
        </p>

        <div className="mt-8 flex gap-3">
          <button
            type="button"
            onClick={prevCert}
            className="rounded-full border border-[#7b1e3a]/30 bg-white px-5 py-3 text-sm font-semibold text-[#7b1e3a] transition hover:-translate-y-1"
          >
            ← Previous
          </button>

          <button
            type="button"
            onClick={nextCert}
            className="rounded-full bg-[#1f2a44] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-1"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  )
}

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
        <section
  id="home"
  className="relative min-h-[calc(100vh-4.5rem)] overflow-hidden px-6 py-24 bg-gradient-to-br from-[#f8f5f2] via-[#f3e6e0] to-[#efe4d1]"
>
  <div className="absolute left-10 top-24 h-64 w-64 rounded-full bg-[#7b1e3a]/10 blur-3xl" />
  <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-[#1f2a44]/10 blur-3xl" />

  <motion.div
    {...fadeUp}
    className="relative z-10 mx-auto flex min-h-[75vh] max-w-5xl flex-col items-center justify-center text-center"
  >
    <span className="inline-flex items-center gap-2 rounded-full border border-[#7b1e3a]/20 bg-white/70 px-5 py-2 text-sm font-medium text-[#7b1e3a] shadow-soft">
      ✨ Welcome to my portfolio
    </span>

    <h1 className="mt-8 max-w-4xl text-5xl font-bold tracking-tight text-[#1f2a44] md:text-7xl">
      Dian Ayu Fauziah
    </h1>

    <p className="mt-6 max-w-3xl text-xl leading-relaxed text-mediumBrown md:text-2xl">
      Data Science Student | Public Relations Enthusiast
    </p>

    <p className="mt-5 text-base font-medium text-[#7b1e3a]">
      Data Science • State University of Surabaya
    </p>


    <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
      <a
        href="#data-projects"
        className="rounded-full bg-[#1f2a44] px-8 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-1 hover:bg-[#283a5f]"
      >
        View Data Projects →
      </a>

      <a
        href="#creative-pr"
        className="rounded-full border border-[#7b1e3a]/40 bg-white/70 px-8 py-3 text-sm font-semibold text-[#7b1e3a] shadow-soft transition hover:-translate-y-1 hover:bg-white"
      >
        View Creative & PR Works →
      </a>
    </div>

    <a
      href="#about"
      className="mt-12 flex h-10 w-6 items-start justify-center rounded-full border-2 border-[#7b1e3a]/30 p-1"
      aria-label="Scroll to about section"
    >
      <span className="h-2 w-2 animate-bounce rounded-full bg-[#7b1e3a]" />
    </a>
  </motion.div>
</section>

        <section
  id="about"
  className="px-6 py-24 bg-gradient-to-br from-[#f8f5f2] via-[#f3e6e0] to-[#efe4d1]"
>
  <div className="mx-auto max-w-7xl">
    <div className="mb-14 text-center">
      <span className="inline-flex rounded-full border border-[#7b1e3a]/20 bg-white/60 px-4 py-2 text-sm font-medium text-[#7b1e3a]">
        About Me
      </span>

      <h2 className="mt-5 font-serif text-4xl md:text-5xl text-[#1f2a44]">
        Analytical Mind, Creative Communication.
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-mediumBrown">
        I combine data, storytelling, and communication strategy to turn complex information into meaningful insights.
      </p>
    </div>

    <div className="grid gap-8 lg:grid-cols-5">
      <motion.article
        {...fadeUp}
        className="overflow-hidden rounded-3xl border border-[#eadbc8] bg-white/85 shadow-soft lg:col-span-3"
      >
        <div className="grid gap-0 md:grid-cols-5">
          <div className="flex min-h-[300px] items-center justify-center bg-gradient-to-br from-[#1f2a44] via-[#7b1e3a] to-[#d9c7b8] p-8 text-white md:col-span-2">
            <div className="text-center">
              <p className="font-serif text-5xl">D</p>
              <p className="mt-3 text-sm uppercase tracking-[0.25em] text-white/80">
                Data & PR
              </p>
            </div>
          </div>

          <div className="p-7 md:col-span-3 md:p-9">
            <h3 className="font-serif text-3xl text-[#1f2a44]">
              Who I Am
            </h3>

            <p className="mt-4 leading-relaxed text-mediumBrown">
              I am an undergraduate Data Science student at State University of Surabaya with interests in data processing, machine learning, visualization, and public communication.
            </p>

            <p className="mt-4 leading-relaxed text-mediumBrown">
              My portfolio reflects two connected paths: technical problem-solving through data projects and creative communication through public relations, branding, and sustainability-based initiatives.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-[#f8efe3] px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#7b1e3a]">
                  Major
                </p>
                <p className="mt-1 font-medium text-[#1f2a44]">
                  Data Science
                </p>
              </div>

              <div className="rounded-2xl bg-[#f8efe3] px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#7b1e3a]">
                  University
                </p>
                <p className="mt-1 font-medium text-[#1f2a44]">
                  State University of Surabaya
                </p>
              </div>

              <div className="rounded-2xl bg-[#f8efe3] px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#7b1e3a]">
                  GPA
                </p>
                <p className="mt-1 font-medium text-[#1f2a44]">
                  3.66 / 4.00
                </p>
              </div>

              <div className="rounded-2xl bg-[#f8efe3] px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#7b1e3a]">
                  Focus
                </p>
                <p className="mt-1 font-medium text-[#1f2a44]">
                  Data • PR • Digital Product
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.article>

      <motion.aside
        {...fadeUp}
        className="rounded-3xl border border-[#eadbc8] bg-white/85 p-7 shadow-soft lg:col-span-2"
      >
        <h3 className="font-serif text-3xl text-[#1f2a44]">
          My Approach
        </h3>

        <p className="mt-4 italic text-[#7b1e3a]">
          “Turning data into insight, and insight into communication that people can understand.”
        </p>

        <div className="mt-7 space-y-4">
          <div className="rounded-2xl bg-[#f8efe3] p-4">
            <p className="font-semibold text-[#1f2a44]">
              Data Thinking
            </p>
            <p className="mt-1 text-sm leading-relaxed text-mediumBrown">
              I use data processing, visualization, and machine learning to understand patterns and support decision-making.
            </p>
          </div>

          <div className="rounded-2xl bg-[#f8efe3] p-4">
            <p className="font-semibold text-[#1f2a44]">
              Communication Clarity
            </p>
            <p className="mt-1 text-sm leading-relaxed text-mediumBrown">
              I enjoy translating ideas into clear messages through copywriting, public relations, and visual storytelling.
            </p>
          </div>

          <div className="rounded-2xl bg-[#f8efe3] p-4">
            <p className="font-semibold text-[#1f2a44]">
              Creative Impact
            </p>
            <p className="mt-1 text-sm leading-relaxed text-mediumBrown">
              I am interested in projects that connect technology, sustainability, and human-centered solutions.
            </p>
          </div>
        </div>
      </motion.aside>
    </div>
  </div>
</section>

        <section
  id="data-projects"
  className="px-6 py-24 bg-[#f8f5f2]"
>
  <div className="mx-auto max-w-7xl">
    <div className="mb-16 text-center">
      <span className="inline-flex rounded-full border border-[#7b1e3a]/20 bg-[#fff] px-4 py-2 text-sm font-medium text-[#7b1e3a]">
        Technical Portfolio
      </span>

      <h2 className="mt-5 font-serif text-4xl md:text-5xl text-[#1f2a44]">
        Data Science & Tech Projects
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-mediumBrown">
        Exploring analytics, visualization, machine learning, and digital product development through meaningful projects.
      </p>
    </div>

    <div className="grid gap-8 md:grid-cols-2">
      {dataProjects.map((project, index) => (
        <motion.article
          {...fadeUp}
          key={project.id}
          className="group overflow-hidden rounded-3xl border border-[#eadbc8] bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="relative overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

            {project.status && (
              <div className="absolute right-4 top-4 rounded-full bg-[#7b1e3a] px-3 py-1 text-xs font-semibold text-white">
                {project.status}
              </div>
            )}
          </div>

          <div className="p-7">
            <span className="rounded-full border border-[#7b1e3a]/20 px-3 py-1 text-xs text-[#7b1e3a]">
              {project.category}
            </span>

            <h3 className="mt-4 font-serif text-3xl text-[#1f2a44]">
              {project.title}
            </h3>

            <p className="mt-4 leading-relaxed text-mediumBrown">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[#f4e7d5] px-3 py-1 text-xs font-medium text-[#1f2a44]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-[#f8efe3] p-4">
              <p className="text-sm italic text-mediumBrown">
                {project.details}
              </p>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  </div>
</section>

        {/* <section id="creative-pr" className="px-6 py-20 bg-[#fffaf2]">
          <div className="mx-auto max-w-6xl"><h2 className="font-serif text-4xl mb-10">Creative & PR</h2><div className="grid gap-6 md:grid-cols-3">{organizationProjects.map((p) => <motion.article {...fadeUp} key={p.title} className="scrapbook-card bg-[#fff3e5] p-6"><h3 className="font-serif text-2xl mb-2">{p.title}</h3><p className="text-sm font-semibold text-accent mb-2">{p.role}</p><p className="text-mediumBrown leading-relaxed">{p.description}</p></motion.article>)}</div></div>
        </section> */}
        <section
  id="creative-pr"
  className="px-6 py-24 bg-gradient-to-b from-[#f8f5f2] to-[#efe4d1]"
>
  <div className="mx-auto max-w-6xl">
    <motion.div {...fadeUp} className="mb-20 text-center">
      <span className="inline-flex rounded-full border border-[#7b1e3a]/20 bg-white/70 px-5 py-2 text-sm font-medium text-[#7b1e3a] shadow-soft">
        ✨ Creative Portfolio
      </span>

      <h2 className="mt-6 font-serif text-5xl text-[#1f2a44]">
        Public Relations & Creative Work
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-mediumBrown">
        Combining communication, leadership, creativity, and strategic thinking
        through organizational and innovation-driven experiences.
      </p>
    </motion.div>

    <div className="space-y-10">
      {organizationProjects.map((work) => (
        <motion.article
          {...fadeUp}
          key={work.id}
          className={`group overflow-hidden rounded-[2rem] border border-[#d7c2b0] bg-white/70 shadow-soft backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl ${
            work.highlight ? 'ring-2 ring-[#7b1e3a]/30' : ''
          }`}
        >
          <div className="flex flex-col md:flex-row items-start">
            <div className="relative overflow-hidden md:w-[380px] flex-shrink-0">
              <img
                src={work.image}
                alt={work.title}
                className="w-full rounded-l-[2rem] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

              {work.highlight && (
                <div className="absolute left-4 top-4 rounded-full bg-[#7b1e3a] px-4 py-1 text-xs font-semibold text-white">
                  Featured Project
                </div>
              )}
            </div>

            <div className="p-8 md:col-span-2 md:p-10">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="font-serif text-4xl text-[#1f2a44] transition group-hover:text-[#7b1e3a]">
                    {work.title}
                  </h3>

                  <p className="mt-3 text-lg font-semibold text-[#7b1e3a]">
                    {work.organization}
                  </p>
                </div>

                <span className="rounded-full border border-[#7b1e3a]/30 px-4 py-2 text-sm text-[#7b1e3a]">
                  {work.period}
                </span>
              </div>

              <p className="mt-8 text-lg leading-relaxed text-mediumBrown">
                {work.description}
              </p>

<div className="mt-6 flex flex-wrap gap-3 text-sm">
  {work.tags.map((tag, idx) => (
    <span
      key={idx}
      className="rounded-full bg-[#f7edf0] px-4 py-2 text-[#7b1e3a]"
    >
      {tag}
    </span>
  ))}
</div>
              {/* <div className="mt-8">
                <h4 className="mb-4 text-lg font-semibold text-[#1f2a44]">
                  Key Contributions
                </h4>

                <ul className="space-y-3 text-mediumBrown">
                  {work.responsibilities.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div> */}

              {/* <div className="mt-8 flex flex-wrap gap-3">
                {work.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#f3e6e0] px-4 py-2 text-sm text-[#7b1e3a]"
                  >
                    {tag}
                  </span>
                ))}
              </div> */}
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  </div>
</section>

        <section className="px-6 py-24 bg-gradient-to-br from-[#f8f5f2] via-[#f3e6e0] to-[#efe4d1]" id="experience">
  <div className="mx-auto max-w-7xl">
    <div className="mb-14 text-center">
      <span className="inline-flex rounded-full border border-[#7b1e3a]/20 bg-white/60 px-4 py-2 text-sm font-medium text-[#7b1e3a]">
        Professional Journey
      </span>

      <h2 className="mt-5 font-serif text-4xl md:text-5xl text-[#1f2a44]">
        What I’ve Been Building
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-mediumBrown">
        Data, public service, and digital transformation experiences shaped through real projects.
      </p>
    </div>

    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <motion.article
          {...fadeUp}
          key={exp.id}
          className="overflow-hidden rounded-3xl border border-[#eadbc8] bg-white/85 shadow-soft transition hover:-translate-y-1 hover:shadow-xl"
        >
          <div className={`grid gap-0 md:grid-cols-5 ${index % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}>
            <div className="flex min-h-[260px] items-center justify-center bg-gradient-to-br from-[#1f2a44] via-[#7b1e3a] to-[#d9c7b8] p-8 text-white md:col-span-2">
              <div className="text-center">
                <p className="text-5xl font-bold">{index + 1}</p>
                <p className="mt-3 text-sm uppercase tracking-[0.25em] text-white/80">
                  Experience
                </p>
              </div>
            </div>

            <div className="p-7 md:col-span-3 md:p-9">
              <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl text-[#1f2a44]">
                    {exp.title}
                  </h3>

                  <p className="mt-2 font-semibold text-[#7b1e3a]">
                    {exp.company}
                  </p>
                </div>

                <span className="rounded-full border border-[#7b1e3a]/25 px-3 py-1 text-xs text-[#7b1e3a]">
                  {exp.period}
                </span>
              </div>

              <div className="mb-4 flex flex-wrap gap-4 text-sm text-mediumBrown">
                <span className="inline-flex items-center gap-1">
                  <MapPin size={14} />
                  {exp.location}
                </span>
              </div>

              <p className="mb-4 italic text-[#7b1e3a]">
                “{exp.vibe}”
              </p>

              <p className="leading-relaxed text-mediumBrown">
                {exp.description}
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {exp.highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-[#f8efe3] px-4 py-3 text-sm font-medium text-[#1f2a44]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  </div>
</section>

        <section
  id="skills"
  className="px-6 py-24 bg-gradient-to-b from-[#f8f5f2] to-[#efe4d1]"
>
  <div className="mx-auto max-w-6xl">

    {/* HEADER */}
    <motion.div
      {...fadeUp}
      className="mb-16 text-center"
    >
      <span className="inline-flex rounded-full border border-[#7b1e3a]/20 bg-white/70 px-5 py-2 text-sm font-medium text-[#7b1e3a] shadow-soft">
        ✨ Professional Skills
      </span>

      <h2 className="mt-6 font-serif text-5xl text-[#1f2a44]">
        Skills & Tools
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-lg text-mediumBrown">
        Combining analytical, technical, and creative capabilities to build impactful projects.
      </p>
    </motion.div>

    {/* GRID */}
    <div className="grid gap-8 md:grid-cols-2">

      {/* Programming */}
      <motion.div
        {...fadeUp}
        className="rounded-[2rem] border border-[#d7c2b0] bg-white/70 p-8 shadow-soft backdrop-blur-sm transition hover:-translate-y-1"
      >
        <div className="mb-6 flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1f2a44]/10 text-3xl">
            💻
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-[#1f2a44]">
              Programming
            </h3>

            <p className="text-mediumBrown">
              Data processing & machine learning
            </p>
          </div>
        </div>

        <div className="space-y-5">

          {[
            { name: "Python", level: "90%" },
            { name: "SQL", level: "85%" },
            { name: "R", level: "70%" },
          ].map((skill) => (
            <div key={skill.name}>
              <div className="mb-2 flex justify-between text-sm">
                <span className="font-medium text-[#1f2a44]">
                  {skill.name}
                </span>

                <span className="text-[#7b1e3a]">
                  {skill.level}
                </span>
              </div>

              <div className="h-3 rounded-full bg-[#efe4d1]">
                <div
                  className="h-3 rounded-full bg-gradient-to-r from-[#1f2a44] to-[#7b1e3a]"
                  style={{ width: skill.level }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Visualization */}
      <motion.div
        {...fadeUp}
        className="rounded-[2rem] border border-[#d7c2b0] bg-white/70 p-8 shadow-soft"
      >
        <div className="mb-6 flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#7b1e3a]/10 text-3xl">
            📊
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-[#1f2a44]">
              Data Visualization
            </h3>

            <p className="text-mediumBrown">
              Dashboard & reporting tools
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {[
            "Tableau",
            "Power BI",
            "Looker Studio",
            "Google Colab",
          ].map((tool) => (
            <span
              key={tool}
              className="rounded-full bg-[#f3e6e0] px-5 py-3 text-sm font-medium text-[#7b1e3a] transition hover:scale-105"
            >
              {tool}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Design */}
      <motion.div
        {...fadeUp}
        className="rounded-[2rem] border border-[#d7c2b0] bg-white/70 p-8 shadow-soft"
      >
        <div className="mb-6 flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-100 text-3xl">
            🎨
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-[#1f2a44]">
              Design & Creativity
            </h3>

            <p className="text-mediumBrown">
              Visual communication & branding
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          {["Canva", "Figma"].map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-[#7b1e3a]/20 px-5 py-3 text-sm font-medium text-[#1f2a44]"
            >
              {tool}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Productivity */}
      <motion.div
        {...fadeUp}
        className="rounded-[2rem] border border-[#d7c2b0] bg-white/70 p-8 shadow-soft"
      >
        <div className="mb-6 flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1f2a44]/10 text-3xl">
            ⚡
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-[#1f2a44]">
              Productivity Tools
            </h3>

            <p className="text-mediumBrown">
              Daily workflow & collaboration
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {[
            "Excel",
            "Word",
            "Access",
            "Google Sheets",
            "Google Docs",
          ].map((tool) => (
            <span
              key={tool}
              className="rounded-full bg-[#eef2ff] px-5 py-3 text-sm font-medium text-[#1f2a44]"
            >
              {tool}
            </span>
          ))}
        </div>
      </motion.div>

    </div>
  </div>
</section>

        <section
  id="learning"
  className="px-6 py-24 bg-gradient-to-br from-[#f8f5f2] via-[#f3e6e0] to-[#efe4d1]"
>
  <div className="mx-auto max-w-6xl">
    <motion.div {...fadeUp} className="mb-16 text-center">
      <span className="inline-flex rounded-full border border-[#7b1e3a]/20 bg-white/70 px-5 py-2 text-sm font-medium text-[#7b1e3a] shadow-soft">
        ✨ Continuous Learning
      </span>

      <h2 className="mt-6 font-serif text-5xl text-[#1f2a44]">
        Learning & Certifications
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-lg text-mediumBrown">
        A curated stack of certifications that support my growth in data,
        technology, and digital problem-solving.
      </p>
    </motion.div>

    <CertificationStack />
  </div>
</section>

        <section id="contact" className="px-6 py-20 bg-darkBrown text-cream">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-serif text-4xl md:text-5xl">Let’s Build Meaningful Projects Together.</h2>
            <div className="mt-8 flex flex-wrap justify-center gap-5 text-sm">
              <a className="inline-flex items-center gap-2 hover:opacity-80" href="mailto:dianayufauziahh@gmail.com"><Mail size={16}/>dianayufauziahh@gmail.com</a>
              <a className="inline-flex items-center gap-2 hover:opacity-80" href="https://linkedin.com/in/dian-fauziah"><Linkedin size={16}/>linkedin.com/in/dian-fauziah</a>
              <a className="inline-flex items-center gap-2 hover:opacity-80" href="#"><Github size={16}/>GitHub</a>
              <a className="inline-flex items-center gap-2 hover:opacity-80" href="#"><Instagram size={16}/>Instagram</a>
            </div>
            <div className="mt-4 text-sm text-cream/85">Phone: +62 85184665784</div>
            <a href="https://bit.ly/40t89Ta" className="mt-8 inline-block rounded-full bg-[#fffaf2] px-7 py-3 text-darkBrown shadow-soft transition hover:-translate-y-0.5">Download CV</a>
          </div>
        </section>
      </main>

      <footer className="bg-darkBrown/95 py-6 text-center text-xs text-cream/85">© 2026 Dian Ayu Fauziah — Multidisciplinary Portfolio</footer>
    </div>
  )
}  
 

