import {
  MenuIcon,
  XIcon,
  ChevronDown,
  ArrowRight,
  Briefcase,
  Building2,
  MapPin,
  Home,
  Landmark,
  ClipboardList,
  Truck,
  Zap,
  Palette,
  Video,
  Megaphone,
  Globe,
  Printer,
  Package,
  Lightbulb,
} from "lucide-react";

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavLink {
  name: string;
  href: string;
}

interface ServiceItem {
  name: string;
  icon: LucideIcon;
  href: string;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [worksOpen, setWorksOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
const [mobileWorksOpen, setMobileWorksOpen] = useState(false);

  const lastScrollY = useRef(0);

  // ✅ stability refs (ADDED ONLY)
  const servicesTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
const worksTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const navLinks: NavLink[] = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/Services" },
    { name: "Our Works", href: "/OurWorks" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/Blog" },
  ];

  const servicesLeft: ServiceItem[] = [
    {
      name: "Construction & Civil Engineering",
      icon: Building2,
      href: "/services/construction",
    },
    {
      name: "Land Surveying & Consultancy",
      icon: MapPin,
      href: "/services/surveying",
    },
    {
      name: "Architectural Design",
      icon: Home,
      href: "/services/architecture",
    },
    {
      name: "Real Estate Development",
      icon: Landmark,
      href: "/services/real-estate",
    },
    {
      name: "Project Management",
      icon: ClipboardList,
      href: "/services/project-management",
    },
    {
      name: "Building Materials Supply",
      icon: Truck,
      href: "/services/materials",
    },
    {
      name: "Electrical & Mechanical Works",
      icon: Zap,
      href: "/services/electrical-mechanical",
    },
  ];

  const servicesRight: ServiceItem[] = [
    {
      name: "Graphic Design & Branding",
      icon: Palette,
      href: "/services/branding",
    },
    {
      name: "Videography & Media Production",
      icon: Video,
      href: "/services/videography",
    },
    {
      name: "Digital Marketing",
      icon: Megaphone,
      href: "/services/marketing",
    },
    {
      name: "Website & UI/UX Design",
      icon: Globe,
      href: "/services/web-uiux",
    },
    {
      name: "Printing & Production",
      icon: Printer,
      href: "/services/printing",
    },
    {
      name: "Procurement & Logistics",
      icon: Package,
      href: "/services/logistics",
    },
    {
      name: "Strategic Consultancy",
      icon: Lightbulb,
      href: "/services/consultancy",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollY.current && currentScroll > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[9999] bg-white/60 backdrop-blur-md transition-transform duration-400 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-4 md:px-16 lg:px-24 xl:px-32 border-b border-gray-200">
          <a href="#">
            <img src="/assets/camphix.png" className="h-12 w-auto md:mr-31" />
          </a>

          {/* NAV LINKS */}
          <div className="hidden md:flex items-center gap-8 text-gray-600">
            {navLinks.map((link) => {
              if (link.name === "Services") {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => {
                      if (servicesTimeout.current) clearTimeout(servicesTimeout.current);
                      setServicesOpen(true);
                    }}
                    onMouseLeave={() => {
                      servicesTimeout.current = setTimeout(() => {
                        setServicesOpen(false);
                      }, 120);
                    }}
                  >
                    <button className="flex items-center gap-1 hover:text-gray-800">
                      {link.name}
                      <ChevronDown
                        className={`size-4 ${servicesOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.98 }}
                          transition={{ duration: 0.25 }}
                          className="absolute left-5/2 -translate-x-1/2 shadow-xl top-7 w-[min(900px,95vw)] bg-white rounded-2xl border border-gray-200 p-6 z-[10000]"
                        >
                          <div className="grid grid-cols-3 gap-6">
                            {/* LEFT */}
                            <div className="space-y-3">
                              {servicesLeft.map((item, i) => (
                                <Link
                                  key={i}
                                  to={item.href}
                                  onClick={() => setServicesOpen(false)}
                                  className="flex items-center gap-3 hover:bg-gray-50 p-2 rounded-md"
                                >
                                  <item.icon className="w-5 h-5 text-red-500" />
                                  <span className="text-sm">{item.name}</span>
                                </Link>
                              ))}
                            </div>

                            {/* RIGHT */}
                            <div className="space-y-3">
                              {servicesRight.map((item, i) => (
                                <Link
                                  key={i}
                                  to={item.href}
                                  onClick={() => setServicesOpen(false)}
                                  className="flex items-center gap-3 hover:bg-gray-50 p-2 rounded-md"
                                >
                                  <item.icon className="w-5 h-5 text-red-500" />
                                  <span className="text-sm">{item.name}</span>
                                </Link>
                              ))}
                            </div>

                            {/* CTA */}
                            <div className="bg-red-100 rounded-xl p-6 flex flex-col justify-between">
                              <div>
                                <h3 className="text-lg font-bold mb-2 text-gray-900">
                                  Contact Us
                                </h3>
                              </div>

                              <p className="text-sm text-gray-700 mb-6"> From construction to design, we deliver complete solutions. </p> <p className="text-sm text-gray-700 mb-6"> Quality materials, expert services, and reliable execution. </p> <p className="text-sm text-gray-700 mb-6"> Let’s bring your project to life. </p>

                              <Link
                                to="/contact"
                                className="mt-4 bg-red-400 hover:bg-red-500 text-black px-4 py-4 rounded-full flex items-center justify-center gap-2"
                              >
                                BOOK A CALL <ArrowRight size={16} />
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              if (link.name === "Our Works") {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => {
                      if (worksTimeout.current) clearTimeout(worksTimeout.current);
                      setWorksOpen(true);
                    }}
                    onMouseLeave={() => {
                      worksTimeout.current = setTimeout(() => {
                        setWorksOpen(false);
                      }, 120);
                    }}
                  >
                    <button className="flex items-center gap-1 hover:text-gray-800">
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 ${worksOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    <AnimatePresence>
                      {worksOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.98 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-7 left-0 bg-white border border-gray-200 rounded-lg shadow-md p-2 min-w-[180px] z-[10000]"
                        >
                          <Link
                            to="/Portfolio"
                            className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 rounded-md"
                          >
                            <Briefcase className="w-4 h-4 text-red-500" />
                            <span className="text-sm text-gray-700">
                              Portfolio
                            </span>
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className="hover:text-gray-800"
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* RIGHT */}
          <div className="hidden md:flex items-center gap-2">
            <Link to="/login" className="px-6 py-2.5 hover:bg-gray-100 rounded-lg">
              Login
            </Link>
            <Link
              to="/"
              className="bg-linear-to-b from-gray-600 to-gray-800 px-5 py-2 text-white rounded-lg"
            >
              Start a project
            </Link>
          </div>

          {/* MOBILE */}
          <button onClick={() => setIsOpen(true)} className="md:hidden">
            <MenuIcon className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* ================= MOBILE MENU (FULL BEDIMCODE ANIMATION POLISH) ================= */}
<AnimatePresence>
  {isOpen && (
    <>
      {/* BACKDROP */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 z-[9999]"
        onClick={() => setIsOpen(false)}
      />

      {/* PANEL */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.45, ease: "easeInOut" }}
        className="fixed top-0 right-0 h-full w-[80%] bg-white z-[10000] flex flex-col px-6 py-10 overflow-y-auto"
      >
        {/* CLOSE */}
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          onClick={() => setIsOpen(false)}
          className="self-end mb-6"
        >
          <XIcon className="w-6 h-6" />
        </motion.button>

        {/* ================= MENU ================= */}
        <div className="flex flex-col gap-6 text-gray-700 text-lg">

          {/* HOME */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.05 }}
          >
            <Link onClick={() => setIsOpen(false)} to="/" className="flex items-center gap-3">
              <Home className="w-4 h-4 text-red-500" />
              Home
            </Link>
          </motion.div>

          {/* ================= SERVICES ================= */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex items-center justify-between w-full font-medium"
            >
              <span className="flex items-center gap-3">
                <Building2 className="w-4 h-4 text-red-500" />
                Services
              </span>

              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  mobileServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          </motion.div>

          <AnimatePresence>
            {mobileServicesOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="flex flex-col pl-6 gap-1 overflow-hidden"
              >
                {servicesLeft.concat(servicesRight).map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.03 }}
                  >
                    <Link
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 py-2 px-2 rounded-md hover:bg-gray-100 text-sm"
                    >
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.03 }}
                      >
                        <item.icon className="w-4 h-4 text-red-500" />
                      </motion.span>

                      <span>{item.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* ================= OUR WORKS ================= */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.15 }}
          >
            <button
              onClick={() => setMobileWorksOpen(!mobileWorksOpen)}
              className="flex items-center justify-between w-full font-medium"
            >
              <span className="flex items-center gap-3">
                <Briefcase className="w-4 h-4 text-red-500" />
                Our Works
              </span>

              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  mobileWorksOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          </motion.div>

          <AnimatePresence>
            {mobileWorksOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="flex flex-col pl-6 gap-1 overflow-hidden"
              >
                <motion.div
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                >
                  <Link
                    to="/Portfolio"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 py-2 px-2 rounded-md hover:bg-gray-100 text-sm"
                  >
                    <Briefcase className="w-4 h-4 text-red-500" />
                    Portfolio
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ================= OTHER LINKS ================= */}
          {[
            { name: "Projects", icon: ClipboardList, to: "/projects" },
            { name: "About", icon: Lightbulb, to: "/about" },
            { name: "Contact", icon: MapPin, to: "/contact" },
          ].map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.05 }}
            >
              <Link
                onClick={() => setIsOpen(false)}
                to={item.to}
                className="flex items-center gap-3"
              >
                <item.icon className="w-4 h-4 text-red-500" />
                {item.name}
              </Link>
            </motion.div>
          ))}

        </div>
      </motion.div>
    </>
  )}
</AnimatePresence>

      <div className="h-18" />
    </>
  );
}