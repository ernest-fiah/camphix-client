import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function BlogPage() {
  const [active, setActive] = useState("All");

  const categories = ["All", "Construction", "Design", "Engineering"];

  const posts = [
    {
      title: "Modern Construction Techniques for 2026",
      category: "Construction",
      img: "public/assets/construction/9.jpg",
      excerpt:
        "Exploring new building methods, materials, and precision engineering techniques shaping modern infrastructure.",
    },
    {
      title: "Engineering Urban Growth in Africa",
      category: "Engineering",
      img: "public/assets/construction/10.jpg",
      excerpt:
        "How engineering principles are reshaping cities with smarter planning and execution systems.",
    },
    {
      title: "Design Thinking in Real Estate Development",
      category: "Construction",
      img: "public/assets/construction/11.jpg",
      excerpt:
        "The impact of structured design thinking on property value and long-term development success.",
    },
    {
      title: "Visual Branding for Construction Firms",
      category: "Design",
      img: "public/assets/camphix-flyers/1.jpg",
      excerpt:
        "Why strong visual identity matters in modern construction and engineering businesses.",
    },
    {
      title: "Flyer Design That Converts Clients",
      category: "Design",
      img: "public/assets/camphix-flyers/2.jpg",
      excerpt:
        "Simple principles behind high-performing marketing flyers and promotional designs.",
    },
    {
      title: "Digital Marketing for Engineering Companies",
      category: "Engineering",
      img: "public/assets/camphix-flyers/3.jpg",
      excerpt:
        "How engineering firms can leverage digital presence to attract high-value clients.",
    },
  ];

  const filtered =
    active === "All"
      ? posts
      : posts.filter((p) => p.category === active);

  const featured = posts[0];

  return (
    <div className="bg-white text-black">

      {/* ================= HERO ================= */}
      <section className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">

          <p className="text-sm tracking-[0.3em] text-gray-500 uppercase">
            Camphix Insights
          </p>

          <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight">
            Ideas, Knowledge & Industry Updates
          </h1>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
            A curated space where construction, engineering, and design meet
            innovation and real-world execution.
          </p>

        </div>
      </section>

      {/* ================= FEATURED ================= */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          <img
            src={featured.img}
            className="w-full h-[450px] object-cover grayscale hover:grayscale-0 transition duration-500"
          />

          <div>
            <span className="text-xs uppercase tracking-widest text-gray-500">
              Editor’s Pick • {featured.category}
            </span>

            <h2 className="mt-3 text-3xl md:text-4xl font-semibold leading-tight">
              {featured.title}
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              {featured.excerpt}
            </p>

            <button className="mt-6 inline-flex items-center gap-2 border border-black px-6 py-3 hover:bg-black hover:text-white transition">
              Read Full Article
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* ================= FILTER ================= */}
      <div className="flex justify-center gap-3 flex-wrap px-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 text-sm border transition ${
              active === cat
                ? "bg-black text-white border-black"
                : "border-gray-300 text-gray-600 hover:text-black"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ================= BLOG GRID ================= */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-4 gap-10">

        {/* POSTS */}
        <div className="lg:col-span-3">

          <h3 className="text-lg font-semibold mb-6">Latest Articles</h3>

          <div className="columns-1 md:columns-2 gap-6 space-y-6">

            {filtered.map((post, i) => (
              <div
                key={i}
                className="break-inside-avoid border border-gray-200 hover:border-black transition group bg-white"
              >

                <div className="overflow-hidden">
                  <img
                    src={post.img}
                    className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition duration-500"
                  />
                </div>

                <div className="p-5">
                  <span className="text-xs text-gray-500 uppercase">
                    {post.category}
                  </span>

                  <h4 className="mt-2 font-semibold group-hover:underline">
                    {post.title}
                  </h4>

                  <p className="mt-2 text-sm text-gray-600">
                    {post.excerpt}
                  </p>

                  <button className="mt-4 text-sm flex items-center gap-1 text-gray-700 hover:text-black">
                    Read More <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

              </div>
            ))}

          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="lg:col-span-1 space-y-10">

          <div className="sticky top-10">

            <div>
              <h4 className="font-semibold mb-3">Categories</h4>
              <div className="space-y-2 text-sm text-gray-600">
                {categories.map((c) => (
                  <p
                    key={c}
                    className="hover:text-black cursor-pointer"
                    onClick={() => setActive(c)}
                  >
                    {c}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <h4 className="font-semibold mb-3">Trending</h4>

              <div className="space-y-4">

                {posts.slice(0, 3).map((p, i) => (
                  <div key={i} className="flex gap-3">
                    <img
                      src={p.img}
                      className="w-14 h-14 object-cover grayscale"
                    />
                    <div>
                      <p className="text-sm text-gray-700 hover:text-black">
                        {p.title}
                      </p>
                      <span className="text-xs text-gray-500">
                        {p.category}
                      </span>
                    </div>
                  </div>
                ))}

              </div>
            </div>

          </div>

        </aside>

      </section>

    </div>
  );
}