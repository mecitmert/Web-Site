import { Button} from "@/components/Buttons";
export default function Page() {
  return (
    <section className="grid gap-10 py-14 md:grid-cols-2 mt-16">
      <div className="flex flex-col justify-center">
        <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
          SEO Odaklı Web Sitesi & Performans Danışmanlığı
        </h1>
        <p className="mt-4 text-lg text-slate-600 text-white">
          Next.js ile hızlı, Lighthouse skoru yüksek, satışa dönüşen sayfalar.
          Trendyol/Hepsiburada entegrasyon danışmanlığı ve reklam optimizasyonu.
        </p>
        <div className="mt-6 flex gap-3">
          <Button href="/iletisim" shiny speed={5}>Ücretsiz Keşif Çağrısı</Button>
          <Button href="hizmetler">Hizmetlerimiz</Button>
        </div>
        <ul className="mt-6 grid gap-2 text-sm text-slate-600 text-white">
          <li>• SSR/SSG ile güçlü SEO</li>
          <li>• Hızlı sayfa açılışı (Core Web Vitals)</li>
          <li>• Blog/İçerik pazarlaması (MDX)</li>
        </ul>
      </div>
      <div className="rounded-3xl border p-6">
        <div className="text-sm text-slate-500 text-white">Hız Testi (örnek)</div>
        <div className="mt-2 grid grid-cols-3 gap-3">
          <div className="rounded-2xl border p-4 text-center">
            <div className="text-3xl font-bold">99</div>
            <div className="text-xs">Performance</div>
          </div>
          <div className="rounded-2xl border p-4 text-center">
            <div className="text-3xl font-bold">100</div>
            <div className="text-xs">SEO</div>
          </div>
          <div className="rounded-2xl border p-4 text-center">
            <div className="text-3xl font-bold">100</div>
            <div className="text-xs">Best Practices</div>
          </div>
        </div>
      </div>

    </section>
  );
}
