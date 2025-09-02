export default function sitemap() {
  const base = "https://www.mmbyazilim.com";
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/hizmetler`, lastModified: new Date() },
    { url: `${base}/blog`, lastModified: new Date() },
    { url: `${base}/iletisim`, lastModified: new Date() },
  ];
}
