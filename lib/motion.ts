import type { Variants } from "framer-motion";

// Shared fade-up variant — used by every section
export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0  },
};

// Stagger container — automatically staggers fadeUp children by 0.1s
export const stagger: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
};

// Base transition — override delay per child if needed
export const ease = { duration: 0.7, ease: "easeInOut" as const };