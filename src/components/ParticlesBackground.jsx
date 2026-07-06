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
      const z = Math.random() * 40 - 35; // Distribute evenly from z=-35 to z=5
      const scale = (5 - z) / 5;
      
      // Spawn particles so they cover the exact visual size of the screen at their specific depth
      const x = (Math.random() - 0.5) * viewport.width * scale * 1.5;
      const y = (Math.random() - 0.5) * viewport.height * scale * 1.5;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      originalPositions[i * 3] = x;
      originalPositions[i * 3 + 1] = y;
      originalPositions[i * 3 + 2] = z;
    }
    return [positions, originalPositions];
  }, [count, viewport]);

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
      let px = posArray[idx];
      let py = posArray[idx + 1];
      let pz = posArray[idx + 2];
      
      let ox = originalPositions[idx];
      let oy = originalPositions[idx + 1];

      pz += 0.015;
      
      // If it passes the camera, respawn it at the far back with completely new random coordinates!
      if (pz > 5) {
        pz = -35;
        const scale = (5 - pz) / 5; // Scale at depth -35 is 8
        px = ox = (Math.random() - 0.5) * viewport.width * scale * 1.5;
        py = oy = (Math.random() - 0.5) * viewport.height * scale * 1.5;
        posArray[idx] = px;
        posArray[idx + 1] = py;
        originalPositions[idx] = ox;
        originalPositions[idx + 1] = oy;
      }
      
      posArray[idx + 2] = pz;

      const scaleFactor = (5 - pz) / 5;
      
      const projX = px / scaleFactor;
      const projY = py / scaleFactor;

      const dx = currentMousePos.current.x - projX;
      const dy = currentMousePos.current.y - projY;
      const distanceSq = dx * dx + dy * dy;
      
      const repulsionRadius = 2.5;

      if (distanceSq < repulsionRadius * repulsionRadius) {
        const distance = Math.sqrt(distanceSq);
        const force = (repulsionRadius - distance) / repulsionRadius;
        
        posArray[idx] -= (dx / distance) * force * 0.6 * scaleFactor;
        posArray[idx + 1] -= (dy / distance) * force * 0.6 * scaleFactor;
      }

      posArray[idx] += (ox - posArray[idx]) * 0.05;
      posArray[idx + 1] += (oy - posArray[idx + 1]) * 0.05;
    }

    positionsAttribute.needsUpdate = true;
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
