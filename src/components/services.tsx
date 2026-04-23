import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Construction & Civil Engineering",
    img: "assets/services/construction-&-civil-engineering.webp",
    href: "/construction-&-civil-engineering",
    textColor: "text-black",
  },
  {
    title: "Land Surveying & Consultancy",
    img: "assets/services/land-surveying-&-consultancy.webp",
    href: "/land-surveying-&-consultancy",
    textColor: "text-black",
  },
  {
    title: "Architectural Design",
    img: "assets/services/architectural-design.webp",
    large: true,
    href: "/architectural-design",
    textColor: "text-white",
  },
  {
    title: "Real Estate Development",
    img: "assets/services/real-estate-development.webp",
    href: "/real-estate-development",
    textColor: "text-black",
  },
  {
    title: "Project Management",
    img: "assets/services/project-management.webp",
    large: true,
    href: "/project-management",
    textColor: "text-white",
  },
  {
    title: "Building Materials Supply",
    img: "assets/services/building-materials-supply.webp",
    href: "/building-materials-supply",
    textColor: "text-black",
  },
  {
    title: "Electrical & Mechanical Works",
    img: "assets/services/electrical-&-mechanical-work.webp",
    href: "/electrical-mechanical",
    textColor: "text-black",
  },
  {
    title: "Graphic Design & Branding",
    img: "assets/services/graphic-design-&-branding.webp",
    large: true,
    href: "/graphic-design-&-branding",
    textColor: "text-white",
  },
  {
    title: "Videography & Media Production",
    img: "assets/services/videography-&-media Production.webp",
    href: "/videography-media-production",
    textColor: "text-black",
  },
  {
    title: "Digital Marketing",
    img: "assets/services/digital-marketing.webp",
    large: true,
    href: "/digital-marketing",
    textColor: "text-white",
  },
  {
    title: "Website & UI/UX Design",
    img: "assets/services/website-&-design.webp",
    href: "/web-uiux",
    textColor: "text-black",
  },
  {
    title: "Printing & Production",
    img: "assets/services/printing-&-production.webp",
    href: "/printing-production",
    textColor: "text-black",
  },
  {
    title: "Procurement & Logistics",
    img: "assets/services/procurement-&-logistics.webp",
    large: true,
    href: "/procurement-logistics",
    textColor: "text-white",
  },
  {
    title: "Strategic Consultancy",
    img: "assets/services/strategic-consultancy.webp",
    href: "/strategic-consultancy",
    textColor: "text-black",
  },
];

const OurServices = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="w-full py-7 "
    >
      <motion.h2
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-slate-900 to-[#6D8FE4] text-transparent bg-clip-text"
      >
        Our Services
      </motion.h2>

      <style>{`
        .marquee {
          display: flex;
          width: max-content;
          animation: scroll 60s linear infinite;
          gap: 18px;
        }

        .marquee:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .card {
          position: relative;
          overflow: hidden;
          border-radius: 7px;
          flex-shrink: 0;
          cursor: pointer;
          transition: transform 0.35s ease;
        }

        .card:hover {
          transform: translateY(-6px) scale(1.01);
        }

        .card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.78), rgba(0,0,0,0.08), transparent);
          z-index: 1;
        }

        .card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            120deg,
            transparent 20%,
            rgba(255,255,255,0.12) 45%,
            transparent 70%
          );
          transform: translateX(-140%);
          transition: transform 0.8s ease;
          z-index: 2;
        }

        .card:hover::after {
          transform: translateX(140%);
        }

        .card-text {
          position: absolute;
          color: white;
          font-weight: 900;
          left: 29px;
          bottom: 90px;
          z-index: 3;
          max-width: 80%;
          font-size: 28px;
          line-height: 1.1;
        }

        .service-btn {
          position: absolute;
          left: 29px;
          bottom: 34px;
          z-index: 3;
        }

        .big-gap {
          margin-left: 40px;
        }
      `}</style>

      {/* MARQUEE */}
      <div className="overflow-hidden">
        <div className="marquee">
          {[...services, ...services].map((item, index, arr) => {
            const isLarge = item.large;
            const prev = arr[index - 1];
            const addSpacing =
              isLarge && prev?.large ? "big-gap" : "";

            return (
              <motion.a
                key={index}
                href={item.href || "/services"}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`card group ${addSpacing}`}
                style={{
                  width: isLarge ? "672px" : "336px",
                  height: "384px",
                }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />

                <div className="card-text">
                  {item.title}
                </div>

                {/* BUTTON LIKE BOOK A CALL */}
                <div className="service-btn">
                  <span className="relative group/btn overflow-hidden inline-flex items-center gap-2 px-5 py-2 text-white rounded-lg bg-red-600 hover:bg-red-700 transition">
                    {/* BUTTON GLOW */}
                    <span className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-white/10 to-red-500/0 translate-x-[-120%] group-hover/btn:translate-x-[120%] transition-transform duration-700"></span>

                    {/* TEXT */}
                    <span className="relative overflow-hidden h-6 flex items-center">
                      <span className="block transition-all duration-300 ease-out group-hover/btn:-translate-y-full group-hover/btn:opacity-0 text-sm font-medium">
                        Explore
                      </span>

                      <span className="absolute left-0 top-0 translate-y-full opacity-0 transition-all duration-300 ease-out group-hover/btn:translate-y-0 group-hover/btn:opacity-100 text-sm font-medium">
                        Explore
                      </span>

                      {/* UNDERLINE */}
                      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-yellow-400 transition-all duration-300 group-hover/btn:w-full"></span>
                    </span>

                    {/* ICON */}
                    <ArrowRight className="relative w-4 h-4 transition-all duration-300 ease-out group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 group-hover/btn:rotate-12" />

                    {/* BORDER */}
                    <span className="absolute inset-0 rounded-lg border border-white/10 group-hover/btn:border-yellow-400/70 transition-all duration-300"></span>
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>

      {/* BUTTON */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center mt-15 mb-2"
      >
        <a
          href="/portfolio"
          className="inline-flex items-center gap-2 px-15 py-5 text-[1.2rem] border rounded-full hover:bg-black hover:text-white transition cursor-pointer group"
        >
          All Services

          <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </motion.div>
    </motion.div>
  );
};

export default OurServices;