"use server";

async function submit(formData: FormData) {
  // Burada ileride e-posta gönderimi / veritabanı yazımı yapılacak
  console.log("Lead:", Object.fromEntries(formData.entries()));
}

export default function Contact() {
  return (
    <section className="max-w-xl py-10">
      <h1 className="text-3xl font-bold">İletişim</h1>
      <form action={submit} className="mt-6 grid gap-4">
        <input name="ad" placeholder="Ad Soyad" className="rounded-xl border p-3" required />
        <input name="email" type="email" placeholder="E-posta" className="rounded-xl border p-3" required />
        <input name="telefon" placeholder="Telefon" className="rounded-xl border p-3" />
        <textarea name="mesaj" placeholder="Mesajınız" className="min-h-32 rounded-xl border p-3" required />
        <button className="rounded-xl border px-5 py-3">Gönder</button>
      </form>
    </section>
  );
}
