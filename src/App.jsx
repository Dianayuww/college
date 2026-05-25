import { useState } from 'react'
import certFreecodecampPython from './assets/fcc_da.jpeg'
import certDicodingDataScience from './assets/dcd_ds.jpeg'
import certAIProductivity from './assets/dcd_ai prak.jpeg'
import certGenerativeAI from './assets/dcd_genai.jpeg'
import certIBMSkillsBuild from './assets/ibm.jpeg'
import sealLogo from './assets/seal.png'
import kominfoLogo from './assets/kominfo.png'
import majadigiLogo from './assets/majadigi.png'
import hmpImage from './assets/humas2.jpeg'
import wmImage from './assets/wmk all.jpeg'
import banacleImage from './assets/banacle2.jpeg'
import { motion } from 'framer-motion'
import { ArrowDown, BookOpen, Lightbulb, Mail, Linkedin, Github, Instagram, Award, MapPin, Calendar, Sparkles, Users, ShoppingBag } from 'lucide-react'
import aku2 from './assets/aku8.png'

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
    linkGithub: 'https://github.com/Dianayuww/israel-palestine-sentiment-analysis',
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
    linkGithub: 'https://github.com/Dianayuww/Sentiment-Analysis-KIPK-Recipients-based-Tweets-from-X',
    category: 'Data Mining',
    description:
      'Collected data from X platforms and used various sentiment analysis methods to gain deep insight into public opinion.',
    tags: ['Sentiment analysis', 'NLP', 'Data Mining', 'KIPK'],
    image:
      'https://i.pinimg.com/736x/57/40/66/574066348ae0823312e3c7079d99fdc4.jpg',
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
  company: 'SEAL — Social Economic Accelerator Lab x East Java Provincial Government',
  location: 'Surabaya, Indonesia',
  period: 'Feb – Dec 2025',
  vibe: 'Supporting public data transformation through the MajaDigi Super App initiative.',
  description:
    'Contributed to the 99 Days Acceleration Program initiated by the Governor of East Java through the MajaDigi Super App project. Responsible for sourcing and preparing public datasets from Open Data Jatim, Satu Data Jatim, and national data portals to support executive and public dashboards across multiple government sectors. Assisted data scientists in data cleaning and preprocessing workflows for digital public service analytics.',
  projectLink: 'https://majadigi.jatimprov.go.id/',
  highlights: [
    'MajaDigi Super App',
    'Public Data Dashboard',
    'Open Data Jatim',
    'Data Cleaning'
  ],
}
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
    link: 'https://id.shp.ee/mreSoTB3',
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
  'Data Visualization': ['Tableau', 'Looker Studio', 'Power BI', 'Google Colab', 'Metabase'],
  Design: ['Canva', 'Figma'],
  Productivity: ['Excel', 'Word', 'Access', 'Google Forms', 'Google Sheets', 'Google Docs'],
  Languages: ['Indonesian (Fluent)', 'English (Intermediate)', 'Arabic (Intermediate)'],
}

// const certifications = [
//   { title: 'Data Analysis with Python', issuer: 'FreeCodeCamp', year: '2025' },
//   { title: 'Student Developer Initiative', issuer: 'IBM SkillsBuild', year: '2025' },
//   { title: 'Google Cloud Roadshow Surabaya', issuer: 'Google Cloud', year: '2025' },
//   { title: 'BISA AI Certification', issuer: 'BISA AI', year: '2025' },
// ]

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


// export default function App() {
//   return (
export default function App() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeCertificate, setActiveCertificate] = useState(0)

  const certificates = [
    {
      title: 'Data Analysis with Python',
      issuer: 'freeCodeCamp',
      year: '2025',
      image: certFreecodecampPython,
      skills: ['Python', 'Data Analysis', 'Programming'],
      link: '#',
    },
    {
      title: 'Belajar Dasar Data Science',
      issuer: 'Dicoding',
      year: '2025',
      image: certDicodingDataScience,
      skills: ['Data Science', 'Analytics', 'Machine Learning'],
      link: '#',
    },
    {
      title: 'AI Praktis untuk Produktivitas',
      issuer: 'Dicoding × AVPN',
      year: '2025',
      image: certAIProductivity,
      skills: ['AI Tools', 'Productivity', 'Prompting'],
      link: '#',
    },
    {
      title: 'Belajar Penggunaan Generative AI',
      issuer: 'Dicoding × AVPN',
      year: '2025',
      image: certGenerativeAI,
      skills: ['Generative AI', 'LLM', 'AI Ethics'],
      link: '#',
    },
    {
      title: 'Career Essentials',
      issuer: 'IBM SkillsBuild',
      year: '2025',
      image: certIBMSkillsBuild,
      skills: ['Professional Skills', 'Career Readiness'],
      link: '#',
    },
  ]
  
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
        {/* <section
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
</section>  */}
        <section
  id="home"
  className="relative min-h-screen overflow-hidden bg-[#fffaf7] px-6 pt-28 text-[#101b33]"
