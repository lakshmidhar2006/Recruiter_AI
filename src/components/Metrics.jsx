import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const metrics = [
  {
    id: 1,
    label: "Faster Screening",
    value: "10x",
    desc: "AI parses 250+ apps/day",
    width: "w-[15%]", // Relative widths
    finalWidth: "w-[85%]",
    color: "from-blue-600 to-blue-400",
    shadow: "shadow-blue-200",
  },
  {
    id: 2,
    label: "Time-to-Hire",
    value: "70%",
    desc: "12 days avg hiring time",
    width: "w-[10%]",
    finalWidth: "w-[70%]",
    color: "from-purple-600 to-purple-400",
    shadow: "shadow-purple-200",
  },
  {
    id: 3,
    label: "Interview Capacity",
    value: "25x",
    desc: "200+ daily screenings",
    width: "w-[12%]",
    finalWidth: "w-[90%]",
    color: "from-sky-500 to-sky-300",
    shadow: "shadow-sky-200",
  },
  {
    id: 4,
    label: "Completion Rate",
    value: "95%",
    desc: "Reduced drop-off",
    width: "w-[20%]",
    finalWidth: "w-[95%]",
    color: "from-indigo-100 to-white border border-indigo-200",
    textClass: "text-indigo-900",
    shadow: "shadow-indigo-100",
  },
  {
    id: 5,
    label: "Qualified Candidates",
    value: "89%",
    desc: "Higher quality pipeline",
    width: "w-[15%]",
    finalWidth: "w-[85%]",
    color: "from-violet-400 to-violet-300",
    shadow: "shadow-violet-200",
  },
  {
    id: 6,
    label: "Cost Reduction",
    value: "80%",
    desc: "Lower agency fees",
    width: "w-[10%]",
    finalWidth: "w-[80%]",
    color: "from-gray-900 to-gray-700",
    shadow: "shadow-gray-400",
  },
  {
    id: 7,
    label: "Hiring Accuracy",
    value: "50%",
    desc: "Fewer bad hires",
    width: "w-[8%]",
    finalWidth: "w-[50%]",
    color: "from-fuchsia-500 to-fuchsia-400",
    shadow: "shadow-fuchsia-200",
  },
];

export default function MetricsSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });

  // Animation Stages
  const barsScaleX = useTransform(smoothProgress, [0.1, 0.5], [0, 1]);

  return (
    <section ref={containerRef} className="relative h-[250vh] bg-white text-gray-900">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">

        {/* Subtle Background Elements */}
        <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-gradient-to-b from-blue-50 to-purple-50 rounded-full blur-[100px] opacity-60 translate-x-1/2 -translate-y-1/2 pointer-events-none" />

        <div className="max-w-6xl mx-auto w-full px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center h-full">

          {/* Left Layout */}
          <div className="text-center lg:text-left space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
                Measurable <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
                  Performance.
                </span>
              </h2>
              <p className="text-xl text-gray-500 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Data-driven recruitment means better hires, faster. See the difference RecruiterAI makes.
              </p>
            </motion.div>
          </div>

          {/* Right Layout: Horizontal Bar Chart */}
          <div className="relative flex flex-col justify-center h-full w-full p-6 lg:p-12">

            {/* Chart Area */}
            <div className="flex flex-col justify-center w-full gap-5 lg:gap-6">
              {metrics.map((metric) => (
                <HorizontalBar
                  key={metric.id}
                  metric={metric}
                  scaleX={barsScaleX}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function HorizontalBar({ metric, scaleX }) {
  return (
    <div className="relative w-full group transition-all hover:-translate-y-1 hover:shadow-lg p-3 rounded-xl bg-white">

      <div className="flex items-center justify-between mb-2 text-sm lg:text-base font-semibold text-gray-700">
        <span>{metric.label}</span>
        <span className={`font-bold text-4xl ${metric.textClass || "text-gray-900"}`}>{metric.value}</span>
      </div>

      {/* Track */}
      <div className="w-full h-3 lg:h-4 bg-gray-100 rounded-full overflow-hidden">
        {/* The Bar */}
        <motion.div
          style={{ scaleX, originX: 0 }}
          className={`h-full rounded-full bg-gradient-to-r ${metric.color} shadow-sm ${metric.shadow} ${metric.finalWidth}`}
        />
      </div>

      {/* Hover Description */}
      <div className="absolute top-8 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs text-gray-500 font-medium">
        {metric.desc}
      </div>
    </div>
  );
}
