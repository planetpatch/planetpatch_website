import Image from 'next/image';
import StarsBackground from '@/components/ui/StarsBackground';
import MarkdownRenderer from '@/components/ui/MarkdownRenderer';
import TableOfContents from '@/components/ui/TableOfContents';
import { gemunuLibre } from '@/components/ui/fonts';
import { getArticleBySlug, getArticleSlugs } from '@/app/lib/articles';

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getArticleSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.md$/, ''),
  }));
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <main className="min-h-screen bg-slate-900 flex items-center justify-center text-white">
        <h1 className="text-2xl font-bold">Article Not Found</h1>
      </main>
    );
  }

  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-sky-500 to-slate-900 dark:bg-gradient-to-b dark:from-slate-900 dark:to-sky-900 min-h-screen">
      <StarsBackground />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex justify-center gap-x-12">
        {article.sections && article.sections.length > 0 && (
          <TableOfContents sections={article.sections} />
        )}
        <article className="relative z-10 w-full max-w-3xl my-16 bg-white/90 dark:bg-slate-900/90 rounded-lg shadow-xl backdrop-blur-md border border-slate-200 dark:border-white/10 p-6 sm:p-10">
          {/* Category & Read Time metadata header */}
          <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400 mb-4">
            <span className="px-3 py-1 bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300 font-semibold rounded-full">
              {article.category}
            </span>
            <span>{article.readTime}</span>
          </div>

          {/* Header Title */}
          <h1 className={`text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-gray-100 mb-4 leading-tight ${gemunuLibre.className}`}>
            {article.title}
          </h1>

          {/* Date & Author */}
          <div className="text-sm text-slate-600 dark:text-slate-400 mb-8 border-b border-slate-200 dark:border-slate-800 pb-4">
            Published on {article.date} {article.author ? `by ${article.author}` : ''}
          </div>

          {/* Cover Image */}
          {article.image && (
            <div className="mb-8 relative rounded-lg overflow-hidden shadow-lg aspect-video">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Article Body Content rendered via Markdown */}
          <MarkdownRenderer content={article.content} />
        </article>
      </div>
    </main>
  );
}

