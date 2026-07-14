import { Float } from "@react-three/drei";

export default function NeonLights() {
  return (
    <>
      <ambientLight intensity={0.35} />

      <pointLight position={[2, 1, 2]} intensity={22} color="#ff3b8d" />
      <pointLight position={[-3, -1, 1]} intensity={14} color="#74f7ff" />

      <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
        <mesh position={[1.6, 0.2, -1]}>
          <sphereGeometry args={[1.2, 64, 64]} />
          <meshStandardMaterial
            color="#ff3b8d"
            emissive="#ff3b8d"
            emissiveIntensity={2.2}
            roughness={0.3}
            metalness={0.2}
            transparent
            opacity={0.42}
          />
        </mesh>
      </Float>

      <Float speed={1.1} rotationIntensity={0.4} floatIntensity={1}>
        <mesh position={[-1.8, -0.6, -1.4]}>
          <sphereGeometry args={[1.1, 64, 64]} />
          <meshStandardMaterial
            color="#74f7ff"
            emissive="#74f7ff"
            emissiveIntensity={1.7}
            roughness={0.4}
            transparent
            opacity={0.32}
          />
        </mesh>
      </Float>
    </>
  );
}