import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { CartProvider } from "./Contexts/CartContext";

const theme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: 'transparent'
        },
    },
    typography: {
        fontFamily: "Impact, sans-serif",
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: 'transparent',
                },
            },
        },
    },
})
const rootElement = document.getElementById("root") as HTMLElement;

const root = ReactDOM.createRoot(rootElement);
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CartProvider>
                <CssBaseline />
                <App />
            </CartProvider>
        </ThemeProvider>
    </React.StrictMode>

);