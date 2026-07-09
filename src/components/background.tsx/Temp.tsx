// src/components/background/FloatingDust.tsx

import Particles from "@tsparticles/react";

export default function FloatingDust() {
  return (
    <Particles
      id="floating-dust"
      options={{
        fullScreen: false,
        background: {
          color: "transparent",
        },
        particles: {
          number: {
            value: 45,
            density: {
              enable: true,
            },
          },
          color: {
            value: "#ffffff",
          },
          opacity: {
            value: {
              min: 0.04,
              max: 0.16,
            },
          },
          size: {
            value: {
              min: 1,
              max: 3,
            },
          },
          move: {
            enable: true,
            speed: 0.25,
            direction: "none",
            outModes: {
              default: "out",
            },
          },
        },
      }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -7,
        pointerEvents: "none",
      }}
    />
  );
}