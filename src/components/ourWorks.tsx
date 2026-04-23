import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const categories = ["All", "Construction", "Flyers"];

export default function OurWorks() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [startAnimation, setStartAnimation] = useState(false);
  const [active, setActive] = useState("All");

  const works = [
    // =========================
    // CONSTRUCTION PROJECTS
    // =========================
    { img: "public/assets/construction/8.jpg", category: "Construction" },
    { img: "public/assets/construction/9.jpg", category: "Construction" },
    { img: "public/assets/construction/10.jpg", category: "Construction" },
    { img: "public/assets/construction/11.jpg", category: "Construction" },
    { img: "public/assets/construction/12.jpg", category: "Construction" },
    { img: "public/assets/construction/13.jpg", category: "Construction" },
    { img: "public/assets/construction/14.jpg", category: "Construction" },
    { img: "public/assets/construction/15.jpg", category: "Construction" },
    { img: "public/assets/construction/16.jpg", category: "Construction" },
    { img: "public/assets/construction/17.jpg", category: "Construction" },
    { img: "public/assets/construction/18.jpg", category: "Construction" },
    { img: "public/assets/construction/19.jpg", category: "Construction" },
    { img: "public/assets/construction/2.jpg", category: "Construction" },

    // =========================
    // FLYER DESIGNS
    // =========================
    { img: "/assets/camphix-flyers/1.jpg", category: "Flyers" },
    { img: "/assets/camphix-flyers/2.jpg", category: "Flyers" },
    { img: "/assets/camphix-flyers/3.jpg", category: "Flyers" },
    { img: "/assets/camphix-flyers/4.jpg", category: "Flyers" },
    { img: "/assets/camphix-flyers/5.jpg", category: "Flyers" },
    { img: "/assets/camphix-flyers/6.jpg", category: "Flyers" },
    { img: "/assets/camphix-flyers/7.jpg", category: "Flyers" },
    { img: "/assets/camphix-flyers/8.jpg", category: "Flyers" },
    { img: "/assets/camphix-flyers/9.jpg", category: "Flyers" },
    { img: "/assets/camphix-flyers/10.jpg", category: "Flyers" },
    { img: "/assets/camphix-flyers/11.jpg", category: "Flyers" },
  ];

  // =========================
  // SCROLL ANIMATION TRIGGER
  // =========================
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // =========================
  // RESET ANIMATION ON FILTER CHANGE
  // =========================
  useEffect(() => {
    setStartAnimation(false);

    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 80);

    return () => clearTimeout(timer);
  }, [active]);

  // =========================
  // FILTERED DATA
  // =========================
  const filtered =
    active === "All"
      ? works
      : works.filter((item) => item.category === active);

  return (
    <div
      ref={sectionRef}
      className="w-full py-20 px-4 md:px-10 lg:px-20 bg-white"
    >
      {/* =========================
          STYLE (MASONRY LAYOUT)
      ========================= */}
      <style>{`
        .masonry {
          column-count: 1;
          column-gap: 18px;
        }

        @media (min-width: 640px) {
          .masonry {
            column-count: 2;
          }
        }

        @media (min-width: 1024px) {
          .masonry {
            column-count: 3;
          }
        }

        .item {
          break-inside: avoid;
          margin-bottom: 18px;
          border-radius: 14px;
          overflow: hidden;

          opacity: 0;
          transform: translateY(25px);
          transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .item.show {
          opacity: 1;
          transform: translateY(0);
        }

        .item img {
          width: 100%;
          height: auto; /* IMPORTANT: keeps original image ratio */
          display: block;
          transition: transform 0.5s ease;
        }

        .item:hover img {
          transform: scale(1.04);
        }

        .btn {
          transition: all 0.3s ease;
        }
      `}</style>

      {/* =========================
          HEADER
      ========================= */}
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-slate-900">
          Our Works Gallery
        </h2>

        <p className="mt-5 text-slate-600 text-lg">
          A collection of Construction projects and Graphic Design works
        </p>
      </div>

      {/* =========================
          FILTER BUTTONS
      ========================= */}
      <div className="flex flex-wrap justify-center gap-3 mt-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`btn px-5 py-2 rounded-full border text-sm md:text-base ${
              active === cat
                ? "bg-black text-white border-black"
                : "border-gray-400 text-gray-700 hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* =========================
          MASONRY GALLERY
      ========================= */}
      <div className="masonry mt-14">
        {filtered.map((item, i) => (
          <div
            key={i}
            className={`item ${startAnimation ? "show" : ""}`}
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <img
              src={item.img}
              alt={`work-${i}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* =========================
          CTA BUTTON
      ========================= */}
      <div className="text-center mt-20">
        <a
          href="/portfolio"
          className="inline-flex items-center gap-2 px-10 py-4 text-lg border border-black rounded-full hover:bg-black hover:text-white transition group"
        >
          View Full Portfolio
          <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
}