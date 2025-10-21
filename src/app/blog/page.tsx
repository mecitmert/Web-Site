import fs from "fs";
import path from "path";

interface BlogPost {
  slug: string;
  title: string;
  description: string;
}

export default async function Blog() {
  // 📁 content klasöründeki dosyaları oku (örnek amaçlı)
  const postsDir = path.join(process.cwd(), "content");
  const files: string[] = fs.existsSync(postsDir) ? fs.readdirSync(postsDir) : [];

  // 📦 örnek veri (dosya adını slug olarak kullanıyoruz)
  const posts: BlogPost[] = files.map((file) => ({
    slug: file.replace(/\.mdx?$/, ""),
    title: file.replace(/\.mdx?$/, "").toUpperCase(),
    description: "Bu yazı içeriği yakında eklenecektir.",
  }));

  return (
    <main className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Blog Yazıları</h1>

      {posts.length === 0 ? (
        <p className="text-gray-500 text-center">
          Henüz bir blog yazısı eklenmemiş.
        </p>
      ) : (
        <ul className="space-y-6">
          {posts.map((post) => (
            <li
              key={post.slug}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition"
            >
              <a href={`/blog/${post.slug}`} className="block">
                <h2 className="text-xl font-semibold text-blue-700">
                  {post.title}
                </h2>
                <p className="text-gray-600">{post.description}</p>
              </a>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

