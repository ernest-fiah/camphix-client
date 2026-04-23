import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function SplashScreen({ onDone }: { onDone: () => void }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onDone();
    }, 2500);

    return () => clearTimeout(timer);
  }, [onDone]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <motion.img
        src="/assets/camphix.png"
        alt="logo"
        className="w-28 md:w-40"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      />
    </div>
  );
}