import { gemunuLibre } from "@/components/ui/fonts";
import { modernButtonBase, donateButtonStyles } from "@/components/ui/buttons";
import { articlePosts } from "../lib/InfoArrays";
import ArticlesDisplay from "./ArticlesDisplay";
import PageHero from "@/components/ui/PageHero";

export default function Articles() {
  return (
    <>
      <PageHero
        badge="ARTICLES"
        title="Articles & Insights"
        description="Explore our in-depth articles, research findings, and community perspectives on environmental and energy issues."
      />
      <main className="bg-white dark:bg-slate-900">
        <ArticlesDisplay
          posts={articlePosts}
          fontClassName={gemunuLibre.className}
          buttonBaseStyles={modernButtonBase}
          buttonSpecificStyles={donateButtonStyles}
        />
      </main>
    </>
  );
}
