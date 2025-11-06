import { Environment, OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber";
import Space from "../Components/Space";
import { Suspense } from "react";

export const Hero = () => {
  return (
    <section className="w-full h-screen fixed top-0 left-0 -z-10">
      <Canvas className="w-full h-full">
        <ambientLight intensity={0.5} />
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
        <Suspense fallback={null}>
          <Space />
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>
    </section>
  )
}