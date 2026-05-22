import { motion } from 'framer-motion'
import { ArrowDown, BookOpen, Lightbulb, Mail, Linkedin, Github, Instagram, Award, MapPin, Calendar } from 'lucide-react'
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
    title: 'Data Analyst Intern — SEAL (Social Economic Accelerator Lab)',
    location: 'Malang, Indonesia',
    period: 'Feb 2025 – Present',
    points: [
      'Contributing to MajaDigi Super App by analyzing and managing public service data.',
      'Sourcing foundational datasets from BPS Indonesia and BPS East Java for dashboards.',
      'Performing ETL processes using AWS Glue and building executive-level dashboards.',
    ],
  },
  {
    title: 'Statistical Data Analyst Intern — East Java Provincial Department of Communication and Informatics',
    location: 'Surabaya, Indonesia',
    period: 'Mar 2025 – Jun 2025',
    points: [
      'Contributed to public service digital transformation through MajaDigi Super App initiative.',
      'Designed data-driven solutions for government services and strategic programs.',
      'Performed statistical analysis and supported AI-powered decision systems.',
    ],
  },
]

const organizationProjects = [
  {
    title: 'HMP Sains Data Unesa',
    role: 'Head of Public Relations Division (Mar 2024 – Feb 2025)',
    description: 'Created copywriting for website/social media and led 7 PR team members to meet publication targets.',
  },
  {
    title: 'PKKMB UNESA 2023',
    role: 'Member of Facilitator Committee (Aug 2023 – Sep 2023)',
    description: 'Evaluated assignments for new students and coordinated orientation event support.',
  },
  {
    title: 'Wirausaha Merdeka Batch 3 — Ciputra University',
    role: 'Participant (Sep 2024 – Dec 2024)',
    description: 'Developed circular economy-oriented business ideas and eco-friendly product innovation concepts.',
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

        <section id="about" className="bg-[#fffaf2] px-6 py-20">
          <motion.div {...fadeUp} className="mx-auto max-w-6xl">
            <h2 className="text-center text-4xl font-bold">About Me</h2>
            <div className="mx-auto mt-3 h-1.5 w-20 rounded-full bg-[#7b6252]" />
            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              <div className="space-y-6">
                <div className="scrapbook-card bg-[#fff3e5] p-7"><p className="text-mediumBrown leading-relaxed">I am an adaptable undergraduate student majoring in Data Science, eager to contribute meaningfully as a Data Analyst. I possess the ability to collaborate effectively in teams and possess a strong desire to continuously learn and develop both hard and soft skills.</p></div>
                <article className="scrapbook-card bg-[#fff3e5] p-7"><BookOpen className="mb-3 text-accent"/><h3 className="font-serif text-2xl mb-2">Education</h3><p><b>University:</b> State University of Surabaya</p><p><b>Major:</b> Data Science (2022 - Present)</p><p><b>GPA:</b> 3.66 / 4.00</p></article>
                <article className="scrapbook-card bg-[#fff3e5] p-7"><Lightbulb className="mb-3 text-accent"/><h3 className="font-serif text-2xl mb-2">My Approach</h3><p>Combining analytical thinking with creative problem-solving to deliver impactful solutions.</p></article>
              </div>
              <div className="bg-transparent p-2">
                <h3 className="font-serif text-2xl mb-6">Technical Skills</h3>
                <div className="flex flex-wrap items-center gap-6">
                   <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="h-12" />
                   <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" className="h-12" />
                   <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" className="h-12" />
                   <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" className="h-12" />
                   <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" className="h-12" />
                   <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" className="h-12" />
                </div>
                {/* <h3 className="font-serif text-2xl mb-4">Technical Skills</h3>
                <div className="mb-8 flex flex-wrap gap-3">{['Python', 'R', 'SQL', 'Tableau', 'Looker Studio', 'Microsoft Office', 'Canva', 'Figma', 'Power BI'].map((s) => <Pill key={s} filled>{s}</Pill>)}</div> */}
                <h3 className="font-serif text-2xl mb-4">Soft Skills</h3>
                <div className="flex flex-wrap gap-3">{['Leadership', 'Public Speaking', 'Teamwork', 'Adaptability', 'Communication', 'Problem Solving', 'Critical Thinking'].map((s) => <Pill key={s}>{s}</Pill>)}</div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* <section id="data-projects" className="px-6 py-20">
          <div className="mx-auto max-w-6xl"><h2 className="font-serif text-4xl mb-10">Data Science & Tech</h2><div className="grid gap-6 md:grid-cols-2">{dataProjects.map((p) => <motion.article {...fadeUp} key={p} className="scrapbook-card bg-[#fffaf2] p-6"><h3 className="font-serif text-xl mb-3">{p}</h3><p className="text-mediumBrown">Meaningful problem-solving project across analytics, machine learning, data engineering, or insight communication.</p></motion.article>)}</div></div>
        </section> */}

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

        <section id="creative-pr" className="px-6 py-20 bg-[#fffaf2]">
          <div className="mx-auto max-w-6xl"><h2 className="font-serif text-4xl mb-10">Creative & PR</h2><div className="grid gap-6 md:grid-cols-3">{organizationProjects.map((p) => <motion.article {...fadeUp} key={p.title} className="scrapbook-card bg-[#fff3e5] p-6"><h3 className="font-serif text-2xl mb-2">{p.title}</h3><p className="text-sm font-semibold text-accent mb-2">{p.role}</p><p className="text-mediumBrown leading-relaxed">{p.description}</p></motion.article>)}</div></div>
        </section>

        <section className="px-6 py-20" id="experience">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-serif text-4xl mb-10">Experience</h2>
            <div className="space-y-6">{experiences.map((exp) => <motion.article {...fadeUp} key={exp.title} className="scrapbook-card bg-[#fffaf2] p-6"><h3 className="font-serif text-2xl mb-3">{exp.title}</h3><div className="mb-3 flex flex-wrap gap-4 text-sm text-mediumBrown"><span className="inline-flex items-center gap-1"><MapPin size={14}/>{exp.location}</span><span className="inline-flex items-center gap-1"><Calendar size={14}/>{exp.period}</span></div><ul className="list-disc list-inside text-mediumBrown space-y-1">{exp.points.map((pt) => <li key={pt}>{pt}</li>)}</ul></motion.article>)}</div>
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
 

