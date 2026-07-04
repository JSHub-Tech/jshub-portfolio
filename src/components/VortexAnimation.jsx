import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, useTexture, Stars, MeshTransmissionMaterial, Environment } from '@react-three/drei';
import * as THREE from 'three';

// ── Seamless infinite orbit ring with glow ───────────────────────────────────
const OrbitRing = ({ rx, rz, tube, color, speed, rotX, rotZ, phase }) => {
  const ref = useRef();
  const curve = useMemo(() => {
    const pts = Array.from({ length: 129 }, (_, i) => {
      const a = (i / 128) * Math.PI * 2;
      return new THREE.Vector3(Math.cos(a) * rx, Math.sin(a) * 0.18, Math.sin(a) * rz);
    });
    return new THREE.CatmullRomCurve3(pts, true);
  }, [rx, rz]);
  const geo = useMemo(() => new THREE.TubeGeometry(curve, 200, tube, 6, true), [curve, tube]);

  useFrame(({ clock }) => {
    ref.current.rotation.z = clock.getElapsedTime() * speed + phase;
  });

  return (
    <group rotation={[rotX, 0, rotZ]}>
      <mesh ref={ref} geometry={geo}>
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={6} toneMapped={false} transparent opacity={0.95} />
      </mesh>
    </group>
  );
};

// ── Dot that travels along an orbit infinitely ───────────────────────────────
const TravelingDot = ({ rx, rz, color, speed, rotX, rotZ, phase }) => {
  const ref = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + phase;
    const cosT = Math.cos(t);
    const sinT = Math.sin(t);
    // Apply rotation manually
    const x = cosT * rx;
    const y = sinT * 0.18;
    const z = sinT * rz;
    // Apply rotX around x-axis
    const y2 = y * Math.cos(rotX) - z * Math.sin(rotX);
    const z2 = y * Math.sin(rotX) + z * Math.cos(rotX);
    // Apply rotZ around z-axis  
    const x3 = x * Math.cos(rotZ) - y2 * Math.sin(rotZ);
    const y3 = x * Math.sin(rotZ) + y2 * Math.cos(rotZ);
    ref.current.position.set(x3, y3, z2);
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.09, 8, 8]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={12} toneMapped={false} />
    </mesh>
  );
};

// ── Beautiful glass screen panel with fake UI content ────────────────────────
const GlassPanel = ({ position, rotation, width, height, color, speed }) => {
  const groupRef = useRef();
  const phase = useRef(Math.random() * Math.PI * 2);
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    groupRef.current.position.y = position[1] + Math.sin(t * speed + phase.current) * 0.18;
    groupRef.current.rotation.y = rotation[1] + Math.sin(t * 0.3 + phase.current) * 0.05;
  });

  // Fake UI bars inside the panel
  const bars = [0.6, 0.85, 0.45, 0.7, 0.55];

  return (
    <group ref={groupRef} position={position} rotation={rotation}>
      {/* Glass body */}
      <mesh>
        <boxGeometry args={[width, height, 0.04]} />
        <MeshTransmissionMaterial
          backside
          samples={4}
          thickness={0.5}
          roughness={0.03}
          transmission={0.96}
          ior={1.5}
          chromaticAberration={0.06}
          anisotropy={0.1}
          distortion={0.1}
          distortionScale={0.2}
          temporalDistortion={0.02}
          color={color}
          attenuationDistance={0.5}
          attenuationColor={color}
        />
      </mesh>

      {/* Glowing edge frame */}
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(width, height, 0.04)]} />
        <lineBasicMaterial color={color} transparent opacity={0.7} />
      </lineSegments>

      {/* Panel header line */}
      <mesh position={[0, height / 2 - 0.15, 0.03]}>
        <planeGeometry args={[width - 0.1, 0.04]} />
        <meshBasicMaterial color={color} transparent opacity={0.6} />
      </mesh>

      {/* Fake content bars */}
      {bars.map((w, i) => (
        <mesh key={i} position={[-(width / 2 - 0.1) + (w * (width - 0.2)) / 2, height / 2 - 0.35 - i * 0.18, 0.03]}>
          <planeGeometry args={[w * (width - 0.2), 0.055]} />
          <meshBasicMaterial color={color} transparent opacity={0.25} />
        </mesh>
      ))}

      {/* Corner accent dots */}
      {[[-1, 1], [1, 1], [-1, -1], [1, -1]].map(([sx, sy], i) => (
        <mesh key={i} position={[sx * (width / 2 - 0.08), sy * (height / 2 - 0.08), 0.03]}>
          <circleGeometry args={[0.04, 8]} />
          <meshBasicMaterial color={color} transparent opacity={0.9} />
        </mesh>
      ))}
    </group>
  );
};

