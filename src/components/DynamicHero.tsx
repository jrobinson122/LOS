// src/components/DynamicHero.tsx
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { ThemeConfig } from "../themes/themes";

interface DynamicHeroProps {
  theme: ThemeConfig;
}

type HeroVariant = "confetti" | "grid" | "morph" | "tv";

// ✅ Map themes to their hero variants
const getHeroVariantForTheme = (themeId: string): HeroVariant => {
  switch (themeId) {
    case "pop":
      return "confetti";
    case "neon":
      return "morph";
    case "retro":
      return "grid";
    default:
      return "morph";
  }
};

const DynamicHero: React.FC<DynamicHeroProps> = ({ theme }) => {
  const variant = getHeroVariantForTheme(theme.id);

  const renderHero = () => {
    switch (variant) {
      case "confetti":
        return <ConfettiHero theme={theme} />;
      case "grid":
        return <GridHorizonHero theme={theme} />;
      case "tv":
        return <TVScanHero theme={theme} />;
      case "morph":
      default:
        return <MorphHero theme={theme} />;
    }
  };

  return (
    <Box sx={{ position: "relative", width: "100%", minHeight: "100vh" }}>
      {renderHero()}
    </Box>
  );
};

// ============================================
// CONFETTI BURST HERO (Pop Burst Theme)
// ============================================
const ConfettiHero: React.FC<{ theme: ThemeConfig }> = ({ theme }) => {
  // Generate confetti particles
  const confettiCount = 50;
  const confetti = Array.from({ length: confettiCount }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 10 + 5,
    color: [theme.colors.burst1, theme.colors.burst2, theme.colors.burst3][
      Math.floor(Math.random() * 3)
    ],
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        background: theme.effects.gradient,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Confetti particles */}
      {confetti.map((particle) => (
        <motion.div
          key={particle.id}
          animate={{
            y: ["-10vh", "110vh"],
            x: [
              particle.x + "%",
              (particle.x + (Math.random() - 0.5) * 20) + "%",
            ],
            rotate: [0, 360],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `-${particle.size}px`,
            left: particle.x + "%",
            width: particle.size + "px",
            height: particle.size + "px",
            backgroundColor: particle.color,
            borderRadius: Math.random() > 0.5 ? "50%" : "0%",
          }}
        />
      ))}

      {/* Text content */}
      <Box sx={{ position: "relative", zIndex: 10, textAlign: "center" }}>
        {[theme.tagline.line1, theme.tagline.line2, theme.tagline.line3].map(
          (word, idx) => (
            <motion.div
              key={idx}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                delay: idx * 0.15,
                duration: 0.6,
                type: "spring",
                stiffness: 200,
              }}
            >
              <Typography
                sx={{
                  fontFamily: theme.typography.fontFamily,
                  fontSize: { xs: "4rem", sm: "8rem", md: "12rem" },
                  fontWeight: 900,
                  color: [theme.colors.burst1, theme.colors.burst2, theme.colors.burst3][idx],
                  textTransform: "uppercase",
                  lineHeight: 0.9,
                  margin: "10px 0",
                  textShadow: theme.typography.textShadow,
                  letterSpacing: theme.typography.letterSpacing,
                  WebkitTextStroke: "2px currentColor",
                  paintOrder: "stroke fill",
                }}
              >
                {word}
              </Typography>
            </motion.div>
          )
        )}
      </Box>
    </Box>
  );
};

