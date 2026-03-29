import type { Transition } from "framer-motion";

// Base transition
export const ease: Transition = { duration: 0.7, ease: "easeInOut" };

// fadeUp with explicit layer delay — every element declares its own layer
export const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { ...ease, delay } },
});

// Layer delays — refer to DESIGN_SYSTEM.md
export const layer = {
  marker: 0,
  heading: 0.1,
  body:    0.2,
  stat1:   0.3,
  stat2:   0.4,
  stat3:   0.5,
};