import { styled } from "@mui/material/styles";
import SoftAurora from "./SoftAurora";

const BackgroundRoot = styled("div")({
  position: "fixed",
  inset: 0,
  width: "100vw",
  height: "100vh",
  overflow: "hidden",
  backgroundColor: "#030005",
});

export default function BackgroundScene() {
  return (
    <BackgroundRoot>
      <SoftAurora
        speed={0.4}
        scale={1.5}
        brightness={1}
        color1="#f7f7f7"
        color2="#e100ff"
        noiseFrequency={2.5}
        noiseAmplitude={1}
        bandHeight={0.5}
        bandSpread={1}
        octaveDecay={0.1}
        layerOffset={0}
        colorSpeed={1}
        enableMouseInteraction
        mouseInfluence={0.25}
      />
    </BackgroundRoot>
  );
}