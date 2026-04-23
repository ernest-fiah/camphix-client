
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-zinc-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs text-red-600 bg-white rounded-full px-6 py-2">
            Camphix Enterprise
          </span>

          <h1 className="text-4xl md:text-5xl font-semibold text-zinc-900 mt-6">
            Building the Future with Precision & Innovation
          </h1>

          <p className="text-base text-zinc-600 max-w-lg mx-auto mt-4">
            We deliver excellence in construction, civil engineering, land surveying,
            architecture, and digital solutions across Africa.
          </p>
        </motion.div>

        {/* FEATURES GRID */}
        <div className="flex flex-col gap-6">

          {/* ROW 1 */}
          <div className="flex flex-col md:flex-row gap-6">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:w-[60%] bg-white rounded-xl p-6 flex flex-col md:flex-row gap-5 hover:shadow-md transition"
            >
             <img
                src="public/assets/hero-2.jpg"
                alt="Construction"
                className="w-full h-48 md:h-full md:w-[45%] object-cover rounded-xl"
              />

              <div>
                <h3 className="text-lg font-semibold text-zinc-900 mb-2">
                  Construction & Civil Engineering
                </h3>
                <p className="text-sm text-zinc-600 leading-6">
                  Delivering high-quality infrastructure projects with precision,
                  durability, and adherence to global engineering standards.
                </p>
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="md:w-[40%] bg-white rounded-xl p-6 hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-zinc-900 mb-2">
                Land Surveying & Consultancy
              </h3>
              <p className="text-sm text-zinc-600 leading-6">
                Accurate surveying and expert consultancy services to guide
                land development, planning, and project execution.
              </p>
            </motion.div>
          </div>

          {/* ROW 2 */}
          <div className="flex flex-col md:flex-row gap-6">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="md:w-[40%] bg-white rounded-xl p-6 hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-zinc-900 mb-2">
                Architectural & Real Estate Development
              </h3>
              <p className="text-sm text-zinc-600 leading-6">
                Designing modern, functional, and sustainable spaces while
                delivering real estate projects that create long-term value.
              </p>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="md:w-[60%] bg-white rounded-xl p-6 flex flex-col md:flex-row gap-5 hover:shadow-md transition"
            >
              <img
                src="public/assets/hero-1.jpg"
                alt="Digital services"
                className="w-full h-48 md:h-full md:w-[45%] object-cover rounded-xl"
              />

              <div>
                <h3 className="text-lg font-semibold text-zinc-900 mb-2">
                  Digital & Creative Solutions
                </h3>
                <p className="text-sm text-zinc-600 leading-6">
                  From branding and UI/UX design to digital marketing and media
                  production, we help businesses grow and stand out in a digital world.
                </p>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}