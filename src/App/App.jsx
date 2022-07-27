import { Stats, useDetectGPU } from "@react-three/drei";
import React, { Suspense, useState } from "react";
import Spinner from "../atoms/Spinner";
const MyCanvas = React.lazy(() => import("../components/MyCanvas"));

const App = () => {
  const GPUTier = useDetectGPU();
  const [gpu] = useState(GPUTier);
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Stats showPanel={0} className="stats" />
        <MyCanvas gpu={gpu} />
      </Suspense>
    </>
  );
};

export default App;
