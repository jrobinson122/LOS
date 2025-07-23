import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
export default function About() {
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.7, opacity: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}


    >
      <Box sx={{ mt: 10, color: "white" }}>
        <Typography variant="h3">ABOUT PAGE</Typography>
      </Box>
    </motion.div>
  );
}
