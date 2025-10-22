"use client";

import { motion } from "framer-motion";
import {
  Globe,
  LineChart,
  Rocket,
  Search,
  Store,
  ShieldCheck,
  PenTool,
  Zap,
  Layers,
  Code2,
  TrendingUp,
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: Globe,
      title: "Kurumsal Web Sitesi Tasarımı",
      desc: "Next.js tabanlı, yüksek performanslı ve güvenli web siteleri. Her cihazda mükemmel görünüm, SEO uyumu ve ölçeklenebilir yapı.",
      bullets: [
        "Next.js / React altyapısı",
        "Mobil ve tablet uyumlu",
        "Core Web Vitals optimizasyonu",
        "Lighthouse puanı 90+",
      ],
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
    },
    {
      icon: Search,
      title: "SEO & İçerik Optimizasyonu",
      desc: "Google arama sonuçlarında görünür olun. Anahtar kelime analizi, teknik SEO, blog stratejisi ve backlink çalışmalarıyla marka bilinirliğinizi artırın.",
      bullets: [
        "Anahtar kelime araştırması",
        "Teknik SEO & site haritası",
        "Blog / içerik stratejisi",
        "Yapay zekâ destekli metin üretimi",
      ],
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1400&q=80",
    },
    {
      icon: LineChart,
      title: "Reklam & Dönüşüm Optimizasyonu",
      desc: "Google Ads, Meta ve TikTok kampanyalarıyla dönüşüm oranlarınızı artırın. KPI bazlı, performans odaklı reklam yönetimi.",
      bullets: [
        "Google / Meta kampanya yönetimi",
        "A/B testleri & dönüşüm izleme",
        "Analitik raporlama",
        "ROAS +%150 hedefleme",
      ],
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1400&q=80",
    },
    {
      icon: Store,
      title: "Pazaryeri Performans Danışmanlığı",
      desc: "Trendyol, Hepsiburada, Amazon, N11, Temu ve Koçtaş gibi platformlarda ürün yönetimi, reklam, SEO ve entegrasyon desteği.",
      bullets: [
        "Mağaza açılışı & ürün listeleme",
        "Reklam / SEO optimizasyonu",
        "XML & API entegrasyonu",
        "Satış raporlama & strateji",
      ],
      image: "/pazaryeri.jpg", // ✅ public klasöründen
    },
    {
      icon: ShieldCheck,
      title: "Marka Kimliği & Güven Yönetimi",
      desc: "Logo, renk paleti, tipografi, marka dili ve dijital itibar tasarımıyla müşterilerinizin güvenini kazanın.",
      bullets: [
        "Kurumsal kimlik tasarımı",
        "Logo & görsel dil oluşturma",
        "Marka hikayesi geliştirme",
        "Tescil & marka patent danışmanlığı",
      ],
      image: "/turkpatent.jpeg", // ✅ public klasöründen
    },
    {
      icon: Layers,
      title: "Otomasyon & Entegrasyon Sistemleri",
      desc: "Satış, stok, faturalama ve raporlama süreçlerinizi otomatikleştirin. E-ticaret sistemleriniz birbirine entegre çalışsın.",
      bullets: [
        "Trendyol / N11 / Amazon API bağlantısı",
        "Stok & fiyat senkronizasyonu",
        "Sipariş yönetim otomasyonu",
        "KPI bazlı dashboard raporları",
      ],
      image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&w=1400&q=80",
    },
  ];

  return (
    <div className="relative min-h-screen w-full bg-[#0B1020] text-white">
      {/* Arka plan parlamaları */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.18),transparent_60%)] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(236,72,153,0.12),transparent_60%)] blur-3xl" />
      </div>

      <section className="mx-auto w-full max-w-7xl px-6 pt-24 md:pt-32 pb-16">
        {/* Başlık */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Profesyonel Hizmetlerimiz
          </h1>
          <p className="mt-3 text-white/80 max-w-2xl mx-auto">
            MMB Yazılım olarak web, SEO, pazaryeri ve marka kimliği alanlarında uçtan uca dijital çözümler sunuyoruz.
            Her projeyi kendi markamız gibi sahipleniyor, sürdürülebilir başarı için ölçülebilir sonuçlar üretiyoruz.
          </p>
        </motion.div>

        {/* Hizmet Kartları */}
        <div className="mt-16 grid gap-10 md:grid-cols-2">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[.06] backdrop-blur"
            >
              {/* Görsel */}
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1020]/80 via-[#0B1020]/30 to-transparent" />
              </div>

              {/* İçerik */}
              <div className="p-6">
                <div className="mb-3 inline-flex rounded-xl border border-white/10 bg-white/10 p-2">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-white/80">{s.desc}</p>
                <ul className="mt-3 space-y-1 text-sm text-white/70">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <Zap className="h-3 w-3 text-sky-400" /> {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-semibold">Sizinle büyümeye hazırız</h3>
          <p className="mt-2 text-white/80 max-w-md mx-auto">
            Projenizi konuşalım, en uygun stratejiyi birlikte belirleyelim.
          </p>
          <a
            href="/iletisim"
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white/90 px-6 py-3 font-medium text-[#0B1020] shadow hover:bg-white"
          >
            İletişime Geçin <Rocket className="h-4 w-4" />
          </a>
        </motion.div>
      </section>
    </div>
  );
}
