import { MeshWobbleMaterial, OrbitControls } from "@react-three/drei/core";
import { softShadows } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/three";

softShadows();

const App = () => {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Canvas shadows className="bg-sky-300 min-h-screen flex justify-center items-center absolute" camera={{ position: [-5, 2, 10], fov: 60 }}>
          <ambientLight intensity={0.3} />
          <directionalLight
            castShadow
            position={[0, 10, 0]}
            intensity={2}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />
          <pointLight position={[-10, 0, -20]} intensity={0.5} />
          <pointLight position={[0, -10, 0]} intensity={1.5} />
          <group>
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]} receiveShadow>
              <planeBufferGeometry args={[100, 100]} />
              <shadowMaterial opacity={0.5} />
            </mesh>
            <MyBox position={[0, 1, 0]} args={[3, 2, 1]} color="lightblue" speed={2} pos={3} />
            <MyBox position={[-2, 1, -5]} color="pink" speed={6} pos={2} />
            <MyBox position={[5, 1, -2]} color="pink" speed={6} pos={4} />
            <MyBox position={[9, 5, -1]} args={[3, 2, 1]} color="lightblue" speed={4} pos={5} />
            <MyBox position={[-4, 4, -1]} args={[3, 2, 1]} color="black" speed={3} pos={6} />
            <MyBox position={[0, 6, -4]} args={[3, 2, 1]} color="black" speed={3} pos={7} />
          </group>
          <OrbitControls />
        </Canvas>
      </Suspense>
    </>
  );
};

export default App;

function MyBox({ color, args, position, speed, pos }) {
  const defaultColor = color;
  const mesh = useRef();
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });
  const [expand, setExpand] = useState(false);
  const props = useSpring({
    scale: expand ? [1.5, 1.5, 1.5] : [1, 1, 1],
    color: expand ? "black" : defaultColor,
    position: [Math.round(-3 + Math.random() * pos), Math.round(Math.random() * pos), Math.round(-3 + Math.random() * pos)],
  });
  return (
    <animated.mesh
      position={props.position}
      ref={mesh}
      onClick={() => {
        setExpand(!expand);
      }}
      scale={props.scale}
      castShadow
    >
      <boxGeometry args={args} />
      <MeshWobbleMaterial color={expand ? props.color : defaultColor} speed={speed} factor={0.6} />
    </animated.mesh>
  );
}

const Spinner = () => {
  return (
    <>
      <div className="container flex justify-center items-center absolute z-10 bg-slate-600">
        <h1 className="p-8 mx-auto text-3xl animate-bounce transition-all text-red-800">Loading</h1>
      </div>
    </>
  );
};
