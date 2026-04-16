import { motion } from "framer-motion";

export default function OurProcess() {
  const process = [
    {
      title: "Project Discovery & Qualification",
      text: "Clients share project details including scope, goals, budget, and timeline so we can understand requirements and ensure alignment.",
    },
    {
      title: "Project Review & Feasibility Assessment",
      text: "We evaluate technical complexity, budget fit, timeline, and resource availability before approving any project.",
    },
    {
      title: "Initial Consultation & Quotation",
      text: "We provide consultation, clarify scope, and present an estimated quotation with full transparency.",
    },
    {
      title: "Proposal & Agreement",
      text: "A detailed proposal is created outlining scope, deliverables, timeline, and cost structure before project approval.",
    },
    {
      title: "Project Scheduling & Kickoff",
      text: "Once approved and payment is confirmed, the project is scheduled based on workload and complexity.",
    },
    {
      title: "Execution & Delivery",
      text: "We begin full execution with structured progress updates, quality control, and professional delivery standards.",
    },
    {
      title: "Design / Engineering Development",
      text: "All technical, design, or construction works are executed with precision and industry best practices.",
    },
    {
      title: "Quality Assurance & Review",
      text: "We conduct internal quality checks to ensure all deliverables meet professional and safety standards.",
    },
    {
      title: "Client Review & Refinement",
      text: "Clients review progress and provide feedback for necessary refinements and improvements.",
    },
    {
      title: "Project Completion & Handover",
      text: "Final delivery is completed, documentation handed over, and full project ownership is transferred to the client.",
    },
  ];

  return (
    <section className="bg-white py-5 px-4 md:px-6 lg:px-10">
      
      {/* INTRO */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-zinc-900">
            Our Process
          </h2>

          <p className="text-sm text-zinc-500 mt-3 max-w-2xl mx-auto text-center px-2">
            A structured, qualification-first approach that ensures every project is delivered with precision and quality. 
            We follow a clear system that guarantees efficiency, transparency, and excellence from start to finish.
          </p>
        </div>

        {/* PROCESS STEPS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {process.map((step, index) => {

            const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: isMobile ? 15 : 30, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: isMobile ? 0.35 : 0.55,
                  delay: isMobile ? 0 : index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="border border-zinc-200 rounded-xl p-5 md:p-6 bg-zinc-50 hover:bg-white transition"
              >
                <div className="flex items-start gap-4">

                  {/* NUMBER */}
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-zinc-900 text-white flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </div>

                  {/* CONTENT */}
                  <div>
                    <h3 className="text-base font-semibold text-zinc-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-zinc-600 leading-7 text-justify">
                      {step.text}
                    </p>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </motion.div>

    </section>
  );
}