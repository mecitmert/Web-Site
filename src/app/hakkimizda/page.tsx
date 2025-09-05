import type { Metadata } from "next";
import Link from "next/link";
import { Rocket, Shield, LineChart, Users, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/Buttons";

export const metadata: Metadata = {
  title: "Hakkımızda | MMB Yazılım",
  description:
    "MMB Yazılım; modern web geliştirme, SEO ve performans odaklı çözümler üretir. Next.js ve TypeScript ile hızlı, güvenli ve ölçeklenebilir dijital deneyimler tasarlıyoruz.",
  openGraph: {
    title: "Hakkımızda | MMB Yazılım",
    description:
      "Modern web, SEO ve performans odaklı çözümler: Next.js, TypeScript, Headless mimari.",
    type: "article",
    url: "/hakkimizda",
  },
};

const VALUES = [
  {
    icon: <LineChart className="h-6 w-6" aria-hidden />,
    title: "SEO Odaklı Mimari",
    desc: "Core Web Vitals, şema işaretlemeleri ve temiz URL yapısı ile arama motorlarında sürdürülebilir görünürlük.",
  },
  {
    icon: <Rocket className="h-6 w-6" aria-hidden />,
    title: "Yüksek Performans",
    desc: "SSR/SSG, dinamik önbellekleme ve resim optimizasyonu ile milisaniyeler içinde yüklenen sayfalar.",
  },
  {
    icon: <Shield className="h-6 w-6" aria-hidden />,
    title: "Güvenli ve Ölçeklenebilir",
    desc: "OWASP prensipleri, rollere dayalı yetkilendirme ve bulut hazır altyapı.",
  },
  {
    icon: <Users className="h-6 w-6" aria-hidden />,
    title: "Şeffaf Süreç",
    desc: "Planlama → Tasarım → Geliştirme → Ölçümleme zincirinde net kilometre taşları ve düzenli raporlama.",
  },
];

const STATS = [
  { value: "10+", label: "Aktif Proje" },
  { value: "A+", label: "Core Web Vitals" },
  { value: "<100ms", label: "TTFB Hedefi" },
  { value: "%99.9", label: "Uptime Hedefi" },
];

export default function HakkimizdaPage() {
  return (
    <div className="space-y-16 md:space-y-24  ">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border bg-gradient-to-b from-slate-50 to-white p-8 md:p-16 mt-20">
        <div className="absolute inset-0 -z-10">
          <div className="pointer-events-none absolute left-1/2 top-[-6rem] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full blur-3xl opacity-30 bg-gradient-to-tr from-sky-300 via-cyan-200 to-teal-200" />
        </div>
        <div className="mx-auto max-w-7xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
            <Sparkles className="h-4 w-4" aria-hidden /> Web • SEO • Performans
          </span>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Dijitalinizi hızlandıran <span className="bg-gradient-to-r from-slate-900 via-sky-700 to-cyan-600 bg-clip-text text-transparent">mühendislik stüdyosu</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
            MMB Yazılım; modern web teknolojileri, SEO mimarisi ve performans optimizasyonu ile sürdürülebilir büyüme sağlar. Kullanıcıyı merkeze alan, ölçülebilir sonuçlar üretiriz.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Button
              href="/iletisim" shiny color="primary"
            >
              Bizimle İletişime Geçin 
            </Button>
            <Button
              href="/hizmetler" color="black"
            >
              Hizmetlerimizi Görün
            </Button>
          </div>
        </div>
      </section>

      {/* Values */}
      <section>
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold tracking-tight text-white text-slate-900 md:text-3xl uppercase">Değer Önerimiz</h2>
          <p className="mt-2 max-w-full text-white text-slate-600">
            Proje ve ürünlerinizde teknik borcu azaltan, bakım maliyetini düşüren ve dönüşümü artıran net ilkelerle çalışırız.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="group rounded-2xl border bg-white p-5 shadow-sm transition hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900/90 text-white">
                  {v.icon}
                </div>
                <h3 className="mt-4 text-base font-semibold text-slate-900">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section>
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4 rounded-3xl border bg-white p-6 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="rounded-2xl bg-slate-50 p-6 text-center">
                <div className="text-3xl font-extrabold tracking-tight text-slate-900">{s.value}</div>
                <div className="mt-1 text-sm text-slate-600">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process timeline */}
      <section>
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl text-white uppercase">Nasıl Çalışıyoruz?</h2>
          <ol className="mt-8 space-y-6">
            {[
              {
                step: "Keşif & Planlama",
                desc:
                  "İş hedefleri, kullanıcı segmentleri ve başarı metrikleri belirlenir. Yol haritası ve kilometre taşları oluşturulur.",
              },
              {
                step: "Tasarım & Doğrulama",
                desc:
                  "Wireframe ve arayüz prototipleri hazırlanır. Kullanılabilirlik geri bildirimleri ile iterasyon yapılır.",
              },
              {
                step: "Geliştirme",
                desc:
                  "Next.js + TypeScript + Tailwind ile modüler ve test edilebilir bir yapı inşa edilir.",
              },
              {
                step: "Ölçümleme & Optimizasyon",
                desc:
                  "Core Web Vitals, dönüşüm hunisi ve ısı haritaları üzerinden sürekli iyileştirme yapılır.",
              },
            ].map((i, idx) => (
              <li key={i.step} className="relative rounded-2xl border bg-white p-6">
                <div className="absolute left-6 top-6 -z-10 h-10 w-10 rounded-xl bg-slate-100" />
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white font-semibold">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">{i.step}</h3>
                    <p className="mt-1 text-sm text-slate-600">{i.desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Tech stack badges */}
      <section>
        <div className="mx-auto max-w-6xl rounded-3xl border bg-white p-6">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">Teknoloji Yığını</h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            Modern ve uzun ömürlü ürünler için kanıtlanmış teknolojileri tercih ediyoruz.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-2">
            {["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PrestaShop", "Vercel", "Docker"].map(
              (t) => (
                <span
                  key={t}
                  className="rounded-xl border bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
                >
                  {t}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl text-white uppercase">¿ Sıkça Sorulanlar</h2>
          <div className="mt-6 space-y-4">
            <details className="rounded-2xl border bg-white p-5">
              <summary className="cursor-pointer list-none text-base font-semibold text-slate-900">
                Proje teslim süreleri nasıl belirleniyor?
              </summary>
              <p className="mt-2 text-sm text-slate-600">
                Keşif oturumundan sonra kapsam, bağımlılıklar ve entegrasyonlara göre bir plan çıkarır, her sprint sonunda görünür çıktı sunarız.
              </p>
            </details>
            <details className="rounded-2xl border bg-white p-5">
              <summary className="cursor-pointer list-none text-base font-semibold text-slate-900">
                SEO çalışmaları ne içerir?
              </summary>
              <p className="mt-2 text-sm text-slate-600">
                Teknik SEO denetimi, site haritaları, şema işaretlemeleri, performans optimizasyonları ve veri odaklı içerik stratejisi.
              </p>
            </details>
            <details className="rounded-2xl border bg-white p-5">
              <summary className="cursor-pointer list-none text-base font-semibold text-slate-900">
                Destek ve bakım sağlıyor musunuz?
              </summary>
              <p className="mt-2 text-sm text-slate-600">
                Evet. Versiyon güncellemeleri, güvenlik yamaları ve performans izleme dahil bakım paketleri sunuyoruz.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-6xl rounded-3xl border bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-8 text-center text-white md:p-12">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Sizin için ne geliştirebiliriz?
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-slate-200">
            Bir fikriniz, optimize etmek istediğiniz bir ürününüz ya da yeni bir pazara açılma hedefiniz mi var? Konuşalım.
          </p>
          <div className="mt-6">
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-md transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-slate-300"
            >
              Hızlı Teklif Al <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
