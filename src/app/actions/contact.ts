"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContact(formData: FormData) {
  const ad = formData.get("ad") as string;
  const email = formData.get("email") as string;
  const telefon = formData.get("telefon") as string;
  const mesaj = formData.get("mesaj") as string;

  console.log("Lead:", { ad, email, telefon, mesaj });

  try {
    const response = await resend.emails.send({
      // ✅ Resend’in kendi doğrulanmış adresi
      from: "MMB Yazılım <onboarding@resend.dev>",

      // ✅ Sadece kendi adresine gönder
      to: "mecitmert003@gmail.com",

      // ✅ Gmail filtrelemesinde takılmayan sade başlık
      subject: `Yeni İletişim Talebi - ${ad}`,

      // ✅ HTML içeriği sade tutuldu, spam trigger kelimeleri kaldırıldı
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2>Yeni İletişim Talebi</h2>
          <p><b>Ad Soyad:</b> ${ad}</p>
          <p><b>E-posta:</b> ${email}</p>
          <p><b>Telefon:</b> ${telefon}</p>
          <p><b>Mesaj:</b> ${mesaj}</p>
          <hr />
          <p style="font-size: 12px; color: #888;">Bu e-posta MMB Yazılım iletişim formundan otomatik gönderilmiştir.</p>
        </div>
      `,
    });

    console.log("Resend yanıtı:", response);
    return { ok: true };
  } catch (error) {
    console.error("Resend hata:", error);
    return { ok: false };
  }
}
