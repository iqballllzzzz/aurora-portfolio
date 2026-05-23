import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, MeshDistortMaterial } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import type { Mesh } from "three";

function Blob() {
  const mesh = useRef<Mesh>(null);
  const [gyro, setGyro] = useState({ x: 0, y: 0 });
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouse = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    const onOrient = (e: DeviceOrientationEvent) => {
      setGyro({
        x: (e.gamma ?? 0) / 45,
        y: (e.beta ?? 0) / 45,
      });
    };
    window.addEventListener("mousemove", onMouse);
    window.addEventListener("deviceorientation", onOrient);
    return () => {
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("deviceorientation", onOrient);
    };
  }, []);

  useFrame((_, delta) => {
    if (!mesh.current) return;
    const tx = mouse.x + gyro.x;
    const ty = mouse.y + gyro.y;
    mesh.current.rotation.y += delta * 0.15 + tx * 0.02;
    mesh.current.rotation.x += delta * 0.08 + ty * 0.02;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={1.2}>
      <Icosahedron ref={mesh} args={[1.6, 6]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#C3E41D"
          distort={0.45}
          speed={2}
          roughness={0.2}
          metalness={0.6}
          wireframe={false}
        />
      </Icosahedron>
      <Icosahedron args={[1.65, 1]} position={[0, 0, 0]}>
        <meshBasicMaterial color="#C3E41D" wireframe transparent opacity={0.25} />
      </Icosahedron>
    </Float>
  );
}

export default function ThreeScene({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[3, 3, 3]} intensity={1.2} />
        <pointLight position={[-3, -2, 2]} color="#C3E41D" intensity={2} />
        <Blob />
      </Canvas>
    </div>
  );
}
