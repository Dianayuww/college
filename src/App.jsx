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
    details: [
      'Multiclass classification model comparing Random Forest and XGBoost performance.',
      '10-fold cross-validation for robust evaluation and generalization checks.',
      'Confusion matrix analysis to identify misclassification patterns across behavior segments.',
    ],
  },
  { title: 'Tableau Life Expectancy Analysis', details: ['Built interactive dashboards connecting life expectancy to socio-economic indicators and policy contexts.'] },
  { title: 'Maxim UX Analysis', details: ['Evaluated usability flow, pain points, and interaction opportunities to propose clearer and more human-centered product journeys.'] },
  { title: 'Hotel Management System Database Design', details: ['Designed relational database schema, key constraints, and normalization strategy for efficient hotel operations data handling.'] },
]

const creativeWorks = [
  'Head of Public Relations — HMP Sains Data Unesa',
  'Banacle sustainability branding project',
  'Wirausaha Merdeka experience',
]

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cream via-[#f7efe3] to-[#f3e7d8]">
      <header className="fixed top-0 z-50 w-full bg-cream/80 backdrop-blur-md border-b border-beige/60">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-6">
          <p className="font-serif text-lg md:text-xl tracking-wide">Dian Ayu Fauziah</p>
          <ul className="hidden md:flex gap-6 text-sm">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="transition hover:text-clay">{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="pt-20">
        <section className="min-h-[calc(100vh-5rem)] px-6 py-16 flex items-center" id="about">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-beige bg-white/70 px-4 py-2 text-sm text-mocha shadow-soft">
              ✨ Welcome to my portfolio
            </div>
            <h1 className="mt-7 font-serif text-5xl leading-tight md:text-7xl">Dian Ayu Fauziah</h1>
            <p className="mt-5 text-base md:text-xl text-mocha/85">
              Data Science Student | Public Relations Enthusiast | Creative Problem Solver
            </p>
            <p className="mt-3 text-sm md:text-base text-clay font-medium">
              Data Science • Universitas Negeri Surabaya
            </p>
            <p className="mt-7 text-base text-mocha/80 leading-relaxed max-w-2xl mx-auto">
              I combine analytical thinking, communication clarity, and creative strategy to solve meaningful problems. This portfolio reflects how data, storytelling, and sustainability can work together to shape better decisions and stronger human impact.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#data-projects" className="rounded-full bg-mocha text-cream px-7 py-3 text-sm font-medium shadow-soft transition hover:bg-[#5b4333] hover:-translate-y-0.5">View Data Projects</a>
              <a href="#creative-pr" className="rounded-full bg-white text-mocha px-7 py-3 text-sm font-medium border border-beige shadow-soft transition hover:bg-beige/40 hover:-translate-y-0.5">View Creative & PR Works</a>
            </div>

            <div className="mt-10 flex flex-col items-center gap-2 text-mocha/55">
              <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
              <div className="h-10 w-6 rounded-full border border-mocha/30 p-1">
                <div className="h-2 w-2 rounded-full bg-mocha/50 mx-auto animate-bounce" />
              </div>
            </div>
          </div>
        </section>

        <section id="data-projects" className="px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-serif text-3xl md:text-4xl mb-10">Data Science & Tech</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {dataProjects.map((project) => (
                <article key={project.title} className="scrapbook-card p-6">
                  <h3 className="font-serif text-2xl mb-4">{project.title}</h3>
                  <ul className="space-y-2 list-disc list-inside text-mocha/85">
                    {project.details.map((detail) => <li key={detail}>{detail}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="creative-pr" className="px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-serif text-3xl md:text-4xl mb-10">Creative, Public Relations & Sustainability</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {creativeWorks.map((work) => (
                <div key={work} className="scrapbook-card p-6">
                  <p className="font-medium leading-relaxed">{work}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="px-6 py-16">
          <div className="mx-auto max-w-6xl scrapbook-card p-8">
            <h2 className="font-serif text-3xl mb-4">Skills & Experience Focus</h2>
            <p className="text-mocha/80 leading-relaxed">My interdisciplinary path bridges technical rigor and relationship-driven communication. I work at the intersection of insights, branding, and social impact to design strategies that are both evidence-based and emotionally resonant.</p>
          </div>
        </section>

        <section id="contact" className="px-6 py-16 pb-24">
          <div className="mx-auto max-w-6xl scrapbook-card p-8 text-center">
            <h2 className="font-serif text-3xl mb-4">Let&apos;s Collaborate</h2>
            <p className="text-mocha/80">Open to opportunities in data analytics, UX research, brand communication, and sustainability initiatives.</p>
          </div>
        </section>
      </main>
    </div>
  )
}
