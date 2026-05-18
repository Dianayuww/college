 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/src/App.jsx b/src/App.jsx
new file mode 100644
index 0000000000000000000000000000000000000000..7a574aeec42103afaa816be82c53d72ff514b5f7
--- /dev/null
+++ b/src/App.jsx
@@ -0,0 +1,195 @@
+import { motion } from 'framer-motion'
+import { ArrowDown, BookOpen, Lightbulb, Mail, Linkedin, Github, Instagram, Award, MapPin, Calendar } from 'lucide-react'
+import dianPortrait from './assets/dian-portrait.jpeg'
+
+const navItems = [
+  { label: 'About', href: '#about' },
+  { label: 'Data Projects', href: '#data-projects' },
+  { label: 'Creative & PR', href: '#creative-pr' },
+  { label: 'Skills', href: '#skills' },
+  { label: 'Contact', href: '#contact' },
+]
+
+const dataProjects = [
+  'Development of a Classification Model for Diabetes Prediction Using Decision Tree Algorithm',
+  'Hotel Management System Using Microsoft Access',
+  'Recommendation Wishlist to Buy Skincare Using Selection Sort',
+  'Analysis of Life Expectancy Between Males and Females for the Years 2020–2022 in Indonesia',
+  'Sentiment Analysis through Twitter Data Collection on the Palestine-Israel Conflict',
+  'Sentiment Analysis of Kartu Indonesia Pintar Kuliah (KIPK) from Tweets on Platform X',
+  'Analysis of Customer Shopping Behavior Segmentation Using K-Means Clustering Algorithm',
+  'Social Media Addiction Classification using Random Forest and XGBoost',
+]
+
+const experiences = [
+  {
+    title: 'Data Analyst Intern — SEAL (Social Economic Accelerator Lab)',
+    location: 'Malang, Indonesia',
+    period: 'Feb 2025 – Present',
+    points: [
+      'Contributing to MajaDigi Super App by analyzing and managing public service data.',
+      'Sourcing foundational datasets from BPS Indonesia and BPS East Java for dashboards.',
+      'Performing ETL processes using AWS Glue and building executive-level dashboards.',
+    ],
+  },
+  {
+    title: 'Statistical Data Analyst Intern — East Java Provincial Department of Communication and Informatics',
+    location: 'Surabaya, Indonesia',
+    period: 'Mar 2025 – Jun 2025',
+    points: [
+      'Contributed to public service digital transformation through MajaDigi Super App initiative.',
+      'Designed data-driven solutions for government services and strategic programs.',
+      'Performed statistical analysis and supported AI-powered decision systems.',
+    ],
+  },
+]
+
+const organizationProjects = [
+  {
+    title: 'HMP Sains Data Unesa',
+    role: 'Head of Public Relations Division (Mar 2024 – Feb 2025)',
+    description: 'Created copywriting for website/social media and led 7 PR team members to meet publication targets.',
+  },
+  {
+    title: 'PKKMB UNESA 2023',
+    role: 'Member of Facilitator Committee (Aug 2023 – Sep 2023)',
+    description: 'Evaluated assignments for new students and coordinated orientation event support.',
+  },
+  {
+    title: 'Wirausaha Merdeka Batch 3 — Ciputra University',
+    role: 'Participant (Sep 2024 – Dec 2024)',
+    description: 'Developed circular economy-oriented business ideas and eco-friendly product innovation concepts.',
+  },
+]
+
+const skillGroups = {
+  Programming: ['Python (Advanced)', 'SQL (Advanced)', 'R (Intermediate)'],
+  'Data Visualization': ['Tableau', 'Looker Studio', 'Power BI', 'Google Colab'],
+  Design: ['Canva', 'Figma'],
+  Productivity: ['Excel', 'Word', 'Access', 'Google Forms', 'Google Sheets', 'Google Docs'],
+  Languages: ['Indonesian (Fluent)', 'English (Intermediate)', 'Arabic (Intermediate)'],
+}
+
+const certifications = [
+  { title: 'Data Analysis with Python', issuer: 'FreeCodeCamp', year: '2025' },
+  { title: 'Student Developer Initiative', issuer: 'IBM SkillsBuild', year: '2025' },
+  { title: 'Google Cloud Roadshow Surabaya', issuer: 'Google Cloud', year: '2025' },
+  { title: 'BISA AI Certification', issuer: 'BISA AI', year: '2025' },
+]
+
+const fadeUp = { hidden: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 }, transition: { duration: 0.55 } }
+
+const Pill = ({ children, filled = false }) => (
+  <span className={`rounded-full px-4 py-2 text-sm font-medium ${filled ? 'bg-accent text-cream' : 'bg-white/70 border border-accent text-mediumBrown'}`}>
+    {children}
+  </span>
+)
+
+export default function App() {
+  return (
+    <div className="min-h-screen bg-background text-darkBrown">
+      <header className="sticky top-0 z-50 border-b border-[#d9c4a6]/50 bg-[#fffaf2cc] backdrop-blur-md">
+        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
+          <p className="font-serif text-lg md:text-xl">Dian Ayu Fauziah</p>
+          <ul className="hidden md:flex gap-6 text-sm text-mediumBrown">
+            {navItems.map((item) => <li key={item.label}><a href={item.href} className="hover:text-darkBrown transition">{item.label}</a></li>)}
+          </ul>
+        </nav>
+      </header>
+
+      <main>
+        <section id="home" className="min-h-[calc(100vh-4.5rem)] flex items-center px-6 py-20 bg-gradient-to-b from-[#fffaf2] via-[#f7ecd9] to-background">
+          <motion.div {...fadeUp} className="mx-auto max-w-4xl text-center">
+            <span className="inline-flex rounded-full border border-[#d9c4a6] bg-white/70 px-4 py-2 text-sm text-mediumBrown shadow-soft">✨ Welcome to my portfolio</span>
+            <h1 className="mt-6 font-serif text-5xl md:text-7xl text-darkBrown">Dian Ayu Fauziah</h1>
+            <p className="mt-4 text-lg md:text-xl text-mediumBrown">Data Science Student | Public Relations Enthusiast | Creative Problem Solver</p>
+            <p className="mt-2 text-sm md:text-base text-accent">Data Science • State University of Surabaya</p>
+            <div className="mt-8 flex justify-center">
+              <div className="rounded-[2rem] bg-[#f2e2ca] p-2 shadow-soft">
+                <img src={dianPortrait} alt="Portrait of Dian Ayu Fauziah" className="h-56 w-44 md:h-64 md:w-52 rounded-[1.6rem] object-cover shadow-lg" />
+              </div>
+            </div>
+            <p className="mt-6 max-w-2xl mx-auto text-mediumBrown">Data Science undergraduate with strong skills in data processing, machine learning, and data visualization. Passionate about using data to generate actionable insights and solve real-world problems.</p>
+            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
+              <a href="#data-projects" className="rounded-full bg-darkBrown px-7 py-3 text-sm text-cream shadow-soft transition hover:-translate-y-0.5">View Data Projects</a>
+              <a href="#creative-pr" className="rounded-full border border-[#ceb18c] bg-white/80 px-7 py-3 text-sm text-darkBrown shadow-soft transition hover:-translate-y-0.5">View Creative & PR Works</a>
+            </div>
+            <div className="mt-10 flex flex-col items-center text-mediumBrown/70"><ArrowDown size={20} className="animate-bounce" /></div>
+          </motion.div>
+        </section>
+
+        <section id="about" className="bg-[#fffaf2] px-6 py-20">
+          <motion.div {...fadeUp} className="mx-auto max-w-6xl">
+            <h2 className="text-center text-4xl font-bold">About Me</h2>
+            <div className="mx-auto mt-3 h-1.5 w-20 rounded-full bg-[#7b6252]" />
+            <div className="mt-12 grid gap-8 lg:grid-cols-2">
+              <div className="space-y-6">
+                <div className="scrapbook-card bg-[#fff3e5] p-7"><p className="text-mediumBrown leading-relaxed">I am an adaptable undergraduate student majoring in Data Science, eager to contribute meaningfully as a Data Analyst. I possess the ability to collaborate effectively in teams and possess a strong desire to continuously learn and develop both hard and soft skills.</p></div>
+                <article className="scrapbook-card bg-[#fff3e5] p-7"><BookOpen className="mb-3 text-accent"/><h3 className="font-serif text-2xl mb-2">Education</h3><p><b>University:</b> State University of Surabaya</p><p><b>Major:</b> Data Science (2022 - Present)</p><p><b>GPA:</b> 3.66 / 4.00</p></article>
+                <article className="scrapbook-card bg-[#fff3e5] p-7"><Lightbulb className="mb-3 text-accent"/><h3 className="font-serif text-2xl mb-2">My Approach</h3><p>Combining analytical thinking with creative problem-solving to deliver impactful solutions.</p></article>
+              </div>
+              <div className="scrapbook-card bg-[#fff3e5] p-7">
+                <h3 className="font-serif text-2xl mb-4">Technical Skills</h3>
+                <div className="mb-8 flex flex-wrap gap-3">{['Python', 'R', 'SQL', 'Tableau', 'Looker Studio', 'Microsoft Office', 'Canva', 'Figma', 'Power BI'].map((s) => <Pill key={s} filled>{s}</Pill>)}</div>
+                <h3 className="font-serif text-2xl mb-4">Soft Skills</h3>
+                <div className="flex flex-wrap gap-3">{['Leadership', 'Public Speaking', 'Teamwork', 'Adaptability', 'Communication', 'Problem Solving', 'Critical Thinking'].map((s) => <Pill key={s}>{s}</Pill>)}</div>
+              </div>
+            </div>
+          </motion.div>
+        </section>
+
+        <section id="data-projects" className="px-6 py-20">
+          <div className="mx-auto max-w-6xl"><h2 className="font-serif text-4xl mb-10">Data Science & Tech</h2><div className="grid gap-6 md:grid-cols-2">{dataProjects.map((p) => <motion.article {...fadeUp} key={p} className="scrapbook-card bg-[#fffaf2] p-6"><h3 className="font-serif text-xl mb-3">{p}</h3><p className="text-mediumBrown">Meaningful problem-solving project across analytics, machine learning, data engineering, or insight communication.</p></motion.article>)}</div></div>
+        </section>
+
+        <section id="creative-pr" className="px-6 py-20 bg-[#fffaf2]">
+          <div className="mx-auto max-w-6xl"><h2 className="font-serif text-4xl mb-10">Creative & PR</h2><div className="grid gap-6 md:grid-cols-3">{organizationProjects.map((p) => <motion.article {...fadeUp} key={p.title} className="scrapbook-card bg-[#fff3e5] p-6"><h3 className="font-serif text-2xl mb-2">{p.title}</h3><p className="text-sm font-semibold text-accent mb-2">{p.role}</p><p className="text-mediumBrown leading-relaxed">{p.description}</p></motion.article>)}</div></div>
+        </section>
+
+        <section className="px-6 py-20" id="experience">
+          <div className="mx-auto max-w-6xl">
+            <h2 className="font-serif text-4xl mb-10">Experience</h2>
+            <div className="space-y-6">{experiences.map((exp) => <motion.article {...fadeUp} key={exp.title} className="scrapbook-card bg-[#fffaf2] p-6"><h3 className="font-serif text-2xl mb-3">{exp.title}</h3><div className="mb-3 flex flex-wrap gap-4 text-sm text-mediumBrown"><span className="inline-flex items-center gap-1"><MapPin size={14}/>{exp.location}</span><span className="inline-flex items-center gap-1"><Calendar size={14}/>{exp.period}</span></div><ul className="list-disc list-inside text-mediumBrown space-y-1">{exp.points.map((pt) => <li key={pt}>{pt}</li>)}</ul></motion.article>)}</div>
+          </div>
+        </section>
+
+        <section id="skills" className="px-6 py-20 bg-[#fffaf2]">
+          <div className="mx-auto max-w-6xl"><h2 className="font-serif text-4xl mb-10">Skills</h2><div className="grid md:grid-cols-2 gap-6">{Object.entries(skillGroups).map(([g, items]) => <motion.div {...fadeUp} key={g} className="scrapbook-card bg-[#fff3e5] p-6"><h3 className="font-semibold text-xl mb-4">{g}</h3><div className="flex flex-wrap gap-2">{items.map((i) => <Pill key={i}>{i}</Pill>)}</div></motion.div>)}</div></div>
+        </section>
+
+        <section id="learning" className="px-6 py-20">
+          <div className="mx-auto max-w-6xl">
+            <h2 className="font-serif text-4xl mb-10">Learning & Certifications</h2>
+            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
+              {certifications.map((cert) => (
+                <motion.article {...fadeUp} key={cert.title} className="scrapbook-card bg-[#fffaf2] p-6">
+                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#f4dfc3] text-accent"><Award size={18} /></div>
+                  <h3 className="font-serif text-xl leading-snug">{cert.title}</h3>
+                  <p className="mt-2 text-sm text-mediumBrown">{cert.issuer}</p>
+                  <p className="text-sm text-accent">{cert.year}</p>
+                  <a href="https://bit.ly/40t89Ta" className="mt-4 inline-block rounded-full border border-accent px-4 py-2 text-xs text-mediumBrown hover:bg-[#f9efdf] transition">View Credential</a>
+                </motion.article>
+              ))}
+            </div>
+          </div>
+        </section>
+
+        <section id="contact" className="px-6 py-20 bg-darkBrown text-cream">
+          <div className="mx-auto max-w-4xl text-center">
+            <h2 className="font-serif text-4xl md:text-5xl">Let’s Build Meaningful Projects Together.</h2>
+            <div className="mt-8 flex flex-wrap justify-center gap-5 text-sm">
+              <a className="inline-flex items-center gap-2 hover:opacity-80" href="mailto:dianayufauziahh@gmail.com"><Mail size={16}/>dianayufauziahh@gmail.com</a>
+              <a className="inline-flex items-center gap-2 hover:opacity-80" href="https://linkedin.com/in/dian-fauziah"><Linkedin size={16}/>linkedin.com/in/dian-fauziah</a>
+              <a className="inline-flex items-center gap-2 hover:opacity-80" href="#"><Github size={16}/>GitHub</a>
+              <a className="inline-flex items-center gap-2 hover:opacity-80" href="#"><Instagram size={16}/>Instagram</a>
+            </div>
+            <div className="mt-4 text-sm text-cream/85">Phone: +62 85184665784</div>
+            <a href="https://bit.ly/40t89Ta" className="mt-8 inline-block rounded-full bg-[#fffaf2] px-7 py-3 text-darkBrown shadow-soft transition hover:-translate-y-0.5">Download CV</a>
+          </div>
+        </section>
+      </main>
+
+      <footer className="bg-darkBrown/95 py-6 text-center text-xs text-cream/85">© 2026 Dian Ayu Fauziah — Multidisciplinary Portfolio</footer>
+    </div>
+  )
+}
 
EOF
)
