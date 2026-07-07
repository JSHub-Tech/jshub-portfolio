import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, useTexture, OrbitControls, Decal } from '@react-three/drei';
import * as THREE from 'three';

const OrbitNode = ({ ringRotation, radius, color, speed, size }) => {
  const moonGroupRef = useRef();

  useFrame((state) => {
    if (moonGroupRef.current) {
      moonGroupRef.current.rotation.z = state.clock.getElapsedTime() * speed;
    }
  });

  return (
    <group rotation={ringRotation}>
      {/* Made the rings opaque. This forces the 3D engine to properly hide them behind the planet. */}
      <mesh>
        <torusGeometry args={[radius, 0.015, 16, 100]} />
        <meshBasicMaterial color={color} depthTest={true} depthWrite={true} />
      </mesh>
      
      <group ref={moonGroupRef}>
        <mesh position={[radius, 0, 0]}>
          <sphereGeometry args={[size, 16, 16]} />
          <meshBasicMaterial color={color} depthTest={true} depthWrite={true} />
        </mesh>
      </group>
    </group>
  );
};

const OrbitRings = () => {
  return (
    <group>
      <OrbitNode ringRotation={[Math.PI / 2, 0, 0]} radius={3.2} color="#00E5FF" speed={0.8} size={0.08} />
      <OrbitNode ringRotation={[Math.PI / 3, Math.PI / 4, 0]} radius={3.8} color="#D9A01B" speed={0.5} size={0.1} />
      <OrbitNode ringRotation={[-Math.PI / 3, -Math.PI / 4, 0]} radius={4.4} color="#D32F2F" speed={0.3} size={0.06} />
    </group>
  );
};

const LogoPlanet = () => {
  const texture = useTexture('/WebsiteLogo.png');
  
  // Genius trick: We clone the logo texture, zoom in on the top-left pixel (which is the solid background color),
  // and wrap that exact color around the entire ball. This guarantees a 100% flawless color match!
  const bgTexture = React.useMemo(() => {
    const clone = texture.clone();
    clone.repeat.set(0.01, 0.01);
    clone.offset.set(0.05, 0.95);
    clone.needsUpdate = true;
    return clone;
  }, [texture]);

  const sphereRef = useRef();

  useFrame((state, delta) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <Float speed={1.5} floatIntensity={0.5} rotationIntensity={0}>
      <mesh ref={sphereRef}>
        <sphereGeometry args={[2.2, 64, 64]} />
        
        {/* Ball uses the exact background color from the image */}
        <meshStandardMaterial 
          map={bgTexture} 
          roughness={0.4} 
          metalness={0.5} 
        />
        
        {/* Logo pasted 4 times around the equator. Matching roughness and metalness ensures it blends seamlessly. */}
        <Decal position={[0, 0, 2.2]} rotation={[0, 0, 0]} scale={[2, 2, 2]}>
          <meshStandardMaterial map={texture} roughness={0.4} metalness={0.5} polygonOffset polygonOffsetFactor={-1} />
        </Decal>
        <Decal position={[0, 0, -2.2]} rotation={[0, Math.PI, 0]} scale={[2, 2, 2]}>
          <meshStandardMaterial map={texture} roughness={0.4} metalness={0.5} polygonOffset polygonOffsetFactor={-1} />
        </Decal>
        <Decal position={[2.2, 0, 0]} rotation={[0, Math.PI / 2, 0]} scale={[2, 2, 2]}>
          <meshStandardMaterial map={texture} roughness={0.4} metalness={0.5} polygonOffset polygonOffsetFactor={-1} />
        </Decal>
        <Decal position={[-2.2, 0, 0]} rotation={[0, -Math.PI / 2, 0]} scale={[2, 2, 2]}>
          <meshStandardMaterial map={texture} roughness={0.4} metalness={0.5} polygonOffset polygonOffsetFactor={-1} />
        </Decal>

      </mesh>
      
      <OrbitRings />
    </Float>
  );
};

const VortexAnimation = () => {
  return (
    <div className="relative w-full lg:w-[120%] lg:-ml-[10%] aspect-square select-none cursor-grab active:cursor-grabbing">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 11.5]} fov={45} />
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
        
        {/* Boosted ambient light to make the planet even brighter */}
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 5, 5]} intensity={2.5} color="#ffffff" />
        <directionalLight position={[-5, -5, -5]} intensity={1.5} color="#00E5FF" />
        <pointLight position={[0, 5, -5]} intensity={2.5} color="#D32F2F" />
        
        <LogoPlanet />
      </Canvas>
    </div>
  );
};

export default VortexAnimation;
