import React from "react";
import { motion } from "framer-motion";

export default function DecisionNode({ label, color, show, delay }) {
    // Map color strings to specific pastel bg classes if needed, or use the passed color class directly if it fits.
    // The requirement says: bg-yellow-300 for decision nodes.
    // But the existing data passes colors like "bg-teal-50 text-teal-900".
    // The assignment says: "Use this for: Score >= 75%, etc." and "Style: bg-yellow-300".
    // So I should probably override the color to bg-yellow-300 or make it configurable but default to yellow-300 for these specific nodes.

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={show ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay, type: "spring", bounce: 0.4 }}
            className="relative z-10 w-24 h-24 flex items-center justify-center my-2"
        >
            {/* Diamond Shape */}
            <div
                className="absolute inset-0 bg-yellow-300 rotate-45 rounded-xl shadow-md flex items-center justify-center"
            >
                {/* Content (Rotated back) */}
                <div className="-rotate-45 text-center px-1">
                    <span className="text-[10px] sm:text-xs font-bold leading-tight text-yellow-900 block">
                        {label}
                    </span>
                </div>
            </div>
        </motion.div>
    );
}
