import { Suspense } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PaymentSuccessClientDisplay from "./PaymentSuccessClientDisplay"; // Import the new client component

// This is now a Server Component (no "use client" directive)
export default function PaymentSuccessPage() {
  // This Server Component doesn't need to handle searchParams directly for display purposes
  // if the Client Component (`PaymentSuccessClientDisplay`) uses the useSearchParams hook.
  // However, it *could* receive and pass them down if needed for other server-side logic
  // or if PaymentSuccessClientDisplay was designed to take them as props instead of using the hook.
  // For this pattern, we let the client component handle its own searchParams via the hook.

  return (
    <>
      <Navbar />
      <Suspense 
        fallback={
          // This fallback will be rendered on the server and shown on the client
                  // until PaymentSuccessClientDisplay is ready (i.e., after useSearchParams resolves)
          <main className="max-w-6xl mx-auto p-10 text-center border m-10 rounded-md bg-gradient-to-tr from-green-500 to-purple-500 flex flex-col items-center">
            <div className="flex justify-center items-center min-h-[calc(100vh-400px)] text-xl text-white"> {/* Adjusted min-height */}
              Loading Payment Confirmation...
            </div>
          </main>
        }
      >
        <PaymentSuccessClientDisplay />
      </Suspense>
      <Footer />
    </>
  );
}