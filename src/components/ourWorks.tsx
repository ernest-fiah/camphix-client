import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function OurWorks() {
  const works: string[] = [
    "https://duck.design/wp-content/uploads/2024/07/examples-9.png",
    "https://duck.design/wp-content/uploads/2024/07/examples-1-1.png",
    "https://duck.design/wp-content/uploads/2024/07/examples-2-1.png",
    "https://duck.design/wp-content/uploads/2024/07/examples-6-1.png",
    "https://duck.design/wp-content/uploads/2024/07/examples-7-1.png",
    "https://duck.design/wp-content/uploads/2024/07/examples-8-1.png",
    "https://duck.design/wp-content/uploads/2024/07/examples-9-1.png",
    "https://duck.design/wp-content/uploads/2024/07/examples-11.png",
    "https://duck.design/wp-content/uploads/2024/07/examples-12.png",
    "https://duck.design/wp-content/uploads/2024/07/examples-17.png",
    "https://duck.design/wp-content/uploads/2024/07/examples-18.png",
    "https://duck.design/wp-content/uploads/2024/07/examples-20.png",
    "https://duck.design/wp-content/uploads/2024/07/examples-3-1.png",
    "https://duck.design/wp-content/uploads/2024/07/examples-4-1.png",
    "https://duck.design/wp-content/uploads/2024/07/examples-5-1.png",
    "https://duck.design/wp-content/uploads/2024/07/examples-10.png",
    "https://duck.design/wp-content/uploads/2024/07/examples-15.png",
    "https://duck.design/wp-content/uploads/2024/07/examples-19-1.png",
    "https://duck.design/wp-content/uploads/2024/07/examples-13.png",
    "https://duck.design/wp-content/uploads/2024/07/examples-14.png",
    "https://duck.design/wp-content/uploads/2024/07/examples-16.png",
    "https://duck.design/wp-content/uploads/2024/07/examples-21.png",
    "https://duck.design/wp-content/uploads/2024/07/examples-22.png",
    "https://duck.design/wp-content/uploads/2024/07/examples-23.png",
  ];

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div ref={sectionRef} className="ourworks w-full py-7">

      {/* STYLE */}
      <style>{`
        .ourworks .marquee {
          display: flex;
          width: max-content;
          gap: 18px;
          animation: scroll 480s linear infinite;
          animation-play-state: paused;
        }

        .ourworks .marquee.start {
          animation-play-state: running;
        }

        .ourworks .marquee:hover {
          animation-play-state: paused;
        }

        .ourworks .marquee-reverse {
          display: flex;
          width: max-content;
          gap: 18px;
          animation: scrollReverse 500s linear infinite;
          animation-play-state: paused;
        }

        .ourworks .marquee-reverse.start {
          animation-play-state: running;
        }

        .ourworks .marquee-reverse:hover {
          animation-play-state: paused;
        }

        .ourworks .work-card {
          flex-shrink: 0;
          overflow: hidden;
          border-radius: 6px;

          opacity: 0;
          transform: translateY(60px) scale(0.96);
          transition: opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.75s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: transform, opacity;
        }

        .ourworks .work-card.show {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        /* ✅ NEW: title + button reveal animation */
        .ourworks .reveal {
          opacity: 0;
          transform: translateY(40px) scale(0.97);
          transition: opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.75s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: transform, opacity;
        }

        .ourworks .reveal.show {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scrollReverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      {/* TITLE */}
      <h2
        className={`text-4xl font-bold text-center mb-12 bg-gradient-to-r from-slate-900 to-[#6D8FE4] text-transparent bg-clip-text reveal ${
          startAnimation ? "show" : ""
        }`}
        style={{ transitionDelay: "0ms" }}
      >
        Our Works
      </h2>

      {/* MOBILE */}
      <div className="md:hidden flex justify-center">
        <div className="grid grid-cols-2 gap-3 w-full max-w-md px-4">
          {works.slice(0, 14).map((img, i) => (
            <div
              key={i}
              className={`work-card overflow-hidden rounded-sm ${
                startAnimation ? "show" : ""
              }`}
              style={{
                transitionDelay: `${i * 90}ms`,
              }}
            >
              <img
                src={img}
                alt="work"
                className="w-full h-[140px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:block">

        {/* TOP */}
        <div className="overflow-hidden mb-4">
          <div className={`marquee ${startAnimation ? "start" : ""}`}>
            {[...works, ...works].map((img, i) => (
              <div
                key={i}
                className={`work-card ${
                  startAnimation ? "show" : ""
                }`}
                style={{
                  width: "400px",
                  height: "270px",
                  transitionDelay: `${i * 70}ms`,
                }}
              >
                <img
                  src={img}
                  alt="work"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM */}
        <div className="overflow-hidden">
          <div className={`marquee-reverse ${startAnimation ? "start" : ""}`}>
            {[...works, ...works].map((img, i) => (
              <div
                key={i}
                className={`work-card ${
                  startAnimation ? "show" : ""
                }`}
                style={{
                  width: "400px",
                  height: "270px",
                  transitionDelay: `${i * 70}ms`,
                }}
              >
                <img
                  src={img}
                  alt="work"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BUTTON */}
      <div
        className={`text-center mt-15 reveal ${
          startAnimation ? "show" : ""
        }`}
        style={{ transitionDelay: "200ms" }}
      >
        <a
          href="/services"
          className="inline-flex items-center gap-2 px-15 py-5 text-[1.2rem] border rounded-full hover:bg-black hover:text-white transition cursor-pointer group"
        >
          See All Works
          <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>

    </div>
  );
}