import {
  Bloom,
  ChromaticAberration,
  EffectComposer,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

export default function PostProcessing() {
  return (
    <EffectComposer>
      <Bloom
        intensity={1.55}
        luminanceThreshold={0.12}
        luminanceSmoothing={0.22}
      />

      <ChromaticAberration offset={[0.0012, 0.0012]} />

      <Noise opacity={0.08} blendFunction={BlendFunction.SOFT_LIGHT} />

      <Vignette eskil={false} offset={0.25} darkness={0.75} />
    </EffectComposer>
  );
}