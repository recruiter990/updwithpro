import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Badge from "@/components/ui/Badge";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { blogPosts, getBlogPostById } from "@/lib/blog-posts";

interface BlogPostPageProps {
  params: { id: string };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { id } = await Promise.resolve(params);
  const post = getBlogPostById(Number(id));
  if (!post) return { title: "Post non trovato" };
  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ id: String(post.id) }));
}

function renderInline(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-dark dark:text-light">
          {part.replace(/\*\*/g, "")}
        </strong>
      );
    }
    return part;
  });
}

function renderContent(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();

    if (!line) { i++; continue; }

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-4 text-dark dark:text-light border-l-4 border-primary pl-4">
          {line.replace("## ", "")}
        </h2>
      );
    } else if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(
        <h3 key={i} className="text-lg font-heading font-semibold mt-6 mb-2 text-dark dark:text-light">
          {line.replace(/\*\*/g, "")}
        </h3>
      );
    } else if (line.startsWith("> ")) {
      elements.push(
        <blockquote key={i} className="border-l-4 border-primary/50 pl-6 py-2 my-6 bg-primary/5 dark:bg-primary/10 rounded-r-lg italic text-gray">
          {renderInline(line.replace("> ", ""))}
        </blockquote>
      );
    } else if (line.startsWith("![")) {
      const match = line.match(/^!\[([^\]]*)\]\(([^)]+)\)(?:\s*\*([^*]+)\*)?$/);
      if (match) {
        const [, alt, src, caption] = match;
        elements.push(
          <figure key={i} className="my-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={alt} className="w-full rounded-xl object-cover shadow-lg" style={{ maxHeight: "420px" }} />
            {caption && <figcaption className="text-center text-sm text-gray mt-2 italic">{caption}</figcaption>}
          </figure>
        );
      }
    } else if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("- ")) {
        items.push(lines[i].trim().replace("- ", ""));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="space-y-2 mb-6 ml-4">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-gray">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ul>
      );
      continue;
    } else if (/^\d+\.\s/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+\.\s/, ""));
        i++;
      }
      elements.push(
        <ol key={`ol-${i}`} className="space-y-2 mb-6 ml-4">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-gray">
              <span className="shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-primary/20 text-primary text-xs font-bold mt-0.5">
                {idx + 1}
              </span>
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ol>
      );
      continue;
    } else {
      elements.push(
        <p key={i} className="text-gray leading-relaxed mb-5 text-base md:text-lg">
          {renderInline(line)}
        </p>
      );
    }
    i++;
  }
  return elements;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await Promise.resolve(params);
  const post = getBlogPostById(Number(id));
  if (!post) notFound();

  const currentIndex = blogPosts.findIndex((p) => p.id === post.id);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  return (
    <div className="pt-20 pb-16">
      <div className="container-custom max-w-3xl">
        <div className="mb-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-gray hover:text-primary transition-colors text-sm">
            <ArrowLeft className="h-4 w-4" />
            Torna al Blog
          </Link>
        </div>

        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="primary">{post.category}</Badge>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 text-dark dark:text-light leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-6 text-sm text-gray">
            <div className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              <span>{post.readTime} di lettura</span>
            </div>
          </div>
        </div>
        <p className="text-xl text-gray leading-relaxed mb-10 pb-10 border-b border-gray/20 dark:border-white/10 italic font-medium">
          {post.excerpt}
        </p>

        <article>{renderContent(post.content)}</article>

        <div className="mt-16 pt-8 border-t border-gray/20 dark:border-white/10">
          <div className="grid sm:grid-cols-2 gap-4">
            {prevPost ? (
              <Link href={`/blog/${prevPost.id}`} className="group glass rounded-xl p-5 hover:border-primary/40 transition-all">
                <div className="flex items-center gap-2 text-sm text-gray mb-2">
                  <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                  Articolo precedente
                </div>
                <p className="font-heading font-semibold text-dark dark:text-light text-sm line-clamp-2">{prevPost.title}</p>
              </Link>
            ) : <div />}
            {nextPost ? (
              <Link href={`/blog/${nextPost.id}`} className="group glass rounded-xl p-5 hover:border-primary/40 transition-all text-right">
                <div className="flex items-center justify-end gap-2 text-sm text-gray mb-2">
                  Articolo successivo
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="font-heading font-semibold text-dark dark:text-light text-sm line-clamp-2">{nextPost.title}</p>
              </Link>
            ) : <div />}
          </div>
          <div className="text-center mt-8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
              <ArrowLeft className="h-4 w-4" />
              Vedi tutti gli articoli
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
