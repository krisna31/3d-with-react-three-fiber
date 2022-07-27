import { Environment, OrbitControls, PerspectiveCamera, PointerLockControls, ScreenQuad } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import MyBox from "../atoms/MyBox";
import { softShadows } from "@react-three/drei";
import MyDodecahedron from "../atoms/MyDodecahedron";
import Spinner from "../atoms/Spinner";
import MyTorusKnot from "../App/atoms/MyTorusKnot";

softShadows();

const MyCanvas = ({ gpu }) => {
  const FORPC = [3, 6, 9, 12, 15, 18, 21, 25, 28, 30];
  const FORMOBILE = [3, 6, 9, 12, 15];
  return (
    <>
      {gpu.isMobile ? (
        <Canvas
          shadows
          className="bg-sky-300 min-h-screen flex justify-center items-center absolute"
          camera={{
            position: [0, 10, 22],
            fov: 88,
          }}
        >
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
            {FORMOBILE.map((pos, index) => (
              <React.Fragment key={index}>
                <MyBox args={[3, 2, 1]} color="lightblue" speed={2} pos={pos} />
                <MyDodecahedron args={[1, 8]} color="gray" speed={5} pos={pos} />
                <MyTorusKnot args={[2, 0.5, 100, 16, 2, 3]} color="blue" speed={5} pos={pos + 6} />
              </React.Fragment>
            ))}
          </group>
          <OrbitControls autoRotate enableZoom={true} enablePan={false} />
        </Canvas>
      ) : (
        <Canvas
          shadows
          className="bg-sky-300 min-h-screen flex justify-center items-center absolute"
          camera={{
            position: [0, 10, 22],
            fov: 88,
          }}
        >
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
            {FORPC.map((pos, index) => (
              <React.Fragment key={index}>
                <MyBox args={[3, 2, 1]} color="lightblue" speed={2} pos={pos} />
                <MyDodecahedron args={[1, 8]} color="gray" speed={5} pos={pos} />
                <MyTorusKnot args={[2, 0.5, 100, 16, 2, 3]} color="blue" speed={5} pos={pos + 6} />
              </React.Fragment>
            ))}
          </group>
          <OrbitControls autoRotate enableZoom={true} enablePan={false} />
        </Canvas>
      )}
    </>
  );
};

export default MyCanvas;
