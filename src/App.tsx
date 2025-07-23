import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Homepage from "./main-routes/Homepage";
import NavBar from "./components/Navbar";
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
  )
};
const App = () => {
  return (
    <Router>
      <NavBar />
      <AnimatedRoutes />
    </Router>
  );
};

export default App;
