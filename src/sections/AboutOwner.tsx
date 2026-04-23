import { motion } from "framer-motion";

export default function AboutOwner() {
  return (
    <section className="bg-white py-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
      >
        
        {/* TEXT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-zinc-900 mb-6">
            The Camphix Journey
          </h2>

          <p className="text-sm text-zinc-600 leading-7 mb-4 text-justify">
            Camphix Enterprise began with a vision to redefine construction,
            engineering, and digital solutions across Africa. Founded by a
            passionate civil engineer with a strong background in both
            infrastructure development and creative digital work, the journey
            started with a deep interest in solving real-world problems through
            practical engineering and innovation.
          </p>

          <p className="text-sm text-zinc-600 leading-7 mb-4 text-justify">
            Early experiences in civil engineering, design, and technology
            shaped the foundation of Camphix. From working on
            construction-related projects to exploring digital tools such as
            design, branding, and web development, the goal was always to
            combine technical excellence with modern innovation to deliver
            better solutions.
          </p>

          <p className="text-sm text-zinc-600 leading-7 text-justify">
            Today, Camphix Enterprise has grown into a multi-disciplinary
            company offering services in construction, civil engineering,
            architectural design, land surveying, real estate development, and
            digital solutions. The mission remains the same — to build with
            precision, deliver with integrity, and innovate for the future.
          </p>
        </motion.div>

        {/* IMAGE SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center"
        >
          <img
            src="/assets/owner.webp"
            alt="Founder"
            className="w-full max-w-md mx-auto shadow-md"
          />

          <p className="text-xs text-zinc-500 mt-3 italic">
            Joseph Mensah Sarbah— CEO, Camphix Websites
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}