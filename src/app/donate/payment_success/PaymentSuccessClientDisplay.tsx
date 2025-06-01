// src/app/donate/payment_success/PaymentSuccessClientDisplay.tsx
"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation"; // useRouter for potential URL cleanup
import Link from "next/link";

export default function PaymentSuccessClientDisplay() {
  const searchParams = useSearchParams();
  const router = useRouter(); // Initialize for potential use in URL cleanup
  const [isClient, setIsClient] = useState(false);
  const [displayAmount, setDisplayAmount] = useState<string | null>(null);

  useEffect(() => {
    // This effect runs only on the client, after initial hydration.
    const amountFromParams = searchParams.get("amount");
    setDisplayAmount(amountFromParams);
    setIsClient(true); // Indicate client has mounted and state is ready

    // Optional: URL cleanup logic to remove Stripe-specific parameters
    // This should run only once after verifying the payment if you choose to implement it.
    // For example, if you have verified the payment_intent_client_secret successfully.
    // const paymentIntentClientSecret = searchParams.get('payment_intent_client_secret');
    // const paymentIntent = searchParams.get('payment_intent');
    // if (paymentIntentClientSecret && paymentIntent && amountFromParams) {
    //   // After any necessary verification with Stripe...
    //   console.log("Client-side: Attempting to clean URL parameters.");
    //   router.replace(`/donate/payment-success?amount=${amountFromParams}`, { scroll: false });
    // }
  }, [searchParams, router]); // router added to dependency array

  // If !isClient, this component will return null.
  // The <Suspense> fallback in the parent Server Component will be shown instead
  // during server render and initial client hydration for this component's slot.
  if (!isClient) {
    return null;
  }

  // Render the actual content once the client has mounted and state is set
  return (
    <main className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-blue-500 to-purple-500 flex flex-col items-center">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2">Thank you!</h1>
        <h2 className="text-2xl">You successfully sent</h2>

        {displayAmount ? (
          <div className="bg-white p-2 rounded-md text-purple-500 mt-5 text-4xl font-bold">
            ${displayAmount}
          </div>
        ) : (
          <div className="bg-white p-2 rounded-md text-gray-400 mt-5 text-xl font-bold italic animate-pulse">
            Processing amount... {/* Shown briefly if amount isn't available immediately */}
          </div>
        )}
      </div>

      {/* Buttons Section */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <Link
          href="/donate"
          className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 w-full sm:w-auto text-center"
        >
          Donate Again
        </Link>
        <Link
          href="/"
          className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg shadow-sm hover:bg-white hover:text-purple-600 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-100 focus:ring-opacity-75 w-full sm:w-auto text-center"
        >
          Go to Home
        </Link>
      </div>
    </main>
  );
}