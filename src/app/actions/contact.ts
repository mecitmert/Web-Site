// Server Action (ayrı dosyada)
"use server";

export async function submitContact(formData: FormData) {
  const lead = {
    ad: String(formData.get("ad") ?? ""),
    email: String(formData.get("email") ?? ""),
    telefon: String(formData.get("telefon") ?? ""),
    mesaj: String(formData.get("mesaj") ?? ""),
  };

  // TODO: Burada e-posta gönder (Resend/SMTP) veya DB'ye kaydet (Prisma/Supabase)
  console.log("Lead:", lead);

  // İstersen basit bir dönüş de yapabilirsin:
  return { ok: true };
}
