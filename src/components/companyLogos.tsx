import { motion } from "framer-motion";

const CompanyLogos = () => {
  const companyLogos = [
    "public/assets/trustedBrands/1.png",
    "public/assets/trustedBrands/2.png",
    "public/assets/trustedBrands/3.png",
    "public/assets/trustedBrands/4.png",
    "public/assets/trustedBrands/5.png",
    "public/assets/trustedBrands/7.png",
    "public/assets/trustedBrands/8.png",
    "public/assets/trustedBrands/9.png",
    "public/assets/trustedBrands/10.png",
  ];

  return (
    <>
      <style>{`
        .marquee-inner {
          animation: marqueeScroll linear infinite;
        }

        @keyframes marqueeScroll {
          0% {
            transform: translateX(0%);
          }

          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="overflow-hidden w-full relative max-w-5xl mx-auto py-6"
      >
        {/* Left Fade */}
        <div className="absolute left-0 top-0 h-full w-20 z-10 bg-gradient-to-r from-white to-transparent" />

        {/* Marquee */}
        <div
          className="marquee-inner flex min-w-[200%]"
          style={{ animationDuration: "35s" }}
        >
          <div className="flex">
            {[...companyLogos, ...companyLogos].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="Company Logo"
                className="h-10 w-auto mx-8 object-contain"
                draggable={false}
              />
            ))}
          </div>
        </div>

        {/* Right Fade */}
        <div className="absolute right-0 top-0 h-full w-20 z-10 bg-gradient-to-l from-white to-transparent" />
      </motion.div>
    </>
  );
};

export default CompanyLogos;