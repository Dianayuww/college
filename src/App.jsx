import { useState } from 'react'
import polaroid from "./assets/polaroid.png";
import mcDuduk from "./assets/mc_duduk.jpeg";
import mcDiskusi from "./assets/mc_diskusi.jpeg";
import mcWmk from "./assets/mc_wmk.jpeg";
import mcStage from "./assets/mc_stage.jpeg";
import amli from "./assets/amli.jpeg";
import psd from "./assets/image (2).png";
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
import { ArrowDown, BookOpen, Lightbulb, Mail, Linkedin, Github, Instagram, Award, MapPin, Calendar, Sparkles, Users, ShoppingBag, ExternalLink, Database, PieChart, Server, Briefcase, CheckCircle2 } from 'lucide-react'
import aku2 from './assets/aku8.png'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Featured Project', href: '#featured-project' },
  { label: 'Data Projects', href: '#data-projects' },
  { label: 'Creative & PR', href: '#creative-pr' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#learning' },
  { label: 'Contact', href: '#contact' },
]

const dataProjects = [
{
  id: 1,
  title: 'Social Media Addiction Classification',
  linkGithub: 'https://github.com/Dianayuww/social-media-addiction-comparative-analysis',
  linkMedium: 'https://died-iaryyy.medium.com/brain-rot-itu-nyata-aku-buktiin-lewat-data-705-mahasiswa-85ae60721a20',
  linkJournal: 'https://link-jurnal-kamu.com', // Ganti dengan URL link jurnal publikasi kamu
  category: 'Machine Learning Research',
  description:
    'Classification model comparing Random Forest and XGBoost using three train-test split scenarios and 10-fold Cross Validation to predict social media addiction patterns.',
  tags: ['Python', 'Machine Learning', 'Random Forest', 'XGBoost', 'Social Media', 'Addiction'],
  image:
    'https://media.istockphoto.com/id/1292258619/id/foto/pemuda-memiliki-mata-yang-sakit-dan-lelah-saat-menggunakan-smartphone-saat-berbaring-di-tempat.webp?a=1&b=1&s=612x612&w=0&k=20&c=YevtZ0y1KXkMdNDxq9Lkqk7ASdmOZ8dnMQp2B8gVoUM=',
  details:
    'Focused on multiclass classification and behavioral pattern analysis using mental health and user activity indicators.',
},
  {
    id: 2,
    title: 'PKM AMLI — Student Innovation & Sustainable Research',
    linkGithub: 'https://journalmabis.org/mabis/article/view/864/452',
    buttonText: 'View Publication',
    category: 'Academic Research',
    description:
      'Developed an innovative and sustainable research project for the PKM AMLI initiative, integrating problem-solving methodologies, data-driven analysis, and strategic project implementation.',
    tags: ['Research', 'Data Analysis', 'Project Management', 'Product Innovation', 'Sustainability'],
    image: amli,
    details:
      'Executed end-to-end project workflows, from initial ideation and feasibility analysis to final presentation and reporting.',
  },
  {
    id: 3,
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
  {
    id: 4,
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
  {
    id: 5,
    title: 'Strategic Food Commodity Price Forecasting',
    linkGithub: 'https://drive.google.com/file/d/1jdHw_J1MOvLYOCz-cgBFzH1AHKUa-iUi/view?usp=sharing',
    category: 'Data Mining',
    description:
      'Applied deep learning (LSTM & GRU) and statistical models (Facebook Prophet) to forecast weekly prices of strategic food commodities (Rice, Red Chili, Garlic) in Surabaya using PIHPS BI data. Evaluated models using MAE, RMSE, and MAPE metrics.',
    tags: ['Time Series', 'Deep Learning', 'LSTM', 'GRU', 'Prophet', 'Python', 'Data Analysis'],
    image: psd,
    details:
      'Evaluated model performance across commodity volatility levels, with LSTM achieving 0.09% MAPE on stable commodities (Rice) and GRU scoring 13.42% MAPE on volatile items (Red Chili).',
  },
]

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

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55 },
}

