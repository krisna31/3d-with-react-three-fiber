import { useProgress } from "@react-three/drei";

const Spinner = () => {
  return (
    <div className="container flex justify-center items-center absolute z-10 bg-slate-600 h-screen min-w-full">
      <h1 className="p-8 mx-auto text-5xl animate-bounce transition-all text-white">You Can Zoom in or out the screen</h1>
    </div>
  );
};

export default Spinner;
