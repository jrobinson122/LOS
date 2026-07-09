import { Box, Typography } from "@mui/material";
import LosPageShell from "../components/layout/LosPageShell";

export default function About() {
  return (
    <LosPageShell>
      <Box
        sx={{
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          px: { xs: 3, md: 8 },
          py: 10,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "3rem", md: "6rem" },
            fontWeight: 900,
            textTransform: "uppercase",
            letterSpacing: "-0.05em",
          }}
        >
          About
        </Typography>

        <Typography
          sx={{
            mt: 3,
            maxWidth: 600,
            color: "text.secondary",
          }}
        >
          This page will tell the story behind Love. Obsessed. Scared.
        </Typography>
      </Box>
    </LosPageShell>
  );
}