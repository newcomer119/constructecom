"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";

const Model = () => {
  const gltf = useGLTF("/base_basic_shaded.glb");
  return <primitive object={gltf.scene} />;
};

const Product3DViewer = () => {
  return (
    <div className="w-full h-full rounded-xl overflow-hidden bg-slate-900/90">
      <Canvas
        camera={{ position: [2, 2, 4], fov: 45 }}
        shadows
        className="w-full h-full"
      >
        <color attach="background" args={["#020617"]} />
        <ambientLight intensity={0.6} />
        <directionalLight
          intensity={1.2}
          position={[4, 6, 4]}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <Suspense
          fallback={
            <mesh>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color="#4b5563" />
            </mesh>
          }
        >
          <Model />
          <Environment preset="studio" />
        </Suspense>
        <OrbitControls
          enablePan
          enableZoom
          enableRotate
          maxDistance={10}
          minDistance={1.5}
        />
      </Canvas>
    </div>
  );
};

export default Product3DViewer;


