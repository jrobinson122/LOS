import { Sparkles } from "@react-three/drei";

export default function Particles() {
  return (
    <Sparkles
      count={160}
      scale={[8, 4, 3]}
      size={3.5}
      speed={0.28}
      color="#ffffff"
      opacity={0.65}
    />
  );
}