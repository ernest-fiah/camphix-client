import  { useState } from "react";
import { motion } from "framer-motion";

type FAQ = {
  question: string;
  answer: string;
};

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: "What services does Camphix Company provide?",
      answer:
        "Camphix Company provides construction and civil engineering, land surveying, architectural design, real estate development, project management, and infrastructure solutions across Africa.",
    },
    {
      question: "Do you handle both residential and commercial projects?",
      answer:
        "Yes, we handle residential, commercial, and large-scale infrastructure projects from planning and design through to full execution and delivery.",
    },
    {
      question: "Do you offer architectural and engineering consultancy?",
      answer:
        "Yes, we provide professional architectural design, structural engineering support, and land surveying consultancy services tailored to project requirements.",
    },
    {
      question: "Can Camphix Enterprise manage full construction projects?",
      answer:
        "Yes, we offer end-to-end project management, including planning, procurement, site supervision, and construction execution.",
    },
    {
      question: "How do I request a consultation or quotation?",
      answer:
        "You can contact us directly through our email, phone, or website contact form to request a consultation or project quotation.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full flex justify-center bg-[#FAFAFA] py-16 px-4">
      <div className="w-full max-w-3xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium tracking-wider text-slate-900 mb-2">
            FAQ'S
          </p>
          <h1 className="text-3xl font-medium text-zinc-800">
            Everything you need to know
          </h1>
        </motion.div>

        {/* FAQ LIST */}
        <div className="space-y-4">
          {faqs.map((faq: FAQ, index: number) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}

                /* ✅ scroll-up reveal applied to each card */
                initial={{ opacity: 0, y: 40, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                  delay: index * 0.06,
                }}

                className="bg-white border border-zinc-200 rounded-xl overflow-hidden"
              >
                {/* QUESTION */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="text-sm text-zinc-800 pr-4">
                    {faq.question}
                  </span>

                  <div className="size-8 flex items-center justify-center rounded-full bg-black/5">
                    {isOpen ? (
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M6 6l12 12M18 6L6 18"
                          stroke="black"
                          strokeOpacity="0.5"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 5v14M5 12h14"
                          stroke="black"
                          strokeOpacity="0.5"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                  </div>
                </button>

                {/* ANSWER (unchanged smooth expand logic) */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden px-5 pb-5">
                    <p className="text-sm text-zinc-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default Faqs;