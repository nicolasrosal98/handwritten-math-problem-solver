import { Suspense, useRef, useEffect, useState } from "react";
import "./css/App.css";
import { Canvas } from "@react-three/fiber";
import Model from "./utils/models/GLTFModel";
import { gsap } from "gsap";
import Texts from "./components/texts";
import Lights from "./components/lights";
import HtmlForm from "./components/html";

function App(): JSX.Element {
  const [activeText, setActiveText] = useState<boolean>(true);

  const Calculator = () => {
    const calc = useRef<THREE.Mesh>();
    const photo = useRef<THREE.Mesh>();
    const solver = useRef<THREE.Mesh>();
    const subtitle = useRef<THREE.Mesh>();
    const forms = useRef() as React.MutableRefObject<HTMLInputElement>;

    useEffect(() => {
      if (
        calc.current !== undefined &&
        photo.current !== undefined &&
        solver.current !== undefined &&
        subtitle.current !== undefined
      ) {
        if (!activeText) {
          gsap.to(calc.current.position, {
            duration: 2,
            x: 0.3,
            y: -1.1,
            delay: 1,
          });
          gsap.to(calc.current.rotation, { duration: 2, y: 0, delay: 1 });
          gsap.to(calc.current.position, {
            duration: 1.2,
            z: 5,
            y: -1.85,
            delay: 3,
          });
          gsap.to(photo.current, { duration: 1, fillOpacity: 0 });
          gsap.to(solver.current, { duration: 1, fillOpacity: 0 });
          gsap.to(subtitle.current, { duration: 1, fillOpacity: 0 });
          gsap.to(forms.current, { opacity: 1, duration: 1.5, delay: 4 });
        } else {
          gsap.to(calc.current.position, { duration: 1.2, x: 1.7 });
          gsap.to(calc.current.rotation, {
            duration: 1,
            y: -Math.PI / 4,
            delay: 1.2,
          });
          gsap.to(photo.current, { duration: 2, fillOpacity: 1 });
          gsap.to(solver.current, { duration: 2, fillOpacity: 1 });
          gsap.to(subtitle.current, { duration: 3, fillOpacity: 1 });
        }
      }
    }, []);
    return (
      <>
        {activeText ? (
          <>
            <Texts
              opasity={0}
              photo={photo}
              solver={solver}
              subtitle={subtitle}
              setActiveText={setActiveText}
            />
            <mesh ref={calc} position={[-1.5, -1.1, 1]}>
              <Model />
            </mesh>
          </>
        ) : (
          <>
            <Texts
              opasity={1}
              photo={photo}
              solver={solver}
              subtitle={subtitle}
              setActiveText={setActiveText}
            />
            <HtmlForm forms={forms} />
            <mesh
              ref={calc}
              position={[1.7, -1.1, 1]}
              rotation={[0, -Math.PI / 4, 0]}
            >
              <Model />
            </mesh>
          </>
        )}
      </>
    );
  };

  return (
    <div className="App">
      <Canvas
        onCreated={({ gl }) => {
          gl.setClearColor("#5f6775");
        }}
      >
        <Suspense fallback={null}>
          <Calculator />
          <Lights />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
