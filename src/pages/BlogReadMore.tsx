import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type BlogPost = {
  title: string;
  category: string;
  img: string;
  excerpt: string;
};

type Props = {
  post?: BlogPost | null;
};

export default function BlogReadMore({ post }: Props) {
  const navigate = useNavigate();

  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateIn(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const relatedPosts: BlogPost[] = [
    {
      title: "Modern Construction Techniques for 2026",
      category: "Construction",
      img: "/assets/construction/9.webp",
      excerpt: "Exploring new building methods and engineering systems.",
    },
    {
      title: "Engineering Urban Growth in Africa",
      category: "Engineering",
      img: "/assets/construction/10.webp",
      excerpt: "How cities are being reshaped through smart engineering.",
    },
    {
      title: "Visual Branding for Construction Firms",
      category: "Design",
      img: "/assets/camphix-flyers/1.webp",
      excerpt: "Why branding matters in construction businesses.",
    },
  ];

  if (!post) {
    return (
      <div className="min-h-screen bg-white text-black flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <h2 className="text-2xl font-semibold">No article found</h2>

          <p className="mt-3 text-gray-600">
            The article you are trying to view is unavailable or was not selected.
          </p>

          <button
            onClick={() => navigate("/blog")}
            className="mt-6 inline-flex items-center gap-2 border border-black px-6 py-3 hover:bg-black hover:text-white transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white text-black overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative border-b border-gray-200">

        <div className="max-w-6xl mx-auto px-6 py-10">

          <button
            onClick={() => navigate("/blog")}
            className={`inline-flex items-center gap-2 text-sm border border-black px-5 py-2 hover:bg-black hover:text-white transition-all duration-700 ${
              animateIn
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-5"
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>

          <div className="mt-10 grid lg:grid-cols-2 gap-10 items-center">

            <div
              className={`transition-all duration-1000 ${
                animateIn
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <span className="text-xs uppercase tracking-[0.3em] text-gray-500">
                {post.category}
              </span>

              <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-tight">
                {post.title}
              </h1>

              <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                {post.excerpt}
              </p>

              <div className="mt-8 flex items-center gap-4 text-sm text-gray-500">
                <span>Camphix Editorial</span>
                <span>•</span>
                <span>6 min read</span>
              </div>
            </div>

            <div
              className={`overflow-hidden transition-all duration-1000 delay-150 ${
                animateIn
                  ? "opacity-100 translate-x-0 scale-100"
                  : "opacity-0 translate-x-10 scale-95"
              }`}
            >
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-[450px] object-cover grayscale hover:grayscale-0 transition duration-700 hover:scale-105"
              />
            </div>

          </div>

        </div>

      </section>

      {/* ARTICLE BODY */}
      <section className="max-w-4xl mx-auto px-6 py-16">

        <div className="space-y-8 text-gray-700 leading-8 text-lg">

          <p
            className={`transition-all duration-700 delay-200 ${
              animateIn
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            The future of construction and engineering continues to evolve
            through smarter execution systems, digital planning tools,
            sustainable materials, and innovative project strategies.
          </p>

          <p
            className={`transition-all duration-700 delay-300 ${
              animateIn
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            Across emerging markets and developed cities alike, companies
            are adopting better methods to reduce waste, improve speed,
            and maximize long-term structural value.
          </p>

          <p
            className={`transition-all duration-700 delay-500 ${
              animateIn
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            Strong engineering leadership, quality design systems, and
            disciplined project management now determine which firms lead
            the next generation of infrastructure growth.
          </p>

          <blockquote
            className={`border-l-4 border-black pl-6 italic text-black text-2xl leading-relaxed transition-all duration-700 delay-700 ${
              animateIn
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            Great projects are no longer built by effort alone —
            they are built through systems, strategy, and precision.
          </blockquote>

          <p
            className={`transition-all duration-700 delay-900 ${
              animateIn
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            Businesses that combine architecture, engineering, branding,
            logistics, and digital execution into one ecosystem will shape
            tomorrow’s industry standards.
          </p>

        </div>

      </section>

      {/* RELATED POSTS */}
      <section className="border-t border-gray-200">

        <div className="max-w-6xl mx-auto px-6 py-16">

          <h3
            className={`text-2xl font-semibold mb-8 transition-all duration-700 ${
              animateIn ? "opacity-100" : "opacity-0"
            }`}
          >
            Related Articles
          </h3>

          <div className="grid md:grid-cols-3 gap-8">

            {relatedPosts.map((item, i) => (
              <div
                key={i}
                className={`group border border-gray-200 hover:border-black transition-all duration-700 bg-white ${
                  animateIn
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-52 object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition duration-700"
                  />
                </div>

                <div className="p-5">

                  <span className="text-xs uppercase text-gray-500">
                    {item.category}
                  </span>

                  <h4 className="mt-3 font-semibold text-lg leading-snug group-hover:underline">
                    {item.title}
                  </h4>

                  <p className="mt-3 text-sm text-gray-600">
                    {item.excerpt}
                  </p>

                  <button
                    onClick={() => navigate("/blog")}
                    className="mt-5 inline-flex items-center gap-2 text-sm hover:text-black text-gray-700"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

    </div>
  );
}