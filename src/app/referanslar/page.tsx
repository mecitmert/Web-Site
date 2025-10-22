"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Globe,
  Rocket,
  LineChart,
  Store,
  ShoppingCart,
  ShieldCheck,
  SearchCheck,
  Code2,
  BadgeCheck,
  PencilRuler,
  Sparkles,
  BookOpen,
  Brain,
  Activity,
  ExternalLink,
} from "lucide-react";

/** =========================================================
 *  Projeler / Referanslar – Page
 *  Yol: src/app/projeler-referanslar/page.tsx
 *  Gerekli paketler: framer-motion, lucide-react
 *  =======================================================*/

const websiteProjects = [
  { title: "Genturk Industry", url: "https://genturkindustry.com", tags: ["React", "Tailwind", "Kurumsal"] },
  { title: "Bolvadi", url: "https://bolvadi.com", tags: ["PrestaShop", "E-Ticaret", "SEO"] },
  { title: "PiyerMary", url: "https://piyermary.com", tags: ["Marka", "Kurumsal Site"] },
  { title: "Bişkin", url: "https://biskin.com.tr", tags: ["Kurumsal", "Hizmet"] },
  { title: "Bişkin Haşhaş", url: "https://biskinhashas.com", tags: ["Landing", "Ürün"] },
  { title: "Bişkin Kamış", url: "https://biskinkamis.com", tags: ["Landing", "Ürün"] },
  { title: "Yılmaz Su Arıtma", url: "https://yilmazsuaritma.com", tags: ["Hizmet", "Kurumsal"] },
  { title: "Mr Fregoli", url: "https://www.mrfregoli.com", tags: ["Moda", "E-Ticaret"] },
  { title: "Techone Sigorta", url: "https://techonesigorta.com", tags: ["Kurumsal", "Hizmet"] },
];

const brandAndSocial = [
  {
    title: "Uraz Group",
    desc: "Sosyal medya yönetimi, içerik takvimi, kampanya kurgusu ve marka kimliği güçlendirme.",
    icon: PencilRuler,
    bullets: ["İçerik Stratejisi", "Tasarım Şablonları", "Kampanya Yönetimi"],
  },
  {
    title: "PiyerMary",
    desc: "Marka ismi, kurumsal renk & tipografi, logo varyasyonları, ambalaj yönetişimi.",
    icon: BadgeCheck,
    bullets: ["Naming", "Kurumsal Kimlik", "Ambalaj Çalışmaları"],
  },
];

const marketplaceOps = [
  {
    title: "Bişkin",
    desc: "Tüm pazaryerlerinde mağaza açılımı, kataloglama, reklam & SEO, operasyonel entegrasyonlar.",
    marketplaces: ["Trendyol", "Hepsiburada", "Amazon", "Temu", "ÇiçekSepeti", "Koçtaş", "N11"],
    icon: Store,
  },
  {
    title: "Bolvadi",
    desc: "Pazaryeri kurulumu + ölçeklenebilir ürün beslemeleri, SEO & reklam optimizasyonu.",
    marketplaces: ["Trendyol", "Hepsiburada", "Amazon", "N11", "Koçtaş"],
    icon: ShoppingCart,
  },
  {
    title: "Marka Tescil",
    desc: "Marka patent süreç danışmanlığı, sınıf/pazar analizi, başvuru dosyası ve takip.",
    marketplaces: ["Marka Tescil & Patent"],
    icon: ShieldCheck,
  },
];

const seoAndCode = [
  {
    title: "SigmaCenter",
    desc: "Kod revizesi, meta / OG / Schema güçlendirmeleri, performans ve CWV düzenlemeleri.",
    icon: Code2,
    bullets: ["Meta & OG", "Schema", "CWV İyileştirme"],
  },
  {
    title: "AltaSoft (altasoft.com.tr)",
    desc: "SEO düzenlemeleri, teknik düzeltmeler, içerik hiyerarşisi ve meta stratejisi.",
    icon: SearchCheck,
    bullets: ["Teknik SEO", "İçerik Mimarisi", "Meta Stratejisi"],
  },
  {
    title: "AltaSoft (altasoft.io)",
    desc: "Global domain için SEO optimizasyonu ve içerik/localization düzeni.",
    icon: SearchCheck,
    bullets: ["Uluslararası SEO", "İçerik Yerelleştirme"],
  },
];

