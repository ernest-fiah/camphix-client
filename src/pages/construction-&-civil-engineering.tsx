import { useState, useEffect } from "react";
import { ArrowRight, ChevronRight, ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function ConstructionCivilEngineering() {
  const categories = ["Construction & Civil Engineering"];

const galleryItems = [
  {
    title: "Construction & Civil Engineering",
    image: "/assets/construction/6.webp",
    bg: "bg-[#2a2540]",
  },
  {
    title: "Construction & Civil Engineering",
    image: "/assets/construction/2.webp",
    bg: "bg-[#00323f]",
  },
  {
    title: "Construction & Civil Engineering",
    image: "/assets/construction/3.webp",
    bg: "bg-[#00365c]",
  },
  {
    title: "Construction & Civil Engineering",
    image: "/assets/construction/4.webp",
    bg: "bg-[#374151]",
  },
  {
    title: "Construction & Civil Engineering",
    image: "/assets/construction/5.webp",
    bg: "bg-[#5b4636]",
  },
  {
    title: "Construction & Civil Engineering",
    image: "/assets/construction/6.webp",
    bg: "bg-[#2a2540]",
  },
  {
    title: "Construction & Civil Engineering",
    image: "/assets/construction/7.webp",
    bg: "bg-[#00323f]",
  },
  {
    title: "Construction & Civil Engineering",
    image: "/assets/construction/8.webp",
    bg: "bg-[#00365c]",
  },
  {
    title: "Construction & Civil Engineering",
    image: "/assets/construction/9.webp",
    bg: "bg-[#374151]",
  },
  {
    title: "Construction & Civil Engineering",
    image: "/assets/construction/10.webp",
    bg: "bg-[#5b4636]",
  },
];

  const [activeCategory, setActiveCategory] = useState(
    "Construction & Civil Engineering",
  );
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3500);

    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
  };

  const visibleCards = [
    galleryItems[current],
    galleryItems[(current + 1) % galleryItems.length],
    galleryItems[(current + 2) % galleryItems.length],
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7 }}
      className="w-full bg-[#f5f1e8] text-[#111827] overflow-hidden"
    >
      {/* HERO */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* BREADCRUMB */}
            <div className="flex flex-wrap items-center gap-2 text-sm mb-5">
              <a
                href="/"
                className="text-yellow-600 font-semibold hover:text-yellow-700"
              >
                Home
              </a>

              <ChevronRight className="w-4 h-4 text-gray-500" />

              <span className="text-gray-700">
                Construction & Civil Engineering
              </span>
            </div>

            {/* TITLE */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Construction <br />
              & Civil <br />
              Engineering
            </h1>

            {/* TEXT */}
            <p className="mt-6 text-base sm:text-lg md:text-xl leading-8 text-gray-700">
              Camphix Enterprise delivers premium construction and civil
              engineering services for residential, commercial and industrial
              developments. We combine innovation, quality craftsmanship and
              expert execution to build infrastructure that stands the test of
              time.
            </p>

            {/* BUTTON */}
            <div className="mt-8">
              <motion.a
                href="tel:+233541728294"
                initial={{ opacity: 0, y: 25, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{
                  scale: 1.05,
                  y: -3,
                  boxShadow: "0px 18px 35px rgba(0,0,0,0.18)",
                }}
                whileTap={{ scale: 0.96 }}
                className="group relative w-full sm:w-auto inline-flex justify-center items-center gap-3 px-6 sm:px-10 py-4 rounded-full bg-yellow-400 text-black font-semibold overflow-hidden transition"
              >
                {/* Shine Effect */}
                <span className="absolute inset-0 bg-white/30 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 skew-x-12"></span>

                {/* Pulse Ring */}
                <span className="absolute inset-0 rounded-full border border-yellow-300 animate-ping opacity-20"></span>

                <span className="relative z-10">BOOK A CALL</span>

                <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* SHAPE */}
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px] border-[18px] sm:border-[28px] border-yellow-200 rounded-[60px] rotate-45 opacity-60"></div>
            </div>

            {/* MAIN IMAGE */}
            <div className="relative z-10 bg-[#374151] rounded-3xl p-3 sm:p-4 shadow-2xl max-w-xl mx-auto">
              <img
                src="/assets/construction/2.webp"
                alt="Construction"
                className="rounded-2xl w-full h-[240px] sm:h-[320px] md:h-[420px] object-cover"
              />
            </div>

            {/* FLOAT CARD */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative sm:absolute sm:bottom-0 sm:right-0 mt-4 sm:mt-0 bg-orange-500 rounded-2xl p-5 shadow-xl z-20 w-full sm:w-[280px]"
            >
              <h4 className="text-white font-bold text-lg sm:text-xl">
                Trusted Engineering Excellence
              </h4>

              <p className="text-orange-100 mt-3 text-sm sm:text-base leading-7">
                Building roads, estates, drainage systems and modern
                infrastructure across Africa.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* BENEFITS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 pb-16 sm:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-5xl font-bold leading-tight">
            <span className="text-yellow-600">Benefits</span> of Construction &
            Civil Engineering
          </h2>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-8">
            We help clients build stronger, safer and more efficient projects.
            From planning to completion, we deliver long-term value and
            structural excellence.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-14">
          {[
            {
              icon: "🏗️",
              title: "Strong Structures",
              text: "Buildings and facilities engineered for durability, safety and long-term performance.",
            },
            {
              icon: "📐",
              title: "Smart Planning",
              text: "Efficient project planning that saves time, cost and resources from start to finish.",
            },
            {
              icon: "🚧",
              title: "Reliable Delivery",
              text: "Projects completed on schedule with strict quality control and client satisfaction.",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
              }}
              className="bg-white rounded-3xl p-6 shadow-md"
            >
              <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center text-2xl mb-5">
                {card.icon}
              </div>

              <h3 className="text-2xl font-bold">{card.title}</h3>

              <p className="mt-4 text-gray-700 leading-8">{card.text}</p>
            </motion.div>
          ))}
        </div>

        {/* PORTFOLIO */}
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-5xl font-bold leading-tight">
              Our Recent Construction Projects
            </h2>
          </motion.div>

          {/* FILTER */}
          <div className="flex justify-center mt-8 px-2">
            {categories.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(item)}
                className={`px-5 sm:px-7 py-3 rounded-full text-sm sm:text-base border transition
                  ${
                    activeCategory === item
                      ? "bg-yellow-400 border-yellow-400 text-black"
                      : "border-gray-400 text-gray-800"
                  }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* GALLERY */}
          <div className="relative mt-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {visibleCards.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -8 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className={`${item.bg} rounded-3xl p-4 h-[260px] sm:h-[340px] md:h-[400px] shadow-xl`}
                >
                  <div className="w-full h-full overflow-hidden rounded-2xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* NAVIGATION */}
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

            {/* DOTS */}
            <div className="flex justify-center gap-3 mt-6 flex-wrap">
              {galleryItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition
                    ${
                      current === index
                        ? "bg-orange-400 scale-125"
                        : "bg-yellow-300"
                    }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
