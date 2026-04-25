import { useEffect, useState } from "react";

export default function Form() {
  const [show, setShow] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Construction & Civil Engineering",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/camphixcompany@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const result = await response.json();

      if (result.success === "true" || response.ok) {
        alert("Form submitted successfully. We have received your request.");

        setFormData({
          name: "",
          email: "",
          service: "Construction & Civil Engineering",
          message: "",
        });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please try again.");
    }

    setLoading(false);
  };

  return (
    <>
      <style>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");
          
          * {
            font-family: "Poppins", sans-serif;
          }

          @keyframes floatGlow {
            0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
            50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.9; }
          }

          .glow-anim {
            animation: floatGlow 6s ease-in-out infinite;
          }
        `}
      </style>

      <section
        className={`relative bg-white flex flex-col md:flex-row justify-center px-4 py-20 gap-20 transition-all duration-700 overflow-hidden ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* MAIN SOFT GRAY GLOW */}
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none size-140 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-300 opacity-40 rounded-full blur-[200px] glow-anim"></div>

        {/* BACKGROUND WRAP */}
        <div className="absolute inset-0 bg-linear-to-b from-white via-gray-100 to-gray-200"></div>

        {/* LEFT CONTENT */}
        <div
          className={`relative z-10 text-center md:text-left mt-12 transition-all duration-700 delay-150 ${
            show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <div className="flex items-center p-1.5 rounded-full border border-gray-300 text-xs w-fit mx-auto md:mx-0 bg-white/80 backdrop-blur-sm shadow-sm">
            <div className="flex items-center">
              <img
                className="size-7 rounded-full border border-gray-400"
                src="/assets/testimonial/6.webp"
                alt="user1"
              />
              <img
                className="size-7 rounded-full border border-gray-500 -translate-x-2"
                src="/assets/testimonial/7.webp"
                alt="user2"
              />
              <img
                className="size-7 rounded-full border border-gray-300 -translate-x-4"
                src="/assets/testimonial/4.webp"
                alt="user3"
              />
            </div>

            <p className="-translate-x-2 text-xs text-gray-600">
              Trusted by businesses & developers
            </p>
          </div>

          <h1 className="font-medium text-3xl md:text-5xl/15 max-w-[470px] mt-4 text-gray-900">
            Let’s Build Your Next Project With Confidence{" "}
            <span className="bg-linear-to-r from-[#111111] via-[#6b7280] to-[#d1d5db] bg-clip-text text-transparent">
              Today
            </span>
          </h1>

          <p className="text-sm/6 text-gray-600 max-w-[345px] mt-4 mx-auto md:mx-0">
            From construction and land surveying to digital solutions, Camphix
            Company delivers precision, innovation, and reliability. Tell us
            about your project and let’s bring it to life.
          </p>
        </div>

        {/* FORM */}
        <div
          className={`relative z-10 w-full max-w-lg max-md:mx-auto bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-8 shadow-xl transition-all duration-700 delay-300 ${
            show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* NAME */}
            <div className="transform transition hover:scale-[1.01]">
              <label className="block text-gray-900 text-sm mb-2">
                Full Name
              </label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                required
                placeholder="Your full name"
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gray-700 transition"
              />
            </div>

            {/* EMAIL */}
            <div className="transform transition hover:scale-[1.01]">
              <label className="block text-gray-900 text-sm mb-2">
                Email Address
              </label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                required
                placeholder="you@example.com"
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gray-700 transition"
              />
            </div>

            {/* SERVICE */}
            <div className="transform transition hover:scale-[1.01]">
              <label className="block text-gray-900 text-sm mb-2">
                Service Needed
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-gray-700 transition"
              >
                <option>Construction & Civil Engineering</option>
                <option>Land Surveying & Consultancy</option>
                <option>Architectural Design</option>
                <option>Real Estate Development</option>
                <option>Project Management</option>
                <option>Building Materials Supply</option>
                <option>Electrical & Mechanical Works</option>
                <option>Graphic Design & Branding</option>
                <option>Videography & Media Production</option>
                <option>Digital Marketing</option>
                <option>Website & UI/UX Design</option>
                <option>Printing & Production</option>
                <option>Procurement & Logistics</option>
                <option>Strategic Consultancy</option>
              </select>
            </div>

            {/* MESSAGE */}
            <div className="transform transition hover:scale-[1.01]">
              <label className="block text-gray-900 text-sm mb-2">
                Project Details
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                rows={4}
                required
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gray-700 transition resize-none"
              ></textarea>
            </div>

            {/* FOOTER */}
            <div className="flex items-center justify-between gap-6">
              <p className="text-xs md:text-sm text-gray-500 max-w-3xs">
                By submitting, you agree to our{" "}
                <span className="text-gray-900">Terms</span> and{" "}
                <span className="text-gray-900">Privacy Policy</span>.
              </p>

              <button
                type="submit"
                disabled={loading}
                className="bg-linear-to-r from-[#111111] via-[#6b7280] to-[#d1d5db] hover:scale-105 active:scale-95 text-white font-medium text-sm px-8 md:px-16 py-3 rounded-full transition duration-300 cursor-pointer disabled:opacity-60"
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
