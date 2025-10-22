"use client";

import { motion } from "framer-motion";
import {
  Cpu, Cloud, Server, Database, Box, Palette, Globe, Rocket, ShieldCheck, Wrench,
  Terminal, Network, Award, Layers,  HardDrive, FileCog, Cpu as Cpu2, Puzzle,
  Link as LinkIcon, Boxes, Github, Shield, MonitorSmartphone, Code, Settings, Sparkles
} from "lucide-react";

type Tech = {
  name: string;
  slug?: string;         // simpleicons slug (https://cdn.simpleicons.org/<slug>)
  note?: string;         // kısa açıklama
  altSlug?: string;      // alternatif slug (gerekirse)
  icon?: React.ReactNode;// fallback ikon
};

type TechGroup = {
  title: string;
  icon: any;
  items: Tech[];
};

const groups: TechGroup[] = [
  {
    title: "Frontend • UI",
    icon: MonitorSmartphone,
    items: [
      { name: "React", slug: "react", note: "SPA/CSR + SSR temeli" },
      { name: "Next.js", slug: "nextdotjs", note: "App Router, SSG/SSR" },
      { name: "Figma", slug: "figma", note: "UI/UX tasarım" },
      { name: "Canva", slug: "canva", note: "Sosyal görsel & hızlı mockup" },
      { name: "WordPress", slug: "wordpress", note: "Blog & CMS" },
      { name: "PrestaShop", slug: "prestashop", note: "E-ticaret altyapısı" },
      { name: "Shopify", slug: "shopify", note: "Global e-ticaret" },
      { name: "ikas", note: "Türkiye e-ticaret platformu", icon: <Boxes className="h-5 w-5" /> },
    ],
  },
  {
    title: "Backend • Diller",
    icon: Code,
    items: [
      { name: ".NET Core", slug: "dotnet", note: "API + kurumsal mimari" },
      { name: "PHP", slug: "php", note: "Modül/tema geliştirme" },
      { name: "Python", slug: "python", note: "Otomasyon & veri işleri" },
    ],
  },
  {
    title: "Veritabanları",
    icon: Database,
    items: [
      { name: "Microsoft SQL Server", slug: "microsoftsqlserver", note: "Kurumsal RDBMS" },
      { name: "MySQL", slug: "mysql", note: "Yaygın açık kaynak RDBMS" },
    ],
  },
  {
    title: "Yapay Zekâ • Üretken AI",
    icon: Sparkles,
    items: [
      { name: "ChatGPT (OpenAI)", slug: "openai", note: "Metin/iş otomasyonu" },
      { name: "DeepSeek", note: "Gelişmiş LLM", icon: <Cpu className="h-5 w-5" /> },
      { name: "Veo 3", note: "Video üretim modeli", icon: <VideoIcon /> },
      { name: "JupyterLab", slug: "jupyter", note: "Data notebook ortamı" },
    ],
  },
  {
    title: "Analitik • Google Ekosistemi",
    icon: Globe,
    items: [
      { name: "Google Merchant Center", note: "Ürün feed & Shopping", icon: <ShoppingIcon /> },
      { name: "Google Analytics", slug: "googleanalytics", note: "GA4 ölçümleme" },
      { name: "Google Ads", slug: "googleads", note: "Reklam yönetimi" },
      { name: "Google AdSense", slug: "googleadsense", note: "Yayıncı monetizasyonu" },
      { name: "Google Drive", slug: "googledrive", note: "Dosya paylaşım & entegrasyon" },
    ],
  },
  {
    title: "DevOps • CI/CD • Container",
    icon: Wrench,
    items: [
      { name: "Docker", slug: "docker", note: "Container & compose" },
      { name: "Jenkins", slug: "jenkins", note: "CI/CD pipeline" },
      { name: "Git", slug: "git", note: "Versiyon kontrol" },
    ],
  },
  {
    title: "Hosting • Paneller",
    icon: HardDrive,
    items: [
      { name: "cPanel", slug: "cpanel", note: "Paylaşımlı hosting panel" },
      { name: "Plesk", slug: "plesk", note: "Windows/Linux panel" },
      { name: "Güzel Hosting", note: "Türkiye hosting sağlayıcısı", icon: <ShieldCheck className="h-5 w-5" /> },
      { name: "Markum", note: "Alan adı/hosting", icon: <LinkIcon className="h-5 w-5" /> },
      { name: "IHS", note: "Alan adı/hosting", icon: <LinkIcon className="h-5 w-5" /> },
    ],
  },
  {
    title: "Alan Adı • SSL",
    icon: Shield,
    items: [
      { name: "AutoSSL", note: "cPanel otomatik SSL", icon: <ShieldCheck className="h-5 w-5" /> },
      { name: "Let’s Encrypt", slug: "letsencrypt", note: "Ücretsiz SSL" },
      { name: "metunic", note: "Alan adı yönetimi", icon: <LinkIcon className="h-5 w-5" /> },
    ],
  },
  {
    title: "İşletim Sistemleri • Sanallaştırma",
    icon: Layers,
    items: [
      { name: "Linux", slug: "linux", note: "Sunucu/Dev ortamı" },
      { name: "Windows", slug: "windows", note: "Masaüstü/Server" },
      { name: "VirtualBox", slug: "virtualbox", note: "VM geliştirme ortamı" },
    ],
  },
];

