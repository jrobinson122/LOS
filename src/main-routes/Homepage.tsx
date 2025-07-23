import { useEffect } from "react";
import { Box } from "@mui/material";
import homepageImage from '../images/newHomePage.png'
import { motion } from "framer-motion";
import CanvasStars from "../components/Star";

const Homepage = () => {

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto"; // restore on unmount
    };
  }, []);
  return (
    <>
      <CanvasStars />

      <motion.div
        initial={{ rotate: -180, scale: 0.5, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        exit={{ rotate: 90, scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.7, ease: "anticipate" }}
      >
        <Box
          sx={{
            minHeight: "100vh",
            backgroundColor: '#e11f80',
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            px: 2,
            py: 4,
            position: 'relative',
            overflow: 'hidden'
          }}
        >

          <Box
            id="image-zone"
            sx={{
              width: "min(90vw, 600px)",
              height: "auto",
              backgroundImage: `url(${homepageImage})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              aspectRatio: "3 / 4",
            }}
          />
        </Box>
      </motion.div>
    </>
  );
};

export default Homepage;
