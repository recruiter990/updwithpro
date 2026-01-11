"use client";

import { useState, useEffect } from "react";
import { X, Cookie } from "lucide-react";
import Button from "@/components/ui/Button";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Show banner after a short delay for better UX
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowBanner(false);
    // Enable analytics if Google Analytics is configured
    if (process.env.NEXT_PUBLIC_GA_ID) {
      // Analytics will be enabled automatically
    }
  };

  const rejectCookies = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="container-custom">
        <div className="bg-white dark:bg-dark border border-gray-200 dark:border-white/10 rounded-lg shadow-2xl p-6 md:p-8 max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
          <div className="flex-shrink-0">
            <Cookie className="h-8 w-8 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="font-heading font-semibold text-lg mb-2 text-dark dark:text-light">
              Utilizziamo i Cookie
            </h3>
            <p className="text-sm text-gray dark:text-gray-light mb-4">
              Questo sito utilizza cookie per migliorare l'esperienza utente e analizzare il traffico. 
              Accettando, acconsenti all'utilizzo dei cookie.{" "}
              <a
                href="/privacy"
                className="text-primary hover:underline"
              >
                Leggi la Privacy Policy
              </a>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Button
              onClick={acceptCookies}
              variant="primary"
              className="w-full sm:w-auto"
            >
              Accetta
            </Button>
            <Button
              onClick={rejectCookies}
              variant="outline"
              className="w-full sm:w-auto"
            >
              Rifiuta
            </Button>
          </div>
          <button
            onClick={rejectCookies}
            className="absolute top-4 right-4 text-gray hover:text-dark dark:hover:text-light transition-colors"
            aria-label="Chiudi"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

