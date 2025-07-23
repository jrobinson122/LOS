import React from "react";
import { Box, Typography } from "@mui/material";

interface PolygonTextProps {
  text: string;
  bgColor: string;
  size?: number;
}

const PolygonText = ({ text, bgColor, size = 220 }: PolygonTextProps) => (
  <Box
    sx={{
      width: size,
      height: size,
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "visible", // Prevent clipping
    }}
  >
    {/* Oversized SVG so nothing clips */}
    <svg
      width={size * 1.6} // wider for horizontal stretching
      height={size * 1.4}
      style={{
        position: "absolute",
        top: `-${size * 0.2}px`,
        left: `-${size * 0.3}px`,
        overflow: "visible",
      }}
    >
      <g
        transform={`translate(${(size * 1.6) / 2}, ${(size * 1.4) / 2}) scale(1.2, 0.75)`} // <-- stretch wider, shorter
      >
        <polygon
          points="0,-100 30,-60 80,-80 60,-30 100,0 60,30 80,80 30,60 0,100 -30,60 -80,80 -60,30 -100,0 -60,-30 -80,-80 -30,-60"
          fill={bgColor}
          stroke="black"
          strokeWidth="3"
        />
      </g>
    </svg>

    {/* Large text over the shape */}
    <Typography
      variant="h2"
      sx={{
        color: "#ffd700",
        fontSize: "4.2rem", // Bigger text!
        fontWeight: "bold",
        textShadow: "3px 3px black",
        pointerEvents: "none",
        zIndex: 2,
        whiteSpace: "nowrap",
      }}
    >
      {text}
    </Typography>
  </Box>
);

export default PolygonText;
