// src/components/background.tsx/Atmosphere.tsx

import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { losTheme } from "../../themes/themes";

export default function Atmosphere() {
  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        overflow: "hidden",
        zIndex: 0,
        pointerEvents: "none",
        backgroundColor: losTheme.colors.background
      }}
    >
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          x: [0, 120, 0],
          y: [0, -80, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          width: 900,
          height: 900,
          borderRadius: "50%",
          filter: "blur(160px)",
          background: losTheme.colors.accent,
          opacity: 0.22,
          left: "-10%",
          top: "-20%",
        }}
      />

      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          x: [0, -120, 0],
          y: [0, 80, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 22,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          width: 800,
          height: 800,
          borderRadius: "50%",
          filter: "blur(180px)",
          background: losTheme.colors.accentHot,
          opacity: 0.16,
          right: "-10%",
          bottom: "-20%",
        }}
      />
    </Box>
  );
}