>
  {/* decorative dots */}
  <div className="absolute right-10 top-36 grid grid-cols-8 gap-3 opacity-50">
    {Array.from({ length: 48 }).map((_, i) => (
      <span key={i} className="h-1 w-1 rounded-full bg-[#d6a778]" />
    ))}
  </div>

  <span className="absolute left-[28%] top-[23%] text-4xl text-[#d6a778]">✦</span>

  <div className="relative z-10 mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-10 md:grid-cols-2">
    {/* Left text */}
    <div>
      <div className="mb-8 flex items-center gap-4">
        <p className="text-sm font-semibold uppercase tracking-[0.45em]">
          Hello, I’m
        </p>
        <span className="h-px w-32 bg-[#d6a778]" />
      </div>

      <h1 className="font-serif text-6xl leading-[0.95] tracking-tight md:text-8xl">
        Dian Ayu <br />
        <span className="text-[#7b1e3a]">Fauziah</span>
      </h1>

      <p className="mt-8 text-sm font-bold uppercase tracking-[0.22em] md:text-base">
        Data Science Student
        <span className="mx-3 text-[#d6a778]">|</span>
        Public Relations Enthusiast
      </p>

      <div className="mt-10 h-px w-24 bg-[#d6a778]" />

      <div className="mt-10 flex flex-wrap gap-5">
        <a
          href="#data-projects"
          className="inline-flex items-center gap-4 rounded-lg bg-[#7b1e3a] px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition hover:-translate-y-1 hover:bg-[#101b33]"
        >
          View Data Projects <span>→</span>
        </a>

        <a
          href="#creative-pr"
          className="inline-flex items-center gap-4 rounded-lg border border-[#7b1e3a] px-8 py-4 text-sm font-bold uppercase tracking-widest text-[#7b1e3a] transition hover:-translate-y-1 hover:bg-[#7b1e3a] hover:text-white"
        >
          Creative Works <span>→</span>
        </a>
      </div>

      <div className="mt-14 flex items-center gap-3 text-sm text-[#101b33]/70">
        <div className="relative h-10 w-6 rounded-full border border-[#7b1e3a]">
          <span className="absolute left-1/2 top-2 h-2 w-1 -translate-x-1/2 animate-bounce rounded-full bg-[#7b1e3a]" />
        </div>
        <span>Scroll to explore</span>
      </div>
    </div>

    {/* Right visual */}
    <div className="relative flex justify-center md:justify-end">
      <div className="relative h-[620px] w-[560px]">
        {/* soft pink blob */}
        <div className="absolute bottom-[70px] right-[40px] h-[430px] w-[360px] rounded-t-full rounded-b-[45%] bg-[#e8cbc8]/85 shadow-[0_30px_80px_rgba(123,30,58,0.12)]" />

        {/* gold circle */}
        <div className="absolute bottom-[120px] right-[15px] h-[430px] w-[430px] rounded-full border border-[#d6a778]/80" />

        {/* navy curve */}
        <div className="absolute bottom-0 right-[-170px] h-[260px] w-[760px] rounded-tl-[100%] bg-[#101b33]" />

        {/* photo */}
        <img
          src={aku2}
          alt="Dian Ayu Fauziah"
          className="absolute bottom-0 right-[70px] z-30 h-[590px] w-auto object-contain drop-shadow-2xl"
        />

        {/* stars */}
        <span className="absolute right-[40px] top-[110px] z-20 text-5xl text-[#7b1e3a]">✦</span>
        <span className="absolute right-[-10px] top-[160px] z-20 text-4xl text-[#7b1e3a]">✦</span>
      </div>
    </div>
  </div>
</section>

        <section
  id="about"
  className="relative overflow-hidden bg-[#fffaf7] px-6 py-24 text-[#101b33]"
