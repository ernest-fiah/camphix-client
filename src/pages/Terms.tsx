export default function TermsPage() {
  const sections = [
    {
      title: "01. Acceptance of Terms",
      text: "By accessing or using Camphix Company services, website, or digital platforms, you agree to comply with these Terms & Conditions and all applicable laws.",
    },
    {
      title: "02. Services Provided",
      text: "Camphix Company offers professional solutions including construction, engineering, surveying, branding, digital services, consultancy, and related business services.",
    },
    {
      title: "03. Client Responsibilities",
      text: "Clients are responsible for providing accurate information, timely approvals, required documents, and cooperation necessary for successful project delivery.",
    },
    {
      title: "04. Payments & Fees",
      text: "All quotations, invoices, deposits, milestone payments, and balances must be settled according to agreed timelines unless otherwise stated in writing.",
    },
    {
      title: "05. Intellectual Property",
      text: "Designs, branding assets, strategies, concepts, and deliverables remain the property of Camphix Company until full payment is received, unless otherwise agreed.",
    },
    {
      title: "06. Liability Limitations",
      text: "Camphix Company shall not be liable for indirect losses, delays caused by third parties, force majeure events, or misuse of completed deliverables.",
    },
    {
      title: "07. Contact & Clarifications",
      text: "For legal inquiries, project agreements, or clarification regarding these terms, contact Camphix Company via camphixcompany@gmail.com or +233 (0) 54 172 8294.",
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
            Terms & Conditions
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-zinc-300 text-lg md:text-xl leading-8">
            Please review these terms carefully. They govern the use of our
            services, project engagements, website access, and business
            relationships with Camphix Company.
          </p>

          <div className="mt-8 inline-flex px-5 py-2 rounded-full border border-yellow-400/30 bg-white/5 backdrop-blur-md text-sm text-yellow-300">
            Last Updated • April 2026
          </div>
        </div>
      </section>

      {/* TERMS CARDS */}
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
                Need Clarification?
              </p>

              <h3 className="text-3xl md:text-5xl font-bold leading-tight">
                We’re Ready To Assist
              </h3>

              <p className="mt-5 leading-8 text-lg text-black/80">
                If you need help understanding our terms, project process, or
                service agreements, our team is available to guide you.
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