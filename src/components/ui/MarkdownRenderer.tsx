import React from 'react';
import ReactMarkdown from 'react-markdown';

interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose dark:prose-invert max-w-none text-slate-800 dark:text-slate-200 leading-relaxed">
      <ReactMarkdown
        components={{
          h1: ({ children }) => (
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-8 mb-4 leading-tight">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-6 mb-3">
              {children}
            </h3>
          ),
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
