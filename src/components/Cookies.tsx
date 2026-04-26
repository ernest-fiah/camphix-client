import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookiesAccepted");

    if (!accepted) {
      setTimeout(() => {
        setVisible(true);
      }, 800); // smooth delay on load
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookiesAccepted", "false");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-[99999] px-4 pb-4">
      
      {/* BACKDROP GLOW */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent blur-2xl" />

      {/* BANNER */}
      <div className="max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/80 backdrop-blur-xl shadow-[0_-10px_40px_rgba(0,0,0,0.7)] animate-slideUp">

          {/* subtle animated shine */}
          <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-transparent via-white to-transparent animate-shine" />

          <div className="relative p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">

            {/* TEXT */}
            <div>
              <h3 className="text-white text-base font-semibold">
                We use cookies 🍪
              </h3>

              <p className="text-sm text-zinc-400 mt-1 leading-relaxed max-w-xl">
                We use cookies to improve your experience, analyze traffic, and personalize content.
                By continuing, you agree to our cookie policy.
              </p>
            </div>

            {/* BUTTONS */}
            <div className="flex items-center gap-3 w-full md:w-auto">

              <button
                onClick={declineCookies}
                className="px-4 py-2 rounded-xl text-sm border border-white/10 text-zinc-300 hover:text-white hover:border-white/30 transition"
              >
                Decline
              </button>

              <button
                onClick={acceptCookies}
                className="px-5 py-2 rounded-xl text-sm bg-white text-black font-medium hover:bg-zinc-200 transition shadow-md"
              >
                Accept
              </button>

            </div>
          </div>
        </div>
      </div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideUp {
          animation: slideUp 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }

        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-shine {
          animation: shine 2.5s infinite linear;
        }
      `}</style>
    </div>
  );
}