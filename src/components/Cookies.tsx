import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookiesAccepted");
    if (!accepted) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookiesAccepted", "false");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 120, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 120, opacity: 0, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 120, damping: 14 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] max-w-3xl z-50"
        >
          <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-yellow-400/30 bg-black text-white">

            {/* glowing animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-black to-yellow-500 opacity-30 animate-pulse"></div>

            <div className="relative p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">

              {/* Text */}
              <div>
                <h3 className="text-lg font-bold text-yellow-400">
                  🍪 Cookie Notice
                </h3>
                <p className="text-sm text-white/70">
                  We use cookies to improve your experience, analyze traffic, and personalize content.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 w-full md:w-auto">
                <button
                  onClick={decline}
                  className="w-full md:w-auto px-4 py-2 rounded-xl border border-red-500 text-red-400 hover:bg-red-500/10 transition"
                >
                  Decline
                </button>

                <button
                  onClick={accept}
                  className="w-full md:w-auto px-4 py-2 rounded-xl bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition shadow-lg"
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}