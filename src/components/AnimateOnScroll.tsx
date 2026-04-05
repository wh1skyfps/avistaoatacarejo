import { useEffect, useRef, type ReactNode } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  blur?: boolean;
}

const AnimateOnScroll = ({ children, className = "", delay = 0, blur = false }: AnimateOnScrollProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {
          opacity: 0,
          y: 20,
          filter: blur ? "blur(8px)" : "blur(0px)",
        },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
            delay: delay / 1000,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnScroll;
