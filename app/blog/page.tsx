import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export default function Blog() {
  const postsDir = path.join(process.cwd(), "content");
  const files = fs.existsSync(postsDir) ? fs.readdirSync(postsDir) : [];
  const posts = files
    .filter(f => f.endsWith(".mdx"))
    .map(f => {
      const raw = fs.readFileSync(path.join(postsDir, f), "utf8");
      const { data } = matter(raw);
      return { slug: f.replace(/\.mdx$/, ""), ...data } as any;
    });

  return (
    <section className="py-10">
      <h1 className="text-3xl font-bold">Blog</h1>
      <div className="mt-6 grid gap-4">
        {posts.map((p:any) => (
          <a key={p.slug} href={`/blog/${p.slug}`} className="rounded-2xl border p-5">
            <div className="text-xl font-semibold">{p.title}</div>
            <div className="text-slate-600 text-sm">{p.description}</div>
          </a>
        ))}
      </div>
    </section>
  );
}
