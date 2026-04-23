import { useEffect, useState } from "react";
import {
  Home,
  User,
  BookOpen,
  Briefcase,
  MessageSquare,
  X,
  ChevronRight,
  Hammer,
  Building2,
  Ruler,
  Wrench,
  FolderKanban,
  Layers3,
  Star,
  Lightbulb,
  Package,
  Printer,
  Globe,
  Megaphone,
  Video,
  Palette,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function MobileNavbar() {
  const location = useLocation();

  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuType, setMenuType] = useState<"services" | "works" | null>(null);

  useEffect(() => {
    const pathname = location.pathname;

    if (pathname === "/") setActive("home");
    else if (pathname === "/about") setActive("about");
    else if (pathname === "/services") setActive("services");
    else if (pathname === "/projects") setActive("projects");
    else if (pathname === "/contact") setActive("contact");
  }, [location.pathname]);

  const openMenu = (type: "services" | "works") => {
    setMenuType(type);
    setMenuOpen(true);
    setActive(type);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setMenuType(null);
  };

  const services = [
    {
      title: "Construction & Civil Engineering",
      icon: Hammer,
      href: "/construction-&-civil-engineering",
    },
    {
      title: "Land Surveying & Consultancy",
      icon: Ruler,
      href: "/land-surveying-&-consultancy",
    },
    {
      title: "Architectural Design",
      icon: Layers3,
      href: "/architectural-design",
    },
    {
      title: "Real Estate Development",
      icon: Building2,
      href: "/real-estate-development",
    },
    {
      title: "Project Management",
      icon: FolderKanban,
      href: "/project-management",
    },
    {
      title: "Building Materials Supply",
      icon: Wrench,
      href: "/building-materials-supply",
    },
    {
      title: "Electrical & Mechanical Works",
      icon: Star,
      href: "/electrical-mechanical",
    },
    {
      title: "Graphic Design & Branding",
      icon: Palette,
      href: "/graphic-design-&-branding",
    },
    {
      title: "Videography & Media Production",
      icon: Video,
      href: "/videography-media-production",
    },
    {
      title: "Digital Marketing",
      icon: Megaphone,
      href: "/digital-marketing",
    },
    {
      title: "Website & UI/UX Design",
      icon: Globe,
      href: "/web-uiux",
    },
    {
      title: "Printing & Production",
      icon: Printer,
      href: "/printing-production",
    },
    {
      title: "Procurement & Logistics",
      icon: Package,
      href: "/procurement-logistics",
    },
    {
      title: "Strategic Consultancy",
      icon: Lightbulb,
      href: "/strategic-consultancy",
    },
  ];

  const works = [
    {
      title: "Portfolio",
      icon: Briefcase,
      href: "/portfolio",
    },
    {
      title: "Graphic Design Portfolio",
      icon: Palette,
      href: "/graphic-design-&-branding",
    },
    {
      title: "Building & Construction Portfolio",
      icon: Building2,
      href: "/construction-&-civil-engineering",
    },
  ];

  const navItem =
    "group relative flex flex-col items-center justify-center gap-1 min-w-0 w-full text-[10px] sm:text-xs font-medium transition-all duration-300";

  return (
    <>
      {/* PAGE SPACING */}
      <div className="md:hidden" />

      {/* BOTTOM NAVBAR */}
      <div className="fixed bottom-0 left-0 w-full md:hidden z-[9999]">
        <div className="bg-white/90 backdrop-blur-2xl border border-white/30 shadow-2xl max-w-md mx-auto overflow-hidden relative">

          
          <style>{`
            @keyframes shine {
              0% {
                transform: translateX(-100%);
              }
              100% {
                transform: translateX(100%);
              }
            }
          `}</style>

          <ul className="grid grid-cols-5 items-center h-16 px-1 relative z-10">

            {/* HOME */}
            <li>
              <Link
                to="/"
                className={`${navItem} ${
                  active === "home"
                    ? "text-red-500 scale-105"
                    : "text-gray-600"
                }`}
              >
                <Home
                  size={20}
                  className="transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110"
                />
                Home
              </Link>
            </li>

            {/* ABOUT */}
            <li>
              <Link
                to="/about"
                className={`${navItem} ${
                  active === "about"
                    ? "text-red-500 scale-105"
                    : "text-gray-600"
                }`}
              >
                <User
                  size={20}
                  className="transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110"
                />
                About
              </Link>
            </li>

            {/* SERVICES */}
            <li>
              <button
                onClick={() => openMenu("services")}
                className={`${navItem} ${
                  active === "services"
                    ? "text-red-500 scale-105"
                    : "text-gray-600"
                }`}
              >
                <BookOpen
                  size={20}
                  className="transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110 group-hover:rotate-6"
                />
                Services
              </button>
            </li>

            {/* WORKS */}
            <li>
              <button
                onClick={() => openMenu("works")}
                className={`${navItem} ${
                  active === "works"
                    ? "text-red-500 scale-105"
                    : "text-gray-600"
                }`}
              >
                <Briefcase
                  size={20}
                  className="transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110 group-hover:rotate-6"
                />
                Works
              </button>
            </li>

            {/* CONTACT */}
            <li>
              <Link
                to="/contact"
                className={`${navItem} ${
                  active === "contact"
                    ? "text-red-500 scale-105"
                    : "text-gray-600"
                }`}
              >
                <MessageSquare
                  size={20}
                  className="transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110"
                />
                Contact
              </Link>
            </li>

          </ul>
        </div>
      </div>

      {/* POPUP MENU */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[10000] bg-black/55 backdrop-blur-sm flex items-end md:hidden"
          onClick={closeMenu}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full bg-white rounded-t-[32px] p-5 animate-slideUp max-h-[78vh] overflow-y-auto relative"
          >

            {/* TOP BAR */}
            <div className="mx-auto w-16 h-1.5 rounded-full bg-gray-300 mb-5" />

            {/* HEADER */}
            <div className="flex items-center justify-between mb-5">
              <div>
                <h2 className="text-xl font-bold text-gray-900 capitalize">
                  {menuType}
                </h2>

                <p className="text-sm text-gray-500">
                  Explore all {menuType}
                </p>
              </div>

              <button
                onClick={closeMenu}
                className="w-11 h-11 rounded-full bg-gray-100 hover:bg-red-50 hover:text-red-500 flex items-center justify-center transition"
              >
                <X size={20} />
              </button>
            </div>

            {/* MENU ITEMS */}
            <div className="space-y-3">
              {(menuType === "services" ? services : works).map(
                (item, index) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={index}
                      to={item.href}
                      onClick={closeMenu}
                      className="group block animate-fadeUp"
                      style={{
                        animationDelay: `${index * 70}ms`,
                        animationFillMode: "both",
                      }}
                    >
                      <div className="relative overflow-hidden border border-gray-200 rounded-2xl px-4 py-4 bg-white hover:border-transparent transition duration-300">

                        {/* Animated Glow */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-red-500/10 via-yellow-400/10 to-red-500/10" />

                        <div className="relative z-10 flex items-center gap-4">

                          {/* ICON */}
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-yellow-400 text-white flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                            <Icon size={20} />
                          </div>

                          {/* TEXT */}
                          <div className="flex-1">
                            <h3 className="text-sm font-semibold text-gray-800 transition duration-300 group-hover:text-red-500">
                              {item.title}
                            </h3>

                            <p className="text-xs text-gray-500 mt-1">
                              View details
                            </p>
                          </div>

                          {/* RIGHT ICON */}
                          <ChevronRight
                            size={18}
                            className="text-gray-400 transition-all duration-300 group-hover:text-red-500 group-hover:translate-x-1"
                          />
                        </div>
                      </div>
                    </Link>
                  );
                }
              )}
            </div>

          </div>
        </div>
      )}

      {/* ANIMATION */}
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(100%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(22px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-slideUp {
          animation: slideUp 0.38s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .animate-fadeUp {
          animation: fadeUp 0.55s cubic-bezier(0.22, 1, 0.36, 1);
        }
      `}</style>
    </>
  );
}