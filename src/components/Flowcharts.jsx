import React, { useRef, useState } from "react";
import DecisionNode from "./DecisionNode";
import { motion, useInView } from "framer-motion";
import {
  FileText,
  Send,
  Video,
  UserCheck,
  Calendar,
  Clock,
  Mail,
  CheckCircle2,
  XCircle,
  Users,
  Bell,
  Zap
} from "lucide-react";

// --- FLOWCHART DATA ---

const flow1 = {
  title: "Automated Screening",
  subtitle: "Screen 250+ applications in minutes",
  steps: [
    { type: "node", label: "New Application", color: "bg-orange-50 text-orange-900 border-orange-200", icon: FileText, iconColor: "text-orange-600" },
    { type: "arrow" },
    { type: "node", label: "AI Screening\n(Top 20%)", color: "bg-amber-50 text-amber-900 border-amber-200", icon: Zap, iconColor: "text-amber-600" },
    { type: "arrow" },
    { type: "decision", label: "Score > 75%?", color: "bg-teal-50 text-teal-900 border-teal-200" },
    {
      type: "branch",
      yes: { label: "Auto-Schedule\nInterview", color: "bg-emerald-50 text-emerald-900 border-emerald-200", icon: Calendar, iconColor: "text-emerald-600" },
      no: { label: "Talent Pool\nEmail", color: "bg-slate-50 text-slate-700 border-slate-200", icon: Mail, iconColor: "text-slate-500" }
    }
  ]
};

const flow2 = {
  title: "Multi-Stage Interview",
  subtitle: "Reduce time-to-hire from 42 to 12 days",
  steps: [
    { type: "node", label: "Candidate Accepts", color: "bg-blue-50 text-blue-900 border-blue-200", icon: UserCheck, iconColor: "text-blue-600" },
    { type: "arrow" },
    { type: "node", label: "AI Video Interview", color: "bg-indigo-50 text-indigo-900 border-indigo-200", icon: Video, iconColor: "text-indigo-600" },
    { type: "arrow" },
    { type: "decision", label: "Score > 80%?", color: "bg-teal-50 text-teal-900 border-teal-200" },
    {
      type: "branch",
      yes: { label: "Manager Interview\n(Round 2)", color: "bg-violet-50 text-violet-900 border-violet-200", icon: Users, iconColor: "text-violet-600" },
      no: { label: "Auto-Rejection\nWith Feedback", color: "bg-rose-50 text-rose-900 border-rose-200", icon: XCircle, iconColor: "text-rose-600" }
    }
  ]
};

const flow3 = {
  title: "Passive Re-engagement",
  subtitle: "Build a qualified talent pipeline automatically",
  steps: [
    { type: "node", label: "Borderline Candidate\n(60-74%)", color: "bg-pink-50 text-pink-900 border-pink-200", icon: UserCheck, iconColor: "text-pink-600" },
    { type: "arrow" },
    { type: "node", label: "Add to 'Future'\nTalent Pool", color: "bg-fuchsia-50 text-fuchsia-900 border-fuchsia-200", icon: Users, iconColor: "text-fuchsia-600" },
    { type: "arrow" },
    { type: "node", label: "Wait 3 Months", color: "bg-slate-50 text-slate-900 border-slate-200", icon: Clock, iconColor: "text-slate-600" },
    { type: "arrow" },
    { type: "decision", label: "New Role Fits?", color: "bg-teal-50 text-teal-900 border-teal-200" },
    {
      type: "branch",
      yes: { label: "Send Re-engagement\nEmail", color: "bg-sky-50 text-sky-900 border-sky-200", icon: Send, iconColor: "text-sky-600" },
      no: { label: "Wait Next\nQuarter", color: "bg-gray-50 text-gray-900 border-gray-200", icon: Clock, iconColor: "text-gray-500" }
    }
  ]
};

// --- COMPONENT ---

export default function Flowcharts() {
  return (
    <section className="relative py-16 px-6 bg-[#3B82F6] text-white rounded-2xl overflow-hidden font-sans max-w-6xl mx-auto my-12">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header - Reduced margin */}
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
            AI Recruiting Software That Works <br /> Like Your Own HR Team
          </h2>
          <p className="text-lg text-blue-100 font-medium max-w-2xl mx-auto">
            Build custom hiring workflows in minutes. No coding required.
          </p>
        </div>

        {/* Flowcharts Grid - Reduced vertical gap */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <FlowColumn data={flow1} delay={0} />
          <FlowColumn data={flow2} delay={0.2} />
          <FlowColumn data={flow3} delay={0.4} />
        </div>

      </div>
    </section>
  );
}

