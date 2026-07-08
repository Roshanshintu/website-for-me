import { Float, Line, OrbitControls, Points, PointMaterial, Sphere } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function ParticleField() {
  const points = useMemo(() => {
    const positions = new Float32Array(650 * 3);
    for (let i = 0; i < 650; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * 9;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 6;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 7;
    }
    return positions;
  }, []);

  return (
    <Points positions={points} stride={3} frustumCulled>
      <PointMaterial transparent color="#39c8ff" size={0.018} sizeAttenuation depthWrite={false} opacity={0.55} />
    </Points>
  );
}

function NetworkGlobe() {
  const group = useRef();
  const nodes = useMemo(() => {
    const items = [];
    for (let i = 0; i < 18; i += 1) {
      const phi = Math.acos(1 - 2 * (i + 0.5) / 18);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      items.push([
        Math.cos(theta) * Math.sin(phi) * 1.7,
        Math.sin(theta) * Math.sin(phi) * 1.7,
        Math.cos(phi) * 1.7
      ]);
    }
    return items;
  }, []);

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.18;
      group.current.rotation.x = Math.sin(Date.now() * 0.00045) * 0.08;
    }
  });

  return (
    <group ref={group}>
      <Sphere args={[1.45, 48, 48]}>
        <meshStandardMaterial color="#07111f" transparent opacity={0.22} roughness={0.35} metalness={0.55} wireframe />
      </Sphere>
      {nodes.map((node, index) => (
        <mesh key={node.join('-')} position={node}>
          <sphereGeometry args={[0.045, 16, 16]} />
          <meshStandardMaterial color={index % 3 === 0 ? '#ffffff' : '#25b7ff'} emissive="#1577ff" emissiveIntensity={1.2} />
        </mesh>
      ))}
      {nodes.slice(0, 12).map((node, index) => (
        <Line key={`line-${node.join('-')}`} points={[node, nodes[(index * 4 + 5) % nodes.length]]} color="#25b7ff" transparent opacity={0.38} lineWidth={1} />
      ))}
    </group>
  );
}

function FloatingBlocks() {
  const blocks = [
    [-2.45, -1.25, 0.6],
    [2.35, 1.05, -0.2],
    [-1.85, 1.35, -1.2],
    [1.9, -1.45, 1.1]
  ];

  return blocks.map((position, index) => (
    <Float key={position.join('-')} speed={1.1 + index * 0.2} rotationIntensity={0.45} floatIntensity={0.5}>
      <mesh position={position} rotation={[0.45, 0.3, 0.18]}>
        <boxGeometry args={[0.34, 0.34, 0.34]} />
        <meshStandardMaterial color="#0f2746" emissive="#1577ff" emissiveIntensity={0.35} metalness={0.8} roughness={0.18} />
      </mesh>
    </Float>
  ));
}

export default function ThreeScene({ compact = false }) {
  return (
    <Canvas camera={{ position: [0, 0, compact ? 5.2 : 4.7], fov: 45 }} dpr={[1, 1.7]} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.8} />
      <pointLight position={[3, 3, 3]} intensity={30} color="#25b7ff" />
      <pointLight position={[-4, -2, -1]} intensity={18} color="#ffffff" />
      <ParticleField />
      <NetworkGlobe />
      <FloatingBlocks />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.45} maxPolarAngle={Math.PI / 1.8} minPolarAngle={Math.PI / 3} />
    </Canvas>
  );
}
