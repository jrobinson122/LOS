// src/pages/Homepage.tsx

import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { getTheme, ThemeConfig } from "../themes/themes";
import DynamicHero from "../components/DynamicHero"; 
import ThemeSwitcher from "../components/ThemeSwitcher";

const Homepage = () => {
  const [currentThemeId, setCurrentThemeId] = useState<string>("pop");
  const [theme, setTheme] = useState<ThemeConfig>(getTheme("pop"));

  useEffect(() => {
    document.body.style.overflow = "hidden";
    
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem("clothingStoreTheme");
    if (savedTheme) {
      setCurrentThemeId(savedTheme);
      setTheme(getTheme(savedTheme));
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleThemeChange = (themeId: string) => {
    setCurrentThemeId(themeId);
    setTheme(getTheme(themeId));
    localStorage.setItem("clothingStoreTheme", themeId);

    window.dispatchEvent(new Event('themeChange'));
  };

  return (
    <>
      <ThemeSwitcher
        currentTheme={currentThemeId}
        onThemeChange={handleThemeChange}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentThemeId}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{ height: '100vh', width: '100%' }}
        >
          <Box
            sx={{
              height: "100vh",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
              transition: "background 0.5s ease",
              backgroundColor: theme.colors.background
            }}
          >
           
            {/* Scanlines Effect (Neon theme) */}
            {theme.effects.scanlines && (
              <Box
                component={motion.div}
                animate={{
                  transform: ["translateY(0)", "translateY(50px)"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                sx={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  background: `repeating-linear-gradient(
                    0deg,
                    rgba(0, 255, 255, 0.03) 0px,
                    transparent 2px,
                    transparent 4px
                  )`,
                  pointerEvents: "none",
                }}
              />
            )}

            {/* Glow Orbs (Neon/Retro themes) */}
            {theme.effects.glow && (
              <>
                <Box
                  component={motion.div}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  sx={{
                    position: "absolute",
                    top: "20%",
                    left: "10%",
                    width: "300px",
                    height: "300px",
                    borderRadius: "50%",
                    background: `radial-gradient(circle, ${theme.colors.burst1}40 0%, transparent 70%)`,
                    filter: "blur(60px)",
                    pointerEvents: "none",
                  }}
                />
                <Box
                  component={motion.div}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  sx={{
                    position: "absolute",
                    bottom: "20%",
                    right: "10%",
                    width: "400px",
                    height: "400px",
                    borderRadius: "50%",
                    background: `radial-gradient(circle, ${theme.colors.burst2}40 0%, transparent 70%)`,
                    filter: "blur(60px)",
                    pointerEvents: "none",
                  }}
                />
              </>
            )}

            {/* Main Content - Dynamic Hero with variant switcher */}
            <motion.div
              initial={{ rotate: -180, scale: 0.5, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 90, scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.7, ease: "anticipate" }}
              style={{ width: '100%', height: '100%' }}
            >
              <DynamicHero theme={theme} />
            </motion.div>
          </Box>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Homepage;