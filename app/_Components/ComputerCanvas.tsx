"use client";
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import Loader from "./Loader";

const Computer = () => {
  const computer = useGLTF("/computer_and_laptop/scene.gltf");

  return (
    <mesh>
      {/* Ambient foundation light */}
      <ambientLight intensity={0.2} color="#ffffff" />

      {/* Hemisphere for natural sky/ground lighting */}
      <hemisphereLight
        intensity={0.4}
        color="#87ceeb" // Sky color
        groundColor="#362d1d" // Warm ground tint
      />

      {/* Main key light - positioned to create depth */}
      <pointLight
        position={[5, 8, 5]}
        intensity={300}
        color="#fff5e6"
        decay={2}
        distance={20}
      />

      {/* Fill light to soften shadows */}
      <pointLight
        position={[-4, 2, -3]}
        intensity={100}
        color="#d6eaff"
        decay={2}
        distance={15}
      />

      {/* Rim light for edge definition */}
      <spotLight
        position={[-8, 6, -5]}
        angle={0.4} // Wider angle for better coverage
        penumbra={0.5}
        intensity={80}
        castShadow
        shadow-mapSize={1024}
        shadow-bias={-0.0001}
      />

      <primitive
        object={computer.scene}
        scale={0.15}
        position={[0, -3.25, 1.0]}
        rotation={[0, -0.5, 0]}
      />
    </mesh>
  );
};

const ComputerCanvas = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-10 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      <Canvas
        frameloop="demand"
        shadows
        camera={{ position: [20, 3, 8], fov: 30 }}
        gl={{ preserveDrawingBuffer: true }}
        style={{
          width: "100%",
          height: "100%",
          display: "block", // Important for proper sizing
        }}
      >
        <Suspense fallback={<Loader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            autoRotate
            autoRotateSpeed={1}
          />
          <Computer />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default React.memo(ComputerCanvas);
