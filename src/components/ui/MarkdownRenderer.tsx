import React from 'react';
import ReactMarkdown from 'react-markdown';
import { slugify } from '@/app/lib/toc';
import { gemunuLibre } from '@/components/ui/fonts';

interface MarkdownRendererProps {
  content: string;
}

function getNodeText(node: React.ReactNode): string {
  if (typeof node === 'string') return node;
  if (typeof node === 'number') return node.toString();
  if (Array.isArray(node)) return node.map(getNodeText).join('');
  if (React.isValidElement(node)) {
    const props = node.props as { children?: React.ReactNode };
    return getNodeText(props.children);
  }
  return '';
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const idCounts = new Map<string, number>();

  const getHeadingId = (children: React.ReactNode): string => {
    const text = getNodeText(children);
    let baseId = slugify(text);
    if (!baseId) baseId = 'section';
    
    const count = idCounts.get(baseId) || 0;
    idCounts.set(baseId, count + 1);
    return count === 0 ? baseId : `${baseId}-${count}`;
  };

  return (
    <div className="prose dark:prose-invert max-w-none text-slate-800 dark:text-slate-200 leading-relaxed">
      <ReactMarkdown
        components={{
          h1: ({ children }) => (
            <h1 className={`text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-8 mb-4 leading-tight ${gemunuLibre.className}`}>
              {children}
            </h1>
          ),
          h2: ({ children }) => {
            const id = getHeadingId(children);
            return (
              <h2
                id={id}
                className={`text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4 border-b border-slate-200 dark:border-slate-800 pb-2 scroll-mt-24 ${gemunuLibre.className}`}
              >
                {children}
              </h2>
            );
          },
          h3: ({ children }) => {
            const id = getHeadingId(children);
            return (
              <h3
                id={id}
                className={`text-xl font-semibold text-slate-800 dark:text-slate-200 mt-6 mb-3 scroll-mt-24 ${gemunuLibre.className}`}
              >
                {children}
              </h3>
            );
          },
          p: ({ children }) => (
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              {children}
            </p>
          ),
          blockquote: ({ children }) => (
            <blockquote className="my-8 border-l-4 border-green-500 bg-green-50/50 dark:bg-green-950/20 px-6 py-4 rounded-r-lg italic text-slate-700 dark:text-slate-300 font-medium shadow-xs">
              {children}
            </blockquote>
          ),
          ul: ({ children }) => (
            <ul className="list-disc list-inside space-y-2 mb-6 text-slate-700 dark:text-slate-300 text-base sm:text-lg pl-2">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside space-y-2 mb-6 text-slate-700 dark:text-slate-300 text-base sm:text-lg pl-2">
              {children}
            </ol>
          ),
          hr: () => (
            <hr className="my-8 border-slate-200 dark:border-slate-800" />
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-slate-900 dark:text-white">
              {children}
            </strong>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

