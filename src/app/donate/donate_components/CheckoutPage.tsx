"use client";

import React, { useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import convertToSubcurrency from "../donate_lib/convertToSubcurrency";

const CheckoutPage = ({ amount }: { amount: number }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Ensure amount is positive before fetching client secret
    if (amount > 0) {
      fetch("/donate/api/create_payment_intent", { // Corrected path from previous discussions
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: convertToSubcurrency(amount) }),
      })
      .then((res) => {
        if (!res.ok) {
          return res.json().then(errData => {
            throw new Error(errData.error || `HTTP error! status: ${res.status}`);
          });
        }
        return res.json();
      })
      .then((data) => {
        if (data.clientSecret) {
          setClientSecret(data.clientSecret);
        } else if (data.error) {
          console.error("Error fetching client secret:", data.error);
          setErrorMessage(data.error);
        } else {
          console.error("Client secret not found in API response");
          setErrorMessage("Failed to initialize payment session (no client secret).");
        }
      })
      .catch(err => {
        console.error("Fetch failed for create_payment_intent:", err);
        setErrorMessage(err.message || "Failed to initialize payment. Please try again.");
      });
    } else {
      // If amount is 0 or less, clear any existing client secret and potentially show a message
      setClientSecret(""); 
      // setErrorMessage("Please enter a valid amount to donate."); // Optional: inform user
    }
  }, [amount]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      setErrorMessage("Stripe.js has not loaded yet. Please try again.");
      setLoading(false); // Ensure loading is set to false
      return;
    }

    if (!clientSecret) {
      setErrorMessage("Payment session not ready. Please check the amount or try again.");
      setLoading(false);
      return;
    }

    const { error: submitError } = await elements.submit();

    if (submitError) {
      setErrorMessage(submitError.message);
      setLoading(false);
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `${window.location.origin}/donate/payment_success?amount=${amount.toFixed(2)}`, // Also format amount in return_url
      },
    });

    if (error) {
      console.error("Stripe confirmPayment error:", error);
      setErrorMessage(error.message || "An unexpected error occurred. Please try again.");
    } else {
      console.log("Payment confirmation initiated successfully. Stripe is handling redirection to return_url.");
      // Stripe handles the redirect, no client-side navigation needed here normally.
      // setLoading(true) should remain until redirect.
    }
    // Only set loading to false if there was an error and we are NOT redirecting.
    // If successful, Stripe redirects and this component unmounts.
    if (error) {
        setLoading(false);
    }
  };

  // Initial loading state for when clientSecret is being fetched or Stripe/Elements are not ready
  if (!clientSecret || !stripe || !elements) {
    // Show a more specific message if amount is invalid for fetching clientSecret
    if (amount <= 0 && !loading) { // Check !loading to avoid message flash during valid amount processing
        return (
            <div className="text-center p-4 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-slate-700 rounded-md">
                Please select or enter a valid donation amount.
            </div>
        );
    }
    return (
      <div className="flex items-center justify-center py-4">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading payment form...
          </span>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-2 rounded-md">
      {/* The PaymentElement will only show if clientSecret is valid */}
      <PaymentElement />

      {errorMessage && <div className="text-red-600 text-sm mt-2 text-center">{errorMessage}</div>}

      <button
        disabled={!stripe || loading || !clientSecret || amount <= 0} // Ensure amount is positive
        className="text-white w-full p-5 bg-black mt-2 rounded-md font-bold disabled:opacity-50 disabled:animate-pulse"
      >
        {!loading ? `Pay $${amount.toFixed(2)}` : "Processing..."} {/* MODIFIED HERE */}
      </button>
    </form>
  );
};

export default CheckoutPage;