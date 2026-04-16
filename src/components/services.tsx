import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Construction & Civil Engineering",
    img: "https://duck.design/wp-content/uploads/2025/01/service-card.jpg",
    href: "/services/graphic-design",
    textColor: "text-black",
  },
  {
    title: "Land Surveying & Consultancy",
    img: "https://duck.design/wp-content/uploads/2025/01/service-card-1.jpg",
    href: "/services/motion-graphics",
    textColor: "text-black",
  },
  {
    title: "Architectural Design",
    img: "https://duck.design/wp-content/uploads/2025/01/service-card-2.jpg",
    large: true,
    href: "/services/brand-identity",
    textColor: "text-white",
  },
  {
    title: "Real Estate Development",
    img: "https://duck.design/wp-content/uploads/2025/01/service-card-5.jpg",
    href: "/services/ui-ux",
    textColor: "text-black",
  },
  {
    title: "Project Management",
    img: "https://duck.design/wp-content/uploads/2025/01/service-card-7.jpg",
    large: true,
    href: "/services/web-design",
    textColor: "text-white",
  },
  {
    title: "Building Materials Supply",
    img: "https://duck.design/wp-content/uploads/2025/01/service-card.jpg",
    href: "/services/graphic-design",
    textColor: "text-black",
  },
  {
    title: "Electrical & Mechanical Works",
    img: "https://duck.design/wp-content/uploads/2025/01/service-card-1.jpg",
    href: "/services/motion-graphics",
    textColor: "text-black",
  },
  {
    title: "Graphic Design & Branding",
    img: "https://duck.design/wp-content/uploads/2025/01/service-card-2.jpg",
    large: true,
    href: "/services/brand-identity",
    textColor: "text-white",
  },
  {
    title: "Videography & Media Production",
    img: "https://duck.design/wp-content/uploads/2025/01/service-card-5.jpg",
    href: "/services/ui-ux",
    textColor: "text-black",
  },
  {
    title: "Digital Marketing",
    img: "https://duck.design/wp-content/uploads/2025/01/service-card-7.jpg",
    large: true,
    href: "/services/web-design",
    textColor: "text-white",
  },
  {
    title: "Website & UI/UX Design",
    img: "https://duck.design/wp-content/uploads/2025/01/service-card.jpg",
    href: "/services/graphic-design",
    textColor: "text-black",
  },
  {
    title: "Printing & Production",
    img: "https://duck.design/wp-content/uploads/2025/01/service-card-1.jpg",
    href: "/services/motion-graphics",
    textColor: "text-black",
  },
  {
    title: "Procurement & Logistics",
    img: "https://duck.design/wp-content/uploads/2025/01/service-card-2.jpg",
    large: true,
    href: "/services/brand-identity",
    textColor: "text-white",
  },
  {
    title: "Strategic Consultancy",
    img: "https://duck.design/wp-content/uploads/2025/01/service-card-5.jpg",
    href: "/services/ui-ux",
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
          transition: transform 0.3s ease;
        }

        .card-text {
          position: absolute;
          color: white;
          font-weight: 9000;
          left: 29px;
          bottom: 48px;
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
                className={`card ${addSpacing}`}
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
          href="/services"
          className="inline-flex items-center gap-2 px-15 py-5 text-[1.2rem] border rounded-full hover:bg-black hover:text-white transition cursor-pointer group"
        >
          All Services

          <ArrowRight
            className="size-5 transition-transform duration-300 group-hover:translate-x-1"
          />
        </a>
      </motion.div>

    </motion.div>
  );
};

export default OurServices;