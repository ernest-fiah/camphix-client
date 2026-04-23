import React, { useState, useEffect } from "react";
import { ArrowRight, ChevronRight, ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function ConstructionCivilEngineering() {
  /* ===========================
     GALLERY DATA (ADDED ONLY)
  =========================== */
  const categories = [
    "Construction & Civil Engineering",
  ];

  const galleryItems = [
    {
      title: "Construction & Civil Engineering",
      image: "public/assets/construction/6.jpg",
      bg: "bg-[#2a2540]",
    },
    {
      title: "Construction & Civil Engineering",
      image: "public/assets/construction/2.jpg",
      bg: "bg-[#00323f]",
    },
    {
      title: "Construction & Civil Engineering",
      image: "public/assets/construction/3.jpg",
      bg: "bg-[#00365c]",
    },
    {
      title: "Construction & Civil Engineering",
      image: "public/assets/construction/4.jpg",
      bg: "bg-[#374151]",
    },
    {
      title: "Construction & Civil Engineering",
      image: "public/assets/construction/5.jpg",
      bg: "bg-[#5b4636]",
    },
    {
      title: "Construction & Civil Engineering",
      image: "public/assets/construction/6.jpg",
      bg: "bg-[#2a2540]",
    },
    {
      title: "Construction & Civil Engineering",
      image: "public/assets/construction/7.jpg",
      bg: "bg-[#00323f]",
    },
    {
      title: "Construction & Civil Engineering",
      image: "public/assets/construction/8.jpg",
      bg: "bg-[#00365c]",
    },
    {
      title: "Construction & Civil Engineering",
      image: "public/assets/construction/9.jpg",
      bg: "bg-[#374151]",
    },
    {
      title: "Construction & Civil Engineering",
      image: "public/assets/construction/10.jpg",
      bg: "bg-[#5b4636]",
    },
  ];

  const [activeCategory, setActiveCategory] = useState("Logo");
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
    <motion.section
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7 }}
      className="w-full bg-[#f5f1e8] text-[#111827] overflow-hidden font-sans"
      style={{
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* HERO SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full"
          >
            {/* BREADCRUMB */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm md:text-base mb-6">
              <a
                href="/"
                className="text-yellow-600 font-semibold hover:text-yellow-700 transition"
              >
                Home
              </a>

              <ChevronRight className="w-4 h-4 text-gray-500 shrink-0" />

              <span className="text-gray-700 break-words">
                Construction & Civil Engineering
              </span>
            </div>

            {/* TITLE */}
            <h1 className="text-[2rem] leading-[1.08] sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight break-words">
              Construction <br />
              & Civil <br />
              Engineering
            </h1>

            {/* TEXT */}
            <p className="mt-5 sm:mt-7 text-[0.97rem] sm:text-lg md:text-xl leading-7 sm:leading-9 md:leading-10 text-gray-700 text-justify">
              Camphix Enterprise delivers world-class construction and civil
              engineering solutions for residential, commercial, industrial and
              government projects. We combine innovation, quality materials and
              expert execution to build durable infrastructure that lasts.
            </p>

            {/* BUTTON */}
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
            {/* Background Shape */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px] lg:w-[500px] lg:h-[500px] border-[20px] sm:border-[28px] md:border-[35px] lg:border-[40px] border-yellow-200 rounded-[60px] sm:rounded-[90px] rotate-45 opacity-60"></div>
            </div>

            {/* Main Card */}
            <div className="relative z-10 bg-[#374151] rounded-2xl sm:rounded-3xl p-3 sm:p-4 md:p-5 shadow-2xl w-full max-w-xl mx-auto">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
                alt="Construction Site"
                className="rounded-xl sm:rounded-2xl w-full h-[220px] sm:h-[320px] md:h-[380px] object-cover"
              />
            </div>

            {/* Floating Card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative sm:absolute sm:bottom-0 sm:right-0 mt-4 sm:mt-0 bg-orange-500 rounded-2xl px-4 sm:px-6 py-4 sm:py-5 shadow-xl z-20 w-full sm:w-[280px] md:w-[320px]"
            >
              <h4 className="text-white font-bold text-base sm:text-lg md:text-xl leading-tight">
                Trusted Engineering Excellence
              </h4>

              <p className="text-orange-100 text-sm sm:text-base mt-2 sm:mt-3 leading-6 sm:leading-7 text-justify">
                Building roads, structures, drainage systems, estates and modern
                infrastructure across Africa.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* BENEFITS SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 pb-14 sm:pb-20 md:pb-24 lg:pb-28">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-yellow-600">Benefits</span> of Construction &
            Civil Engineering
          </h2>

          <p className="mt-5 sm:mt-7 max-w-4xl mx-auto text-[0.97rem] sm:text-lg md:text-xl leading-7 sm:leading-9 md:leading-10 text-gray-700 text-justify">
            Our construction and engineering services help clients build
            stronger, safer and more efficient projects. From planning to
            execution, we ensure long-term value and structural excellence.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 md:gap-10 mt-12 sm:mt-16 md:mt-20">

          {[
            {
              icon: "🏗️",
              title: "Strong & Durable Structures",
              text:
                "We construct buildings, bridges and facilities designed for strength, safety and durability using modern engineering standards and quality materials.",
            },
            {
              icon: "📐",
              title: "Smart Planning & Design",
              text:
                "Our experts carefully plan each project for efficiency, cost-effectiveness and smooth execution from foundation to final delivery.",
            },
            {
              icon: "🚧",
              title: "Reliable Project Delivery",
              text:
                "We complete projects on time and to specification while maintaining strict quality control, safety compliance and client satisfaction.",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 45, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: index * 0.15,
              }}
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-yellow-400 flex items-center justify-center text-xl sm:text-3xl shrink-0">
                  {card.icon}
                </div>

                <h3 className="text-xl sm:text-3xl font-bold leading-tight">
                  {card.title}
                </h3>
              </div>

              <div className="border-t border-gray-300 pt-5 sm:pt-7">
                <p className="text-[0.97rem] sm:text-lg md:text-xl leading-7 sm:leading-9 text-gray-700 text-justify">
                  {card.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================================= */}
        {/* NEW PORTFOLIO GALLERY LIKE IMAGE */}
        {/* ================================= */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 pb-20">

          {/* TITLE */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight mt-10">
              Take a look at some of our Construction & CivilEngineering work
            </h2>
          </motion.div>

          {/* FILTER BUTTONS */}
          <div className="flex flex-wrap justify-center gap-4 mb-14">
            {categories.map((item, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
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
              </motion.button>
            ))}
          </div>

          {/* SLIDER */}
          <div className="relative">

            {/* CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {visibleCards.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className={`${item.bg} rounded-[28px] p-5 h-[250px] sm:h-[400px] overflow-hidden shadow-xl`}
                >
                  <div className="w-full h-full rounded-[24px] overflow-hidden bg-white/10">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* LEFT BUTTON */}
            <button
              onClick={prevSlide}
              className="absolute -left-2 md:-left-6 bottom-[-70px] w-12 h-12 rounded-full bg-yellow-300 hover:bg-yellow-400 flex items-center justify-center shadow-lg"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* RIGHT BUTTON */}
            <button
              onClick={nextSlide}
              className="absolute -right-2 md:-right-6 bottom-[-70px] w-12 h-12 rounded-full bg-yellow-300 hover:bg-yellow-400 flex items-center justify-center shadow-lg"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* DOTS */}
            <div className="flex justify-center gap-5 mt-14">
              {galleryItems.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.25 }}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition-all
                    ${
                      current === index
                        ? "bg-orange-400 scale-125"
                        : "bg-yellow-300"
                    }
                  `}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}