'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  OrbitControls, 
  Environment, 
  Float,
  MeshDistortMaterial,
  Sphere
} from '@react-three/drei';
import * as THREE from 'three';

// Detailed Plant Component
function DetailedPlant() {
  const groupRef = useRef<THREE.Group>(null);
  const leavesRef = useRef<THREE.Group>(null);
  const flowersRef = useRef<THREE.Group>(null);

  // Animate the plant
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
    if (leavesRef.current) {
      leavesRef.current.children.forEach((leaf, index) => {
        leaf.rotation.z = Math.sin(state.clock.elapsedTime * 1 + index * 0.5) * 0.2;
      });
    }
  });

  // Create detailed leaves
  const leaves = useMemo(() => {
    const leafGeometry = new THREE.PlaneGeometry(0.3, 0.8);
    const leafMaterial = new THREE.MeshLambertMaterial({
      color: new THREE.Color('#2d7a2d'),
      transparent: true,
      opacity: 0.9,
    });

    return Array.from({ length: 12 }, (_, i) => {
      const angle = (i / 12) * Math.PI * 2;
      const radius = 0.4 + Math.random() * 0.2;
      const height = 0.5 + Math.random() * 0.5;
      
      return (
        <mesh
          key={i}
          geometry={leafGeometry}
          material={leafMaterial}
          position={[
            Math.cos(angle) * radius,
            height,
            Math.sin(angle) * radius
          ]}
          rotation={[
            Math.PI / 2 + Math.random() * 0.3,
            angle + Math.random() * 0.5,
            Math.random() * Math.PI
          ]}
          scale={[0.8 + Math.random() * 0.4, 1, 1]}
        />
      );
    });
  }, []);

  // Create detailed flowers
  const flowers = useMemo(() => {
    const flowerGeometry = new THREE.SphereGeometry(0.05, 8, 6);
    const flowerMaterial = new THREE.MeshLambertMaterial({
      color: new THREE.Color('#01828c'),
      transparent: true,
      opacity: 0.8,
    });

    return Array.from({ length: 8 }, (_, i) => {
      const angle = (i / 8) * Math.PI * 2;
      const radius = 0.3;
      const height = 1.2 + Math.random() * 0.3;
      
      return (
        <mesh
          key={i}
          geometry={flowerGeometry}
          material={flowerMaterial}
          position={[
            Math.cos(angle) * radius,
            height,
            Math.sin(angle) * radius
          ]}
          scale={[1, 1 + Math.random() * 0.5, 1]}
        />
      );
    });
  }, []);

  // Create stem with texture
  const stemGeometry = new THREE.CylinderGeometry(0.02, 0.03, 1.5, 8);
  const stemMaterial = new THREE.MeshLambertMaterial({
    color: new THREE.Color('#1a401a'),
  });

  // Create soil/pot
  const potGeometry = new THREE.CylinderGeometry(0.4, 0.3, 0.3, 12);
  const potMaterial = new THREE.MeshLambertMaterial({
    color: new THREE.Color('#334155'),
  });

  return (
    <group ref={groupRef}>
      {/* Pot/Soil */}
      <mesh geometry={potGeometry} material={potMaterial} position={[0, -0.15, 0]} />
      
      {/* Stem */}
      <mesh geometry={stemGeometry} material={stemMaterial} position={[0, 0.6, 0]} />
      
      {/* Leaves */}
      <group ref={leavesRef}>
        {leaves}
      </group>
      
      {/* Flowers */}
      <group ref={flowersRef}>
        {flowers}
      </group>
      
      {/* Additional decorative elements */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <Sphere args={[0.02, 8, 6]} position={[0, 1.8, 0]}>
          <MeshDistortMaterial
            color="#01828c"
            speed={2}
            distort={0.3}
            radius={1}
          />
        </Sphere>
      </Float>
    </group>
  );
}

// Main Plant Scene Component
export default function Plant3D() {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-ayurvedic-green-50 via-ayurvedic-blue-50 to-ayurvedic-dark-100">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <pointLight position={[-10, -10, -10]} intensity={0.3} />
        
        {/* Environment */}
        <Environment preset="sunset" />
        
        {/* Plant */}
        <DetailedPlant />
        
        {/* Controls */}
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          maxPolarAngle={Math.PI / 2}
          minDistance={2}
          maxDistance={10}
        />
      </Canvas>
      
      {/* Overlay text */}
      <div className="absolute top-10 left-10 text-ayurvedic-dark-800">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-ayurvedic-green-600 to-ayurvedic-blue-500 bg-clip-text text-transparent">
          Ayurvedic Healing
        </h1>
        <p className="text-lg text-ayurvedic-dark-600">
          Discover the power of natural medicine
        </p>
      </div>
    </div>
  );
} 