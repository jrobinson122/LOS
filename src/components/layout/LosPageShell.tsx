// src/components/layout/PageShell.tsx

import { Box } from "@mui/material";
import LosNavbar from "./LosNavbar";
import LosFooter from "./LosFooter";

type PageShellProps = {
  children: React.ReactNode;
};

export default function PageShell({ children }: PageShellProps) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        position: "relative",
        background: "transparent",
        color: "text.primary",
      }}
    >
      <LosNavbar />

      <Box
        component="main"
        sx={{
          background: "transparent",
        }}
      >
        {children}
      </Box>

      <LosFooter />
    </Box>
  );
}