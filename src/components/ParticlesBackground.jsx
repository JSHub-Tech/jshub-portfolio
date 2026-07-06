import React, { useRef, useMemo, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const ParticlesBackground = ({ count = 4000 }) => {
  const mesh = useRef();
  const { viewport } = useThree();
  const targetMousePos = useRef(new THREE.Vector2(0, 0));
  const currentMousePos = useRef(new THREE.Vector2(0, 0));

  useEffect(() => {
    const handleMouseMove = (event) => {
      targetMousePos.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      targetMousePos.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const [positions, originalPositions] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const originalPositions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 50;
      const y = (Math.random() - 0.5) * 50;
      const z = (Math.random() - 0.5) * 35 - 5; // spread further back
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      originalPositions[i * 3] = x;
      originalPositions[i * 3 + 1] = y;
      originalPositions[i * 3 + 2] = z;
    }
    return [positions, originalPositions];
  }, [count]);

  const circleTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const context = canvas.getContext('2d');
    context.beginPath();
    context.arc(16, 16, 14, 0, 2 * Math.PI, false);
    context.fillStyle = 'white';
    context.fill();
    return new THREE.CanvasTexture(canvas);
  }, []);

  useFrame(() => {
    const mouseX = (targetMousePos.current.x * viewport.width) / 2;
    const mouseY = (targetMousePos.current.y * viewport.height) / 2;

    currentMousePos.current.x += (mouseX - currentMousePos.current.x) * 0.15;
    currentMousePos.current.y += (mouseY - currentMousePos.current.y) * 0.15;

    const positionsAttribute = mesh.current.geometry.attributes.position;
    const posArray = positionsAttribute.array;

    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      const px = posArray[idx];
      const py = posArray[idx + 1];
      let pz = posArray[idx + 2];
      
      const ox = originalPositions[idx];
      const oy = originalPositions[idx + 1];

      // Slowly drift towards the camera
      pz += 0.015;
      // If it passes the camera (z > 5), reset it to the far back
      if (pz > 5) {
        pz = -35;
      }
      posArray[idx + 2] = pz;

      const dx = currentMousePos.current.x - px;
      const dy = currentMousePos.current.y - py;
      const distanceSq = dx * dx + dy * dy;
      
      const repulsionRadius = 6;

      if (distanceSq < repulsionRadius * repulsionRadius) {
        const distance = Math.sqrt(distanceSq);
        const force = (repulsionRadius - distance) / repulsionRadius;
        
        posArray[idx] -= (dx / distance) * force * 0.4;
        posArray[idx + 1] -= (dy / distance) * force * 0.4;
      }

      posArray[idx] += (ox - posArray[idx]) * 0.05;
      posArray[idx + 1] += (oy - posArray[idx + 1]) * 0.05;
    }

    positionsAttribute.needsUpdate = true;
    
    // Add a slight tilt rotation to the whole system
    mesh.current.rotation.y = Math.sin(Date.now() * 0.0001) * 0.1;
    mesh.current.rotation.x = Math.cos(Date.now() * 0.0001) * 0.1;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.12}
        map={circleTexture}
        color="#ffffff"
        transparent
        opacity={0.6}
        sizeAttenuation={true}
        alphaTest={0.01}
      />
    </points>
  );
};

export default ParticlesBackground;
