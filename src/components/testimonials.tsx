import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    text: "Camphix Enterprise delivered outstanding results—our project execution became faster and more efficient.",
    name: "Kwame Mensah",
    role: "Project Director, BuildCore",
    img: "/assets/testimonial/1.webp",
  },
  {
    text: "We were able to launch our construction platform ahead of schedule thanks to this team.",
    name: "Ama Owusu",
    role: "Product Lead",
    img: "/assets/testimonial/2.webp",
  },
  {
    text: "Professional service, clear communication, and excellent delivery from start to finish.",
    name: "Kojo Attah",
    role: "CEO, StructBuild",
    img: "/assets/testimonial/3.webp",
  },
  {
    text: "Our engineering workflow improved dramatically after adopting their solutions.",
    name: "Abena Boateng",
    role: "Engineering Lead",
    img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200",
  },
  {
    text: "Reliable execution and smooth collaboration throughout the entire project lifecycle.",
    name: "Macheal Essuman_CEO. of Micky Build Company Limited",
    role: "CEO. of Micky Build Company Limited",
    img: "/assets/testimonial/4.webp",
  },
  {
    text: "The quality of delivery and attention to detail exceeded our expectations.",
    name: "Juanita",
    role: "Marketing Director",
    img: "/assets/testimonial/5.webp",
  },
];

export default function Testimonials() {
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
    <div ref={sectionRef} className="w-full py-16">

      {/* STYLE */}
      <style>{`
        .reveal {
          opacity: 0;
          transform: translateY(40px) scale(0.97);
          transition: opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.75s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: transform, opacity;
        }

        .reveal.show {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        /* ✅ HIDE SCROLLBAR (ALL BROWSERS) */
        .hide-scrollbar {
          -ms-overflow-style: none; /* IE/Edge */
          scrollbar-width: none; /* Firefox */
        }

        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome/Safari */
        }
      `}</style>

      {/* TITLE */}
      <h2
        className={`text-4xl font-bold text-center mb-12 bg-gradient-to-r from-slate-900 to-[#6D8FE4] text-transparent bg-clip-text reveal ${
          startAnimation ? "show" : ""
        }`}
        style={{ transitionDelay: "0ms" }}
      >
        Client Feedback
      </h2>

      {/* MOBILE GRID */}
      <div className="md:hidden flex justify-center px-4">
        <div className="grid grid-cols-1 gap-4 w-full max-w-md">
          {testimonials.slice(0, 4).map((item, i) => (
            <div
              key={i}
              className={`border border-slate-200 p-5 rounded-lg bg-white reveal ${
                startAnimation ? "show" : ""
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <p className="text-sm text-slate-500">{item.text}</p>

              <div className="flex items-center gap-3 mt-6">
                <img
                  className="w-10 h-10 rounded-full object-cover"
                  src={item.img}
                  alt={item.name}
                />
                <div>
                  <h2 className="text-sm text-gray-900 font-medium">
                    {item.name}
                  </h2>
                  <p className="text-gray-500 text-xs">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DESKTOP SCROLL */}
      <div className="hidden md:flex justify-center">
        <div className="overflow-x-auto hide-scrollbar cursor-grab active:cursor-grabbing px-6">

          <div
            className="grid gap-6 w-max"
            style={{
              gridAutoFlow: "column",
              gridTemplateRows: "repeat(2, 1fr)",
            }}
          >
            {testimonials.map((item, i) => (
              <div
                key={i}
                className={`min-w-[320px] max-w-[320px] border border-slate-200 p-6 rounded-xl bg-white reveal
                hover:-translate-y-1 hover:shadow-xl hover:border-transparent transition duration-500 ${
                  startAnimation ? "show" : ""
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <p className="text-base text-slate-500">{item.text}</p>

                <div className="flex items-center gap-3 mt-8">
                  <img
                    className="w-12 h-12 rounded-full object-cover"
                    src={item.img}
                    alt={item.name}
                  />

                  <div>
                    <h2 className="text-base text-gray-900 font-medium">
                      {item.name}
                    </h2>
                    <p className="text-gray-500 text-sm">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
}