import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, Stars, PerspectiveCamera, useTexture } from '@react-three/drei';
import * as THREE from 'three';

const Logo = () => {
  const texture = useTexture('/WebsiteLogo.png');
  return (
    <mesh position={[0, 0, 1.3]} scale={[0.8, 0.8, 0.8]}>
      <planeGeometry args={[1, 1]} />
      <meshStandardMaterial map={texture} transparent emissive="white" emissiveIntensity={0.2} emissiveMap={texture} />
    </mesh>
  );
};

const GlowingCore = () => {
  return (
    <Float speed={0.8} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere args={[1.5, 32, 32]}>
        <meshStandardMaterial
          color="#D32F2F"
          wireframe
          transparent
          opacity={0.15}
          emissive="#D32F2F"
          emissiveIntensity={0.5}
        />
      </Sphere>
      <Logo />
    </Float>
  );
};

const Particles = () => {
  const points = useRef();
  useFrame((state, delta) => {
    if (points.current) {
      points.current.rotation.y -= delta * 0.02;
      points.current.rotation.x -= delta * 0.01;
    }
  });
  return (
    <group ref={points}>
      <Stars radius={10} depth={50} count={1500} factor={4} saturation={1} fade speed={1} />
    </group>
  );
};

const OrbitRings = () => {
  const groupRef = useRef();
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += delta * 0.08;
      groupRef.current.rotation.y += delta * 0.06;
    }
  });
  return (
    <group ref={groupRef}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.2, 0.02, 16, 100]} />
        <meshStandardMaterial color="#00E5FF" emissive="#00E5FF" emissiveIntensity={1} />
      </mesh>
      <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <torusGeometry args={[2.7, 0.015, 16, 100]} />
        <meshStandardMaterial color="#D9A01B" emissive="#D9A01B" emissiveIntensity={1} />
      </mesh>
      <mesh rotation={[-Math.PI / 3, -Math.PI / 4, 0]}>
        <torusGeometry args={[3.2, 0.01, 16, 100]} />
        <meshStandardMaterial color="#D32F2F" emissive="#D32F2F" emissiveIntensity={1} />
      </mesh>
    </group>
  );
};

const FloatingGeometry = ({ position, rotation, color, scale }) => {
  const meshRef = useRef();
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.3;
      meshRef.current.rotation.y += delta * 0.4;
    }
  });

  return (
    <Float speed={2} floatIntensity={1.5} position={position} rotation={rotation}>
      <mesh ref={meshRef} scale={scale}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color={color} wireframe transparent opacity={0.6} emissive={color} emissiveIntensity={0.8} />
      </mesh>
    </Float>
  );
};

const VortexAnimation = () => {
  return (
    <div className="relative w-full max-w-[600px] aspect-square select-none">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={45} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#00E5FF" />
        <pointLight position={[-10, -10, -10]} intensity={2} color="#D32F2F" />
        
        <GlowingCore />
        <Particles />
        <OrbitRings />
        
        {/* Floating tech elements */}
        <FloatingGeometry position={[2.2, 2.0, -1.5]} rotation={[0, 0, 0]} color="#00E5FF" scale={0.3} />
        <FloatingGeometry position={[-2.0, -2.0, -1]} rotation={[0, 0, 0]} color="#D9A01B" scale={0.25} />

      </Canvas>
    </div>
  );
};

export default VortexAnimation;
