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
    bg: "bg-purple-500",
    img: "public/assets/construction/2.jpg",
  },
  {
    category: "Construction & Civil Engineering",
    bg: "bg-orange-500",
    img: "public/assets/construction/3.jpg",
  },
 {
    category: "Construction & Civil Engineering",
    bg: "bg-purple-500",
    img: "public/assets/construction/4.jpg",
  },
  {
    category: "Construction & Civil Engineering",
    bg: "bg-orange-500",
    img: "public/assets/construction/5.jpg",
  },
 {
    category: "Construction & Civil Engineering",
    bg: "bg-purple-500",
    img: "public/assets/construction/6.jpg",
  },
  {
    category: "Construction & Civil Engineering",
    bg: "bg-orange-500",
    img: "public/assets/construction/7.jpg",
  },
  {
    category: "Construction & Civil Engineering",
    bg: "bg-purple-500",
    img: "public/assets/construction/8.jpg",
  },
  {
    category: "Construction & Civil Engineering",
    bg: "bg-orange-500",
    img: "public/assets/construction/9.jpg",
  },
 {
    category: "Construction & Civil Engineering",
    bg: "bg-purple-500",
    img: "public/assets/construction/10.jpg",
  },

    {
    category: "Construction & Civil Engineering",
    bg: "bg-orange-500",
    img: "public/assets/construction/11.jpg",
  },
 {
    category: "Construction & Civil Engineering",
    bg: "bg-purple-500",
    img: "public/assets/construction/12.jpg",
  },
  {
    category: "Construction & Civil Engineering",
    bg: "bg-orange-500",
    img: "public/assets/construction/13.jpg",
  },
  {
    category: "Construction & Civil Engineering",
    bg: "bg-purple-500",
    img: "public/assets/construction/14.jpg",
  },
  {
    category: "Construction & Civil Engineering",
    bg: "bg-orange-500",
    img: "public/assets/construction/15.jpg",
  },
 {
    category: "Construction & Civil Engineering",
    bg: "bg-purple-500",
    img: "public/assets/construction/16.jpg",
  },
    {
    category: "Construction & Civil Engineering",
    bg: "bg-purple-500",
    img: "public/assets/construction/17.jpg",
  },
  {
    category: "Construction & Civil Engineering",
    bg: "bg-orange-500",
    img: "public/assets/construction/18.jpg",
  },
 {
    category: "Construction & Civil Engineering",
    bg: "bg-purple-500",
    img: "public/assets/construction/19.jpg",
  },
  {
    category: "Land Surveying & Consultancy",
    bg: "bg-purple-500",
    img: "public/assets/construction/land-surveying/1.jpg",
  },
  {
    category: "Land Surveying & Consultancy",
    bg: "bg-purple-500",
    img: "public/assets/construction/land-surveying/2.jpg",
  },
  {
    category: "Land Surveying & Consultancy",
    bg: "bg-purple-500",
    img: "public/assets/construction/land-surveying/3.jpg",
  },
  {
    category: "Land Surveying & Consultancy",
    bg: "bg-purple-500",
    img: "public/assets/construction/land-surveying/4.jpg",
  },
  {
    category: "Land Surveying & Consultancy",
    bg: "bg-purple-500",
    img: "public/assets/construction/land-surveying/5.jpg",
  },
  {
    category: "Land Surveying & Consultancy",
    bg: "bg-purple-500",
    img: "public/assets/construction/land-surveying/6.jpg",
  },
  {
    category: "Architectural Design",
    bg: "bg-orange-500",
    img: "public/assets/architectural-design/1.jpg",
  },
  {
    category: "Architectural Design",
    bg: "bg-orange-500",
    img: "public/assets/architectural-design/2.jpg",
  },
  {
    category: "Architectural Design",
    bg: "bg-orange-500",
    img: "public/assets/architectural-design/3.jpg",
  },
  {
    category: "Architectural Design",
    bg: "bg-orange-500",
    img: "public/assets/architectural-design/4.jpg",
  },
  {
    category: "Architectural Design",
    bg: "bg-orange-500",
    img: "public/assets/architectural-design/5.jpg",
  },
  {
    category: "Architectural Design",
    bg: "bg-orange-500",
    img: "public/assets/architectural-design/6.jpg",
  },
  {
    category: "Architectural Design",
    bg: "bg-orange-500",
    img: "public/assets/architectural-design/7.jpg",
  },
  {
    category: "Architectural Design",
    bg: "bg-orange-500",
    img: "public/assets/architectural-design/8.jpg",
  },
  {
    category: "Architectural Design",
    bg: "bg-orange-500",
    img: "public/assets/architectural-design/9.jpg",
  },
  {
    category: "Real Estate Development",
    bg: "bg-purple-500",
    img: "public/assets/real-estate-development/1.jpg",
  },
  {
    category: "Real Estate Development",
    bg: "bg-purple-500",
    img: "public/assets/real-estate-development/2.jpg",
  },
  {
    category: "Real Estate Development",
    bg: "bg-purple-500",
    img: "public/assets/real-estate-development/3.jpg",
  },
  {
    category: "Real Estate Development",
    bg: "bg-purple-500",
    img: "public/assets/real-estate-development/4.jpg",
  },
  {
    category: "Real Estate Development",
    bg: "bg-purple-500",
    img: "public/assets/real-estate-development/5.jpg",
  },
  {
    category: "Real Estate Development",
    bg: "bg-purple-500",
    img: "public/assets/real-estate-development/6.jpg",
  },
  {
    category: "Real Estate Development",
    bg: "bg-purple-500",
    img: "public/assets/real-estate-development/7.jpg",
  },
  {
    category: "Real Estate Development",
    bg: "bg-purple-500",
    img: "public/assets/real-estate-development/8.jpg",
  },
  {
    category: "Real Estate Development",
    bg: "bg-purple-500",
    img: "public/assets/real-estate-development/9.jpg",
  },
  {
    category: "Project Management",
    bg: "bg-orange-500",
    img: "public/assets/project-management/1.jpg",
  },
  {
    category: "Project Management",
    bg: "bg-orange-500",
    img: "public/assets/project-management/2.jpg",
  },
  {
    category: "Project Management",
    bg: "bg-orange-500",
    img: "public/assets/project-management/3.jpg",
  },
  {
    category: "Building Materials Supply",
    bg: "bg-orange-500",
    img: "public/assets/building-materials-supply/1.jpg",
  },
  {
    category: "Building Materials Supply",
    bg: "bg-orange-500",
    img: "public/assets/building-materials-supply/2.jpg",
  },
  {
    category: "Building Materials Supply",
    bg: "bg-orange-500",
    img: "public/assets/building-materials-supply/3.jpg",
  },
  {
    category: "Building Materials Supply",
    bg: "bg-orange-500",
    img: "public/assets/building-materials-supply/4.jpg",
  },
  {
    category: "Building Materials Supply",
    bg: "bg-orange-500",
    img: "public/assets/building-materials-supply/5.jpg",
  },
  {
    category: "Building Materials Supply",
    bg: "bg-orange-500",
    img: "public/assets/building-materials-supply/6.jpg",
  },
  {
    category: "Building Materials Supply",
    bg: "bg-orange-500",
    img: "public/assets/building-materials-supply/7.jpg",
  },
  {
    category: "Building Materials Supply",
    bg: "bg-orange-500",
    img: "public/assets/building-materials-supply/8.jpg",
  },
  {
    category: "Building Materials Supply",
    bg: "bg-orange-500",
    img: "public/assets/building-materials-supply/9.jpg",
  },
  {
    category: "Electrical & Mechanical Works",
    bg: "bg-orange-500",
    img: "public/assets/electrical-&-mechanical-works/1.jpg",
  },
  {
    category: "Electrical & Mechanical Works",
    bg: "bg-orange-500",
    img: "public/assets/electrical-&-mechanical-works/2.jpg",
  },
  {
    category: "Electrical & Mechanical Works",
    bg: "bg-orange-500",
    img: "public/assets/electrical-&-mechanical-works/3.jpg",
  },
  {
    category: "Electrical & Mechanical Works",
    bg: "bg-orange-500",
    img: "public/assets/electrical-&-mechanical-works/4.jpg",
  },
  {
    category: "Electrical & Mechanical Works",
    bg: "bg-orange-500",
    img: "public/assets/electrical-&-mechanical-works/5.jpg",
  },
  {
    category: "Electrical & Mechanical Works",
    bg: "bg-orange-500",
    img: "public/assets/electrical-&-mechanical-works/6.jpg",
  },
  {
    category: "Procurement & Logistics",
    bg: "bg-purple-500",
    img: "public/assets/procurement-logistics/1.jpg",
  },
  {
    category: "Procurement & Logistics",
    bg: "bg-purple-500",
    img: "public/assets/procurement-logistics/2.jpg",
  },
  {
    category: "Procurement & Logistics",
    bg: "bg-purple-500",
    img: "public/assets/procurement-logistics/3.jpg",
  },
  {
    category: "Procurement & Logistics",
    bg: "bg-purple-500",
    img: "public/assets/procurement-logistics/4.jpg",
  },
  {
    category: "Procurement & Logistics",
    bg: "bg-purple-500",
    img: "public/assets/procurement-logistics/5.jpg",
  },
  {
    category: "Procurement & Logistics",
    bg: "bg-purple-500",
    img: "public/assets/procurement-logistics/6.jpg",
  },
  {
    category: "Procurement & Logistics",
    bg: "bg-purple-500",
    img: "public/assets/procurement-logistics/7.jpg",
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