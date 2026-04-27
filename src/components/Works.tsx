import { useEffect, useRef, useState } from "react";

export default function Works() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [startAnimation, setStartAnimation] = useState(false);

  const works = [
    { img: "/assets/camphix-flyers/37.webp" },
    { img: "/assets/camphix-flyers/39.webp" },
    { img: "/assets/camphix-flyers/40.webp" },
    { img: "/assets/camphix-flyers/12.webp" },
    { img: "/assets/camphix-flyers/14.webp" },
    { img: "/assets/camphix-flyers/15.webp" },
    { img: "/assets/camphix-flyers/16.webp" },
    { img: "/assets/camphix-flyers/19.webp" },
    { img: "/assets/camphix-flyers/20.webp" },
    { img: "/assets/camphix-flyers/22.webp" },
    { img: "/assets/camphix-flyers/23.webp" },
    { img: "/assets/camphix-flyers/24.webp" },
    { img: "/assets/camphix-flyers/25.webp" },
    { img: "/assets/camphix-flyers/26.webp" },
    { img: "/assets/camphix-flyers/27.webp" },
    { img: "/assets/camphix-flyers/28.webp" },
    { img: "/assets/camphix-flyers/30.webp" },
    { img: "/assets/camphix-flyers/32.webp" },
    { img: "/assets/camphix-flyers/33.webp" },
    { img: "/assets/camphix-flyers/34.webp" },
    { img: "/assets/camphix-flyers/35.webp" },
    { img: "/assets/camphix-flyers/36.webp" },
    { img: "/assets/camphix-flyers/1.webp" },
    { img: "/assets/camphix-flyers/2.webp" },
    { img: "/assets/camphix-flyers/3.webp" },
    { img: "/assets/camphix-flyers/4.webp" },
    { img: "/assets/camphix-flyers/5.webp" },
    { img: "/assets/camphix-flyers/6.webp" },
    { img: "/assets/camphix-flyers/7.webp" },
    { img: "/assets/camphix-flyers/8.webp" },
    { img: "/assets/camphix-flyers/9.webp" },
    { img: "/assets/camphix-flyers/10.webp" },
    { img: "/assets/camphix-flyers/11.webp" },
  ];

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

  return (
    <div
      ref={sectionRef}
      className="w-full py-16 sm:py-20 px-4 md:px-10 lg:px-20 bg-white overflow-x-hidden"
    >
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
          height: auto;
          display: block;
          transition: transform 0.5s ease;
        }

        .item:hover img {
          transform: scale(1.04);
        }
      `}</style>

      {/* HEADER */}
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-slate-900">
          Graphic Design Gallery
        </h2>

        <p className="mt-5 text-slate-600 text-lg">
          A collection of our creative flyer designs
        </p>
      </div>

      {/* GALLERY */}
      <div className="masonry mt-14">
        {works.map((item, i) => (
          <div
            key={i}
            className={`item ${startAnimation ? "show" : ""}`}
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <img
              src={item.img}
              alt={`work-${i}`}
              loading="lazy"
              className="w-full h-auto block"
            />
          </div>
        ))}
      </div>

    </div>
  );
}