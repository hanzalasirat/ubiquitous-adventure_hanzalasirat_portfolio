"use client";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ y: reduced ? 0 : 20 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ y: 8 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.35 }}
    >
      {children}
    </motion.div>
  );
}