const academic = {
  title: "Proje Özetleri Kitabı – EEG & ML Sınıflandırma",
  link: "https://lnkd.in/dciQ6nfA",
  points: [
    "32 katılımcının EEG verileri 4 durumda: Gözler Kapalı, Metin Okuma, Problem Çözme, Sosyal Medya Tarama.",
    "Hjorth Parametreleri, Bant Güç Oranları, Entropi Ölçümleri çıkarıldı.",
    "Makine öğrenimi algoritmaları ile durum sınıflandırması gerçekleştirildi.",
  ],
};

export default function Page() {
  return (
    <div className="relative w-full min-h-screen bg-[#0B1020] text-white">
      {/* Background glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.18),transparent_60%)] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(236,72,153,0.12),transparent_60%)] blur-3xl" />
      </div>

      {/* Hero */}
      <section className="mx-auto w-full max-w-7xl px-6 pt-20 md:pt-28">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-white/80 backdrop-blur">
            <Sparkles className="h-4 w-4" />
            Projeler & Referanslar
          </div>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            Ürettiğimiz İşlerle <span className="bg-gradient-to-r from-sky-400 via-emerald-300 to-fuchsia-300 bg-clip-text text-transparent">“Vay be”</span> dedirtiriz
          </h1>
          <p className="mt-3 max-w-2xl text-white/80">
            Web sitesi geliştirme, marka kimliği, pazaryeri operasyonları, SEO & kod revizyonları ve akademik çalışmalar. Aşağıda seçili işlerimizden bazıları.
          </p>
        </motion.div>
      </section>

      {/* Websites */}
      <Section
        title="Web Siteleri"
        subtitle="Kurumsal, e-ticaret ve landing sayfalar – performans ve dönüşüm odaklı."
        icon={Globe}
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {websiteProjects.map((p) => (
            <ProjectCard key={p.url} {...p} />
          ))}
        </div>
      </Section>

      {/* Brand & Social */}
      <Section title="Marka Kimliği & Sosyal Medya" subtitle="Markanın dili, görsel kimliği ve tutarlı içerik üretimi." icon={BadgeCheck}>
        <div className="grid gap-4 md:grid-cols-2">
          {brandAndSocial.map((b) => (
            <ServiceCard key={b.title} {...b} />
          ))}
        </div>
      </Section>

      {/* Marketplace */}
      <Section
        title="Pazaryeri Operasyonları"
        subtitle="Mağaza açılışından reklama, entegrasyonlardan SEO’ya uçtan uca."
        icon={Store}
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {marketplaceOps.map((m) => (
            <MarketplaceCard key={m.title} {...m} />
          ))}
        </div>
      </Section>

      {/* SEO & Code */}
      <Section title="SEO & Kod Revizyonları" subtitle="Core Web Vitals, meta, OG ve schema güçlendirmeleri." icon={SearchCheck}>
        <div className="grid gap-4 md:grid-cols-3">
          {seoAndCode.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </Section>

      {/* Academic */}
      <Section title="Akademik Çalışma" subtitle="EEG sinyallerinden durum sınıflandırması – ML temelli." icon={BookOpen}>
        <AcademicCard {...academic} />
      </Section>

      {/* CTA */}
      <section className="mx-auto my-16 w-full max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45 }}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-white/10 to-white/[.06] p-6 md:p-10"
        >
          <div className="relative z-10">
            <h3 className="text-2xl font-semibold">Birlikte ölçülebilir başarılar üretelim</h3>
            <p className="mt-2 max-w-2xl text-white/80">
              Keşif görüşmesi planlayalım; ihtiyacın olan dönüşüm hedeflerini, teknik gereksinimleri ve büyüme rotasını birlikte netleştirelim.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <PrimaryButton href="/iletisim" icon={Rocket}>
                Ücretsiz Keşif Çağrısı
              </PrimaryButton>
              <GhostButton href="/hizmetler" icon={LineChart}>
                Hizmetlerimiz
              </GhostButton>
            </div>
          </div>
          <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[radial-gradient(closest-side,rgba(59,130,246,.25),transparent)] blur-2xl" />
        </motion.div>
      </section>
    </div>
  );
}

/* ========================= Components ========================= */

function Section({
  title,
  subtitle,
  icon: Icon,
  children,
}: {
  title: string;
  subtitle?: string;
  icon: any;
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-10 md:py-14">
      <motion.div
        className="mb-6 flex items-center gap-3"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4 }}
      >
        <div className="inline-flex rounded-xl border border-white/10 bg-white/10 p-2">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-xl font-semibold md:text-2xl">{title}</h2>
          {subtitle && <p className="text-sm text-white/70">{subtitle}</p>}
        </div>
      </motion.div>
      {children}
    </section>
  );
}

