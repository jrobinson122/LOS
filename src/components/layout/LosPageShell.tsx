// src/components/layout/PageShell.tsx

import type { ReactNode } from "react";
import { styled } from "@mui/material/styles";
import LosFooter from "./LosFooter";

type PageShellProps = {
  children: ReactNode;
};

const ShellRoot = styled("div")(({ theme }) => ({
  position: "relative",
  minHeight: "100vh",
  color: theme.palette.text.primary,
  backgroundColor: "transparent",
}));

const MainContent = styled("main")(() => ({
  position: "relative",
  minHeight: "100vh",
  backgroundColor: "transparent",
}));

export default function PageShell({ children }: PageShellProps) {
  return (
    <ShellRoot>

      <MainContent>{children}</MainContent>

      <LosFooter />
    </ShellRoot>
  );
}