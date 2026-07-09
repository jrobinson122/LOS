import { Box } from "@mui/material";

export default function NoiseOverlay() {
    return (
        <Box
            sx={{
                position: "fixed",
                inset: 0,
                pointerEvents: "none",
                opacity: .08,
                mixBlendMode: "soft-light",
                backgroundImage:
                    "url('https://grainy-gradients.vercel.app/noise.svg')",
                zIndex: 20,
            }}
        />
    );
}