function ProjectCard({
  title,
  url,
  tags,
}: {
  title: string;
  url: string;
  tags: string[];
}) {
  const domain = url.replace(/^https?:\/\//, "");
  const favicon = `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.35 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[.06] p-5 backdrop-blur"
    >
      {/* Hover Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(59,130,246,.18), transparent 40%)",
        }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
          document.currentScript.parentElement.addEventListener('mousemove', (e)=>{
            const r=e.currentTarget.getBoundingClientRect();
            e.currentTarget.style.setProperty('--x', (e.clientX-r.left)+'px');
            e.currentTarget.style.setProperty('--y', (e.clientY-r.top)+'px');
          });
        `,
        }}
      />
      <div className="flex items-center gap-3">
        <img src={favicon} alt={`${title} favicon`} className="h-6 w-6 rounded" />
        <div>
          <h3 className="font-semibold">{title}</h3>
          <Link
            href={url}
            target="_blank"
            className="inline-flex items-center gap-1 text-sm text-white/70 hover:text-white"
          >
            {domain} <ExternalLink className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-xs text-white/80"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function ServiceCard({
  title,
  desc,
  icon: Icon,
  bullets,
}: {
  title: string;
  desc: string;
  icon: any;
  bullets?: string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.35 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[.06] p-5 backdrop-blur"
    >
      <div className="mb-3 inline-flex rounded-xl border border-white/10 bg-white/10 p-2">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-white/80">{desc}</p>
      {bullets && (
        <ul className="mt-3 space-y-1.5 text-sm text-white/75">
          {bullets.map((b) => (
            <li key={b} className="flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5 opacity-80" /> {b}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}

function MarketplaceCard({
  title,
  desc,
  icon: Icon,
  marketplaces,
}: {
  title: string;
  desc: string;
  icon: any;
  marketplaces: string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.35 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[.06] p-5 backdrop-blur"
    >
      <div className="mb-3 inline-flex rounded-xl border border-white/10 bg-white/10 p-2">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-white/80">{desc}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {marketplaces.map((m) => (
          <span key={m} className="rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-xs text-white/80">
            {m}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function AcademicCard({
  title,
  link,
  points,
}: {
  title: string;
  link: string;
  points: string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.35 }}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[.06] p-6 backdrop-blur"
    >
      <div className="mb-3 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-3 py-1 text-sm">
        <Brain className="h-4 w-4" />
        EEG • ML • Sınıflandırma
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <ul className="mt-3 list-disc space-y-1 pl-5 text-white/80">
        {points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
      <Link
        href={link}
        target="_blank"
        className="mt-4 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm hover:bg-white/15"
      >
        Proje Özetleri Kitabı <ExternalLink className="h-4 w-4" />
      </Link>

      <div aria-hidden className="pointer-events-none absolute -right-20 -top-16 h-64 w-64 rounded-full bg-[radial-gradient(closest-side,rgba(16,185,129,.25),transparent)] blur-2xl" />
    </motion.div>
  );
}

function PrimaryButton({
  href,
  icon: Icon,
  children,
}: {
  href: string;
  icon?: any;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-xl bg-white/90 px-4 py-2 font-medium text-[#0B1020] shadow hover:bg-white"
    >
      {Icon && <Icon className="h-4 w-4" />}
      {children}
    </Link>
  );
}

function GhostButton({
  href,
  icon: Icon,
  children,
}: {
  href: string;
  icon?: any;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-2 font-medium text-white hover:bg-white/10"
    >
      {Icon && <Icon className="h-4 w-4" />}
      {children}
    </Link>
  );
}
