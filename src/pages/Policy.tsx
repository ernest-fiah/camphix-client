export default function PolicyPage() {
  const sections = [
    {
      title: "01. Personal Information",
      text: "When you contact Camphix Company, request quotations, book consultations, or submit forms, we may collect your name, email address, phone number, business details, and project information.",
    },
    {
      title: "02. Purpose of Collection",
      text: "We use your information to communicate with you, provide requested services, prepare proposals, improve customer support, process inquiries, and enhance your overall experience with our company.",
    },
    {
      title: "03. Protection & Security",
      text: "Your data is handled with care using secure systems, responsible internal practices, and modern safeguards designed to reduce unauthorized access or misuse.",
    },
    {
      title: "04. Cookies & Analytics",
      text: "Our website may use cookies, traffic insights, and analytics tools to understand visitor interactions, optimize performance, and improve usability.",
    },
    {
      title: "05. External Services",
      text: "Some pages may include links to third-party platforms such as maps, social media, or external tools. Their privacy practices are managed independently.",
    },
    {
      title: "06. Your Control",
      text: "You may request access to your data, correction of inaccurate details, or deletion of stored information by contacting our support team.",
    },
    {
      title: "07. Contact Support",
      text: "For privacy inquiries, legal requests, or policy clarification, please contact Camphix Company via camphixcompany@gmail.com or +233 (0) 54 172 8294.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      {/* HERO */}
      <section className="relative px-6 md:px-12 lg:px-20 py-24 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1f2937] border-b border-white/10">
        <div className="absolute top-0 left-0 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-6xl mx-auto text-center">
          <p className="uppercase tracking-[0.45em] text-sm text-yellow-400 mb-5 font-medium">
            Camphix Company
          </p>

          <h1 className="text-4xl md:text-7xl font-bold tracking-tight leading-tight bg-gradient-to-r from-white via-yellow-100 to-yellow-400 bg-clip-text text-transparent">
            Privacy Policy
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-zinc-300 text-lg md:text-xl leading-8">
            Your trust matters to us. This policy explains how Camphix Company
            collects, uses, secures, and manages your information with
            professionalism and transparency.
          </p>

          <div className="mt-8 inline-flex px-5 py-2 rounded-full border border-yellow-400/30 bg-white/5 backdrop-blur-md text-sm text-yellow-300">
            Last Updated • April 2026
          </div>
        </div>
      </section>

      {/* POLICY CARDS */}
      <section className="px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-7">
          {sections.map((item, index) => (
            <div
              key={index}
              className="group rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-7 md:p-8 shadow-xl hover:-translate-y-1 hover:border-yellow-400/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold flex items-center justify-center text-lg mb-5 shadow-lg">
                {index + 1}
              </div>

              <h2 className="text-2xl font-semibold mb-4 tracking-tight text-white">
                {item.title}
              </h2>

              <p className="text-zinc-300 leading-8 text-base md:text-lg">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 lg:px-20 pb-24">
        <div className="max-w-6xl mx-auto rounded-[2rem] bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 text-black p-10 md:p-14 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="uppercase tracking-[0.35em] text-sm font-semibold mb-4 text-black/70">
                Need Assistance?
              </p>

              <h3 className="text-3xl md:text-5xl font-bold leading-tight">
                We’re Here To Help
              </h3>

              <p className="mt-5 leading-8 text-lg text-black/80">
                If you have questions about privacy, service terms, or your
                information, our team is ready to assist you promptly.
              </p>
            </div>

            <div className="md:text-right">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-black text-white font-semibold hover:scale-105 transition-transform"
              >
                Contact Camphix
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}