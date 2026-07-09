import { Box, Typography } from "@mui/material";

export default function LosFooter() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 12,
        px: { xs: 2, md: 5 },
        py: 6,
        borderTop: "1px solid rgba(255,255,255,.08)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 4,
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: "2rem",
              fontWeight: 900,
              letterSpacing: "-.05em",
            }}
          >
            LOS
          </Typography>

          <Typography
            sx={{
              mt: 1,
              opacity: .65,
              maxWidth: 280,
            }}
          >
            Love. Obsessed. Scared.
            <br />
            Ethical clothing inspired by nightlife,
            expression, and community.
          </Typography>
        </Box>

        <Box>
          <Typography sx={{ fontWeight: 700, mb: 1 }}>
            Navigate
          </Typography>

          <Typography sx={{ opacity: .65 }}>
            Shop
          </Typography>

          <Typography sx={{ opacity: .65 }}>
            Collections
          </Typography>

          <Typography sx={{ opacity: .65 }}>
            About
          </Typography>

          <Typography sx={{ opacity: .65 }}>
            Community
          </Typography>
        </Box>

        <Box>
          <Typography sx={{ fontWeight: 700, mb: 1 }}>
            Connect
          </Typography>

          <Typography sx={{ opacity: .65 }}>
            Instagram
          </Typography>

          <Typography sx={{ opacity: .65 }}>
            TikTok
          </Typography>

          <Typography sx={{ opacity: .65 }}>
            Newsletter
          </Typography>
        </Box>
      </Box>

      <Typography
        sx={{
          mt: 6,
          opacity: .45,
          fontSize: ".8rem",
          letterSpacing: ".08em",
        }}
      >
        © 2026 LOVE. OBSESSED. SCARED. ALL RIGHTS RESERVED.
      </Typography>
    </Box>
  );
}