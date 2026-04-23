import { motion } from "framer-motion";
import { Mail, PhoneCall, ArrowRight } from "lucide-react";

export default function CallToAction() {
  const user = {
  email: "camphixcompany@gmail.com",
  phone: "+233541728294",
};

  return (
    <section className="relative w-full py-24 px-6 bg-white overflow-hidden">

      {/* SOFT GRAY BACKGROUND STYLE (same vibe as Our Story) */}
      <div className="absolute inset-0">
        <div className="absolute top-[-120px] right-[-120px] w-[420px] h-[420px] bg-gray-200 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-[-120px] left-[-120px] w-[450px] h-[450px] bg-gray-100 rounded-full blur-3xl opacity-60" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="relative max-w-5xl mx-auto text-center"
      >

        {/* TITLE */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
          Let’s Build Something{" "}
          <span className="bg-gradient-to-r from-gray-300 via-gray-500 to-gray-700 bg-clip-text text-transparent">
            Great Together
          </span>
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-5 text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
          We specialize in construction, engineering, design, and digital solutions.
          Let’s turn your ideas into reality with precision and quality.
        </p>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

          {/* CALL BUTTON (NEUTRAL PREMIUM STYLE) */}
          <a
            href={`tel:${user.phone}`}
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 text-white font-medium shadow-sm hover:shadow-md transition overflow-hidden"
          >
            <span className="absolute inset-0 bg-white/10 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700"></span>
            <PhoneCall className="w-4 h-4" />
            Call Now
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          </a>

          {/* EMAIL BUTTON */}
          <a
            href={`mailto:${user.email}`}
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-900 hover:text-white transition"
          >
            <Mail className="w-4 h-4" />
            Send Email
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          </a>

        </div>

        {/* FOOTER */}
        <p className="mt-8 text-xs text-gray-400">
          Fast response • Professional service • Ghana-based team
        </p>

      </motion.div>
    </section>
  );
}