/* ----------------------------- PAGE ----------------------------- */
export default function Page() {
  return (
    <div className="relative min-h-screen w-full bg-[#0B1020] text-white">
      {/* Glow background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,.18),transparent_60%)] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(236,72,153,.12),transparent_60%)] blur-3xl" />
      </div>

      {/* Hero */}
      <section className="mx-auto w-full max-w-7xl px-6 pt-24 md:pt-32 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-white/80 backdrop-blur">
            <Puzzle className="h-4 w-4" />
            Kullandığımız Teknolojiler
          </div>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            Modern Stack • Performans Odaklı Çözümler
          </h1>
          <p className="mt-3 max-w-2xl text-white/80">
            Frontend’den DevOps’a; e-ticaret, analitik ve marka operasyonlarını kapsayan
            uçtan uca teknoloji yığınıyla çalışıyoruz. Aşağıda aktif olarak kullandığımız araç ve platformların bir kısmını görebilirsin.
          </p>
        </motion.div>
      </section>

      {/* Groups */}
      <section className="mx-auto w-full max-w-7xl px-6 pb-24">
        <div className="space-y-10">
          {groups.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: gi * 0.03 }}
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="inline-flex rounded-xl border border-white/10 bg-white/10 p-2">
                  <g.icon className="h-5 w-5" />
                </div>
                <h2 className="text-xl font-semibold md:text-2xl">{g.title}</h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {g.items.map((t) => (
                  <TechCard key={t.name} tech={t} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

/* --------------------------- COMPONENTS -------------------------- */

function TechCard({ tech }: { tech: Tech }) {
  const logoUrl = getLogoUrl(tech);
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.35 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[.06] p-4 backdrop-blur"
    >
      {/* hover glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
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
        <LogoAvatar name={tech.name} url={logoUrl} fallback={tech.icon} />
        <div>
          <div className="font-semibold">{tech.name}</div>
          {tech.note && <div className="text-xs text-white/70">{tech.note}</div>}
        </div>
      </div>
    </motion.div>
  );
}

function LogoAvatar({
  name,
  url,
  fallback,
}: {
  name: string;
  url?: string;
  fallback?: React.ReactNode;
}) {
  return (
    <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-black/30">
      {url ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={url} alt={name} className="h-full w-full object-contain p-1.5" />
      ) : fallback ? (
        fallback
      ) : (
        <div className="text-sm font-bold">{name.charAt(0).toUpperCase()}</div>
      )}
    </div>
  );
}

/* ----------------------------- HELPERS --------------------------- */

// SimpleIcons slug üretimi / eşleme
function getLogoUrl(t: Tech) {
  const slug = t.slug ?? slugMap[t.name.toLowerCase()] ?? "";
  if (!slug) return undefined;
  // SimpleIcons svg -> otomatik renkli tek renk logo
  return `https://cdn.simpleicons.org/${slug}`;
}

// Zor isimler / yazım hataları için eşlemeler
const slugMap: Record<string, string> = {
  // düzeltmeler
  "mssqls": "microsoftsqlserver",
  "microsoft sql server": "microsoftsqlserver",
  "mysql": "mysql",
  "react": "react",
  "next.js": "nextdotjs",
  "nextjs": "nextdotjs",
  ".net core": "dotnet",
  ".net": "dotnet",
  "php": "php",
  "python": "python",
  "jupyterlab": "jupyter",
  "figma": "figma",
  "canva": "canva",
  "wordpress": "wordpress",
  "shopify": "shopify",
  "prestashop": "prestashop",
  "ikas": "", // yok – fallback ikon
  "openai": "openai",
  "chatgpt": "openai",
  "deepseek": "", // yok – fallback ikon
  "veo3": "", // yok – fallback ikon
  "google merchant": "", // yok – custom ikon
  "google analytics": "googleanalytics",
  "google ads": "googleads",
  "google adsense": "googleadsense",
  "google drive": "googledrive",
  "docker": "docker",
  "jenkins": "jenkins",
  "cpanel": "cpanel",
  "plesk": "plesk",
  "güzel hosting": "", // yok – fallback
  "markum": "",        // yok – fallback
  "auto ssl": "",      // yok – fallback
  "let’s encrypt": "letsencrypt",
  "lets encrypt": "letsencrypt",
  "metunic": "",       // yok – fallback
  "ihs": "",           // yok – fallback
  "linux": "linux",
  "windows": "windows",
  "virtualbox": "virtualbox",
  "git": "git",
};

/* ----------------------- Small Custom Icons ---------------------- */
function VideoIcon() {
  return (
    <div className="inline-flex h-5 w-5 items-center justify-center rounded-md border border-white/10 bg-white/10">
      <span className="block h-2 w-2 -ml-0.5 rotate-90 border-l-8 border-t-6 border-b-6 border-l-white/80 border-t-transparent border-b-transparent" />
    </div>
  );
}
function ShoppingIcon() {
  return (
    <div className="inline-flex h-5 w-5 items-center justify-center rounded-md border border-white/10 bg-white/10">
      <CartMini />
    </div>
  );
}
function CartMini() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 6h15l-2 9H8L6 6Z" />
      <circle cx="9" cy="20" r="1.5" />
      <circle cx="18" cy="20" r="1.5" />
    </svg>
  );
}
