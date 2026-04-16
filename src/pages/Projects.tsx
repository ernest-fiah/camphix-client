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
    img: "https://duck.design/wp-content/uploads/2024/07/examples-9.png",
  },
  {
    category: "Construction & Civil Engineering",
    bg: "bg-orange-500",
    img: "https://duck.design/wp-content/uploads/2024/07/examples-1-1.png",
  },
  {
    category: "Construction & Civil Engineering",
    bg: "bg-black",
    img: "https://duck.design/wp-content/uploads/2024/07/examples-2-1.png",
  },
  {
    category: "Construction & Civil Engineering",
    bg: "bg-red-500",
    img: "https://duck.design/wp-content/uploads/2024/07/examples-6-1.png",
  },
  {
    category: "Construction & Civil Engineering",
    bg: "bg-lime-400",
    img: "https://duck.design/wp-content/uploads/2024/07/examples-7-1.png",
  },
  {
    category: "Construction & Civil Engineering",
    bg: "bg-slate-900",
    img: "https://duck.design/wp-content/uploads/2024/07/examples-8-1.png",
  },
  {
    category: "Construction & Civil Engineering",
    bg: "bg-purple-500",
    img: "https://duck.design/wp-content/uploads/2024/07/examples-9.png",
  },
  {
    category: "Construction & Civil Engineering",
    bg: "bg-orange-500",
    img: "https://duck.design/wp-content/uploads/2024/07/examples-1-1.png",
  },
  {
    category: "Construction & Civil Engineering",
    bg: "bg-black",
    img: "https://duck.design/wp-content/uploads/2024/07/examples-2-1.png",
  },

  {
    category: "Land Surveying & Consultancy",
    bg: "bg-purple-500",
    img: "https://duck.design/wp-content/uploads/2024/07/examples-9.png",
  },
  {
    category: "Land Surveying & Consultancy",
    bg: "bg-orange-500",
    img: "https://duck.design/wp-content/uploads/2024/07/examples-1-1.png",
  },
  {
    category: "Land Surveying & Consultancy",
    bg: "bg-black",
    img: "https://duck.design/wp-content/uploads/2024/07/examples-2-1.png",
  },
  {
    category: "Land Surveying & Consultancy",
    bg: "bg-red-500",
    img: "https://duck.design/wp-content/uploads/2024/07/examples-6-1.png",
  },
  {
    category: "Land Surveying & Consultancy",
    bg: "bg-lime-400",
    img: "https://duck.design/wp-content/uploads/2024/07/examples-7-1.png",
  },
  {
    category: "Land Surveying & Consultancy",
    bg: "bg-slate-900",
    img: "https://duck.design/wp-content/uploads/2024/07/examples-8-1.png",
  },
  {
    category: "Land Surveying & Consultancy",
    bg: "bg-purple-500",
    img: "https://duck.design/wp-content/uploads/2024/07/examples-9.png",
  },
  {
    category: "Land Surveying & Consultancy",
    bg: "bg-orange-500",
    img: "https://duck.design/wp-content/uploads/2024/07/examples-1-1.png",
  },
  {
    category: "Land Surveying & Consultancy",
    bg: "bg-black",
    img: "https://duck.design/wp-content/uploads/2024/07/examples-2-1.png",
  },
];

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timeout = setTimeout(() => setAnimate(false), 400);
    return () => clearTimeout(timeout);
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
            style={{ transitionDelay: `${i * 70}ms` }}
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