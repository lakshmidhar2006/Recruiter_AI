import React from "react";

export default function FinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-gray-900 text-center">

      {/* Background Decorative Circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full mix-blend-overlay blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full mix-blend-overlay blur-3xl translate-x-1/4 translate-y-1/4 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
          Ready to Hire Better, Faster?
        </h2>

        <p className="mt-6 text-xl text-white/90 max-w-2xl mx-auto font-medium">
          Join 500+ companies hiring smarter with RecruiterAI. Automate your workflow and focus on what matters—people.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-[#3B82F6] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:scale-105 transition-all duration-300">
            Start Free Trial
          </button>

          <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
            Schedule Demo
          </button>
        </div>

        <p className="mt-6 text-white/70 text-sm">
          No credit card required · 14-day free trial · Cancel anytime
        </p>
      </div>
    </section>
  );
}
