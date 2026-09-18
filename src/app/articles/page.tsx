import { gemunuLibre } from "@/components/ui/fonts";
import { modernButtonBase, donateButtonStyles } from "@/components/ui/buttons";
import { getAllArticles } from "../lib/articles";
import ArticlesDisplay from "./ArticlesDisplay";
import PageHero from "@/components/ui/PageHero";

export default function Articles() {
  const articles = getAllArticles();
  const posts = articles.map((article, index) => ({
    id: String(index + 1),
    title: article.title,
    excerpt: article.excerpt,
    category: article.category,
    image: article.image,
    href: `/articles/${article.slug}`,
  }));

  return (
    <>
      <PageHero
        badge="ARTICLES"
        title="Articles & Insights"
        description="Explore our in-depth articles, research findings, and community perspectives on environmental and energy issues."
      />
      <main className="bg-white dark:bg-slate-900">
        <ArticlesDisplay
          posts={posts}
          fontClassName={gemunuLibre.className}
          buttonBaseStyles={modernButtonBase}
          buttonSpecificStyles={donateButtonStyles}
        />
      </main>
    </>
  );
}
