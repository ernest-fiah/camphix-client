import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function Footer() {
  const links = [
    {
      title: "Services",
      items: [
        { name: "Construction & Civil Engineering", href: "#" },
        { name: "Land Surveying & Consultancy", href: "#" },
        { name: "Architectural Design", href: "#" },
        { name: "Real Estate Development", href: "#" },
      ],
    },
    {
      title: "Company",
      items: [
        { name: "About Camphix Enterprise", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Contact", href: "#" },
      ],
    },
    {
      title: "Resources",
      items: [
        { name: "Project Documentation", href: "#" },
        { name: "Changelog", href: "#" },
        { name: "Support", href: "#" },
        { name: "Consultation", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-zinc-50 pt-15 px-4 sm:px-6 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 pb-12">
          {/* LEFT SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex-1 max-w-full lg:max-w-[400px]"
          >
            {/* ✅ LOGO FIXED */}
            <div className="mb-6">
              <img
                src="/assets/camphix.png"
                alt="Camphix Logo"
                className="w-40 h-auto"
              />
            </div>

            <p className="text-sm leading-7 text-zinc-500 mb-7 max-w-80 text-justify">
              Camphix Enterprise delivers excellence in construction, civil
              engineering, land surveying, architectural design, real estate
              development, and infrastructure solutions—building with precision,
              innovation, and reliability across Africa.
            </p>

            {/* ✅ SOCIAL ICONS FIXED */}
            <div className="flex gap-4">
              <motion.a
                href=" https://www.facebook.com/share/1HmGN1i2Qs/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="size-9 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 transition-colors"
              >
                <Facebook className="w-4 h-4 text-zinc-600" />
              </motion.a>

              <motion.a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="size-9 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 transition-colors"
              >
                <Instagram className="w-4 h-4 text-zinc-600" />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/camphix-company-2977a1404?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="size-9 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-zinc-600" />
              </motion.a>

              <motion.a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="size-9 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 transition-colors"
              >
                <Twitter className="w-4 h-4 text-zinc-600" />
              </motion.a>
            </div>
          </motion.div>

          {/* LINKS */}
          <div className="flex flex-wrap sm:flex-nowrap flex-1 justify-between gap-8 w-full max-w-3xl">
            {links.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                  delay: index * 0.08,
                }}
              >
                <h3 className="text-base font-medium text-zinc-800 mb-6">
                  {link.title}
                </h3>
                <ul className="flex flex-col gap-3 list-none">
                  {link.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a
                        href={item.href}
                        className="text-sm text-zinc-500 hover:text-zinc-700 transition-colors"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CONTACT SECTION */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-16 py-9 max-w-6xl">
          <motion.div className="flex items-start gap-2.5 flex-1">
            <div className="size-8 rounded-lg bg-zinc-100 border border-zinc-200 flex items-center justify-center">
              <MapPin className="w-4 h-4 text-zinc-600" />
            </div>
            <div>
              <h4 className="text-base font-medium text-zinc-800 mb-0.5">
                Address
              </h4>
              <p className="text-sm text-zinc-500 leading-relaxed">
                CK-0040-1657 Elmina, Central Region, Ghana, West Africa
              </p>
            </div>
          </motion.div>

          <motion.div className="flex items-start gap-2.5 flex-1">
            <div className="size-8 rounded-lg bg-zinc-100 border border-zinc-200 flex items-center justify-center">
              <Phone className="w-4 h-4 text-zinc-600" />
            </div>
            <div>
              <h4 className="text-base font-medium text-zinc-800 mb-0.5">
                Phone
              </h4>
              <p className="text-sm text-zinc-500 leading-relaxed">
                +233 (0) 54 172 8294
              </p>
            </div>
          </motion.div>

          <motion.div className="flex items-start gap-2.5 flex-1">
            <div className="size-8 rounded-lg bg-zinc-100 border border-zinc-200 flex items-center justify-center">
              <Mail className="w-4 h-4 text-zinc-600" />
            </div>
            <div>
              <h4 className="text-base font-medium text-zinc-800 mb-0.5">
                Email
              </h4>
              <p className="text-sm text-zinc-500 leading-relaxed">
                camphixcompany@gmail.com
              </p>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM */}
        <motion.div className="flex flex-col md:flex-row justify-between items-center gap-4 py-4 border-t border-zinc-300">
          <p className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} Camphix Enterprise. All Rights
            Reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-5 md:gap-9">
            <a
              href="#"
              className="text-sm text-zinc-500 hover:text-zinc-700 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-zinc-500 hover:text-zinc-700 transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-sm text-zinc-500 hover:text-zinc-700 transition-colors"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-sm text-zinc-500 hover:text-zinc-700 transition-colors"
            >
              Projects
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
