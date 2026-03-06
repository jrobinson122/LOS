// src/components/ThemeSwitcher.tsx

import { Box, Button, Tooltip } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { getAllThemes, ThemeConfig } from "../themes/themes";

interface ThemeSwitcherProps {
  currentTheme: string;
  onThemeChange: (themeId: string) => void;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
  currentTheme,
  onThemeChange,
}) => {
  const themes = getAllThemes();

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 20,
        right: 20,
        zIndex: 1000,
        display: "flex",
        gap: 1,
        flexDirection: { xs: "column", sm: "row" },
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        backdropFilter: "blur(10px)",
        borderRadius: 2,
        padding: 1,
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
      }}
    >
      {themes.map((theme) => (
        <Tooltip key={theme.id} title={theme.name} arrow placement="bottom">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={() => onThemeChange(theme.id)}
              sx={{
                minWidth: { xs: "45px", sm: "50px" },
                height: { xs: "45px", sm: "50px" },
                fontSize: { xs: "1.2rem", sm: "1.5rem" },
                borderRadius: 1.5,
                backgroundColor:
                  currentTheme === theme.id
                    ? "rgba(255, 255, 255, 0.2)"
                    : "transparent",
                border:
                  currentTheme === theme.id
                    ? "2px solid rgba(255, 255, 255, 0.5)"
                    : "2px solid transparent",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                },
              }}
            >
              {theme.icon}
            </Button>
          </motion.div>
        </Tooltip>
      ))}
    </Box>
  );
};

export default ThemeSwitcher;