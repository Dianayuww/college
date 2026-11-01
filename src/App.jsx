import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ExternalLink, CheckCircle2 } from 'lucide-react';

// Pastikan path import logo sesuai dengan aset proyek kamu
import sealLogo from './assets/seal.png';
import kominfoLogo from './assets/kominfo.png';
import majadigiLogo from './assets/majadigi.png';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55 },
};

export default function ExperienceSection() {
  return (
    <section
      className="px-6 py-16 bg-gradient-to-br from-[#f8f5f2] via-[#f3e6e0] to-[#efe4d1]"
      id="experience"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Header Ringkas */}
        <div className="mb-10 text-center">
          <span className="inline-flex rounded-full border border-[#7b1e3a]/20 bg-white/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#7b1e3a]">
            Professional Journey
          </span>

          <h2 className="mt-3 font-serif text-3xl md:text-4xl font-bold text-[#1f2a44]">
            What I’ve Been Building
          </h2>
        </div>

        {/* Card Pengalaman Kerja Minimalis */}
        <motion.article
          {...fadeUp}
          className="overflow-hidden rounded-3xl border border-[#eadbc8] bg-white/90 p-6 md:p-8 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md"
        >
          {/* Header Card: Judul, Durasi, & Lokasi */}
          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[#eadbc8]/60 pb-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#7b1e3a]">
                SEAL (Social Economic Accelerator Lab) × Diskominfo Jawa Timur
              </span>
              <h3 className="mt-1 font-serif text-2xl md:text-3xl font-bold text-[#1f2a44]">
                Data Analyst Intern
              </h3>
              <p className="mt-1 flex items-center gap-1.5 text-xs font-medium text-mediumBrown">
                <MapPin size={13} className="text-[#7b1e3a]" />
                Surabaya, Indonesia (Hybrid / Onsite)
              </p>
            </div>

            <span className="rounded-full bg-[#f8efe3] border border-[#7b1e3a]/20 px-3.5 py-1 text-xs font-semibold text-[#7b1e3a]">
              Feb – Dec 2025
            </span>
          </div>

          {/* Bar Logo Tiga Entitas (Inline & Compact) */}
          <div className="mt-5 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-[#f8efe3]/70 px-6 py-3 border border-[#eadbc8]/50">
            <div className="flex items-center gap-4 sm:gap-6">
              <img
                src={sealLogo}
                alt="SEAL Logo"
                className="h-8 md:h-9 object-contain opacity-90 transition hover:opacity-100"
              />
              <span className="text-sm font-bold text-[#7b1e3a]/40">×</span>
              <img
                src={kominfoLogo}
                alt="Diskominfo Jatim Logo"
                className="h-9 md:h-11 object-contain opacity-90 transition hover:opacity-100"
              />
              <span className="text-sm font-bold text-[#7b1e3a]/40">×</span>
              <img
                src={majadigiLogo}
                alt="MajaDigi Super App Logo"
                className="h-8 md:h-9 object-contain opacity-90 transition hover:opacity-100"
              />
            </div>

            <a
              href="https://majadigi.jatimprov.go.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#7b1e3a] px-4 py-1.5 text-xs font-bold text-white transition hover:bg-[#101b33]"
            >
              Visit MajaDigi <ExternalLink size={12} />
            </a>
          </div>

          {/* Business Impact Metrics Bar (3 Highlights Kunci) */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="rounded-xl border border-[#eadbc8]/70 bg-[#fffaf7] p-3 text-center">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-mediumBrown">OWNERSHIP SCOPE</p>
              <p className="mt-0.5 font-serif text-lg font-bold text-[#7b1e3a]">PIC 6 Sektor Utama</p>
              <p className="text-[10px] text-gray-500">Kesehatan, Keuangan, Agro, dll.</p>
            </div>

            <div className="rounded-xl border border-[#eadbc8]/70 bg-[#fffaf7] p-3 text-center">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-mediumBrown">DATA PIPELINE</p>
              <p className="mt-0.5 font-serif text-lg font-bold text-[#1f2a44]">Multi-OPD & BPS</p>
              <p className="text-[10px] text-gray-500">SQL Queries & Python Cleaning</p>
            </div>

            <div className="rounded-xl border border-[#eadbc8]/70 bg-[#fffaf7] p-3 text-center">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-mediumBrown">EXECUTIVE INITIATIVE</p>
              <p className="mt-0.5 font-serif text-lg font-bold text-[#1e6f5c]">Program 99 Hari Kerja</p>
              <p className="text-[10px] text-gray-500">Gubernur Jawa Timur</p>
            </div>
          </div>

          {/* Poin Responsibilitas Berbasis Aksi (Bullet Points High-Impact) */}
          <div className="mt-6 space-y-2.5 text-sm leading-relaxed text-[#3f4658]">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-[#7b1e3a]" />
              <span>
                <strong>PIC Public Dashboard 6 Sektor:</strong> Memimpin perancangan dan pembuatan visualisasi data publik interaktif di Metabase untuk 6 sektor strategis (Kesehatan, Keuangan, Agro, Pendidikan, Infrastruktur, dan Industri).
              </span>
            </div>

            <div className="flex items-start gap-2.5">
              <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-[#7b1e3a]" />
              <span>
                <strong>Data Processing & Integration:</strong> Mengakses database multi-OPD menggunakan SQL (DBeaver/Navicat), membersihkan data mentah via Python, serta membantu tim Data Scientist melakukan penarikan REST API di Postman.
              </span>
            </div>

            <div className="flex items-start gap-2.5">
              <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-[#7b1e3a]" />
              <span>
                <strong>Monitoring KPI Operasional Daerah:</strong> Memvalidasi dan menyajikan tren data inflasi, ketersediaan faskes, dan kinerja perekonomian untuk membantu analisis *stakeholder* publik.
              </span>
            </div>
          </div>

          {/* Tech Stack Badges */}
          <div className="mt-6 flex flex-wrap gap-1.5 pt-4 border-t border-[#eadbc8]/40">
            {['SQL (Navicat/DBeaver)', 'Python (Pandas)', 'Metabase', 'Postman API', 'Excel PivotTable', 'Public Data Validation'].map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-[#f8efe3] px-2.5 py-1 text-xs font-medium text-[#1f2a44]"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.article>
      </div>
    </section>
  );
}
