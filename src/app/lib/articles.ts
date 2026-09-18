import fs from 'fs';
import path from 'path';
import matter from '@11ty/gray-matter';
import { extractTocSections, Section } from './toc';

export interface ArticleData {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  category: "Tech" | "Research" | "Community" | "Partnership";
  image: string;
  readTime: string;
  content: string;
  sections: Section[];
}

const articlesDirectory = path.join(process.cwd(), 'src/content/articles');

export function getArticleSlugs(): string[] {
  if (!fs.existsSync(articlesDirectory)) {
    return [];
  }
  return fs.readdirSync(articlesDirectory).filter((file) => file.endsWith('.md'));
}

export function getArticleBySlug(slug: string): ArticleData | null {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(articlesDirectory, `${realSlug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const sections = extractTocSections(content);

  return {
    slug: realSlug,
    title: data.title || realSlug,
    date: data.date || '',
    author: data.author || 'PlanetPatch',
    excerpt: data.excerpt || '',
    category: data.category || 'Research',
    image: data.image || '/rain-garden.jpg',
    readTime: data.readTime || '3 min read',
    content,
    sections,
  };
}

export function getAllArticles(): ArticleData[] {
  const slugs = getArticleSlugs();
  const articles = slugs
    .map((slug) => getArticleBySlug(slug))
    .filter((article): article is ArticleData => article !== null);

  return articles;
}
