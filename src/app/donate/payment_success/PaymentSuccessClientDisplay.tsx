// src/app/donate/payment_success/PaymentSuccessClientDisplay.tsx
"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";

// A Checkmark SVG component for the success icon
const CheckmarkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-24 w-24 text-emerald-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

export default function PaymentSuccessClientDisplay() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [displayAmount, setDisplayAmount] = useState<string | null>(null);

  useEffect(() => {
    const amountFromParams = searchParams.get("amount");
    setDisplayAmount(amountFromParams);
    setIsClient(true);
  }, [searchParams, router]);

  // Animated background for the page
  const successBg =
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'%3E%3Crect width='1200' height='800' fill='%23042f20'/%3E%3Cdefs%3E%3Cpattern id='grid' width='40' height='40' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='%23108a69' stroke-width='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23grid)'/%3E%3Cg transform='translate(600 400)'%3E%3Ccircle stroke='%2366bb6a' stroke-width='2' fill='none' r='0'%3E%3Canimate attributeName='r' from='0' to='400' dur='4s' repeatCount='indefinite' begin='0s'/%3E%3Canimate attributeName='opacity' from='1' to='0' dur='4s' repeatCount='indefinite' begin='0s'/%3E%3C/circle%3E%3Ccircle stroke='%2381c784' stroke-width='2' fill='none' r='0'%3E%3Canimate attributeName='r' from='0' to='400' dur='4s' repeatCount='indefinite' begin='2s'/%3E%3Canimate attributeName='opacity' from='1' to='0' dur='4s' repeatCount='indefinite' begin='2s'/%3E%3C/circle%3E%3C/g%3E%3C/svg%3E\")";

  if (!isClient) {
    return null; // Let Suspense fallback handle this
  }

  return (
    <main
      className="min-h-screen w-full flex items-center justify-center p-4"
      style={{ backgroundImage: successBg, backgroundSize: 'cover' }}
    >
      <div className="w-full max-w-2xl bg-white/95 dark:bg-slate-800/95 rounded-2xl shadow-2xl p-8 md:p-12 text-center flex flex-col items-center">
        <div className="mb-8">
          <CheckmarkIcon />
        </div>

        <h1 className="text-4xl font-extrabold text-slate-800 dark:text-white mb-2">
          Thank you for your contribution!
        </h1>
        <h2 className="text-2xl text-slate-600 dark:text-slate-300">
          You successfully donated
        </h2>

        {displayAmount ? (
          <div className="bg-emerald-100 dark:bg-emerald-900/50 p-4 rounded-lg text-emerald-600 dark:text-emerald-300 mt-6 text-4xl font-bold w-full max-w-xs">
            ${displayAmount}
          </div>
        ) : (
          <div className="bg-gray-200 p-4 rounded-lg text-gray-500 mt-6 text-xl font-bold italic animate-pulse w-full max-w-xs">
            Processing amount...
          </div>
        )}

        {/* Buttons Section */}
        <div className="flex flex-col sm:flex-row gap-4 mt-12 w-full justify-center">
          <Link
            href="/donate"
            className="px-8 py-3 bg-emerald-500 text-white font-semibold rounded-lg shadow-md hover:bg-emerald-600 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-opacity-75 w-full sm:w-auto text-center"
          >
            Donate Again
          </Link>
          <Link
            href="/"
            className="px-8 py-3 bg-transparent border-2 border-slate-400 text-slate-600 dark:text-slate-300 dark:border-slate-500 font-semibold rounded-lg shadow-sm hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-slate-300 w-full sm:w-auto text-center"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </main>
  );
}