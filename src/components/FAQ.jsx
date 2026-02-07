import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How does the AI screening actually work?",
    answer:
      "Our AI analyzes resumes against your specific job descriptions, looking for relevant skills, experience, and intent. It goes beyond keyword matching to understand context, ranking candidates based on their actual fit for the role.",
  },
  {
    question: "Does RecruiterAI integrate with my existing ATS?",
    answer:
      "Yes! We integrate seamlessly with major ATS platforms like Greenhouse, Lever, Ashby, and more. Your data syncs in real-time, so you never have to manually transfer candidate profiles.",
  },
  {
    question: "Can I customize the interview questions?",
    answer:
      "Absolutely. You can set up custom screening questions for each role, or let our AI suggest the best technical and behavioral questions based on the job requirements.",
  },
  {
    question: "Is candidate data secure and compliant?",
    answer:
      "Security is our top priority. We are SOC 2 Type II compliant and GDPR ready. All candidate data is encrypted at rest and in transit, ensuring complete privacy and protection.",
  },
  {
    question: "What is the pricing model?",
    answer:
      "We offer flexible plans starting with a free trial. You can choose between a pay-per-job model for small teams or a subscription plan for growing agencies. Contact sales for a custom enterprise quote.",
  },
];

export default function FAQ() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Everything you need to know about RecruiterAI.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ faq }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-6 text-left focus:outline-none group"
      >
        <span className={`text-lg font-semibold transition-colors duration-300 ${isOpen ? "text-blue-600" : "text-gray-900 group-hover:text-blue-600"}`}>
          {faq.question}
        </span>
        <span className="ml-6 flex-shrink-0">
          <motion.div
            initial={false}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? "bg-blue-600 text-white" : "bg-[#F3F4F6] text-blue-600 group-hover:bg-blue-600 group-hover:text-white"}`}
          >
            {isOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            )}
          </motion.div>
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-gray-600 pb-6 leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
