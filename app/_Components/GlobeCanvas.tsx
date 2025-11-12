"use client";
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import Loader from "./Loader";

const Globe = () => {
  const earth = useGLTF("/airports_around_the_world/scene.gltf");

  return (
    <mesh>
      <ambientLight intensity={0.8} color="#ffffff" />
      <hemisphereLight intensity={0.4} color="#87ceeb" groundColor="#362d1d" />
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
      <spotLight
        position={[-8, 6, -5]}
        angle={0.4}
        penumbra={0.5}
        intensity={80}
        castShadow
        shadow-mapSize={1024}
        shadow-bias={-0.0001}
      />

      {/* FIXED: position and rotation are arrays, not hyphenated props */}
      <primitive
        object={earth.scene}
        scale={50}
        position={[0, -1.25, 1.0]}
        rotation={[0, -0.5, 0]}
      />
    </mesh>
  );
};

const GlobeCanvas = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-blue-500/10 to-purple-600/10 rounded-2xl">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-sm">Loading Globe...</p>
        </div>
      </div>
    );
  }

  return (
    // FIXED: Added explicit height and flex display
    <div className="w-full h-full min-h-[400px] lg:min-h-[500px] rounded-2xl flex justify-center items-center">
      <Canvas
        shadows
        frameloop="demand"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true, antialias: true }}
        camera={{
          fov: 35,
          near: 1,
          far: 45,
          position: [10, 28, 8],
        }}
        style={{
          // width: "100%",
          // height: "100%",
          display: "block",
          minHeight: "100%",
        }}
      >
        <Suspense fallback={<Loader />}>
          <OrbitControls
            autoRotate
            autoRotateSpeed={0.5}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Globe />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default GlobeCanvas;
