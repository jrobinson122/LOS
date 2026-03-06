// src/App.tsx
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import Homepage from "./main-routes/Homepage";
import NavBar from "./components/Navbar";
import About from "./main-routes/About";
import Shop from "./main-routes/Shop";
import Contact from "./main-routes/Contact";
import { clothingThemes, ThemeConfig } from "./themes/themes";
import ThemeSwitcher from "./components/ThemeSwitcher";

// Define ThemeName type from available theme IDs
type ThemeName = keyof typeof clothingThemes;

// Convert custom themes to MUI themes
const createMuiTheme = (themeConfig: ThemeConfig) => {
  return createTheme({
    palette: {
      mode: themeConfig.id === 'neon' ? 'dark' : 'light',
      primary: {
        main: themeConfig.colors.primary,
      },
      secondary: {
        main: themeConfig.colors.secondary,
      },
      background: {
        default: 'transparent',
        paper: 'transparent',
      },
      text: {
        primary: themeConfig.colors.text,
      },
    },
    typography: {
      fontFamily: themeConfig.typography.fontFamily,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: 'transparent',
          },
        },
      },
    },
  });
};

// Create MUI-compatible theme map
const themeMap = Object.keys(clothingThemes).reduce((acc, key) => {
  acc[key] = createMuiTheme(clothingThemes[key]);
  return acc;
}, {} as Record<string, ReturnType<typeof createTheme>>);

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  const [themeName, setThemeName] = useState<ThemeName>("pop");

  // Load saved theme on mount
  useEffect(() => {
    // Use the same localStorage key as other components
    const saved = localStorage.getItem("clothingStoreTheme") as ThemeName | null;
    if (saved && saved in themeMap) setThemeName(saved);
  }, []);

  // Persist theme changes
  useEffect(() => {
    // Use the same localStorage key as other components
    localStorage.setItem("clothingStoreTheme", themeName);
    // Dispatch event so other components update
    window.dispatchEvent(new Event('themeChange'));
  }, [themeName]);

  return (
    <ThemeProvider theme={themeMap[themeName]}>
      <CssBaseline />
      <Router>
        <ThemeSwitcher
          currentTheme={themeName}
          onThemeChange={setThemeName}
        />
        <RouterAwareLayout />
      </Router>
    </ThemeProvider>
  );
};

const RouterAwareLayout = () => {
  return (
    <>
      <NavBar />
      <AnimatedRoutes />
    </>
  );
};

export default App;