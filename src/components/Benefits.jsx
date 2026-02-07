import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
    Zap,
    Clock,
    TrendingUp,
    UserCheck,
    Target,
    DollarSign,
    CheckCircle2
} from "lucide-react";

const benefits = [
    {
        id: 1,
        title: "Fast Resume Processing",
        stat: "10x",
        desc: "Faster screening. AI ranks 250+ apps/day vs 25 manually.",
        color: "bg-blue-50/50 border-blue-100 text-blue-900",
        iconColor: "text-blue-600",
        hover: "hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/10",
        icon: Zap,
    },
    {
        id: 2,
        title: "Quick Time-to-Hire",
        stat: "70%",
        desc: "Speed up hiring. Average timeline drops from 42 days to 12.",
        color: "bg-purple-50/50 border-purple-100 text-purple-900",
        iconColor: "text-purple-600",
        hover: "hover:border-purple-300 hover:shadow-lg hover:shadow-purple-500/10",
        icon: Clock,
    },
    {
        id: 3,
        title: "Massive Capacity",
        stat: "25x",
        desc: "Scale up. AI conducts 200+ automated screenings daily.",
        color: "bg-sky-50/50 border-sky-100 text-sky-900",
        iconColor: "text-sky-600",
        hover: "hover:border-sky-300 hover:shadow-lg hover:shadow-sky-500/10",
        icon: TrendingUp,
    },
    {
        id: 4,
        title: "Less Drop-off",
        stat: "95%",
        desc: "Completion rate. Smart forms reduce candidate drop-off.",
        color: "bg-indigo-50/50 border-indigo-100 text-indigo-900",
        iconColor: "text-indigo-600",
        hover: "hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-500/10",
        icon: UserCheck,
    },
    {
        id: 5,
        title: "Better Applicants",
        stat: "89%",
        desc: "Quality pipeline. AI attracts higher-quality candidates.",
        color: "bg-violet-50/50 border-violet-100 text-violet-900",
        iconColor: "text-violet-600",
        hover: "hover:border-violet-300 hover:shadow-lg hover:shadow-violet-500/10",
        icon: Target,
    },
    {
        id: 6,
        title: "Lower Expenses",
        stat: "80%",
        desc: "Cost reduction. Save on agency fees and subscriptions.",
        color: "bg-slate-50/50 border-slate-200 text-slate-800",
        iconColor: "text-slate-600",
        hover: "hover:border-slate-300 hover:shadow-lg hover:shadow-slate-500/10",
        icon: DollarSign,
    },
    {
        id: 7,
        title: "Fewer Mistakes",
        stat: "50%",
        desc: "Better hires. AI improves hiring accuracy drastically.",
        color: "bg-fuchsia-50/50 border-fuchsia-100 text-fuchsia-900",
        iconColor: "text-fuchsia-600",
        hover: "hover:border-fuchsia-300 hover:shadow-lg hover:shadow-fuchsia-500/10",
        icon: CheckCircle2,
    },
];

export default function Benefits() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });

    return (
        <section ref={containerRef} className="relative h-[300vh] bg-white text-gray-900">
            <div className="sticky top-0 h-screen overflow-hidden flex items-center">
                {/* Subtle Background Elements */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-purple-50 to-white rounded-full blur-[80px] opacity-60 translate-x-1/3 -translate-y-1/3 pointer-events-none" />

                <div className="max-w-7xl mx-auto w-full px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center h-full">

                    {/* Left Layout: Title */}
                    <div className="text-center lg:text-left space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] mb-5">
                                Why choose <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
                                    RecruiterAI?
                                </span>
                            </h2>
                            <p className="text-lg text-gray-500 leading-relaxed max-w-lg mx-auto lg:mx-0">
                                Data-driven precision. Replace guesswork with AI-powered insights that deliver real results.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Layout: Grid of Cards */}
                    <div className="relative w-full flex flex-col justify-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full relative">
                            {benefits.map((benefit, index) => {
                                // Adjusted animation ranges:
                                // Quick stagger: 0.05 per item
                                // Short duration: 0.25
                                // Last item finishes at: 6 * 0.05 + 0.25 = 0.55
                                // This leaves 0.55 -> 1.0 (45% of scroll) as fully static/fixed time.
                                const start = index * 0.05;
                                const end = start + 0.25;

                                const opacity = useTransform(smoothProgress, [start, end], [0, 1]);
                                const y = useTransform(smoothProgress, [start, end], [30, 0]);
                                const scale = useTransform(smoothProgress, [start, end], [0.95, 1]);

                                const Icon = benefit.icon;

                                return (
                                    <motion.div
                                        key={benefit.id}
                                        style={{ opacity, y, scale }}
                                        className={`relative p-5 rounded-2xl border backdrop-blur-sm ${benefit.color} ${benefit.hover} transition-all duration-300 group flex flex-col justify-between h-full min-h-[140px]`}
                                    >
                                        <div className="flex justify-between items-start mb-2">
                                            <div className={`p-2 rounded-lg bg-white/60 ${benefit.iconColor}`}>
                                                <Icon size={20} strokeWidth={2.5} />
                                            </div>
                                            <span className={`text-2xl font-black tracking-tight ${benefit.iconColor}`}>
                                                {benefit.stat}
                                            </span>
                                        </div>

                                        <div>
                                            <h3 className="text-sm font-bold text-gray-900 mb-1">{benefit.title}</h3>
                                            <p className="text-xs text-gray-600 font-medium leading-normal">
                                                {benefit.desc}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