// ── Wireframe floating cube ──────────────────────────────────────────────────
const WireframeCube = ({ position, size, color, rotSpeed }) => {
  const ref = useRef();
  const phase = useRef(Math.random() * Math.PI * 2);
  useFrame(({ clock }) => {
    ref.current.rotation.x += rotSpeed[0];
    ref.current.rotation.y += rotSpeed[1];
    ref.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * 0.8 + phase.current) * 0.15;
  });
  return (
    <group ref={ref} position={position}>
      <mesh>
        <boxGeometry args={[size, size, size]} />
        <meshPhysicalMaterial color="#050810" transparent opacity={0.3} roughness={0.1} metalness={0.9} emissive={color} emissiveIntensity={0.2} />
      </mesh>
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(size, size, size)]} />
        <lineBasicMaterial color={color} transparent opacity={1} />
      </lineSegments>
    </group>
  );
};

// ── JSHub logo in the center ─────────────────────────────────────────────────
const CenterLogo = () => {
  const texture = useTexture('/WebsiteLogo.png');
  const ref = useRef();
  const glowRef = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    ref.current.position.y = Math.sin(t * 0.7) * 0.12;
    glowRef.current.material.opacity = 0.12 + Math.sin(t * 1.2) * 0.06;
  });

  return (
    <group ref={ref}>
      {/* Pulsing glow platform */}
      <mesh ref={glowRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
        <circleGeometry args={[1.5, 64]} />
        <meshStandardMaterial color="#D32F2F" emissive="#D32F2F" emissiveIntensity={1} transparent opacity={0.12} toneMapped={false} />
      </mesh>
      {/* Logo */}
      <mesh>
        <planeGeometry args={[2.4, 2.4]} />
        <meshBasicMaterial map={texture} transparent alphaTest={0.05} depthWrite={false} />
      </mesh>
    </group>
  );
};

