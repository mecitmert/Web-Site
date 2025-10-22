"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/Buttons";
import { Rocket, LineChart, Layers, PlugZap, ShieldCheck, ArrowRight } from "lucide-react";
import StatCard from "./StatCard";
import KpiTile from "./KpiTile";
import FloatingBadge from "./FloatingBadge";
import ValueCard from "./ValueCard";
import LogoSlider from "./LogoSlider";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden text-white">
      {/* === Glow Arka Plan === */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-1/3 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.25),rgba(59,130,246,0)_60%)] blur-3xl" />
        <div className="absolute top-1/2 -left-20 h-[32rem] w-[32rem] -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.18),rgba(16,185,129,0)_60%)] blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(236,72,153,0.18),rgba(236,72,153,0)_60%)] blur-3xl" />
      </div>

      <div className="mx-auto w-full px-6 pt-24 pb-10 md:pt-28">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Sol Taraf (Yazılar) */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <Rocket className="h-3.5 w-3.5" />
              Pazaryeri & Web Performans Hızlandırma
            </span>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
              SEO Odaklı Web Sitesi +{" "}
              <span className="bg-gradient-to-r from-sky-400 via-emerald-300 to-fuchsia-300 bg-clip-text text-transparent">
                Pazaryeri Performans Danışmanlığı
              </span>
            </h1>
            <p className="mt-4 text-lg text-white/80">
              Next.js ile ışık hızında sayfalar, yüksek Lighthouse skorları ve satışa dönüşen deneyimler.
              Trendyol, Hepsiburada, Amazon, Temu, ÇiçekSepeti, Koçtaş, N11 entegrasyon ve reklam optimizasyonu.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/iletisim" shiny speed={5}>
                Ücretsiz Keşif Çağrısı
              </Button>
              <Button href="/hizmetler">
                Hizmetlerimiz <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Mini İstatistikler */}
            <div className="mt-8 grid grid-cols-2 gap-3 text-white/90 sm:grid-cols-3">
              <StatCard icon={LineChart} label="Reklam ROAS" value="> %120" />
              <StatCard icon={Layers} label="Entegrasyon" value="≤ 7 gün" />
              <StatCard icon={ShieldCheck} label="Core Web Vitals" value="> 95" />
            </div>

            {/* Pazaryeri Rozetleri */}
            <div className="mt-8 flex flex-wrap items-center gap-2 text-sm">
              {["Trendyol", "Hepsiburada", "Amazon", "Temu", "ÇiçekSepeti", "Koçtaş", "N11"].map((m) => (
                <span key={m} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/80 shadow-sm">
                  {m}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Sağ Taraf (Animasyonlu Görsel) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-[520px]">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-4 shadow-2xl backdrop-blur">
                <div className="rounded-xl bg-black/60 p-4">
                  <div className="mb-4 flex items-center justify-between text-xs text-white/70">
                    <span>Lighthouse</span>
                    <span>Desktop • Mobile</span>
                  </div>
                  <div className="mb-6 h-2 w-full overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      className="h-2 rounded-full bg-gradient-to-r from-emerald-400 via-sky-400 to-fuchsia-400"
                      initial={{ width: "0%" }}
                      animate={{ width: "96%" }}
                      transition={{ duration: 1.2, delay: 0.3 }}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <KpiTile title="TTFB" value="< 100ms" />
                    <KpiTile title="LCP" value="< 2.0s" />
                    <KpiTile title="FCP" value="< 1.0s" />
                    <KpiTile title="CLS" value="≤ 0.1" />
                  </div>

                  <div className="mt-6 flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3">
                    <div className="flex items-center gap-2 text-white/80">
                      <PlugZap className="h-4 w-4" />
                      <span>Trendyol • Amazon • Hepsiburada • N11</span>
                    </div>
                    <motion.div
                      className="h-2 w-24 overflow-hidden rounded-full bg-white/10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      <motion.div
                        className="h-2 rounded-full bg-white/60"
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ repeat: Infinity, duration: 1.3, ease: "easeInOut" }}
                        style={{ width: "50%" }}
                      />
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Yüzen Etiketler */}
              <FloatingBadge className="-left-8 top-10" icon={<Rocket className="h-4 w-4" />} text="Hızlı Yayına Alma" />
              <FloatingBadge className="-right-8 bottom-10" icon={<LineChart className="h-4 w-4" />} text="Dönüşüm Odaklı" />
            </div>
          </motion.div>
        </div>

        {/* Alt Değer Kartları */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <ValueCard
            icon={LineChart}
            title="Pazaryeri Performansı"
            desc="Ürün yönetimi, reklam optimizasyonu, raporlama ve KPI takibiyle sürdürülebilir büyüme."
          />
          <ValueCard
            icon={Layers}
            title="Teknik & Entegrasyon"
            desc="Trendyol, Hepsiburada, Amazon, N11, Temu ve daha fazlası için uçtan uca kurulum ve entegrasyon."
          />
          <ValueCard
            icon={ShieldCheck}
            title="SEO + Hız"
            desc="SSR/SSG mimarisi, temiz kod ve Core Web Vitals odaklı yaklaşımla yüksek sıralama."
          />
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl px-6 pb-24">
        <LogoSlider />
      </div>
    </section>
  );
}
