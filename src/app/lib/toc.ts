export interface Section {
  id: string;
  title: string;
  level: 'main' | 'sub';
}

/**
 * Creates a clean, URL-safe slug from a heading string.
 */
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/<[^>]*>/g, '') // remove HTML tags if any
    .replace(/[^\w\s-]/g, '') // remove special characters like quotes, colons, parens
    .replace(/[\s_-]+/g, '-') // collapse whitespace and underscores into single hyphens
    .replace(/^-+|-+$/g, ''); // remove leading/trailing hyphens
}

/**
 * Extracts a hierarchical table of contents (sections) from markdown text.
 * Finds all `## ` (main) and `### ` (sub) headers outside of code blocks.
 */
export function extractTocSections(markdown: string): Section[] {
  const sections: Section[] = [];
  const lines = markdown.split('\n');
  let inCodeBlock = false;
  const idCounts = new Map<string, number>();

  for (const line of lines) {
    const trimmed = line.trim();

    // Toggle code block state
    if (trimmed.startsWith('```')) {
      inCodeBlock = !inCodeBlock;
      continue;
    }

    if (inCodeBlock) continue;

    // Check for H2 (main section) or H3 (sub section)
    const isH2 = trimmed.startsWith('## ');
    const isH3 = trimmed.startsWith('### ');

    if (isH2 || isH3) {
      const rawTitle = trimmed.replace(/^#{2,3}\s+/, '').trim();
      
      // Remove inline markdown formatting like bold, italics, links
      const cleanTitle = rawTitle
        .replace(/\*\*([^*]+)\*\*/g, '$1')
        .replace(/\*([^*]+)\*/g, '$1')
        .replace(/__([^_]+)__/g, '$1')
        .replace(/_([^_]+)_/g, '$1')
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
        .replace(/`([^`]+)`/g, '$1')
        .trim();

      if (!cleanTitle) continue;

      let baseId = slugify(cleanTitle);
      if (!baseId) {
        baseId = 'section';
      }

      // Handle duplicate headings
      const count = idCounts.get(baseId) || 0;
      idCounts.set(baseId, count + 1);
      const id = count === 0 ? baseId : `${baseId}-${count}`;

      sections.push({
        id,
        title: cleanTitle,
        level: isH2 ? 'main' : 'sub',
      });
    }
  }

  return sections;
}
