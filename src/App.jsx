import hmpImage from './assets/humas.jpg'
import wmImage from './assets/wmk.jpg'
import banacleImage from './assets/banacle.jpg'
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

// const dataProjects = [
//   'Development of a Classification Model for Diabetes Prediction Using Decision Tree Algorithm',
//   'Hotel Management System Using Microsoft Access',
//   'Recommendation Wishlist to Buy Skincare Using Selection Sort',
//   'Analysis of Life Expectancy Between Males and Females for the Years 2020–2022 in Indonesia',
//   'Sentiment Analysis through Twitter Data Collection on the Palestine-Israel Conflict',
//   'Sentiment Analysis of Kartu Indonesia Pintar Kuliah (KIPK) from Tweets on Platform X',
//   'Analysis of Customer Shopping Behavior Segmentation Using K-Means Clustering Algorithm',
//   'Social Media Addiction Classification using Random Forest and XGBoost',
// ]
const dataProjects = [
  {
    id: 1,
    title: "COMPARATIVE ANALYSIS OF RANDOM FOREST AND XGBOOST MODELS FOR SOCIAL MEDIA ADDICTION LEVEL CLASSIFICATION",
    category: "Skripsi/Thesis",
    description: "A comparative machine learning study using Random Forest and XGBoost with three train-test split scenarios and 10-fold cross-validation to classify social media addiction levels.",
    tags: ["Python", "Machine Learning", "Random Forest", "XGBoost", "Cross Validation", "Social Media Addiction"],
    image: "https://images.pexels.com/photos/8088493/pexels-photo-8088493.jpeg",
    details: "Multiclass classification project for social media addiction level prediction.",
    status: "In Progress"
  },
  {
    id: 2,
    title: "Life Expectancy Analysis Indonesia 2020-2022",
    category: "Data Visualization",
    description: "Visualization and analysis of life expectancy between males and females in Indonesia using Tableau based on BPS data.",
    tags: ["Tableau", "Data Visualization", "Statistical Analysis", "BPS Data"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    details: "Key finding: female life expectancy is higher than male life expectancy across the analyzed period."
  },
  {
    id: 3,
    title: "Maxim Application UI/UX Optimization",
    category: "UI/UX Analysis",
    description: "Analysis of Maxim application reviews to improve user satisfaction through payment feature optimization using Figma.",
    tags: ["Figma", "UI/UX Design", "User Research", "Payment Systems"],
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80",
    details: "Focused on improving the payment feature user experience."
  },
  {
    id: 4,
    title: "Hotel Management System",
    category: "Database Design",
    description: "Hotel management system database design using Microsoft Access, including CDM and PDM.",
    tags: ["MS Access", "Database Design", "CDM", "PDM", "Data Modeling"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    details: "Database architecture for hotel operational management."
  },
  {
    id: 5,
    title: "Customer Segmentation using K-Means",
    category: "Machine Learning",
    description: "Analysis of customer shopping behavior segmentation using the K-Means clustering algorithm.",
    tags: ["Python", "Clustering", "K-Means", "Data Mining"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    details: "Grouped customers based on shopping behavior patterns."
  },
  {
    id: 6,
    title: "Sentiment Analysis on Social Media",
    category: "Natural Language Processing",
    description: "Sentiment analysis using social media data collected from Twitter/X.",
    tags: ["Python", "NLP", "Sentiment Analysis", "Twitter/X"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    details: "Analyzed public sentiment from social media text data."
  }
]

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

// const organizationProjects = [
//   {
//     title: 'HMP Sains Data Unesa',
//     role: 'Head of Public Relations Division (Mar 2024 – Feb 2025)',
//     description: 'Created copywriting for website/social media and led 7 PR team members to meet publication targets.',
//   },
//   {
//     title: 'PKKMB UNESA 2023',
//     role: 'Member of Facilitator Committee (Aug 2023 – Sep 2023)',
//     description: 'Evaluated assignments for new students and coordinated orientation event support.',
//   },
//   {
//     title: 'Wirausaha Merdeka Batch 3 — Ciputra University',
//     role: 'Participant (Sep 2024 – Dec 2024)',
//     description: 'Developed circular economy-oriented business ideas and eco-friendly product innovation concepts.',
//   },
// ]
const organizationProjects = [
  {
    id: 1,
    title: 'Head of Public Relations Division',
    organization: 'HMP Sains Data Unesa',
    image: hmpImage,
    period: 'Mar 2024 – Feb 2025',
    description:
      'Led public relations initiatives, managed organizational communication, created compelling copy, and coordinated publication needs for student association programs.',
    responsibilities: [
      'Created copywriting for organizational communication',
      'Managed media publication and public engagement',
      'Led 7 PR division members',
      'Supported community service and study visit programs',
    ],
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
    responsibilities: [
      'Developed sustainable business models',
      'Researched eco-friendly product innovation',
      'Completed entrepreneurial internships',
      'Applied business principles to real-world scenarios',
    ],
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
    responsibilities: [
      'Created product innovation using banana peel waste',
      'Developed sustainable product concept',
      'Built brand positioning and communication',
      'Explored environmental impact value',
    ],
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
        <section id="home" className="min-h-[calc(100vh-4.5rem)] flex items-center px-6 py-20 bg-gradient-to-br from-[#f8f4ef] via-[#f3e6e0] to-[#ece6dc]">
          <motion.div {...fadeUp} className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full border border-[#a04747] text-[#a04747] bg-white/70 px-4 py-2 text-sm text-mediumBrown shadow-soft">✨ Welcome to my portfolio</span>
            <h1 className="mt-6 font-serif text-5xl md:text-7xl text-darkBrown">Dian Ayu Fauziah</h1>
            <p className="mt-4 text-lg md:text-xl text-mediumBrown">Data Science Student | Public Relations Enthusiast | Creative Problem Solver</p>
            <p className="mt-2 text-sm md:text-base text-accent">Data Science • State University of Surabaya</p>
            <div className="mt-8 flex justify-center">
               {/* <div className="rounded-[2rem] bg-[#f2e2ca] p-2 shadow-soft">
                <img src={dianPortrait} alt="Portrait of Dian Ayu Fauziah" className="h-56 w-44 md:h-64 md:w-52 rounded-[1.6rem] object-cover shadow-lg" />
              </div>  */}
              <div className="mt-10 flex justify-center">
                <img src={dianPortrait} alt="Portrait of Dian Ayu Fauziah" className="h-72 md:h-[28rem] object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.18)]"/>
              </div>
            </div>
            <p className="mt-6 max-w-2xl mx-auto text-mediumBrown">Data Science undergraduate with strong skills in data processing, machine learning, and data visualization. Passionate about using data to generate actionable insights and solve real-world problems.</p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <a href="#data-projects" className="rounded-full bg-darkBrown px-7 py-3 text-sm text-cream shadow-soft transition hover:-translate-y-0.5">View Data Projects</a>
              <a href="#creative-pr" className="rounded-full border border-[#ceb18c] bg-white/80 px-7 py-3 text-sm text-darkBrown shadow-soft transition hover:-translate-y-0.5">View Creative & PR Works</a>
            </div>
            <div className="mt-10 flex flex-col items-center text-mediumBrown/70"><ArrowDown size={20} className="animate-bounce" /></div>
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

        <section id="data-projects" className="px-6 py-20">
  <div className="mx-auto max-w-6xl">
    <h2 className="font-serif text-4xl mb-10">
      Data Science & Tech Projects
    </h2>

    <div className="grid gap-8 md:grid-cols-2">
      {dataProjects.map((p) => (
        <motion.article
          {...fadeUp}
          key={p.id}
          className="overflow-hidden rounded-3xl border border-[#eadbc8] bg-[#fffaf2] shadow-soft transition hover:-translate-y-1"
        >
          <div className="relative h-52 overflow-hidden">
            <img
              src={p.image}
              alt={p.title}
              className="h-full w-full object-cover"
            />

            {p.status && (
              <span className="absolute right-4 top-4 rounded-full bg-[#c7a879] px-3 py-1 text-xs text-white">
                {p.status}
              </span>
            )}
          </div>

          <div className="p-6">
            <span className="rounded-full border border-[#ceb18c] px-3 py-1 text-xs text-mediumBrown">
              {p.category}
            </span>

            <h3 className="mt-4 font-serif text-2xl text-darkBrown">
              {p.title}
            </h3>

            <p className="mt-3 text-mediumBrown leading-relaxed">
              {p.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[#f4e7d5] px-3 py-1 text-xs text-darkBrown"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="mt-5 border-t border-[#eadbc8] pt-4 text-sm italic text-mediumBrown">
              {p.details}
            </p>
          </div>
        </motion.article>
      ))}
    </div>
  </div>
</section>

        {/* <section id="creative-pr" className="px-6 py-20 bg-[#fffaf2]">
          <div className="mx-auto max-w-6xl"><h2 className="font-serif text-4xl mb-10">Creative & PR</h2><div className="grid gap-6 md:grid-cols-3">{organizationProjects.map((p) => <motion.article {...fadeUp} key={p.title} className="scrapbook-card bg-[#fff3e5] p-6"><h3 className="font-serif text-2xl mb-2">{p.title}</h3><p className="text-sm font-semibold text-accent mb-2">{p.role}</p><p className="text-mediumBrown leading-relaxed">{p.description}</p></motion.article>)}</div></div>
        </section> */}
        <section id="creative-pr" className="px-6 py-20 bg-[#fffaf2]">
  <div className="mx-auto max-w-7xl">
    <div className="mb-16 text-center">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#c7a879]/10 px-4 py-2">
        <Sparkles className="text-[#c7a879]" size={18} />
        <span className="font-semibold text-[#c7a879]">
          Creative Portfolio
        </span>
      </div>

      <h2 className="text-4xl font-bold text-darkBrown md:text-5xl">
        Public Relations & Creative Work
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-lg text-mediumBrown">
        Leading initiatives in communication, sustainability, and innovation
      </p>
    </div>

    <div className="space-y-8">
      {organizationProjects.map((work) => (
        <motion.article
          {...fadeUp}
          key={work.id}
          className={`group overflow-hidden rounded-3xl border border-[#eadbc8] bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-xl ${
            work.highlight ? 'ring-2 ring-[#c7a879]' : ''
          }`}
        >
          <div className="grid gap-6 md:grid-cols-3">
            <div className="relative overflow-hidden md:h-[420px]">
              <img
                src={work.image}
                alt={work.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />

              {work.highlight && (
                <div className="absolute left-4 top-4 rounded-full bg-[#c7a879] px-3 py-1 text-xs font-semibold text-white">
                  ✨ Featured Project
                </div>
              )}
            </div>

            <div className="p-6 md:col-span-2">
              <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="font-serif text-2xl text-darkBrown">
                    {work.title}
                  </h3>

                  <p className="mt-2 text-lg font-semibold text-[#c7a879]">
                    {work.organization}
                  </p>
                </div>

                <span className="rounded-full border border-[#c7a879] px-3 py-1 text-xs text-[#c7a879]">
                  {work.period}
                </span>
              </div>

              <p className="leading-relaxed text-mediumBrown">
                {work.description}
              </p>

              <div className="mt-5">
                <h4 className="mb-2 font-semibold text-darkBrown">
                  Key Responsibilities:
                </h4>

                <ul className="space-y-1">
                  {work.responsibilities.map((resp) => (
                    <li
                      key={resp}
                      className="flex items-start text-sm text-mediumBrown"
                    >
                      <span className="mr-2 text-[#c7a879]">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {work.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#f5efe7] px-3 py-1 text-xs text-darkBrown"
                  >
                    {tag}
                  </span>
                ))}
              </div>
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

        <section id="skills" className="px-6 py-20 bg-[#fffaf2]">
          <div className="mx-auto max-w-6xl"><h2 className="font-serif text-4xl mb-10">Skills</h2><div className="grid md:grid-cols-2 gap-6">{Object.entries(skillGroups).map(([g, items]) => <motion.div {...fadeUp} key={g} className="scrapbook-card bg-[#fff3e5] p-6"><h3 className="font-semibold text-xl mb-4">{g}</h3><div className="flex flex-wrap gap-2">{items.map((i) => <Pill key={i}>{i}</Pill>)}</div></motion.div>)}</div></div>
        </section>

        <section id="learning" className="px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-serif text-4xl mb-10">Learning & Certifications</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {certifications.map((cert) => (
                <motion.article {...fadeUp} key={cert.title} className="scrapbook-card bg-[#fffaf2] p-6">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#f4dfc3] text-accent"><Award size={18} /></div>
                  <h3 className="font-serif text-xl leading-snug">{cert.title}</h3>
                  <p className="mt-2 text-sm text-mediumBrown">{cert.issuer}</p>
                  <p className="text-sm text-accent">{cert.year}</p>
                  <a href="https://bit.ly/40t89Ta" className="mt-4 inline-block rounded-full border border-accent px-4 py-2 text-xs text-mediumBrown hover:bg-[#f9efdf] transition">View Credential</a>
                </motion.article>
              ))}
            </div>
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
 

