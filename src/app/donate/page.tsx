"use client"

import React, { useState, ChangeEvent } from 'react';
import CheckoutPage from "./donate_components/CheckoutPage";
import convertToSubcurrency from "./donate_lib/convertToSubcurrency";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import { gemunuLibre } from "@/components/ui/fonts";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

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
      <main className="max-w-2xl mx-auto p-8 md:p-10 text-white text-center border-3 border-dashed  border-green-800 my-10 rounded-lg shadow-xl 
">
        <div className="mb-8">
          <h1 className={`text-4xl md:text-5xl font-bold text-green-800 mb-3 ${gemunuLibre.className}`}>
            Support PlanetPatch
          </h1>
          <h2 className={`text-xl md:text-2xl text-green-800 ${gemunuLibre.className}`}>
            How much would you like to donate?
          </h2>
        </div>

        <div className="mb-8 space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {presetAmounts.map((preset) => (
              <button
                key={preset}
                onClick={() => handlePresetClick(preset)}
                className={`
                  p-3 rounded-md font-semibold text-lg transition-all duration-200 ease-in-out
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-600 focus:ring-green-800
                  ${activePresetUI === preset
                    ? 'bg-white text-green-700 scale-105 shadow-lg'
                    : 'bg-green-700 hover:bg-green-400 border-green-800 text-white'
                  }
                `}
              >
                ${preset}
              </button>
            ))}
          </div>
          <div className="space-y-3">
            <input
              type="text"
              value={customInputValue}
              onChange={handleCustomInputChange}
              onFocus={handleCustomInputFocus}
              placeholder="Or Enter Custom Amount"
              aria-label="Custom donation amount"
              className="
                p-3 rounded-md w-full max-w-xs mx-auto text-lg text-center 
                text-black dark:text-black bg-gray-100 focus:bg-white 
                focus:outline-none focus:ring-2 focus:ring-green-700 border border-gray-300
              "
            />
            {/* Show Confirm button if custom input has a valid value AND no preset is active */}
            {customInputValue && isValidCustomInput && activePresetUI === null && (
              <button
                onClick={handleConfirmCustomAmount}
                className="
                  w-full max-w-xs mx-auto px-6 py-3 rounded-md font-semibold text-lg transition-colors duration-200 ease-in-out
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-600 focus:ring-white
                  bg-green-700 text-white hover:bg-white hover:border-3 hover:border-green-800 hover:text-green-800
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
          <div className="p-4 my-4 text-center bg-green-700 rounded-md min-h-[100px] flex items-center justify-center">
            {/* Placeholder for when CheckoutPage is hidden */}
            <p className="font-semibold">
              {activePresetUI === null && customInputValue
                ? "Please confirm your custom amount."
                : "Select or enter an amount to donate."
              }
            </p>
          </div>
        )}
      </main>
    </>
  );
}