import { useSpring, animated } from "@react-spring/three";
import { MeshWobbleMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import { TorusKnotGeometry } from "three";

function MyTorusKnot({ color, args, speed, pos }) {
  const mesh = useRef();
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });
  const [expand, setExpand] = useState(false);
  const props = useSpring({
    scale: expand ? [1.5, 1.5, 1.5] : [1, 1, 1],
    position: [Math.round(-pos + Math.random() * pos) + 10, Math.round(Math.random() * pos) + 10, Math.round(-3 + Math.random() * pos)],
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
      <torusKnotGeometry args={args} />
      <MeshWobbleMaterial color={expand ? "green" : color} speed={speed} factor={0.6} />
    </animated.mesh>
  );
}

export default MyTorusKnot;
