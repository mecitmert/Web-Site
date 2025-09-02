// app/iletisim/page.tsx
export async function submit(formData: FormData) {
  "use server";

  // Form alanlarını düzgünce topla (FormData'nın kendisini asla döndürme!)
  const lead = {
    ad: String(formData.get("ad") ?? ""),
    email: String(formData.get("email") ?? ""),
    telefon: String(formData.get("telefon") ?? ""),
    mesaj: String(formData.get("mesaj") ?? ""),
  };

  // Sunucuda loglamak güvenlidir
  console.log("Lead:", lead);

  // Burada e-posta gönder / DB'ye yaz (serializable veri kullan)
  // return; // bir şey döndürmek zorunda değilsin
}

export default function Contact() {
  return (
    <section className="max-w-xl py-10">
      <h1 className="text-3xl font-bold">İletişim</h1>

      {/* method=post opsiyoneldir; action Server Action'a bağlı */}
      <form action={submit} className="mt-6 grid gap-4" method="post">
        <input name="ad" placeholder="Ad Soyad" className="rounded-xl border p-3" required />
        <input name="email" type="email" placeholder="E-posta" className="rounded-xl border p-3" required />
        <input name="telefon" placeholder="Telefon" className="rounded-xl border p-3" />
        <textarea name="mesaj" placeholder="Mesajınız" className="min-h-32 rounded-xl border p-3" required />
        <button className="rounded-xl border px-5 py-3">Gönder</button>
      </form>
    </section>
  );
}
