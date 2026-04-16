import { useEffect, useState } from "react";

export default function Form() {
  const [show, setShow] = useState(false);

  // ✅ ADDED (form state)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Construction & Civil Engineering",
    message: "",
  });

  useEffect(() => {
    setShow(true);
  }, []);

  // ✅ ADDED (input handler)
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ ADDED (submit handler)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("FORM SUBMITTED:", formData);

    // optional reset (keeps UX clean, no UI change)
    setFormData({
      name: "",
      email: "",
      service: "Construction & Civil Engineering",
      message: "",
    });
  };

  return (
    <>
      <style>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
          
          * {
            font-family: "Poppins", sans-serif;
          }

          @keyframes floatGlow {
            0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
            50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.9; }
          }

          .glow-anim {
            animation: floatGlow 6s ease-in-out infinite;
          }
        `}
      </style>

      <section
        className={`relative bg-black flex flex-col md:flex-row justify-center px-4 py-20 gap-20 transition-all duration-700 ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        
        {/* Glow */}
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none mb-10 size-140 bg-green-500/35 rounded-full blur-[200px] glow-anim"></div>

        {/* LEFT CONTENT */}
        <div
          className={`text-center md:text-left mt-12 transition-all duration-700 delay-150 ${
            show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <div className="flex items-center p-1.5 rounded-full border border-green-900 text-xs w-fit mx-auto md:mx-0">
            <div className="flex items-center">
              <img
                className="size-7 rounded-full border border-green-900"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50"
                alt="user1"
              />
              <img
                className="size-7 rounded-full border border-green-900 -translate-x-2"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50"
                alt="user2"
              />
              <img
                className="size-7 rounded-full border border-green-900 -translate-x-4"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50"
                alt="user3"
              />
            </div>
            <p className="-translate-x-2 text-xs text-slate-200">
              Trusted by businesses & developers
            </p>
          </div>

          <h1 className="font-medium text-3xl md:text-5xl/15 bg-linear-to-r from-white to-green-300 bg-clip-text text-transparent max-w-[470px] mt-4">
            Let’s Build Your Next Project With Confidence
          </h1>

          <p className="text-sm/6 text-white max-w-[345px] mt-4 mx-auto md:mx-0">
            From construction and land surveying to digital solutions, Camphix
            Enterprise delivers precision, innovation, and reliability. Tell us
            about your project and let’s bring it to life.
          </p>
        </div>

        {/* FORM */}
        <div
          className={`w-full max-w-lg max-md:mx-auto bg-[#00A63E]/0 backdrop-blur-sm border border-white/10 rounded-xl p-8 transition-all duration-700 delay-300 ${
            show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          
          {/* ✅ ONLY CHANGE: added onSubmit */}
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* NAME */}
            <div className="transform transition hover:scale-[1.01]">
              <label className="block text-white text-sm mb-2">
                Full Name
              </label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                required
                placeholder="Your full name"
                className="w-full bg-[#00A63E]/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 placeholder:text-sm focus:outline-none focus:border-green-600 transition"
              />
            </div>

            {/* EMAIL */}
            <div className="transform transition hover:scale-[1.01]">
              <label className="block text-white text-sm mb-2">
                Email Address
              </label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                required
                placeholder="you@example.com"
                className="w-full bg-[#00A63E]/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 placeholder:text-sm focus:outline-none focus:border-green-600 transition"
              />
            </div>

            {/* SERVICE */}
            <div className="transform transition hover:scale-[1.01]">
              <label className="block text-white text-sm mb-2">
                Service Needed
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-[#00A63E]/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-600 transition"
              >
                <option className="text-black">
                  Construction & Civil Engineering
                </option>
                <option className="text-black">
                  Land Surveying & Consultancy
                </option>
                <option className="text-black">
                  Architectural Design
                </option>
                <option className="text-black">
                  Real Estate Development
                </option>
                <option className="text-black">
                  Project Management
                </option>
                <option className="text-black">
                  Digital Services
                </option>
              </select>
            </div>

            {/* MESSAGE */}
            <div className="transform transition hover:scale-[1.01]">
              <label className="block text-white text-sm mb-2">
                Project Details
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                rows={4}
                required
                className="w-full bg-[#00A63E]/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 placeholder:text-sm focus:outline-none focus:border-green-600 transition resize-none"
              ></textarea>
            </div>

            {/* FOOTER */}
            <div className="flex items-center justify-between">
              <p className="text-xs md:text-sm text-white/60 max-w-3xs">
                By submitting, you agree to our{" "}
                <span className="text-white">Terms</span> and{" "}
                <span className="text-white">Privacy Policy</span>.
              </p>

              <button
                type="submit"
                className="bg-linear-to-r from-green-950 to-green-600 hover:from-green-600 hover:to-green-950 hover:scale-105 active:scale-95 text-white text-sm px-8 md:px-16 py-3 rounded-full transition duration-300 cursor-pointer"
              >
                Submit
              </button>
            </div>

          </form>
        </div>

      </section>
    </>
  );
}