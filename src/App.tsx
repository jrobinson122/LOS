import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import {
  ThemeProvider,
  CssBaseline,
  Box,
} from "@mui/material";
import { muiTheme } from "./themes/muiTheme";
import { losTheme } from "./themes/themes";

import { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

import Atmosphere from "./components/background.tsx/Atmosphere";
import FloatingDust from "./components/background.tsx/Temp";
import NoiseOverlay from "./components/background.tsx/NoiseOverlay";

import Homepage from "./main-routes/Homepage";
import About from "./main-routes/About";
import Shop from "./main-routes/Shop";
import Contact from "./main-routes/Contact";

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

const AppShell = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        position: "relative",
        overflowX: "hidden",
        backgroundColor: losTheme.colors.background,
      }}
    >
      <Atmosphere />
      <FloatingDust />
      <NoiseOverlay />

      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          minHeight: "100vh",
        }}
      >
        <AnimatedRoutes />
      </Box>
    </Box>
  );
};

export default function App() {
  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  return (
    <ParticlesProvider init={particlesInit}>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <Router>
          <AppShell />
        </Router>
      </ThemeProvider>
    </ParticlesProvider>
  );
}