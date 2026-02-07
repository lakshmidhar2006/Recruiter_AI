import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rahul Mehta",
    role: "Founder, TechStart Solutions",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "We went from 6 weeks to hire a developer to just 10 days. RecruiterAI handled everything from initial screening to final scheduling.",
  },
  {
    name: "Sarah Kim",
    role: "HR Lead, GrowthCo",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "Our hiring pipeline is now fully automated. We save hours every single week and never miss a follow-up with a promising candidate.",
  },
  {
    name: "Amit Verma",
    role: "Head of Talent, ScaleUp",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    quote:
      "We never lose top candidates anymore. The automated engagement workflows keep our talent pool warm, active, and ready to join.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-[#EFF6FF]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-white rounded-full text-blue-600 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            Success Stories
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Trusted by High-Growth Teams
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            See how companies are reducing hiring time and attracting better talent with RecruiterAI.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full relative overflow-hidden group"
            >
              {/* Decorative Quote Mark */}
              <div className="absolute top-4 right-6 text-[#F3F4F6] text-8xl font-serif opacity-50 group-hover:text-[#EFF6FF] transition-colors select-none leading-none">
                "
              </div>

              {/* Quote Content */}
              <p className="text-gray-700 text-lg leading-relaxed mb-8 relative z-10 font-medium">
                "{t.quote}"
              </p>

              {/* Author Info */}
              <div className="mt-auto flex items-center gap-4 relative z-10">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{t.name}</h4>
                  <p className="text-sm text-[#3B82F6] font-medium">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
