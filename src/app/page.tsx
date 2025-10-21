import { Button } from "@/components/Buttons";
import LogoSlider from "@/components/LogoSlider";

export default function Page() {
  return (
    <div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 px-4 min-h-screen flex items-center">
      <section className="flex flex-col gap-10 py-14 md:flex-row mt-16 w-full px-16">
        {/* Yazı */}
        <div className="flex flex-col justify-center basis-2/3">
          <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
            SEO Odaklı Web Sitesi & Performans Danışmanlığı
          </h1>
          <p className="mt-4 text-lg text-slate-600 text-white">
            Next.js ile hızlı, Lighthouse skoru yüksek, satışa dönüşen sayfalar.
            Trendyol/Hepsiburada entegrasyon danışmanlığı ve reklam optimizasyonu.
          </p>
          <div className="mt-6 flex gap-3">
            <Button href="/iletisim" shiny speed={5}>
              Ücretsiz Keşif Çağrısı
            </Button>
            <Button href="/hizmetler">Hizmetlerimiz</Button>
          </div>
          <ul className="mt-6 grid gap-2 text-sm text-slate-600 text-white">
            <li>• SSR/SSG ile güçlü SEO</li>
            <li>• Hızlı sayfa açılışı (Core Web Vitals)</li>
            <li>• Blog/İçerik pazarlaması (MDX)</li>
          </ul>

          {/* 🔥 Logo Slider */}
          <div className="mt-12">
            <LogoSlider />
          </div>
        </div>
      </section>
    </div>
  );
}