// ── Full 3D Scene ────────────────────────────────────────────────────────────
const Scene = () => {
  return (
    <>
      {/* Environment for glass reflections */}
      <Environment preset="city" />
      <ambientLight intensity={0.4} />
      <pointLight position={[0, 0, 0]} intensity={4} color="#D32F2F" distance={10} />
      <pointLight position={[5, 3, 2]} intensity={3} color="#00E5FF" distance={12} />
      <pointLight position={[-5, -3, 2]} intensity={3} color="#00E5FF" distance={12} />
      <pointLight position={[0, 4, -4]} intensity={2} color="#D9A01B" distance={10} />

      <Stars radius={80} depth={40} count={1800} factor={3} saturation={0} fade speed={0.4} />

      {/* ── Orbit rings — all seamlessly looping ── */}
      <OrbitRing rx={3.8} rz={1.8} tube={0.02}  color="#00E5FF" speed={0.35}  rotX={0.45}  rotZ={0.18}  phase={0} />
      <OrbitRing rx={3.2} rz={1.55} tube={0.025} color="#D32F2F" speed={-0.55} rotX={-0.35} rotZ={0.22}  phase={1.2} />
      <OrbitRing rx={2.4} rz={1.15} tube={0.018} color="#D9A01B" speed={0.75}  rotX={0.65}  rotZ={-0.12} phase={2.5} />
      <OrbitRing rx={4.5} rz={2.2}  tube={0.013} color="#00E5FF" speed={-0.28} rotX={0.12}  rotZ={0.45}  phase={0.8} />

      {/* Traveling glow dots on orbits */}
      <TravelingDot rx={3.8} rz={1.8}  color="#00E5FF" speed={0.35}  rotX={0.45}  rotZ={0.18}  phase={0} />
      <TravelingDot rx={3.2} rz={1.55} color="#D32F2F" speed={-0.55} rotX={-0.35} rotZ={0.22}  phase={1.2} />
      <TravelingDot rx={2.4} rz={1.15} color="#D9A01B" speed={0.75}  rotX={0.65}  rotZ={-0.12} phase={2.5} />
      <TravelingDot rx={3.8} rz={1.8}  color="#ffffff" speed={0.35}  rotX={0.45}  rotZ={0.18}  phase={Math.PI} />

      {/* ── Glass panels (isometric arrangement like mockup) ── */}
      <GlassPanel
        position={[2.6, 0.5, -0.3]}
        rotation={[0.15, -0.55, 0.1]}
        width={2.2} height={1.5}
        color="#00E5FF"
        speed={0.7}
      />
      <GlassPanel
        position={[-2.4, 0.2, -0.2]}
        rotation={[0.1, 0.52, -0.12]}
        width={1.7} height={2.1}
        color="#D32F2F"
        speed={0.9}
      />
      <GlassPanel
        position={[0.8, -1.6, 0.6]}
        rotation={[-0.2, 0.28, 0.18]}
        width={1.9} height={1.3}
        color="#D9A01B"
        speed={0.6}
      />
      <GlassPanel
        position={[-0.8, 1.6, 0.3]}
        rotation={[0.22, -0.32, -0.08]}
        width={1.5} height={1.1}
        color="#00E5FF"
        speed={1.1}
      />
      <GlassPanel
        position={[3.3, -0.6, 0.9]}
        rotation={[0.08, -0.62, 0.04]}
        width={2.0} height={1.3}
        color="#D32F2F"
        speed={0.8}
      />

      {/* ── Floating wireframe cubes ── */}
      <WireframeCube position={[1.9, 2.4, -1.1]}  size={0.3}  color="#00E5FF" rotSpeed={[0.008, 0.013]} />
      <WireframeCube position={[-2.9, -1.1, 0.6]} size={0.24} color="#D32F2F" rotSpeed={[0.011, 0.007]} />
      <WireframeCube position={[3.6, 1.1, -0.4]}  size={0.2}  color="#D9A01B" rotSpeed={[0.007, 0.015]} />
      <WireframeCube position={[-1.6, -2.1, -0.6]} size={0.26} color="#00E5FF" rotSpeed={[0.013, 0.009]} />
      <WireframeCube position={[-3.6, 0.6, -1.0]}  size={0.22} color="#D9A01B" rotSpeed={[0.008, 0.012]} />
      <WireframeCube position={[0.6, 2.9, 0.4]}    size={0.18} color="#D32F2F" rotSpeed={[0.01, 0.014]} />

      {/* ── Logo in center ── */}
      <Suspense fallback={null}>
        <CenterLogo />
      </Suspense>

      {/* No limits on orbit control — drag to explore */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 1.7}
        minPolarAngle={Math.PI / 3.5}
      />
    </>
  );
};

// ── Exported component ───────────────────────────────────────────────────────
const VortexAnimation = () => (
  <div className="relative w-full h-[650px]">
    {/* Background radial glows */}
    <div className="absolute inset-0 pointer-events-none z-0">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] bg-accent-red/6 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] bg-accent-cyan/8 rounded-full blur-[60px]" />
    </div>

    <div className="w-full h-full z-10 cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 1.8, 8.5], fov: 48 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>

    {/* Label */}
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none z-20">
      <p className="text-white/25 text-xs tracking-[0.5em] uppercase font-light">JSHub Agency</p>
    </div>
  </div>
);

export default VortexAnimation;