export default function App() {
  // Sertifikasi versi baru (Grid Badges ala gambar 3 dengan Link Verifikasi)
  const certificationsBadges = [
    {
      title: 'Advanced SQL',
      issuer: 'Kaggle',
      year: '2026',
      link: 'https://www.kaggle.com/learn/certification/dianayuw/advanced-sql',
    },
    {
      title: 'Intro to SQL',
      issuer: 'Kaggle',
      year: '2026',
      link: 'https://www.kaggle.com/learn/certification/dianayuw/intro-to-sql',
    },
    {
      title: 'Data Analysis with Python',
      issuer: 'freeCodeCamp',
      year: '2025',
      link: 'https://freecodecamp.org/certification/dianayuww/data-analysis-with-python-v7',
    },
    {
      title: 'Belajar Dasar Data Science',
      issuer: 'Dicoding Indonesia',
      year: '2025',
      link: 'https://www.dicoding.com/certificates/',
    },
    {
      title: 'AWS Cloud Essentials Badge',
      issuer: 'AWS Training & Certification',
      year: '2024',
      link: 'https://www.credly.com/',
    },
    {
      title: 'Scientific Computing with Python',
      issuer: 'freeCodeCamp',
      year: '2025',
      link: 'https://freecodecamp.org/certification/dianayuww/scientific-computing-with-python-v7',
    },
  ]
  
  return (
    <div className="min-h-screen bg-background text-darkBrown font-sans">
      <header className="sticky top-0 z-50 border-b border-[#d9c4a6]/50 bg-[#fffaf2cc] backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <p className="font-serif text-lg md:text-xl font-bold text-[#7b1e3a]">Dian Ayu Fauziah</p>
          <ul className="hidden md:flex gap-6 text-sm text-mediumBrown font-medium">
            {navItems.map((item) => <li key={item.label}><a href={item.href} className="hover:text-darkBrown transition">{item.label}</a></li>)}
          </ul>
        </nav>
      </header>

      <main>
        {/* HERO SECTION */}
        <section
          id="home"
          className="relative min-h-screen overflow-hidden bg-[#fffaf7] px-6 pt-28 text-[#101b33]"
        >
          <div className="absolute right-10 top-36 grid grid-cols-8 gap-3 opacity-50">
            {Array.from({ length: 48 }).map((_, i) => (
              <span key={i} className="h-1 w-1 rounded-full bg-[#d6a778]" />
            ))}
          </div>

          <span className="absolute left-[28%] top-[23%] text-4xl text-[#d6a778]">✦</span>

          <div className="relative z-10 mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-10 md:grid-cols-2">
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
                Data Analyst
                <span className="mx-3 text-[#d6a778]">|</span>
                Data Science Graduate
              </p>

              <div className="mt-10 h-px w-24 bg-[#d6a778]" />

              <div className="mt-10 flex flex-wrap gap-5">
                <a
                  href="#featured-project"
                  className="inline-flex items-center gap-4 rounded-lg bg-[#7b1e3a] px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition hover:-translate-y-1 hover:bg-[#101b33]"
                >
                  View Featured Project <span>→</span>
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

            <div className="relative flex justify-center md:justify-end">
              <div className="relative h-[620px] w-[560px]">
                <div className="absolute bottom-[70px] right-[40px] h-[430px] w-[360px] rounded-t-full rounded-b-[45%] bg-[#e8cbc8]/85 shadow-[0_30px_80px_rgba(123,30,58,0.12)]" />
                <div className="absolute bottom-[120px] right-[15px] h-[430px] w-[430px] rounded-full border border-[#d6a778]/80" />
                <div className="absolute bottom-0 right-[-170px] h-[260px] w-[760px] rounded-tl-[100%] bg-[#101b33]" />

                <img
                  src={aku2}
                  alt="Dian Ayu Fauziah"
                  className="absolute bottom-0 right-[70px] z-30 h-[590px] w-auto object-contain drop-shadow-2xl"
                />

                <span className="absolute right-[40px] top-[110px] z-20 text-5xl text-[#7b1e3a]">✦</span>
                <span className="absolute right-[-10px] top-[160px] z-20 text-4xl text-[#7b1e3a]">✦</span>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION (FORMAT SESUAI GAMBAR) */}
<section
  id="about"
  className="relative overflow-hidden bg-[#fffaf7] px-6 py-24 text-[#101b33]"
>
  {/* Element Dekoratif Latar Belakang */}
  <div className="absolute left-10 top-16 text-4xl text-[#d6a778]/80">✦</div>
  <div className="absolute right-12 top-16 grid grid-cols-7 gap-3 opacity-40">
    {Array.from({ length: 35 }).map((_, i) => (
      <span key={i} className="h-1 w-1 rounded-full bg-[#d6a778]" />
    ))}
  </div>

  <div className="mx-auto max-w-7xl">
    {/* Header Area */}
    <div className="mb-8">
      <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#7b1e3a]">
        ABOUT ME
      </p>

      <h2 className="mt-3 font-serif text-5xl leading-tight text-[#101b33] md:text-6xl">
        Data-backed analysis. Strategic execution.
      </h2>

      <p className="mt-6 max-w-4xl text-lg leading-relaxed text-[#3f4658]">
        I bridge the gap between technical data engineering and business strategy. With hands-on experience in public service dashboards and retail transactional analysis, I ensure data turns into meaningful operational insights.
      </p>
    </div>

    {/* 3 Cards Grid (Analyze, Communicate, Execute) */}
    <div className="mt-12 grid gap-6 md:grid-cols-3">
      {/* Card 01 - ANALYZE */}
      <motion.div
        {...fadeUp}
        className="rounded-3xl border border-[#eadbc8]/80 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
      >
        <p className="font-serif text-4xl font-bold text-[#7b1e3a]">01</p>
        <h3 className="mt-4 font-bold uppercase tracking-wider text-[#101b33]">
          ANALYZE
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-[#5a6275]">
          Cleaning messy datasets, verifying multi-source OPD/Kaggle data, running SQL queries, and discovering trends across sales, profit margin, and customer behavior.
        </p>
      </motion.div>

      {/* Card 02 - COMMUNICATE */}
      <motion.div
        {...fadeUp}
        className="rounded-3xl border border-[#eadbc8]/80 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
      >
        <p className="font-serif text-4xl font-bold text-[#7b1e3a]">02</p>
        <h3 className="mt-4 font-bold uppercase tracking-wider text-[#101b33]">
          COMMUNICATE
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-[#5a6275]">
          Designing intuitive Metabase and MS Excel PivotChart dashboards with key performance indicators (KPIs) customized for executive and operational decision-makers.
        </p>
      </motion.div>

      {/* Card 03 - EXECUTE */}
      <motion.div
        {...fadeUp}
        className="rounded-3xl border border-[#eadbc8]/80 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
      >
        <p className="font-serif text-4xl font-bold text-[#7b1e3a]">03</p>
        <h3 className="mt-4 font-bold uppercase tracking-wider text-[#101b33]">
          EXECUTE
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-[#5a6275]">
          Translating insights into actionable business recommendations—such as pricing adjustments, inventory turnover optimization, and return rate mitigations.
        </p>
      </motion.div>
    </div>
  </div>
</section>

        {/* 1. FEATURED RECENT PROJECT (EXCEL DASHBOARD - KODE PERSIS GAMBAR 1) */}
        <section id="featured-project" className="px-6 py-24 bg-[#fffaf7]">
          <div className="mx-auto max-w-7xl">
            <motion.div {...fadeUp} className="mb-12">
              <span className="text-sm font-bold uppercase tracking-[0.35em] text-[#7b1e3a]">
                FEATURED RECENT PROJECT
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl text-[#101b33]">
                Retail Sales & Return Rate Analysis (MS Excel)
              </h2>
            </motion.div>

            <motion.div
              {...fadeUp}
              className="overflow-hidden rounded-[2.5rem] border border-[#eadbc8] bg-white p-6 shadow-xl md:p-10"
            >
              <div className="grid gap-10 lg:grid-cols-12 items-start">
                
                {/* Left Side: Business Narrative & KPIs */}
                <div className="lg:col-span-7 space-y-6">
                  <p className="text-lg leading-relaxed text-[#3f4658]">
                    End-to-end Excel analytical project: Cleaned a messy raw dataset of <strong>4,310 rows (2020–2024)</strong> down to 4,200 valid records using nested formulas and Text to Columns. Built dynamic PivotTables and an interactive dashboard to isolate Delivered orders and diagnose profit bottlenecks.
                  </p>

                  {/* 4 Metric Cards */}
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 pt-2">
                    <div className="rounded-2xl border border-[#eadbc8]/80 bg-[#fbf6f0] p-4 text-center">
                      <p className="text-xs font-semibold uppercase tracking-wider text-mediumBrown">DELIVERED ORDERS</p>
                      <p className="mt-2 font-serif text-2xl font-bold text-[#101b33]">2,725</p>
                      <p className="mt-1 text-[11px] text-gray-500">8 invalid flagged</p>
                    </div>

                    <div className="rounded-2xl border border-[#eadbc8]/80 bg-[#fbf6f0] p-4 text-center">
                      <p className="text-xs font-semibold uppercase tracking-wider text-mediumBrown">TOTAL SALES</p>
                      <p className="mt-2 font-serif text-2xl font-bold text-[#7b1e3a]">153.5M</p>
                      <p className="mt-1 text-[11px] text-gray-500">Filtered delivered</p>
                    </div>

                    <div className="rounded-2xl border border-[#eadbc8]/80 bg-[#fbf6f0] p-4 text-center">
                      <p className="text-xs font-semibold uppercase tracking-wider text-mediumBrown">PROFIT MARGIN</p>
                      <p className="mt-2 font-serif text-2xl font-bold text-[#1e6f5c]">18.7%</p>
                      <p className="mt-1 text-[11px] text-gray-500">Total 28.7M Profit</p>
                    </div>

                    <div className="rounded-2xl border border-[#eadbc8]/80 bg-[#fbf6f0] p-4 text-center">
                      <p className="text-xs font-semibold uppercase tracking-wider text-mediumBrown">RETURN RATE</p>
                      <p className="mt-2 font-serif text-2xl font-bold text-[#b83b5e]">18.3%</p>
                      <p className="mt-1 text-[11px] text-gray-500">32.4M total value</p>
                    </div>
                  </div>

                  {/* Key Findings List */}
                  <div className="pt-4 space-y-3">
                    <p className="text-sm font-bold uppercase tracking-widest text-[#101b33]">
                      ↳ KEY BUSINESS FINDINGS & RECOMMENDATIONS
                    </p>
                    <ul className="space-y-3 text-sm text-[#3f4658]">
                      <li className="flex items-start gap-2">
                        <span className="text-[#7b1e3a] font-bold">•</span>
                        <span><strong>High Sales ≠ High Profit:</strong> Electronics accounts for 58% of revenue but only 37% of profit (11.9% margin). Furniture earns 39% of total profit on only 26% of sales (28.4% margin).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#7b1e3a] font-bold">•</span>
                        <span><strong>Category Margin Disparity:</strong> Beauty has the highest margin (45.0%), while Groceries has the lowest (7.9%).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#7b1e3a] font-bold">•</span>
                        <span><strong>Sports 2024 Downturn:</strong> Sports sales dropped 40.6% (from 3.83M to 2.27M) due to declining order volume, not returns or cancellations.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#7b1e3a] font-bold">•</span>
                        <span><strong>Concentrated Return Losses:</strong> While return rate is uniform across categories (~18%), returned orders lost ~32.4M in value, with Electronics making up 62% due to high ticket size.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Feature Tags & Links */}
                  <div className="pt-4 flex flex-wrap gap-2 items-center">
                    {['Microsoft Excel', 'PivotTables & PivotCharts', 'Data Cleaning & Audit Log', 'Interactive Slicers'].map(tag => (
                      <span key={tag} className="rounded-full bg-[#f4e7d5] px-4 py-1.5 text-xs font-semibold text-[#101b33]">
                        {tag}
                      </span>
                    ))}
                    
                    <a
                      href="https://github.com/Dianayuww/retail-sales-excel-dashboard"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto inline-flex items-center gap-2 rounded-full bg-[#7b1e3a] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#101b33]"
                    >
                      <Github size={14} /> Repository GitHub ↗
                    </a>
                  </div>
                </div>

                {/* Right Side: Mockup Excel Preview Container */}
                <div className="lg:col-span-5 rounded-3xl bg-[#101b33] p-6 text-white shadow-2xl space-y-6">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="inline-flex items-center gap-2 text-xs font-medium text-[#d6a778]">
                      <Briefcase size={14} /> Excel Workbook Preview
                    </span>
                    <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-[11px] font-bold text-emerald-400">
                      4,200 Rows Cleaned
                    </span>
                  </div>

                  {/* Data Cleaning Log Summary Box */}
                  <div className="rounded-2xl bg-white/5 p-4 border border-white/10 space-y-2 text-xs">
                    <p className="font-semibold text-gray-300">Data Cleaning Log Summary</p>
                    <ul className="space-y-1.5 text-gray-400">
                      <li>• 30 fully blank rows → <span className="text-red-400 font-semibold">Removed</span></li>
                      <li>• 80 duplicate order_ids → <span className="text-red-400 font-semibold">Removed</span></li>
                      <li>• 11 Gender spellings → <span className="text-emerald-400 font-semibold">Standardized</span></li>
                      <li>• Quantity = 999 outlier → <span className="text-amber-400 font-semibold">Flagged & Excluded</span></li>
                    </ul>
                  </div>

                  {/* Dashboard Structure Component */}
                  <div className="space-y-3">
                    <p className="text-xs font-semibold text-gray-300">Dashboard Structure</p>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="rounded-xl bg-white/5 p-3 border border-white/10">
                        <p className="text-gray-400">KPI Cards Section</p>
                        <p className="mt-1 font-semibold text-emerald-400">Delivered & Margin</p>
                      </div>
                      <div className="rounded-xl bg-white/5 p-3 border border-white/10">
                        <p className="text-gray-400">Sales Trend (2020-2024)</p>
                        <p className="mt-1 font-semibold text-amber-400">PivotChart</p>
                      </div>
                      <div className="rounded-xl bg-white/5 p-3 border border-white/10 col-span-2">
                        <p className="text-gray-400">Category Profit Matrix</p>
                        <p className="mt-1 font-semibold text-sky-400">Margin Breakdown</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        </section>

        {/* DATA PROJECTS SECTION */}
        {/* DATA PROJECTS SECTION (MINIMALIST DESIGN) */}
{/* DATA PROJECTS SECTION */}
<section id="data-projects" className="px-6 py-24 bg-[#f8f5f2]">
  <div className="mx-auto max-w-7xl">
    {/* ... header section ... */}

    <div className="grid gap-8 md:grid-cols-2">
      {dataProjects.map((project) => (
        <motion.article
          {...fadeUp}
          key={project.id}
          className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-[#eadbc8]/60 bg-white/90 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#7b1e3a]/30 hover:shadow-xl"
        >
          <div>
            {/* 1. Container Gambar */}
            <div className="relative h-52 w-full overflow-hidden rounded-2xl bg-[#f4e7d5]/50">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80" />
              <div className="absolute left-4 top-4">
                <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#7b1e3a] shadow-sm backdrop-blur-md">
                  {project.category}
                </span>
              </div>
            </div>

            {/* 2. Judul, Deskripsi & Tags */}
            <div className="px-2 pt-6">
              <h3 className="font-serif text-2xl font-bold text-[#1f2a44] transition-colors group-hover:text-[#7b1e3a]">
                {project.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-mediumBrown">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg bg-[#f8efe3]/80 px-2.5 py-1 text-xs font-medium text-[#1f2a44]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 3. Detail Catatan & POSISI KODE RENDER TOMBOL ADA DI SINI */}
          <div className="mt-6 px-2 pt-4 border-t border-[#eadbc8]/40">
            <p className="text-xs italic leading-relaxed text-[#7b1e3a]/90">
              {project.details}
            </p>

            {/* 👇 KODE RENDER TOMBOL DITARUH DI SINI 👇 */}
            <div className="mt-4 flex flex-wrap gap-2 pt-1">
              {/* Tombol GitHub */}
              {project.linkGithub && (
                <a
                  href={project.linkGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#1f2a44]/15 bg-white px-4 py-1.5 text-xs font-semibold text-[#1f2a44] transition-all hover:bg-[#1f2a44] hover:text-white"
                >
                  <Github size={14} /> Repository ↗
                </a>
              )}

              {/* Tombol Medium / Artikel */}
              {project.linkMedium && (
                <a
                  href={project.linkMedium}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#7b1e3a]/30 bg-[#7b1e3a] px-4 py-1.5 text-xs font-semibold text-white transition-all hover:bg-[#5e162d]"
                >
                  <BookOpen size={14} /> Read Article ↗
                </a>
              )}

              {/* Tombol Jurnal Publikasi */}
              {project.linkJournal && (
                <a
                  href={project.linkJournal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#7b1e3a]/40 bg-[#f8efe3] px-4 py-1.5 text-xs font-semibold text-[#7b1e3a] transition-all hover:bg-[#7b1e3a] hover:text-white"
                >
                  <ExternalLink size={14} /> View Publication ↗
                </a>
              )}
            </div>
            {/* 👆 AKHIR DARI KODE RENDER TOMBOL 👆 */}

          </div>
        </motion.article>
      ))}
    </div>
  </div>
</section>
        {/* EXPERIENCE SECTION */}
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

        {/* CREATIVE & PR SECTION (MINIMALIST 3-COLUMN GRID) */}
<section id="creative-pr" className="px-6 py-24 bg-[#fffaf7]">
  <div className="mx-auto max-w-7xl">
    
    {/* Section Header */}
    <div className="mb-16 text-center">
      <span className="inline-flex rounded-full border border-[#7b1e3a]/20 bg-[#7b1e3a]/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#7b1e3a]">
        ✨ Creative & PR Portfolio
      </span>
      <h2 className="mt-4 font-serif text-4xl md:text-5xl text-[#101b33]">
        Strategic Communication & Innovation
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-mediumBrown">
        Combining leadership, public relations, copy strategy, and sustainable product innovation.
      </p>
    </div>

    {/* 3 Columns Card Grid */}
    <div className="grid gap-8 md:grid-cols-3">
      {organizationProjects.map((work) => (
        <motion.article
          {...fadeUp}
          key={work.id}
          className={`group flex flex-col justify-between overflow-hidden rounded-3xl border border-[#eadbc8]/80 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#7b1e3a]/30 hover:shadow-xl ${
            work.highlight ? 'ring-2 ring-[#7b1e3a]/30' : ''
          }`}
        >
          <div>
            {/* Image Header with Badge */}
            <div className="relative h-52 w-full overflow-hidden rounded-2xl bg-[#f8efe3]">
              <img
                src={work.image}
                alt={work.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80" />
              
              <div className="absolute left-3 top-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-[#7b1e3a] backdrop-blur-md shadow-sm">
                  {work.period}
                </span>
                {work.highlight && (
                  <span className="rounded-full bg-[#7b1e3a] px-3 py-1 text-[11px] font-semibold text-white shadow-sm">
                    Featured
                  </span>
                )}
              </div>
            </div>

            {/* Content Body */}
            <div className="pt-5 px-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#7b1e3a]">
                {work.organization}
              </span>
              <h3 className="mt-1 font-serif text-2xl font-bold text-[#101b33] transition-colors group-hover:text-[#7b1e3a]">
                {work.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#5a6275]">
                {work.description}
              </p>
            </div>
          </div>

          {/* Tags & Action Link */}
          <div className="mt-6 pt-4 border-t border-[#eadbc8]/50 flex flex-col gap-3">
            <div className="flex flex-wrap gap-1.5">
              {work.tags.map((tag) => (
                <span key={tag} className="rounded-md bg-[#f8efe3] px-2.5 py-1 text-xs font-medium text-[#101b33]">
                  {tag}
                </span>
              ))}
            </div>

            {work.link && (
              <a
                href={work.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#7b1e3a] px-4 py-2 text-xs font-bold text-white transition-all hover:bg-[#101b33]"
              >
                <ShoppingBag size={14} /> Shop Banacle ↗
              </a>
            )}
          </div>
        </motion.article>
      ))}
    </div>

  </div>
</section>

        {/* BEYOND THE NUMBERS SECTION */}
<section
  id="communication"
  className="bg-[#fffaf7] px-6 py-24 border-t border-[#eadbc8]/50"
>
  <div className="mx-auto max-w-7xl">
    
    {/* Upper Section: Narrative & Pill Badges */}
    <div className="grid gap-10 lg:grid-cols-12 items-center mb-16">
      <div className="lg:col-span-7">
        <p className="text-xs font-bold uppercase tracking-[0.45em] text-[#7b1e3a]">
          BEYOND THE NUMBERS
        </p>

        <h2 className="mt-4 font-serif text-4xl md:text-6xl leading-tight text-[#1f2a44]">
          Speaking, Leading, <br /> & Connecting
        </h2>

        <p className="mt-5 text-base md:text-lg leading-relaxed text-[#5a6275] max-w-2xl">
          Through public speaking, moderating, event handling, and cross-functional team collaboration, 
          I bridge technical insights with human connection—turning data and ideas into meaningful experiences.
        </p>

        {/* 3 Skill Badges */}
        <div className="mt-8 flex flex-wrap gap-3">
          <span className="rounded-full border border-[#7b1e3a]/20 bg-[#f8efe3] px-4 py-2 text-xs font-semibold text-[#7b1e3a]">
            🎙️ Public Speaking & MC
          </span>
          <span className="rounded-full border border-[#7b1e3a]/20 bg-[#f8efe3] px-4 py-2 text-xs font-semibold text-[#7b1e3a]">
            🤝 Event Moderating
          </span>
          <span className="rounded-full border border-[#7b1e3a]/20 bg-[#f8efe3] px-4 py-2 text-xs font-semibold text-[#7b1e3a]">
            👥 Team Leadership & PR
          </span>
        </div>
      </div>
    </div>

    {/* Hanging Polaroid Gallery */}
    <div className="relative border-t-2 border-[#c8a27a]/60 pt-16">
      <div className="flex flex-wrap items-start justify-center gap-6 md:gap-10">
        
        {/* Photo 1 */}
        <div className="group relative transition-all duration-300 hover:-translate-y-3 hover:rotate-0">
          <div className="absolute left-1/2 top-[-40px] h-10 w-[2px] -translate-x-1/2 bg-[#c8a27a]" />
          <div className="relative rounded-sm bg-white p-3 shadow-xl border border-[#eadbc8]/60 rotate-[-4deg]">
            <img
              src={mcDuduk}
              alt="MC Duduk Session"
              className="h-[250px] w-[200px] object-cover rounded-sm"
            />
            <div className="mt-3 text-center">
              <p className="font-serif text-sm font-bold text-[#1f2a44]">Master of Ceremonies</p>
              <p className="text-[11px] text-[#7b1e3a]">Formal Event Host</p>
            </div>
          </div>
        </div>

        {/* Photo 2 */}
        <div className="group relative mt-8 transition-all duration-300 hover:-translate-y-3 hover:rotate-0">
          <div className="absolute left-1/2 top-[-72px] h-18 w-[2px] -translate-x-1/2 bg-[#c8a27a]" />
          <div className="relative rounded-sm bg-white p-3 shadow-xl border border-[#eadbc8]/60 rotate-[5deg]">
            <img
              src={mcWmk}
              alt="WMK Program"
              className="h-[280px] w-[220px] object-cover rounded-sm"
            />
            <div className="mt-3 text-center">
              <p className="font-serif text-sm font-bold text-[#1f2a44]">WMK Batch 3 Showcase</p>
              <p className="text-[11px] text-[#7b1e3a]">Presentation & Pitching</p>
            </div>
          </div>
        </div>

        {/* Photo 3 */}
        <div className="group relative transition-all duration-300 hover:-translate-y-3 hover:rotate-0">
          <div className="absolute left-1/2 top-[-40px] h-10 w-[2px] -translate-x-1/2 bg-[#c8a27a]" />
          <div className="relative rounded-sm bg-white p-3 shadow-xl border border-[#eadbc8]/60 rotate-[-3deg]">
            <img
              src={mcDiskusi}
              alt="Discussion Forum"
              className="h-[240px] w-[200px] object-cover rounded-sm"
            />
            <div className="mt-3 text-center">
              <p className="font-serif text-sm font-bold text-[#1f2a44]">Moderator & Speaker</p>
              <p className="text-[11px] text-[#7b1e3a]">Public Discussion</p>
            </div>
          </div>
        </div>

        {/* Photo 4 */}
        <div className="group relative mt-6 transition-all duration-300 hover:-translate-y-3 hover:rotate-0">
          <div className="absolute left-1/2 top-[-64px] h-16 w-[2px] -translate-x-1/2 bg-[#c8a27a]" />
          <div className="relative rounded-sm bg-white p-3 shadow-xl border border-[#eadbc8]/60 rotate-[4deg]">
            <img
              src={mcStage}
              alt="Stage MC"
              className="h-[270px] w-[210px] object-cover rounded-sm"
            />
            <div className="mt-3 text-center">
              <p className="font-serif text-sm font-bold text-[#1f2a44]">Stage Director & MC</p>
              <p className="text-[11px] text-[#7b1e3a]">Grand Event Handling</p>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</section>

        {/* 2. TECHNICAL SKILLS & TOOLS (PERSIS LAYOUT GAMBAR 2 DENGAN TAMBAHAN LOGO LOGO) */}
        <section
          id="skills"
          className="relative overflow-hidden bg-[#fffaf7] px-6 py-24 text-[#101b33]"
        >
          <div className="mx-auto max-w-7xl">
            <motion.div {...fadeUp} className="mb-14">
              <p className="text-sm font-bold uppercase tracking-[0.4em] text-[#7b1e3a]">
                CAPABILITIES
              </p>
              <h2 className="mt-3 font-serif text-4xl md:text-6xl">
                Technical Skills & Tools
              </h2>
            </motion.div>

            {/* 4 Equal Cards Grid ala Gambar 2 */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              
              {/* Card 1: Data Analysis & SQL */}
              <div className="rounded-3xl border border-[#eadbc8] bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f8efe3] text-[#7b1e3a]">
                  <Database size={24} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#101b33] mb-4">
                  Data Analysis & SQL
                </h3>
                <ul className="space-y-3 text-sm text-[#3f4658]">
                  <li className="flex items-center gap-2">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" className="h-4 w-4" alt="SQL" />
                    <span>Advanced SQL (Kaggle Certified)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="h-4 w-4" alt="Python" />
                    <span>Python (Pandas, NumPy)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/microsoftexcel.svg" className="h-4 w-4" alt="Excel" />
                    <span>MS Excel (Pivot, VLOOKUP)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#7b1e3a]" />
                    <span>Data Cleaning & Validation</span>
                  </li>
                </ul>
              </div>

              {/* Card 2: Data Visualization */}
              <div className="rounded-3xl border border-[#eadbc8] bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f8efe3] text-[#7b1e3a]">
                  <PieChart size={24} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#101b33] mb-4">
                  Data Visualization
                </h3>
                <ul className="space-y-3 text-sm text-[#3f4658]">
                  <li className="flex items-center gap-2">
                    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/metabase.svg" className="h-4 w-4" alt="Metabase" />
                    <span>Metabase Public Dashboards</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/microsoftexcel.svg" className="h-4 w-4" alt="Excel" />
                    <span>MS Excel Interactive Dashboards</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tableau.svg" className="h-4 w-4" alt="Tableau" />
                    <span>Tableau & Looker Studio</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#7b1e3a]" />
                    <span>Executive Reporting</span>
                  </li>
                </ul>
              </div>

              {/* Card 3: Database & Pipeline */}
              <div className="rounded-3xl border border-[#eadbc8] bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f8efe3] text-[#7b1e3a]">
                  <Server size={24} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#101b33] mb-4">
                  Database & Pipeline
                </h3>
                <ul className="space-y-3 text-sm text-[#3f4658]">
                  <li className="flex items-center gap-2">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" className="h-4 w-4" alt="PostgreSQL" />
                    <span>DBeaver & PostgreSQL</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/postman.svg" className="h-4 w-4" alt="Postman" />
                    <span>Postman API Endpoint Testing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#7b1e3a]" />
                    <span>AWS Glue ETL Concepts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" className="h-4 w-4" alt="Git" />
                    <span>Jupyter & Git / GitHub</span>
                  </li>
                </ul>
              </div>

              {/* Card 4: Business & Soft Skills */}
              <div className="rounded-3xl border border-[#eadbc8] bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f8efe3] text-[#7b1e3a]">
                  <Briefcase size={24} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#101b33] mb-4">
                  Business & Soft Skills
                </h3>
                <ul className="space-y-3 text-sm text-[#3f4658]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#7b1e3a]" />
                    <span>COGS & Pricing Analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#7b1e3a]" />
                    <span>Retail Inventory & Return KPI</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#7b1e3a]" />
                    <span>Public Relations Lead (HMP)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#7b1e3a]" />
                    <span>Stakeholder Presentation</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* 3. CERTIFICATIONS & PROFESSIONAL BADGES (PERSIS GAMBAR 3 DENGAN LINK SERTIFIKAT) */}
        <section
          id="learning"
          className="px-6 py-24 bg-[#f8f5f2]"
        >
          <div className="mx-auto max-w-6xl">
            <motion.div {...fadeUp} className="mb-14">
              <span className="text-sm font-bold uppercase tracking-[0.35em] text-[#7b1e3a]">
                CONTINUOUS LEARNING
              </span>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl text-[#101b33]">
                Certifications & Professional Badges
              </h2>
            </motion.div>

            {/* Grid 6 Cards Badges Minimalis ala Gambar 3 */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {certificationsBadges.map((cert) => (
                <motion.a
                  key={cert.title}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  {...fadeUp}
                  className="group flex items-center gap-4 rounded-2xl border border-[#eadbc8] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#7b1e3a] hover:shadow-md"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#f8efe3] text-[#7b1e3a] transition group-hover:bg-[#7b1e3a] group-hover:text-white">
                    <Award size={22} />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#101b33] group-hover:text-[#7b1e3a] transition">
                      {cert.title}
                    </h3>
                    <p className="mt-1 text-xs text-mediumBrown">
                      {cert.issuer} ({cert.year})
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="px-6 py-20 bg-darkBrown text-cream">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-serif text-4xl md:text-5xl">
              Let’s Build Meaningful Projects Together.
            </h2>

            <div className="mt-8 flex flex-wrap justify-center gap-5 text-sm">
              <a
                className="inline-flex items-center gap-2 hover:opacity-80"
                href="mailto:dianayufauziahh@gmail.com"
              >
                <Mail size={16} />
                dianayufauziahh@gmail.com
              </a>

              <a
                className="inline-flex items-center gap-2 hover:opacity-80"
                href="https://linkedin.com/in/dian-ayu-fauziah"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={16} />
                linkedin.com/in/dian-fauziah
              </a>

              <a
                className="inline-flex items-center gap-2 hover:opacity-80"
                href="https://github.com/Dianayuww"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={16} />
                GitHub
              </a>

              <a
                className="inline-flex items-center gap-2 hover:opacity-80"
                href="https://died-iaryyy.medium.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BookOpen size={16} />
                Medium
              </a>
            </div>

            <div className="mt-4 text-sm text-cream/85">
              Phone: +62 85184665784
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-darkBrown/95 py-6 text-center text-xs text-cream/85">
        © 2026 Dian Ayu Fauziah — Multidisciplinary Portfolio
      </footer>
    </div>
  )
}
