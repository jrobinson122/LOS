import { createTheme } from "@mui/material/styles";
import { losTheme } from "./themes";

export const muiTheme = createTheme({
    palette: {
        mode: "dark",

        primary: {
            main: losTheme.colors.text,
        },

        secondary: {
            main: losTheme.colors.accent,
        },

        background: {
            default: losTheme.colors.background,
            paper: losTheme.colors.surface,
        },

        text: {
            primary: losTheme.colors.text,
            secondary: losTheme.colors.textMuted,
        },
    },

    typography: {
        fontFamily: losTheme.typography.fontFamily,
    },

    components: {
        MuiCssBaseline: {
            styleOverrides: {
                html: {
                    minHeight: "100%",
                    backgroundColor: losTheme.colors.background,
                },

                body: {
                    minHeight: "100%",
                    margin: 0,
                    backgroundColor: losTheme.colors.background,
                    overflowX: "hidden",
                    overscrollBehaviorY: "none",
                },

                "#root": {
                    minHeight: "100vh",
                    backgroundColor: losTheme.colors.background,
                },

                "*": {
                    boxSizing: "border-box",
                },
            },
        },
    }
});