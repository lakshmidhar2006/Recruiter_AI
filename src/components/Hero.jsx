import React from "react";
import ConversationCard from "./ConversationalBubble";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#EFF6FF] py-24 lg:py-32">

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#EFF6FF] to-white" />

        {/* Central Glow - Enhanced for depth behind headline */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[#3B82F6]/5 blur-[120px] rounded-full mix-blend-multiply" />

        {/* Corner Highlights */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#B197FC]/10 blur-[90px] rounded-full translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#3B82F6]/5 blur-[90px] rounded-full -translate-x-1/3 translate-y-1/3" />

        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-60" />
      </div>

      {/* Decorative Connecting Lines (Reference Style) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40 hidden lg:block" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
            <stop offset="50%" stopColor="#3B82F6" stopOpacity="1" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Top Left Connection - Stretched further left */}
        <path d="M 45% 42% C 35% 38%, 25% 35%, 15% 25%" stroke="url(#lineGradient)" strokeWidth="1.5" fill="none" />
        {/* Top Right Connection - Pulled in left */}
        <path d="M 55% 42% C 65% 38%, 70% 35%, 75% 28%" stroke="url(#lineGradient)" strokeWidth="1.5" fill="none" />

        {/* Bottom Left Connection - Stretched further left */}
        <path d="M 45% 58% C 35% 62%, 25% 65%, 15% 72%" stroke="url(#lineGradient)" strokeWidth="1.5" fill="none" />

        {/* Bottom Right Connection - Pulled in left */}
        <path d="M 55% 58% C 65% 62%, 70% 65%, 75% 78%" stroke="url(#lineGradient)" strokeWidth="1.5" fill="none" />
      </svg>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl px-6">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/90 backdrop-blur-md border border-[#3B82F6]/10 shadow-[0_2px_10px_rgba(59,130,246,0.1)]"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3B82F6] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#3B82F6]"></span>
          </span>
          <span className="text-sm font-semibold text-[#4B5563] tracking-wide uppercase text-[11px]">AI-Powered Recruitment V2.0</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#111827] leading-tight mb-4 drop-shadow-sm"
        >
          The <span className="text-[#3B82F6] relative inline-block">
            only
            <svg className="absolute w-full h-3 -bottom-2 left-0 text-[#D0BCFF] opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
            </svg>
          </span> hiring platform <br className="hidden lg:block" /> you’ll ever need.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto text-xl text-[#4B5563] mb-6 leading-relaxed font-medium"
        >
          Save time, reduce bias, and hire top talent 3x faster with our intelligent automation suite designed for modern teams.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <button className="group relative w-full sm:w-auto px-8 py-4 bg-[#3B82F6] text-white rounded-full font-bold text-lg shadow-lg hover:scale-105 transition-all duration-300 overflow-hidden">
            <span className="relative z-10">Start Hiring Smarter</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </button>

          <button className="group w-full sm:w-auto px-8 py-4 bg-white text-[#3B82F6] border border-[#3B82F6]/20 rounded-full font-bold text-lg shadow-sm hover:bg-[#EFF6FF] hover:border-[#3B82F6]/50 hover:-translate-y-0.5 transition-all duration-300">
            See How It Works
          </button>
        </motion.div>
      </div>

      {/* Floating Chat Bubbles - Adjusted positions to stay in viewport */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">

        {/* Top Left - Moved further left (2% / 5%) */}
        <div className="absolute top-[20%] left-[2%] xl:left-[5%] hidden lg:block hover:-translate-y-1 transition-transform duration-300">
          <ConversationCard
            image="https://randomuser.me/api/portraits/women/44.jpg"
            name="Sarah K."
            role="Founder at TechStart"
            text="Candidates wait 3 weeks for replies while I'm juggling everything. We're losing great talent to competitors."
            delay={0.5}
            className="origin-top-left"
          />
        </div>

        {/* Top Right - Moved left (more central) (12% / 20%) */}
        <div className="absolute top-[22%] right-[12%] xl:right-[20%] hidden lg:block hover:-translate-y-1 transition-transform duration-300">
          <ConversationCard
            image="https://randomuser.me/api/portraits/men/32.jpg"
            name="Rahul M."
            role="Hiring Manager at GrowthCo"
            text="Posted on LinkedIn. Got 200 applications. Skimmed through 20. Hired on gut feeling. They quit in 2 months."
            delay={0.7}
            className="origin-top-right"
          />
        </div>

        {/* Bottom Left - Moved further left (2% / 6%) */}
        <div className="absolute bottom-[25%] left-[2%] xl:left-[6%] hidden lg:block hover:-translate-y-1 transition-transform duration-300">
          <ConversationCard
            image="https://randomuser.me/api/portraits/women/65.jpg"
            name="Priya S."
            role="CEO at InnovateLabs"
            text="I'm the CEO, product lead, AND now doing HR? There's zero time to read 200 resumes properly."
            delay={0.9}
            className="origin-bottom-left"
          />
        </div>

        {/* Bottom Right - Moved left (more central) (12% / 22%) */}
        <div className="absolute bottom-[20%] right-[12%] xl:right-[22%] hidden lg:block hover:-translate-y-1 transition-transform duration-300">
          <ConversationCard
            image="https://randomuser.me/api/portraits/men/76.jpg"
            name="Amit T."
            role="Head of HR at ScaleUp"
            text="Our best candidate accepted another offer while we were still scheduling interviews. This keeps happening."
            delay={1.1}
            className="origin-bottom-right"
          />
        </div>
      </div>
    </section>
  );
}
