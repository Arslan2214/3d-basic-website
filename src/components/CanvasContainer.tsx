import { Canvas } from "@react-three/fiber";
import { Jordan } from "./Jordan";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
// without registering scrolltriiger the model will break

export const CanvasContainer = () => {
  return (
    <Canvas>
      <OrbitControls
        enablePan={false}
        enableRotate={false}
        enableZoom={false}
      />
      <Suspense fallback={"Loading..."}>
        <Jordan />
      </Suspense>
    </Canvas>
  );
};
