import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

const navItems = [
  "Shop",
  "Collections",
  "About",
  "Community",
];

export default function LosNavbar() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "transparent",
        backgroundImage: "none",
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          px: { xs: 2, md: 5 },
          py: 2,
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Typography
          sx={{
            fontSize: "1.5rem",
            fontWeight: 900,
            letterSpacing: "-0.05em",
            textTransform: "uppercase",
            cursor: "pointer",
          }}
        >
          LOS
        </Typography>

        {/* Navigation */}
        <Box
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },
            gap: 5,
          }}
        >
          {navItems.map((item) => (
            <Button
              key={item}
              disableRipple
              sx={{
                color: "inherit",
                p: 0,
                minWidth: 0,
                fontSize: ".9rem",
                fontWeight: 700,
                letterSpacing: ".18em",
                textTransform: "uppercase",
                "&:hover": {
                  bgcolor: "transparent",
                  opacity: .7,
                },
              }}
            >
              {item}
            </Button>
          ))}
        </Box>

        {/* Right Side */}
        <Box
          sx={{
            display: "flex",
            gap: 3,
            alignItems: "center",
          }}
        >
          <Button
            disableRipple
            sx={{
              color: "inherit",
              minWidth: 0,
              p: 0,
              fontWeight: 700,
              letterSpacing: ".12em",
            }}
          >
            Search
          </Button>

          <Button
            disableRipple
            sx={{
              color: "inherit",
              minWidth: 0,
              p: 0,
              fontWeight: 700,
              letterSpacing: ".12em",
            }}
          >
            Cart
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}