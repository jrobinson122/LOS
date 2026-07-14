// src/App.tsx

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { muiTheme } from "./themes/muiTheme";
import { losTheme } from "./themes/themes";
import BackgroundScene from "./components/background.tsx/BackgroundScene";

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

const appShellStyle: React.CSSProperties = {
  position: "relative",
  minHeight: "100vh",
  overflowX: "hidden",
  backgroundColor: losTheme.colors.background,
  isolation: "isolate",
};

const routeContentStyle: React.CSSProperties = {
  position: "relative",
  zIndex: 1,
  minHeight: "100vh",
};

const AppShell = () => {
  return (
    <div style={appShellStyle}>
      <BackgroundScene />

      <main style={routeContentStyle}>
        <AnimatedRoutes />
      </main>
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />

      <Router>
        <AppShell />
      </Router>
    </ThemeProvider>
  );
}