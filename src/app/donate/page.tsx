"use client"

import React, { useState, ChangeEvent } from 'react';
import CheckoutPage from "./donate_components/CheckoutPage";
import convertToSubcurrency from "./donate_lib/convertToSubcurrency";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import { gemunuLibre } from "@/components/ui/fonts";

const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "";
const stripePromise = stripeKey ? loadStripe(stripeKey) : null;

const presetAmounts = [5, 10, 25, 50];
const DEFAULT_DONATION_AMOUNT = 10;

export default function Donate() {
  const [committedAmount, setCommittedAmount] = useState<number>(DEFAULT_DONATION_AMOUNT);
  const [customInputValue, setCustomInputValue] = useState<string>("");
  const [activePresetUI, setActivePresetUI] = useState<number | null>(DEFAULT_DONATION_AMOUNT);

  const handlePresetClick = (amount: number) => {
    setCommittedAmount(amount);
    setCustomInputValue(""); // Clear custom input
    setActivePresetUI(amount);
  };

  const handleCustomInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const regex = /^\d*(\.\d{0,2})?$/;

    if (value === "" || regex.test(value)) {
      setCustomInputValue(value);
      setActivePresetUI(null); // Custom input is now the focus
      setCommittedAmount(0); // Hide CheckoutPage while custom amount is being edited / not confirmed
    }
  };

  const handleCustomInputFocus = () => {
    setActivePresetUI(null);
    // If the current committed amount isn't from the current custom input, clear it to hide CheckoutPage
    if (committedAmount !== parseFloat(customInputValue)) {
        setCommittedAmount(0);
    }
  };
  
  const handleConfirmCustomAmount = () => {
    const numericValue = parseFloat(customInputValue);
    if (!isNaN(numericValue) && numericValue > 0) {
      setCommittedAmount(numericValue); // Set the amount for Stripe
      setActivePresetUI(null); // Keep UI indicating custom amount was source
      // customInputValue remains, so the "Confirm $X.XX" button will still show this value
      // unless you want to clear it or change its state after confirmation.
    } else {
      alert("Please enter a valid positive amount.");
    }
  };

  const isValidCustomInput = !isNaN(parseFloat(customInputValue)) && parseFloat(customInputValue) > 0;
  const formattedCustomAmountForButton = isValidCustomInput ? parseFloat(customInputValue).toFixed(2) : "0.00";

  const elementsOptions: StripeElementsOptions = {
    mode: "payment",
    // Use committedAmount; ensure it's at least 1 cent for Stripe if it could be 0 temporarily
    amount: convertToSubcurrency(committedAmount > 0 ? committedAmount : 1),
    currency: "usd",
  };

  return (
    <>
      {/* TODO: create a pattern background for future */}
      <section className="min-h-[calc(100vh-5rem)] py-12 md:py-20 px-4 sm:px-6 bg-slate-50 dark:bg-[#0c180e] relative overflow-hidden transition-colors duration-300 flex items-center justify-center">
        {/* Ambient background glow overlay */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-500/10 via-transparent to-transparent dark:from-green-600/20 dark:via-transparent dark:to-transparent"></div>

        <main className="max-w-2xl w-full mx-auto p-8 sm:p-10 md:p-12 text-slate-900 dark:text-slate-100 bg-white dark:bg-gradient-to-b dark:from-[#183a20] dark:to-[#112916] border border-slate-200/80 dark:border-green-700/30 dark:shadow-[0_0_50px_-12px_rgba(34,197,94,0.25)] rounded-3xl shadow-xl transition-all duration-300 relative z-10">
          <div className="mb-8 text-center">
            <h1 className={`text-4xl md:text-5xl font-bold text-green-700 dark:text-green-400 mb-3 ${gemunuLibre.className}`}>
              Support PlanetPatch
            </h1>
            <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-md mx-auto">
              How much would you like to donate?
            </p>
          </div>

          <div className="mb-8 space-y-5">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              {presetAmounts.map((preset) => (
                <button
                  key={preset}
                  onClick={() => handlePresetClick(preset)}
                  className={`
                    p-3.5 rounded-2xl font-bold text-lg sm:text-xl transition-all duration-200 ease-in-out
                    focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900
                    ${activePresetUI === preset
                      ? 'bg-green-600 dark:bg-green-500 text-white dark:text-slate-950 scale-105 shadow-md dark:shadow-[0_0_20px_rgba(34,197,94,0.4)] border-2 border-green-600 dark:border-green-400'
                      : 'bg-slate-100 dark:bg-slate-900/60 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/60 hover:bg-slate-200 dark:hover:bg-slate-800/80'
                    }
                  `}
                >
                  ${preset}
                </button>
              ))}
            </div>
            <div className="flex flex-col items-center space-y-3.5 pt-1">
              <input
                type="text"
                value={customInputValue}
                onChange={handleCustomInputChange}
                onFocus={handleCustomInputFocus}
                placeholder="Or Enter Custom Amount ($)"
                aria-label="Custom donation amount"
                className="
                  p-3.5 rounded-2xl w-full max-w-xs text-center font-semibold text-lg
                  text-slate-900 dark:text-slate-100 bg-slate-100 dark:bg-slate-900/80
                  focus:bg-white dark:focus:bg-slate-950 focus:outline-none 
                  focus:ring-2 focus:ring-green-500 border border-slate-300 dark:border-slate-700/80
                  transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500
                "
              />
              {customInputValue && isValidCustomInput && activePresetUI === null && (
                <button
                  onClick={handleConfirmCustomAmount}
                  className="
                    w-full max-w-xs px-6 py-3.5 rounded-2xl font-bold text-base uppercase tracking-wider
                    bg-green-600 dark:bg-green-500 text-white dark:text-slate-950
                    hover:bg-green-700 dark:hover:bg-green-400 shadow-md dark:shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all
                    focus:outline-none focus:ring-2 focus:ring-green-500
                  "
                >
                  Confirm ${formattedCustomAmountForButton}
                </button>
              )}
            </div>
          </div>
          
          {/* Conditionally render Elements and CheckoutPage based on committedAmount */}
          {committedAmount > 0 ? (
            <Elements stripe={stripePromise} options={elementsOptions} key={committedAmount}> {/* Keyed by committedAmount */}
              <CheckoutPage amount={committedAmount} />
            </Elements>
          ) : (
            <div className="p-6 my-4 text-center bg-slate-100 dark:bg-slate-900/60 rounded-2xl border border-slate-200/80 dark:border-slate-700/60">
              {/* Placeholder for when CheckoutPage is hidden */}
              <p className="font-semibold text-slate-700 dark:text-slate-300">
                {activePresetUI === null && customInputValue
                  ? "Please confirm your custom amount to proceed to payment."
                  : "Select or enter an amount to donate."
                }
              </p>
            </div>
          )}
        </main>
      </section>
    </>
  );
}