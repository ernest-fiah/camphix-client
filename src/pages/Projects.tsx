import { useState, useEffect } from "react";

const categories = [
  "All",
  "Construction & Civil Engineering",
  "Land Surveying & Consultancy",
  "Architectural Design",
  "Real Estate Development",
  "Project Management",
  "Building Materials Supply",
  "Electrical & Mechanical Works",
  "Graphic Design & Branding",
  "Videography & Media Production",
  "Digital Marketing",
  "Website & UI/UX Design",
  "Printing & Production",
  "Procurement & Logistics",
  "Strategic Consultancy",
  "GIFs",
  "Printing",
  "Video Production"
];

const projects = [
  {
    category: "Construction & Civil Engineering",
    bg: "bg-amber-500",
    img: "assets/construction/2.webp",
  },
  {
    category: "Construction & Civil Engineering",
    bg: "bg-emerald-500",
    img: "assets/construction/3.webp",
  },
  {
    category: "Construction & Civil Engineering",
    bg: "bg-sky-500",
    img: "assets/construction/4.webp",
  },
  {
    category: "Construction & Civil Engineering",
    bg: "bg-rose-500",
    img: "assets/construction/5.webp",
  },
  {
    category: "Construction & Civil Engineering",
    bg: "bg-indigo-500",
    img: "assets/construction/6.webp",
  },
  {
    category: "Construction & Civil Engineering",
    bg: "bg-lime-500",
    img: "assets/construction/7.webp",
  },
  {
    category: "Construction & Civil Engineering",
    bg: "bg-cyan-500",
    img: "assets/construction/8.webp",
  },
  {
    category: "Construction & Civil Engineering",
    bg: "bg-fuchsia-500",
    img: "assets/construction/9.webp",
  },
  {
    category: "Construction & Civil Engineering",
    bg: "bg-orange-400",
    img: "assets/construction/10.webp",
  },
  {
    category: "Construction & Civil Engineering",
    bg: "bg-teal-500",
    img: "assets/construction/11.webp",
  },
  {
    category: "Construction & Civil Engineering",
    bg: "bg-blue-400",
    img: "assets/construction/12.webp",
  },
  {
    category: "Construction & Civil Engineering",
    bg: "bg-pink-500",
    img: "assets/construction/13.webp",
  },
  {
    category: "Construction & Civil Engineering",
    bg: "bg-violet-500",
    img: "assets/construction/14.webp",
  },
  {
    category: "Construction & Civil Engineering",
    bg: "bg-yellow-500",
    img: "assets/construction/15.webp",
  },
  {
    category: "Construction & Civil Engineering",
    bg: "bg-green-400",
    img: "assets/construction/16.webp",
  },
  {
    category: "Construction & Civil Engineering",
    bg: "bg-red-400",
    img: "assets/construction/17.webp",
  },
  {
    category: "Construction & Civil Engineering",
    bg: "bg-slate-500",
    img: "assets/construction/18.webp",
  },
  {
    category: "Construction & Civil Engineering",
    bg: "bg-amber-600",
    img: "assets/construction/19.webp",
  },

  {
    category: "Land Surveying & Consultancy",
    bg: "bg-emerald-400",
    img: "assets/construction/land-surveying/1.webp",
  },
  {
    category: "Land Surveying & Consultancy",
    bg: "bg-sky-400",
    img: "assets/construction/land-surveying/2.webp",
  },
  {
    category: "Land Surveying & Consultancy",
    bg: "bg-indigo-400",
    img: "assets/construction/land-surveying/3.webp",
  },
  {
    category: "Land Surveying & Consultancy",
    bg: "bg-pink-400",
    img: "assets/construction/land-surveying/4.webp",
  },
  {
    category: "Land Surveying & Consultancy",
    bg: "bg-lime-400",
    img: "assets/construction/land-surveying/5.webp",
  },
  {
    category: "Land Surveying & Consultancy",
    bg: "bg-cyan-400",
    img: "assets/construction/land-surveying/6.webp",
  },

  {
    category: "Architectural Design",
    bg: "bg-rose-400",
    img: "assets/architectural-design/1.webp",
  },
  {
    category: "Architectural Design",
    bg: "bg-orange-400",
    img: "assets/architectural-design/2.webp",
  },
  {
    category: "Architectural Design",
    bg: "bg-yellow-400",
    img: "assets/architectural-design/3.webp",
  },
  {
    category: "Architectural Design",
    bg: "bg-emerald-400",
    img: "assets/architectural-design/4.webp",
  },
  {
    category: "Architectural Design",
    bg: "bg-sky-400",
    img: "assets/architectural-design/5.webp",
  },
  {
    category: "Architectural Design",
    bg: "bg-violet-400",
    img: "assets/architectural-design/6.webp",
  },
  {
    category: "Architectural Design",
    bg: "bg-pink-500",
    img: "assets/architectural-design/7.webp",
  },
  {
    category: "Architectural Design",
    bg: "bg-teal-400",
    img: "assets/architectural-design/8.webp",
  },
  {
    category: "Architectural Design",
    bg: "bg-fuchsia-400",
    img: "assets/architectural-design/9.webp",
  },

  {
    category: "Real Estate Development",
    bg: "bg-blue-400",
    img: "assets/real-estate-development/1.webp",
  },
  {
    category: "Real Estate Development",
    bg: "bg-amber-400",
    img: "assets/real-estate-development/2.webp",
  },
  {
    category: "Real Estate Development",
    bg: "bg-emerald-500",
    img: "assets/real-estate-development/3.webp",
  },
  {
    category: "Real Estate Development",
    bg: "bg-indigo-400",
    img: "assets/real-estate-development/4.webp",
  },
  {
    category: "Real Estate Development",
    bg: "bg-rose-400",
    img: "assets/real-estate-development/5.webp",
  },
  {
    category: "Real Estate Development",
    bg: "bg-sky-500",
    img: "assets/real-estate-development/6.webp",
  },
  {
    category: "Real Estate Development",
    bg: "bg-lime-500",
    img: "assets/real-estate-development/7.webp",
  },
  {
    category: "Real Estate Development",
    bg: "bg-pink-400",
    img: "assets/real-estate-development/8.webp",
  },
  {
    category: "Real Estate Development",
    bg: "bg-orange-500",
    img: "assets/real-estate-development/9.webp",
  },

  {
    category: "Project Management",
    bg: "bg-cyan-500",
    img: "assets/project-management/1.webp",
  },
  {
    category: "Project Management",
    bg: "bg-indigo-500",
    img: "assets/project-management/2.webp",
  },
  {
    category: "Project Management",
    bg: "bg-emerald-500",
    img: "assets/project-management/3.webp",
  },

  {
    category: "Building Materials Supply",
    bg: "bg-yellow-400",
    img: "assets/building-materials-supply/1.webp",
  },
  {
    category: "Building Materials Supply",
    bg: "bg-blue-500",
    img: "assets/building-materials-supply/2.webp",
  },
  {
    category: "Building Materials Supply",
    bg: "bg-pink-400",
    img: "assets/building-materials-supply/3.webp",
  },
  {
    category: "Building Materials Supply",
    bg: "bg-emerald-400",
    img: "assets/building-materials-supply/4.webp",
  },
  {
    category: "Building Materials Supply",
    bg: "bg-orange-400",
    img: "assets/building-materials-supply/5.webp",
  },
  {
    category: "Building Materials Supply",
    bg: "bg-violet-400",
    img: "assets/building-materials-supply/6.webp",
  },
  {
    category: "Building Materials Supply",
    bg: "bg-sky-400",
    img: "assets/building-materials-supply/7.webp",
  },
  {
    category: "Building Materials Supply",
    bg: "bg-lime-400",
    img: "assets/building-materials-supply/8.webp",
  },
  {
    category: "Building Materials Supply",
    bg: "bg-fuchsia-400",
    img: "assets/building-materials-supply/9.webp",
  },

  {
    category: "Electrical & Mechanical Works",
    bg: "bg-teal-500",
    img: "assets/electrical-&-mechanical-works/1.webp",
  },
  {
    category: "Electrical & Mechanical Works",
    bg: "bg-rose-500",
    img: "assets/electrical-&-mechanical-works/2.webp",
  },
  {
    category: "Electrical & Mechanical Works",
    bg: "bg-amber-500",
    img: "assets/electrical-&-mechanical-works/3.webp",
  },
  {
    category: "Electrical & Mechanical Works",
    bg: "bg-indigo-400",
    img: "assets/electrical-&-mechanical-works/4.webp",
  },
  {
    category: "Electrical & Mechanical Works",
    bg: "bg-sky-400",
    img: "assets/electrical-&-mechanical-works/5.webp",
  },
  {
    category: "Electrical & Mechanical Works",
    bg: "bg-lime-500",
    img: "assets/electrical-&-mechanical-works/6.webp",
  },

  {
    category: "Procurement & Logistics",
    bg: "bg-purple-400",
    img: "assets/procurement-logistics/1.webp",
  },
  {
    category: "Procurement & Logistics",
    bg: "bg-orange-400",
    img: "assets/procurement-logistics/2.webp",
  },
  {
    category: "Procurement & Logistics",
    bg: "bg-emerald-500",
    img: "assets/procurement-logistics/3.webp",
  },
  {
    category: "Procurement & Logistics",
    bg: "bg-sky-500",
    img: "assets/procurement-logistics/4.webp",
  },
  {
    category: "Procurement & Logistics",
    bg: "bg-pink-500",
    img: "assets/procurement-logistics/5.webp",
  },
  {
    category: "Procurement & Logistics",
    bg: "bg-indigo-500",
    img: "assets/procurement-logistics/6.webp",
  },
  {
    category: "Procurement & Logistics",
    bg: "bg-amber-500",
    img: "assets/procurement-logistics/7.webp",
  },
  {
  category: "Videography & Media Production",
  bg: "bg-amber-500",
  img: "assets/videography/1.webp",
},
{
  category: "Videography & Media Production",
  bg: "bg-orange-500",
  img: "assets/videography/2.webp",
},
{
  category: "Videography & Media Production",
  bg: "bg-yellow-500",
  img: "assets/videography/3.webp",
},
{
  category: "Videography & Media Production",
  bg: "bg-rose-500",
  img: "assets/videography/4.webp",
},
{
  category: "Videography & Media Production",
  bg: "bg-red-500",
  img: "assets/videography/5.webp",
},
{
  category: "Videography & Media Production",
  bg: "bg-pink-500",
  img: "assets/videography/6.webp",
},
{
  category: "Graphic Design & Branding",
  bg: "bg-cyan-500",
  img: "assets/graphicdesign/1.webp",
},
{
  category: "Graphic Design & Branding",
  bg: "bg-sky-500",
  img: "assets/graphicdesign/2.webp",
},
{
  category: "Graphic Design & Branding",
  bg: "bg-blue-500",
  img: "assets/graphicdesign/3.webp",
},
{
  category: "Graphic Design & Branding",
  bg: "bg-indigo-500",
  img: "assets/graphicdesign/4.webp",
},
{
  category: "Graphic Design & Branding",
  bg: "bg-violet-500",
  img: "assets/graphicdesign/5.webp",
},
{
  category: "Graphic Design & Branding",
  bg: "bg-fuchsia-500",
  img: "assets/graphicdesign/6.webp",
},
{
  category: "Graphic Design & Branding",
  bg: "bg-purple-500",
  img: "assets/graphicdesign/7.webp",
},
{
  category: "Website & UI/UX Design",
  bg: "bg-emerald-500",
  img: "/assets/uiuxdesign/1.webp",
},
{
  category: "Website & UI/UX Design",
  bg: "bg-green-500",
  img: "/assets/uiuxdesign/2.webp",
},
{
  category: "Website & UI/UX Design",
  bg: "bg-lime-500",
  img: "/assets/uiuxdesign/3.webp",
},
{
  category: "Website & UI/UX Design",
  bg: "bg-teal-500",
  img: "/assets/uiuxdesign/4.webp",
},
{
  category: "Website & UI/UX Design",
  bg: "bg-cyan-400",
  img: "/assets/uiuxdesign/5.webp",
},
{
  category: "Printing & Production",
  bg: "bg-stone-500",
  img: "/assets/printingproduction/1.webp",
},
{
  category: "Printing & Production",
  bg: "bg-zinc-500",
  img: "/assets/printingproduction/2.webp",
},
{
  category: "Printing & Production",
  bg: "bg-neutral-500",
  img: "/assets/printingproduction/3.webp",
},
{
  category: "Printing & Production",
  bg: "bg-slate-500",
  img: "/assets/printingproduction/4.webp",
},
{
  category: "Printing & Production",
  bg: "bg-gray-500",
  img: "/assets/printingproduction/5.webp",
},
{
  category: "Printing & Production",
  bg: "bg-stone-600",
  img: "/assets/printingproduction/6.webp",
},
{
  category: "Printing & Production",
  bg: "bg-zinc-600",
  img: "/assets/printingproduction/7.webp",
},
{
  category: "Printing & Production",
  bg: "bg-neutral-600",
  img: "/assets/printingproduction/8.webp",
},
{
  category: "Digital Marketing",
  bg: "bg-lime-500",
  img: "/assets/digitalmarketing/1.webp",
},
{
  category: "Digital Marketing",
  bg: "bg-green-500",
  img: "/assets/digitalmarketing/2.webp",
},
{
  category: "Digital Marketing",
  bg: "bg-emerald-500",
  img: "/assets/digitalmarketing/3.webp",
},
{
  category: "Digital Marketing",
  bg: "bg-teal-500",
  img: "/assets/digitalmarketing/4.webp",
},
{
  category: "Digital Marketing",
  bg: "bg-cyan-500",
  img: "/assets/digitalmarketing/5.webp",
},
{
  category: "Printing",
  bg: "bg-indigo-500",
  img: "/assets/printingproduction/8.webp",
},
{
  category: "Printing",
  bg: "bg-blue-500",
  img: "/assets/printingproduction/7.webp",
},
{
  category: "Printing",
  bg: "bg-sky-500",
  img: "/assets/printingproduction/6.webp",
},
{
  category: "Printing",
  bg: "bg-cyan-500",
  img: "/assets/printingproduction/5.webp",
},
{
  category: "Printing",
  bg: "bg-teal-500",
  img: "/assets/printingproduction/4.webp",
},
{
  category: "Printing",
  bg: "bg-green-500",
  img: "/assets/printingproduction/3.webp",
},
{
  category: "Printing",
  bg: "bg-emerald-500",
  img: "/assets/printingproduction/2.webp",
},
{
  category: "Printing",
  bg: "bg-lime-500",
  img: "/assets/printingproduction/1.webp",
},
{
  category: "Video Production",
  bg: "bg-red-500",
  img: "assets/videography/6.webp",
},
{
  category: "Video Production",
  bg: "bg-orange-500",
  img: "assets/videography/5.webp",
},
{
  category: "Video Production",
  bg: "bg-yellow-500",
  img: "assets/videography/4.webp",
},
{
  category: "Video Production",
  bg: "bg-amber-500",
  img: "assets/videography/3.webp",
},
{
  category: "Video Production",
  bg: "bg-rose-500",
  img: "assets/videography/2.webp",
},
{
  category: "Video Production",
  bg: "bg-pink-500",
  img: "assets/videography/1.webp",
},
{
  category: "Strategic Consultancy",
  bg: "bg-violet-500",
  img: "assets/strategic-consultancy/1.webp",
},
{
  category: "Strategic Consultancy",
  bg: "bg-purple-500",
  img: "assets/strategic-consultancy/2.webp",
},
{
  category: "Strategic Consultancy",
  bg: "bg-fuchsia-500",
  img: "assets/strategic-consultancy/3.webp",
},
];

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const [animate, setAnimate] = useState(false); // 👈 NEW

  // 👇 trigger animation when category changes
  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 400);
    return () => clearTimeout(timer);
  }, [active]);

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <div className="w-full py-16 px-4 md:px-10 lg:px-20 bg-[#f7f2e8]">

      {/* TITLE */}
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900">
          Discover Our{" "}
          <span className="bg-yellow-300 px-3 py-1 rounded-md text-sm align-middle">
            LATEST
          </span>{" "}
          Projects
        </h1>

        <p className="mt-6 text-slate-600 text-lg">
          No matter the industry you're in, or the asset you need,
          we can design it for you
        </p>
      </div>

      {/* FILTER BUTTONS */}
      <div className="flex flex-wrap justify-center gap-3 mt-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 rounded-full border transition ${
              active === cat
                ? "bg-yellow-400 border-yellow-400 text-black"
                : "border-gray-400 text-gray-700 hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {filtered.map((item, i) => (
          <div
            key={i}
            className={`
              ${item.bg} p-4 rounded-2xl
              transform transition-all duration-500 ease-in-out
              ${animate ? "-translate-y-3 opacity-0" : "translate-y-0 opacity-100"}
            `}
            style={{ transitionDelay: `${i * 60}ms` }} // 👈 stagger
          >
            <div className="bg-white/90 rounded-xl overflow-hidden">
              <img
                src={item.img}
                alt="portfolio"
                className="w-full h-[220px] object-cover"
              />
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}