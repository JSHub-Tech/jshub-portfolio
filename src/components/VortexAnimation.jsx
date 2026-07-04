import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, ContactShadows, Stars, useTexture } from '@react-three/drei';

const GlowingRing = ({ radius, tube, color, speed, rotationAxis, ...props }) => {
  const meshRef = useRef();
  
  useFrame((state, delta) => {
    if (rotationAxis === 'x') meshRef.current.rotation.x += speed * delta;
    if (rotationAxis === 'y') meshRef.current.rotation.y += speed * delta;
    if (rotationAxis === 'z') meshRef.current.rotation.z += speed * delta;
  });

  return (
    <mesh ref={meshRef} {...props}>
      <torusGeometry args={[radius, tube, 32, 100]} />
      <meshStandardMaterial 
        color={color} 
        emissive={color} 
        emissiveIntensity={3} 
        toneMapped={false} 
      />
    </mesh>
  );
};

// Represents the floating abstract panels around the screen
const FloatingPanel = ({ position, color, args }) => (
  <Float speed={3} rotationIntensity={1} floatIntensity={2} position={position}>
    <mesh castShadow>
      <boxGeometry args={args} />
      <meshPhysicalMaterial 
        color="#1D2024" 
        emissive={color}
        emissiveIntensity={0.2}
        transparent={true} 
        opacity={0.8} 
        roughness={0.2} 
        metalness={0.8}
        clearcoat={1}
      />
    </mesh>
  </Float>
);

// Loads the user's logo and displays it on a 3D plane
const LogoMesh = () => {
  const texture = useTexture('/WebsiteLogo.png');
  return (
    <mesh position={[0, 0, 0.11]}>
      <planeGeometry args={[2.5, 2.5]} />
      <meshBasicMaterial map={texture} transparent={true} />
    </mesh>
  );
};

const GlassScreen = () => {
  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={1}>
      <mesh castShadow>
        <boxGeometry args={[5, 3.2, 0.1]} />
        <meshPhysicalMaterial 
          color="#111111" 
          transparent={true} 
          opacity={0.6} 
          roughness={0.1} 
          metalness={0.9}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
        <React.Suspense fallback={null}>
          <LogoMesh />
        </React.Suspense>
      </mesh>
    </Float>
  );
};

const VortexAnimation = () => {
  return (
    <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute w-[80%] h-[80%] bg-accent-cyan/10 rounded-full blur-[100px] z-0 pointer-events-none"></div>

      {/* The 3D Canvas */}
      <div className="w-full h-full z-10 cursor-grab active:cursor-grabbing">
        <Canvas camera={{ position: [0, 0, 9], fov: 45 }}>
          
          <color attach="background" args={['#1A1D21']} />
          
          {/* Lighting to make the materials look like shiny glass/metal */}
          <ambientLight intensity={2} />
          <directionalLight position={[10, 10, 5]} intensity={3} color="#00E5FF" />
          <directionalLight position={[-10, -10, 5]} intensity={3} color="#D32F2F" />
          
          {/* Floating space dust/stars in the background */}
          <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />

          {/* Orbiting Neon Rings */}
          <group rotation={[Math.PI / 3, 0, 0]}>
            <GlowingRing radius={3.5} tube={0.03} color="#00E5FF" speed={1} rotationAxis="z" />
            <GlowingRing radius={2.8} tube={0.04} color="#D32F2F" speed={-1.5} rotationAxis="z" />
            <GlowingRing radius={2.0} tube={0.02} color="#D9A01B" speed={2} rotationAxis="z" />
          </group>

          {/* The Interactive Glass Screen in the Center */}
          <GlassScreen />
          
          {/* Floating UI Elements */}
          <FloatingPanel position={[3.5, 1.5, 1]} color="#00E5FF" args={[1.5, 1, 0.1]} />
          <FloatingPanel position={[-3.5, -1.5, 1]} color="#D9A01B" args={[1, 1.5, 0.1]} />
          <FloatingPanel position={[3, -2, -1]} color="#D32F2F" args={[1.2, 0.8, 0.1]} />

          {/* Floor Shadow */}
          <ContactShadows position={[0, -4, 0]} opacity={0.8} scale={20} blur={2} far={4} color="#000000" />
          
          {/* Camera Controls */}
          <OrbitControls 
            enableZoom={false} 
            autoRotate 
            autoRotateSpeed={1} 
            maxPolarAngle={Math.PI / 2 + 0.2} 
            minPolarAngle={Math.PI / 2 - 0.5} 
          />
        </Canvas>
      </div>

    </div>
  );
};

export default VortexAnimation;