function FlowColumn({ data, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [replayKey, setReplayKey] = useState(0);

  const handleHover = () => {
    setReplayKey((prev) => prev + 1);
  };

  const activeDelay = replayKey > 0 ? 0 : delay;

  return (
    <div
      ref={ref}
      className="flex flex-col items-center"
      onMouseEnter={handleHover}
    >

      {/* Mac Window Container - Reduced Height to 500px */}
      <div className="w-full bg-slate-50 rounded-xl overflow-hidden flex flex-col h-full min-h-[500px] shadow-2xl border-4 border-white/10 ring-1 ring-black/20">

        {/* Main Flex Layout: Sidebar + Canvas */}
        <div className="flex h-full">



          {/* Main Canvas Area */}
          <div className="flex-1 flex flex-col relative bg-[#F8FAFC]">
            {/* Canvas Dot Grid */}
            <div className="absolute inset-0 opacity-[0.4]"
              style={{ backgroundImage: 'radial-gradient(#cbd5e1 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}
            />

            {/* Window Header (Inside Canvas) */}
            <div className="h-10 border-b border-slate-200 flex items-center justify-between px-3 bg-white/50 backdrop-blur-sm z-20">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5 group">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400 group-hover:bg-red-500 transition-colors" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 group-hover:bg-yellow-500 transition-colors" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400 group-hover:bg-green-500 transition-colors" />
                </div>
                <span className="ml-2 text-[10px] font-semibold text-slate-500 tracking-wide uppercase">{data.title}</span>
              </div>
              <div className="text-slate-300"><Bell size={12} /></div>
            </div>

            {/* Flow Diagram */}
            <div className="flex-1 p-4 flex flex-col items-center relative z-10 overflow-hidden">

              {/* Flow Steps - Tighter vertical spacing */}
              <div key={replayKey} className="relative flex flex-col items-center w-full z-10 space-y-1 mt-1">
                {data.steps.map((step, index) => {
                  const stepDelay = activeDelay + (index * 0.15);

                  if (step.type === "node") return <Node key={index} data={step} show={isInView} delay={stepDelay} />;
                  if (step.type === "decision") return <DecisionNode key={index} label={step.label} color={step.color} show={isInView} delay={stepDelay} />;
                  if (step.type === "branch") return <Branch key={index} data={step} show={isInView} delay={stepDelay + 0.1} />;
                  if (step.type === "arrow") return <Arrow key={index} show={isInView} delay={stepDelay} />;
                  return null;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Node({ data, show, delay }) {
  const Icon = data.icon;
  // Compact node
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 10 }}
      animate={show ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay, type: "spring", bounce: 0.3 }}
      className={`relative z-10 p-3 rounded-xl shadow-md flex items-center gap-3 w-[200px] transition-all bg-white ${data.color.replace('bg-', 'hover:bg-opacity-80 ')}`}
    >
      <div className={`w-7 h-7 rounded-md flex items-center justify-center shrink-0 ${data.color.split(' ')[0]} ${data.color.split(' ')[2]}`}>
        {Icon && <Icon size={14} className={data.iconColor} />}
      </div>
      <span className="text-[11px] font-bold leading-tight text-slate-700 whitespace-pre-line text-left">{data.label}</span>
    </motion.div>
  );
}

// Decision component removed in favor of DecisionNode import


function Branch({ data, show, delay }) {
  return (
    <div className="relative w-full flex justify-center gap-4 mt-0.5">
      {/* Connector Lines - Compacted Height */}
      {show && (
        <svg className="absolute top-[-10px] left-0 w-full h-[50px] pointer-events-none -z-0" overflow="visible">
          <defs>
            <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
              <polygon points="0 0, 6 2, 0 4" fill="#94a3b8" />
            </marker>
          </defs>
          {/* Left Branch Line */}
          <motion.path
            d="M 50% 0 C 50% 20, 25% 0, 25% 35"
            fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="3" markerEnd="url(#arrowhead)"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay }}
          />
          {/* Right Branch Line */}
          <motion.path
            d="M 50% 0 C 50% 20, 75% 0, 75% 35"
            fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="3" markerEnd="url(#arrowhead)"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay }}
          />
        </svg>
      )}

      {/* Yes Node (Left) */}
      <div className="flex-1 max-w-[100px] flex justify-center pt-6 relative">
        <Node data={{ ...data.yes, label: data.yes.label }} show={show} delay={delay + 0.2} />
      </div>

      {/* No Node (Right) */}
      <div className="flex-1 max-w-[100px] flex justify-center pt-6 relative">
        <Node data={{ ...data.no, label: data.no.label }} show={show} delay={delay + 0.3} />
      </div>
    </div>
  );
}

function Arrow({ show, delay }) {
  return (
    <motion.div
      className="h-4 flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }} animate={show ? { opacity: 1 } : {}} transition={{ delay, duration: 0.2 }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" className="text-slate-300">
        <path d="M12 0 V 12" stroke="currentColor" strokeWidth="3" fill="none" />
        <path d="M9 10 L 12 13 L 15 10" stroke="currentColor" strokeWidth="3" fill="none" />
      </svg>
    </motion.div>
  );
}
