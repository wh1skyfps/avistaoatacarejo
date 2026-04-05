"use client";

import { memo, useMemo } from "react";
import { motion } from "framer-motion";

const FloatingPathsSVG = memo(function FloatingPathsSVG({ position }: { position: number }) {
  const paths = useMemo(() => 
    Array.from({ length: 10 }, (_, i) => ({
      id: i,
      d: `M-${380 - i * 15 * position} -${189 + i * 18}C-${380 - i * 15 * position} -${189 + i * 18} -${312 - i * 15 * position} ${216 - i * 18} ${152 - i * 15 * position} ${343 - i * 18}C${616 - i * 15 * position} ${470 - i * 18} ${684 - i * 15 * position} ${875 - i * 18} ${684 - i * 15 * position} ${875 - i * 18}`,
      width: 0.5 + i * 0.08,
      duration: 25 + i * 5,
    })),
    [position]
  );

  return (
    <svg className="w-full h-full" viewBox="0 0 696 316" fill="none" aria-hidden="true">
      {paths.map((path) => (
        <motion.path
          key={path.id}
          d={path.d}
          stroke="currentColor"
          strokeWidth={path.width}
          strokeOpacity={0.08 + path.id * 0.04}
          initial={{ pathLength: 0.3, opacity: 0.4 }}
          animate={{
            pathLength: 1,
            opacity: [0.2, 0.5, 0.2],
            pathOffset: [0, 1, 0],
          }}
          transition={{
            duration: path.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </svg>
  );
});

export const FloatingPaths = memo(function FloatingPaths({ position, className }: { position: number; className?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className ?? ""}`}>
      <FloatingPathsSVG position={position} />
    </div>
  );
});
