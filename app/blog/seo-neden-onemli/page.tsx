import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), "content");
  if (!fs.existsSync(postsDir)) return [];
  return fs.readdirSync(postsDir)
    .filter(f => f.endsWith(".mdx"))
    .map(f => ({ slug: f.replace(/\.mdx$/, "") }));
}

export default function Post({ params }: { params: { slug: string } }) {
  const file = path.join(process.cwd(), "content", `${params.slug}.mdx`);
  const raw = fs.readFileSync(file, "utf8");
  const { content, data } = matter(raw);

  return (
    <article className="prose prose-slate max-w-none">
      <h1>{data.title}</h1>
      <MDXRemote source={content} />
    </article>
  );
}