// ============================================
// GRID HORIZON HERO (Retro Wave Theme)
// ============================================
const GridHorizonHero: React.FC<{ theme: ThemeConfig }> = ({ theme }) => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        background: `linear-gradient(180deg, 
          ${theme.colors.background} 0%, 
          ${theme.colors.burst1}20 50%, 
          ${theme.colors.burst2}40 100%
        )`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Vaporwave sun/circle */}
      <Box
        component={motion.div}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        sx={{
          position: "absolute",
          bottom: "30%",
          width: { xs: "200px", md: "300px" },
          height: { xs: "200px", md: "300px" },
          borderRadius: "50%",
          background: `linear-gradient(180deg, ${theme.colors.burst1} 0%, ${theme.colors.burst2} 100%)`,
          boxShadow: `
            0 0 60px ${theme.colors.burst1},
            0 0 120px ${theme.colors.burst2},
            inset 0 0 60px rgba(0,0,0,0.3)
          `,
          zIndex: 1,
        }}
      />

      {/* 3D Grid */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "140%",
          background: `
            repeating-linear-gradient(
              0deg,
              transparent 0px,
              transparent 47px,
               #FFFFFF 49px,
              #FFFFFF 51px
            ),
            repeating-linear-gradient(
              90deg,
              transparent 0px,
              transparent 49px,
              #FFFFFF 49px,
              #FFFFFF 51px
            )
          `,
          backgroundSize: "70px 70px",
          transform: "perspective(500px) rotateX(60deg)",
          transformOrigin: "bottom",
          opacity: 1,
          
          "&::before": {
            content: '""',
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: "50%",
            background: `linear-gradient(180deg, transparent 0%, ${theme.colors.background} 100%)`,
          },
        }}
      />

      {/* Text content */}
      <Box sx={{ position: "relative", zIndex: 10, textAlign: "center", mb: 10 }}>
        {[theme.tagline.line1, theme.tagline.line2, theme.tagline.line3].map(
          (word, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
            >
              <Typography
                sx={{
                  fontFamily: theme.typography.fontFamily,
                  fontSize: { xs: "4rem", sm: "8rem", md: "12rem" },
                  fontWeight: 900,
                  background: `linear-gradient(180deg, ${theme.colors.burst1} 0%, ${theme.colors.burst2} 50%, ${theme.colors.burst3} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textTransform: "uppercase",
                  lineHeight: 0.9,
                  margin: "10px 0",
                  textShadow: theme.typography.textShadow,
                  letterSpacing: theme.typography.letterSpacing,
                  filter: "drop-shadow(0 0 20px rgba(255, 255, 255, 0.5))",
                }}
              >
                {word}
              </Typography>
            </motion.div>
          )
        )}
      </Box>
    </Box>
  );
};

// ============================================
// TV SCAN HERO (kept for potential future use)
// ============================================
const TVScanHero: React.FC<{ theme: ThemeConfig }> = ({ theme }) => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        background: theme.colors.background,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "90%",
          maxWidth: "1000px",
          aspectRatio: "4/3",
          background: "#111",
          border: "20px solid #333",
          borderRadius: "20px",
          boxShadow: `0 0 100px ${theme.colors.primary}88`,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            background: `
              repeating-linear-gradient(
                0deg,
                rgba(0, 0, 0, 0.15),
                rgba(0, 0, 0, 0.15) 1px,
                transparent 1px,
                transparent 2px
              )
            `,
          }}
        >
          {[theme.tagline.line1, theme.tagline.line2, theme.tagline.line3].map(
            (word, idx) => (
              <motion.div
                key={idx}
                animate={{ opacity: [1, 0.95, 1] }}
                transition={{
                  duration: 0.1,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: theme.typography.fontFamily,
                    fontSize: { xs: "3rem", sm: "5rem", md: "7rem" },
                    fontWeight: 900,
                    color: [theme.colors.burst1, theme.colors.burst2, theme.colors.burst3][idx],
                    textTransform: "uppercase",
                    margin: "10px 0",
                    textShadow: `
                      3px 0 0 ${theme.colors.burst1},
                      -3px 0 0 ${theme.colors.burst2},
                      0 0 40px ${
                        [theme.colors.burst1, theme.colors.burst2, theme.colors.burst3][idx]
                      }
                    `,
                  }}
                >
                  {word}
                </Typography>
              </motion.div>
            )
          )}

          <Box
            sx={{
              position: "absolute",
              width: "100%",
              height: "50px",
              background:
                "linear-gradient(transparent 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%)",
              animation: "scan 4s linear infinite",
              "@keyframes scan": {
                from: { top: "-50px" },
                to: { top: "100%" },
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

// ============================================
// MORPH HERO (Neon Nights Theme)
// ============================================
const MorphHero: React.FC<{ theme: ThemeConfig }> = ({ theme }) => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        background: theme.effects.gradient,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: { xs: "400px", md: "600px" },
          height: { xs: "400px", md: "600px" },
          background: `radial-gradient(circle, ${theme.colors.burst1} 0%, ${theme.colors.burst3} 100%)`,
          borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
          animation: "morph 8s ease-in-out infinite",
          filter: "blur(40px)",
          opacity: 0.6,
          "@keyframes morph": {
            "0%, 100%": {
              borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
              transform: "rotate(0deg)",
            },
            "25%": {
              borderRadius: "70% 30% 50% 50% / 30% 60% 40% 70%",
              transform: "rotate(90deg)",
            },
            "50%": {
              borderRadius: "30% 70% 40% 60% / 50% 30% 70% 50%",
              transform: "rotate(180deg)",
            },
            "75%": {
              borderRadius: "60% 40% 60% 40% / 70% 50% 50% 30%",
              transform: "rotate(270deg)",
            },
          },
        }}
      />

      <Box sx={{ position: "relative", zIndex: 10, textAlign: "center" }}>
        {[theme.tagline.line1, theme.tagline.line2, theme.tagline.line3].map(
          (word, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
            >
              <Typography
                sx={{
                  fontFamily: theme.typography.fontFamily,
                  fontSize: { xs: "4rem", sm: "8rem", md: "12rem" },
                  fontWeight: 900,
                  color: theme.colors.text,
                  textTransform: "uppercase",
                  lineHeight: 0.9,
                  margin: "10px 0",
                  textShadow: theme.typography.textShadow,
                  letterSpacing: theme.typography.letterSpacing,
                  ...(theme.id === "neon" && {
                    color: "#ffffff",
                    textShadow:
                      "0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.5), 0 0 60px rgba(255, 255, 255, 0.3)",
                  }),
                  ...(theme.id === "retro" && {
                    background: `linear-gradient(135deg, ${theme.colors.burst1} 0%, ${theme.colors.burst2} 50%, ${theme.colors.burst3} 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    animation: "rainbow 3s ease-in-out infinite",
                    "@keyframes rainbow": {
                      "0%, 100%": { filter: "hue-rotate(0deg)" },
                      "50%": { filter: "hue-rotate(60deg)" },
                    },
                  }),
                }}
              >
                {word}
              </Typography>
            </motion.div>
          )
        )}
      </Box>
    </Box>
  );
};

export default DynamicHero;