import { Cloud } from "@react-three/drei";

export default function Smoke() {
  return (
    <>
      <Cloud
        position={[1.2, 0.15, -2]}
        scale={[7, 2, 2]}
        opacity={0.35}
        speed={0.12}
        segments={28}
        color="#ff8fd0"
      />

      <Cloud
        position={[-1.5, -0.3, -2.5]}
        scale={[8, 2.4, 2]}
        opacity={0.22}
        speed={0.1}
        segments={24}
        color="#74f7ff"
      />
    </>
  );
}