>
  <div className="absolute left-10 top-16 text-4xl text-[#d6a778]/80">✦</div>
  <div className="absolute right-12 top-24 grid grid-cols-7 gap-3 opacity-40">
    {Array.from({ length: 35 }).map((_, i) => (
      <span key={i} className="h-1 w-1 rounded-full bg-[#d6a778]" />
    ))}
  </div>

  <div className="mx-auto max-w-7xl">
    <div className="mb-14">
      <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#7b1e3a]">
        About Me
      </p>

      <h2 className="mt-4 font-serif text-4xl leading-tight text-[#101b33] md:text-6xl">
        A data-driven thinker with a creative communication mindset.
      </h2>
    </div>

    <div className="grid gap-8 lg:grid-cols-3">
      <div className="rounded-[2rem] border border-[#eadbc8] bg-white/75 p-8 shadow-soft lg:col-span-2">
        <p className="text-lg leading-relaxed text-[#3f4658]">
          I am an undergraduate Data Science student at State University of
          Surabaya with interests in data analytics, digital public service,
          public relations, and creative problem-solving.
        </p>

        <p className="mt-5 text-lg leading-relaxed text-[#3f4658]">
          My work combines analytical thinking and communication strategy to
          turn data, ideas, and community-driven initiatives into meaningful
          insights and impactful stories.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl bg-[#f8efe3] p-5">
            <p className="text-3xl font-serif text-[#7b1e3a]">01</p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-widest">
              Data
            </p>
          </div>

          <div className="rounded-2xl bg-[#f8efe3] p-5">
            <p className="text-3xl font-serif text-[#7b1e3a]">02</p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-widest">
              Communication
            </p>
          </div>

          <div className="rounded-2xl bg-[#f8efe3] p-5">
            <p className="text-3xl font-serif text-[#7b1e3a]">03</p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-widest">
              Creativity
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-[2rem] border border-[#eadbc8] bg-[#101b33] p-8 text-white shadow-soft">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d6a778]">
          Focus Areas
        </p>

        <div className="mt-8 space-y-4">
          {[
            'Data Analysis',
            'Machine Learning',
            'Public Relations',
            'Creative Strategy',
            'Digital Public Service',
          ].map((item) => (
            <div
              key={item}
              className="rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
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
                  <div className="mt-6 flex gap-3">
 

  {project.linkGithub && (
    <a
      href={project.linkGithub}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full border border-[#1f2a44]/20 bg-white px-5 py-2 text-sm font-semibold text-[#1f2a44] transition hover:-translate-y-1 hover:bg-[#f3e6e0]"
    >
      View Project ↗
    </a>
  )}
</div>
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
{work.link && (
  <a
    href={work.link}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#7b1e3a] px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-1 hover:bg-[#5e162d]"
  >
    <ShoppingBag size={18} />
    Shop Product
  </a>
)}
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

        <section
  className="px-6 py-24 bg-gradient-to-br from-[#f8f5f2] via-[#f3e6e0] to-[#efe4d1]"
  id="experience"
>
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
      {experiences.map((exp) => (
        <motion.article
          {...fadeUp}
          key={exp.id}
          className="overflow-hidden rounded-3xl border border-[#eadbc8] bg-white/85 shadow-soft transition hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="grid gap-0 md:grid-cols-5">
            <div className="flex flex-col items-center justify-center gap-6 bg-[#f8efe3] p-10 md:col-span-2">
  <img
    src={sealLogo}
    alt="SEAL"
    className="h-14 object-contain opacity-90 transition hover:opacity-100"
  />

  <span className="text-2xl text-[#7b1e3a]/40">×</span>

  <img
    src={kominfoLogo}
    alt="Kominfo Jatim"
    className="h-20 object-contain opacity-90 transition hover:opacity-100"
  />

  <span className="text-2xl text-[#7b1e3a]/40">×</span>

  <img
    src={majadigiLogo}
    alt="MajaDigi"
    className="h-16 object-contain opacity-90 transition hover:opacity-100"
  />
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

              {exp.projectLink && (
                <a
                  href={exp.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center rounded-full border border-[#7b1e3a]/20 px-4 py-2 text-sm text-[#7b1e3a] transition hover:bg-[#7b1e3a] hover:text-white"
                >
                  Visit Project ↗
                </a>
              )}

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
  className="relative overflow-hidden bg-[#fffaf7] px-6 py-24 text-[#101b33]"
>
  <div className="absolute right-12 top-24 grid grid-cols-7 gap-3 opacity-40">
    {Array.from({ length: 35 }).map((_, i) => (
      <span key={i} className="h-1 w-1 rounded-full bg-[#d6a778]" />
    ))}
  </div>

  <div className="mx-auto max-w-7xl">
    <div className="mb-14">
      <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#7b1e3a]">
        Skills
      </p>

      <h2 className="mt-4 font-serif text-4xl md:text-6xl">
        Tools I use to turn ideas into meaningful work.
      </h2>
    </div>

    <div className="grid gap-8 md:grid-cols-2">
      {[
        {
          title: 'Programming',
          desc: 'Data processing & machine learning',
          tools: [
            { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
            { name: 'SQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
            { name: 'R', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg' },
          ],
        },
        {
          title: 'Data Visualization',
          desc: 'Dashboard & reporting tools',
          tools: [
            { name: 'Tableau', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tableau.svg' },
            { name: 'Power BI', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/powerbi.svg' },
            { name: 'Looker Studio', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/looker.svg' },
            { name: 'Metabase', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/metabase.svg' },
            { name: 'Google Colab', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecolab/googlecolab-original.svg' },
          ],
        },
        {
          title: 'Design & Creativity',
          desc: 'Visual communication & branding',
          tools: [
            { name: 'Canva', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/canva.svg' },
            { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
          ],
        },
        {
          title: 'Productivity Tools',
          desc: 'Daily workflow & collaboration',
          tools: [
            { name: 'Excel', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/microsoftexcel.svg' },
            { name: 'Word', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/microsoftword.svg' },
            { name: 'Access', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/microsoftaccess.svg' },
            { name: 'Google Sheets', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/googlesheets.svg' },
            { name: 'Google Docs', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/googledocs.svg' },
          ],
        },
      ].map((group) => (
        <div
          key={group.title}
          className="rounded-[2rem] border border-[#eadbc8] bg-white/75 p-8 shadow-soft transition hover:-translate-y-1 hover:shadow-xl"
        >
          <h3 className="font-serif text-3xl text-[#101b33]">
            {group.title}
          </h3>

          <p className="mt-2 text-mediumBrown">
            {group.desc}
          </p>

          <div className="mt-8 grid grid-cols-3 gap-5 sm:grid-cols-4">
            {group.tools.map((tool) => (
              <div
                key={tool.name}
                className="group flex flex-col items-center justify-center rounded-2xl bg-[#f8efe3] p-5 transition hover:-translate-y-1 hover:bg-[#f3e6e0]"
              >
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="h-10 w-10 object-contain opacity-80 transition group-hover:opacity-100"
                />

                <p className="mt-3 text-center text-xs font-semibold text-[#7b1e3a]">
                  {tool.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
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

    <div className="grid items-center gap-10 lg:grid-cols-2">
      <div className="relative mx-auto h-[390px] w-full max-w-md">
        {certificates.map((cert, index) => {
          const position =
            (index - selectedProject + certificates.length) %
            certificates.length

          return (
            <motion.div
              key={cert.title}
              onClick={() => setSelectedProject(index)}
              className="absolute inset-0 cursor-pointer overflow-hidden rounded-[2rem] border border-[#d7c2b0] bg-white shadow-soft"
              animate={{
                x: position * 18,
                y: position * 16,
                rotate: position * 3,
                scale: position === 0 ? 1 : 0.94,
                opacity: position === 0 ? 1 : 0.45,
                zIndex: certificates.length - position,
              }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="h-full w-full object-cover object-top"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#101b33]/90 to-transparent p-6">
                <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#7b1e3a]">
                  {cert.year}
                </span>

                <h3 className="mt-3 font-serif text-2xl text-white">
                  {cert.title}
                </h3>

                <p className="mt-1 text-sm font-semibold text-white/80">
                  {cert.issuer}
                </p>
              </div>
            </motion.div>
          )
        })}
      </div>

      <div>
        <h3 className="font-serif text-4xl text-[#1f2a44]">
          {certificates[selectedProject]?.title}
        </h3>

        <p className="mt-3 text-xl font-semibold text-[#7b1e3a]">
          {certificates[selectedProject]?.issuer}
        </p>

        <p className="mt-5 leading-relaxed text-mediumBrown">
          This certification represents my continuous learning journey in data,
          technology, AI, and digital problem-solving.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {certificates[selectedProject]?.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-white/70 px-4 py-2 text-sm text-[#7b1e3a]"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-8 flex gap-3">
          <button
            type="button"
            onClick={() =>
              setSelectedProject((prev) =>
                prev === 0 ? certificates.length - 1 : prev - 1
              )
            }
            className="rounded-full border border-[#7b1e3a]/30 bg-white px-5 py-3 text-sm font-semibold text-[#7b1e3a] transition hover:-translate-y-1"
          >
            ← Previous
          </button>

          <button
            type="button"
            onClick={() =>
              setSelectedProject((prev) => (prev + 1) % certificates.length)
            }
            className="rounded-full bg-[#1f2a44] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-1"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
      </main>

      <footer className="bg-darkBrown/95 py-6 text-center text-xs text-cream/85">© 2026 Dian Ayu Fauziah — Multidisciplinary Portfolio</footer>
    </div>
  )
}  
 

