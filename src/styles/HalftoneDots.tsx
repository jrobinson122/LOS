import React from "react";
import { Box } from "@mui/material";

const HalftoneDots = ({
  side = "left", // or "right"
  size = 100,
  offsetY = 0,
  color = "black",
}: {
  side?: "left" | "right";
  size?: number;
  offsetY?: number;
  color?: string;
}) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: `calc(50% + ${offsetY}px)`,
        [side]: "-100px",
        transform: "translateY(-50%)",
        zIndex: 0,
      }}
    >
      <svg width={size} height={size} viewBox="0 0 100 100" style={{ opacity: 0.9 }}>
        <defs>
          <pattern
            id={`dots-${color}`}
            x="0"
            y="0"
            width="8"
            height="8"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="4" cy="4" r="3.6" fill={color} />
          </pattern>
          <radialGradient id="fade-mask" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id={`radial-mask-${color}`}>
            <rect width="100" height="100" fill="url(#fade-mask)" />
          </mask>
        </defs>
        <rect
          width="100"
          height="100"
          fill={`url(#dots-${color})`}
          mask={`url(#radial-mask-${color})`}
        />
      </svg>
    </Box>
  );
};

export default HalftoneDots;
