import { useState, useEffect } from "react";
import { ArrowRight, ChevronRight, ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function LandSurveyingConsultancy() {
  /* ===========================
     GALLERY DATA
  =========================== */
  const categories = ["Land Surveying & Consultancy"];

  const galleryItems = [
  {
    title: "Land Surveying & Consultancy",
    image: "/assets/construction/land-surveying/1.webp",
    bg: "bg-[#2a2540]",
  },
  {
    title: "Land Surveying & Consultancy",
    image: "/assets/construction/land-surveying/2.webp",
    bg: "bg-[#00323f]",
  },
  {
    title: "Land Surveying & Consultancy",
    image: "/assets/construction/land-surveying/3.webp",
    bg: "bg-[#00365c]",
  },
  {
    title: "Land Surveying & Consultancy",
    image: "/assets/construction/land-surveying/4.webp",
    bg: "bg-[#374151]",
  },
  {
    title: "Land Surveying & Consultancy",
    image: "/assets/construction/land-surveying/5.webp",
    bg: "bg-[#5b4636]",
  },
  {
    title: "Land Surveying & Consultancy",
    image: "/assets/construction/land-surveying/6.webp",
    bg: "bg-[#2a2540]",
  },
  {
    title: "Land Surveying & Consultancy",
    image: "/assets/construction/land-surveying/1.webp",
    bg: "bg-[#00323f]",
  },
  {
    title: "Land Surveying & Consultancy",
    image: "/assets/construction/land-surveying/2.webp",
    bg: "bg-[#00365c]",
  },
  {
    title: "Land Surveying & Consultancy",
    image: "/assets/construction/land-surveying/3.webp",
    bg: "bg-[#374151]",
  },
  {
    title: "Land Surveying & Consultancy",
    image: "/assets/construction/land-surveying/4.webp",
    bg: "bg-[#5b4636]",
  },
];
  const [activeCategory, setActiveCategory] = useState(
    "Land Surveying & Consultancy"
  );
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3500);

    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? galleryItems.length - 1 : prev - 1
    );
  };

  const visibleCards = [
    galleryItems[current],
    galleryItems[(current + 1) % galleryItems.length],
    galleryItems[(current + 2) % galleryItems.length],
  ];

  return (
    <section
      className="w-full bg-[#f5f1e8] text-[#111827] overflow-hidden font-sans"
      style={{
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* HERO SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-12 sm:py-16 md:py-20 lg:py-24"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full"
          >
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm md:text-base mb-6">
              <a
                href="/"
                className="text-yellow-600 font-semibold hover:text-yellow-700 transition"
              >
                Home
              </a>

              <ChevronRight className="w-4 h-4 text-gray-500 shrink-0" />

              <span className="text-gray-700 break-words">
                Land Surveying & Consultancy
              </span>
            </div>

            <h1 className="text-[2rem] leading-[1.08] sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight break-words">
              Land Surveying <br />& Consultancy
            </h1>

            <p className="mt-5 sm:mt-7 text-[0.97rem] sm:text-lg md:text-xl leading-7 sm:leading-9 md:leading-10 text-gray-700 text-justify">
              Camphix Enterprise provides accurate land surveying and
              professional consultancy services for residential, commercial,
              industrial and government developments. We combine modern survey
              equipment, mapping technology and expert advisory services to help
              clients make informed land, planning and construction decisions.
            </p>

            <div className="mt-7 sm:mt-10">
              <a
                href="/contact"
                className="w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-sm sm:text-base px-6 sm:px-10 py-4 rounded-full transition duration-300"
              >
                BOOK A CONSULTATION
                <ArrowRight className="w-5 h-5 shrink-0" />
              </a>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{
                  rotate: [45, 50, 45],
                  scale: [1, 1.04, 1],
                  borderColor: [
                    "rgba(253,224,71,0.55)",
                    "rgba(239,68,68,0.55)",
                    "rgba(250,204,21,0.55)",
                    "rgba(253,224,71,0.55)",
                  ],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px] lg:w-[500px] lg:h-[500px] border-[20px] sm:border-[28px] md:border-[35px] lg:border-[40px] rounded-[60px] sm:rounded-[90px] opacity-60"
              ></motion.div>
            </div>

            <motion.div
              animate={{
                boxShadow: [
                  "0 0 0 rgba(0,0,0,0)",
                  "0 0 30px rgba(250,204,21,0.25)",
                  "0 0 40px rgba(239,68,68,0.18)",
                  "0 0 0 rgba(0,0,0,0)",
                ],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 bg-[#374151] rounded-3xl p-5 shadow-2xl w-full max-w-xl mx-auto border border-white/10"
            >
              <img
                src="/assets/construction/land-surveying/1.webp"
                alt="Land Surveying"
                className="rounded-2xl w-full h-[220px] sm:h-[320px] md:h-[380px] object-cover"
              />
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative sm:absolute sm:bottom-0 sm:right-0 mt-4 sm:mt-0 bg-orange-500 rounded-2xl px-6 py-5 shadow-xl z-20 w-full sm:w-[280px] md:w-[320px]"
            >
              <h4 className="text-white font-bold text-base sm:text-lg md:text-xl leading-tight">
                Precision Surveying Solutions
              </h4>

              <p className="text-orange-100 text-sm sm:text-base mt-3 leading-7 text-justify">
                Boundary mapping, topographic surveys, site layout, land
                documentation and consultancy services delivered with accuracy.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* BENEFITS SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 pb-20"
      >
        <div className="text-center">
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-yellow-600">Benefits</span> of Land Surveying &
            Consultancy
          </h2>

          <p className="mt-7 max-w-4xl mx-auto text-[0.97rem] sm:text-lg md:text-xl leading-7 sm:leading-9 md:leading-10 text-gray-700 text-justify">
            Our surveying and consultancy services help clients make smarter
            development decisions, prevent land disputes and execute projects
            with confidence through accurate data and expert guidance.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-14">

          {/* CARD 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              delay: 0,
            }}
            whileHover={{ y: -6 }}
            className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center text-2xl mb-5">
              📍
            </div>

            <h3 className="text-2xl font-bold text-gray-900">
              Accurate Boundary Mapping
            </h3>

            <p className="mt-4 text-gray-700 leading-8">
              We identify and mark property boundaries clearly to reduce land
              disputes and support secure ownership.
            </p>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              delay: 0.12,
            }}
            whileHover={{ y: -6 }}
            className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center text-2xl mb-5">
              📐
            </div>

            <h3 className="text-2xl font-bold text-gray-900">
              Smart Planning & Advisory
            </h3>

            <p className="mt-4 text-gray-700 leading-8">
              Our consultancy team guides land acquisition, development
              planning, approvals and project execution.
            </p>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              delay: 0.24,
            }}
            whileHover={{ y: -6 }}
            className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center text-2xl mb-5">
              🛰️
            </div>

            <h3 className="text-2xl font-bold text-gray-900">
              Modern Survey Technology
            </h3>

            <p className="mt-4 text-gray-700 leading-8">
              We use advanced GPS, drone mapping and digital tools to provide
              fast and highly reliable survey results.
            </p>
          </motion.div>
        </div>

        {/* GALLERY SECTION (UNCHANGED LOGIC) */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Take a look at some of our Land Surveying & Consultancy work
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-14">
            {categories.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(item)}
                className={`px-6 py-3 rounded-full border text-sm sm:text-base transition-all duration-300
                  ${
                    activeCategory === item
                      ? "bg-yellow-400 border-yellow-400 text-black"
                      : "border-gray-400 text-[#111827] hover:border-yellow-400"
                  }
                `}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {visibleCards.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`${item.bg} rounded-3xl p-4 h-[260px] sm:h-[380px] shadow-md hover:shadow-xl transition`}
              >
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-yellow-300 hover:bg-yellow-400 flex items-center justify-center shadow"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-yellow-300 hover:bg-yellow-400 flex items-center justify-center shadow"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex justify-center gap-3 mt-6 flex-wrap">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition ${
                  current === index
                    ? "bg-orange-400 scale-125"
                    : "bg-yellow-300"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}