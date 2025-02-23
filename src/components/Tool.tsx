// src/components/Tool.jsx
import React from "react";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function Tool(props) {
  const mesh = useRef();

  // Animazione rotante del modello 3D
  useFrame(() => {
    if (mesh.current) {
      // Rotazione continua
    }
  });

  return (
    <mesh {...props} ref={mesh}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color='hotpink' />
    </mesh>
  );
}

export default Tool;
