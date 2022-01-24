import { Suspense, useRef } from "react";
import "./css/App.css";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./utils/models/GLTFModel";

function App(): JSX.Element {
  const Calculator = () => {
    const mesh = useRef<THREE.Mesh>();

    useFrame(() => {
      if (mesh.current !== undefined) {
        mesh.current.rotation.x += 0.01;
      }
    });

    return (
      <mesh ref={mesh}>
        <Model />
      </mesh>
    );
  };

  const Lights = () => {
    return (
      <>
        <ambientLight intensity={0.5} />
        <pointLight intensity={1.0} position={[5, 3, 5]} />
      </>
    );
  };

  return (
    <div className="App">
      <Canvas>
        <Suspense fallback={null}>
          <OrbitControls />
          <Calculator />
          <Lights />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;

// onCreated={({ gl }) => {
//   gl.setClearColor("#FFFFFF");
// }}
