import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <>
      <div className="container fixed z-40 w-screen h-screen flex justify-center items-center">
        <Canvas>
          <mesh>
            <boxGeometry args={[2, 2, 2]} />
            <meshBasicMaterial color={"lightblue"} />
          </mesh>
        </Canvas>
      </div>
    </>
  );
}

export default App;
