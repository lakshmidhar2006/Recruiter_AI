import { motion } from "framer-motion";
import React from "react";

export default function ConversationCard({
  image,
  name,
  role,
  text,
  className,
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: [0, -5, 0] }}
      transition={{
        opacity: { duration: 0.4, delay },
        scale: { duration: 0.4, delay },
        y: {
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        },
      }}
      className={`absolute z-20 ${className}`}
    >
      <div className="flex items-start gap-3 bg-white/95 backdrop-blur-xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl py-3 pl-3 pr-4 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
        <div className="relative shrink-0 mt-0.5">
          <img
            src={image}
            alt={name}
            className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
          />
          <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></div>
        </div>

        <div className="flex flex-col min-w-0 max-w-[260px] sm:max-w-[300px]">
          <div className="flex items-baseline gap-2 mb-0.5">
            <span className="text-xs font-bold text-slate-800 truncate">{name}</span>
            {role && <span className="text-[10px] text-slate-500 font-medium truncate hidden sm:inline">{role}</span>}
          </div>
          <p className="text-xs text-slate-600 font-medium leading-relaxed">{text}</p>
        </div>
      </div>
    </motion.div>
  );
}
