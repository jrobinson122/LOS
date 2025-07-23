import React from "react";

const Star = ({ size = 40, x = 0, y = 0, rotation = 0 }: { size?: number; x?: number; y?: number; rotation?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    style={{
      position: "absolute",
      top: y,
      left: x,
      transform: `rotate(${rotation}deg)`,
      zIndex: 0,
    }}
  >
    <polygon
      points="50,0 61,35 98,35 68,57 79,91 50,70 21,91 32,57 2,35 39,35"
      fill="#ffd700"
      stroke="black"
      strokeWidth="6"
    />
  </svg>
);

export default Star;
