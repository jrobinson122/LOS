// src/pages/Homepage.tsx

import { Box, Button, Typography } from "@mui/material";
import LosPageShell from "../components/layout/LosPageShell";

export default function Homepage() {
  return (
    <LosPageShell>
      <Box
        component="section"
        sx={{
          minHeight: "calc(100vh - 96px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          px: { xs: 2, md: 6 },
          py: { xs: 8, md: 12 },
          position: "relative",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "4rem", sm: "6rem", md: "10rem", lg: "13rem" },
            fontWeight: 900,
            lineHeight: 0.82,
            letterSpacing: "-0.08em",
            textTransform: "uppercase",
            maxWidth: 1100,
          }}
        >
          Love.
          <br />
          Obsessed.
          <br />
          Scared.
        </Typography>

        <Typography
          sx={{
            mt: 3,
            maxWidth: 460,
            fontSize: { xs: "1rem", md: "1.15rem" },
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "rgba(245,241,232,0.72)",
          }}
        >
          Ethical clothing for the in-between hours.
        </Typography>

        <Box sx={{ display: "flex", gap: 2, mt: 4, flexWrap: "wrap" }}>
          <Button
            variant="contained"
            sx={{
              borderRadius: 0,
              px: 4,
              py: 1.4,
              bgcolor: "#f5f1e8",
              color: "#050505",
              fontWeight: 800,
              letterSpacing: "0.12em",
              "&:hover": {
                bgcolor: "#ffffff",
              },
            }}
          >
            Shop Afterhours
          </Button>

          <Button
            variant="outlined"
            sx={{
              borderRadius: 0,
              px: 4,
              py: 1.4,
              color: "#f5f1e8",
              borderColor: "rgba(245,241,232,0.5)",
              fontWeight: 800,
              letterSpacing: "0.12em",
              "&:hover": {
                borderColor: "#f5f1e8",
                bgcolor: "rgba(245,241,232,0.08)",
              },
            }}
          >
            Explore Collection
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          borderTop: "1px solid rgba(245,241,232,0.18)",
          borderBottom: "1px solid rgba(245,241,232,0.18)",
          py: 2,
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "1rem", md: "1.4rem" },
            fontWeight: 800,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(245,241,232,0.86)",
          }}
        >
          Love • Community • Nightlife • Expression • Sustainable • Queer Owned
          • Love • Community • Nightlife • Expression • Sustainable • Queer
          Owned
        </Typography>
      </Box>

      <Box
        component="section"
        sx={{
          px: { xs: 2, md: 6 },
          py: { xs: 8, md: 12 },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "2.8rem", md: "6rem" },
            fontWeight: 900,
            lineHeight: 0.9,
            letterSpacing: "-0.06em",
            textTransform: "uppercase",
          }}
        >
          Drop 01
        </Typography>

        <Typography
          sx={{
            mt: 2,
            maxWidth: 520,
            color: "rgba(245,241,232,0.68)",
            fontSize: "1rem",
            letterSpacing: "0.04em",
          }}
        >
          A first release of hats, symbols, and late-night uniforms built around
          queer community, sustainable choices, and loud self-expression.
        </Typography>
      </Box>
    </LosPageShell>
  );
}