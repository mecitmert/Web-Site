export default function Services() {
  const items = [
    { title: "Kurumsal Web Sitesi", desc: "Next.js ile hızlı, güvenli, mobil uyumlu." },
    { title: "SEO & İçerik", desc: "Teknik SEO, anahtar kelime, blog stratejisi." },
    { title: "Reklam Optimizasyonu", desc: "Google/Meta dönüşüm odaklı kampanyalar." },
    { title: "Pazar Yeri Performansı", desc: "Trendyol, Hepsiburada, n11 danışmanlığı." },
  ];
  return (
    <section className="py-10">
      <h1 className="text-3xl font-bold">Hizmetler</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {items.map((x) => (
          <div key={x.title} className="rounded-2xl border p-5">
            <div className="text-xl font-semibold">{x.title}</div>
            <div className="mt-2 text-slate-600">{x.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
