"use client";

import { useReducedMotion } from "framer-motion";

const particles = [
  { left: "8%", top: "18%", size: 3, delay: "0s" },
  { left: "18%", top: "74%", size: 2, delay: "1.2s" },
  { left: "34%", top: "28%", size: 2, delay: "2.4s" },
  { left: "48%", top: "12%", size: 3, delay: "0.8s" },
  { left: "64%", top: "78%", size: 2, delay: "1.8s" },
  { left: "77%", top: "24%", size: 3, delay: "2.8s" },
  { left: "88%", top: "62%", size: 2, delay: "0.4s" },
  { left: "94%", top: "34%", size: 3, delay: "3.2s" },
];

export function ParticleBackground() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return null;
  }

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 hidden overflow-hidden md:block">
      {particles.map((particle) => (
        <span
          key={`${particle.left}-${particle.top}`}
          className="animate-particle absolute rounded-full bg-[var(--gold)] shadow-[0_0_18px_rgba(246,198,71,0.62)]"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            animationDelay: particle.delay,
          }}
        />
      ))}
    </div>
  );
}
