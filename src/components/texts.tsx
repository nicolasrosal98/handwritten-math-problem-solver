import { Text } from "@react-three/drei";
import { BufferGeometry, Material, Mesh } from "three";

interface TextProps {
  opasity: number;
  photo: React.MutableRefObject<
    Mesh<BufferGeometry, Material | Material[]> | undefined
  >;
  solver: React.MutableRefObject<
    Mesh<BufferGeometry, Material | Material[]> | undefined
  >;
  subtitle: React.MutableRefObject<
    Mesh<BufferGeometry, Material | Material[]> | undefined
  >;
  setActiveText: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Texts(props: TextProps): JSX.Element {
  return (
    <>
      <Text
        position={[-2.0, 0.2, 1]}
        scale={[5, 5, 5]}
        fillOpacity={props.opasity}
        ref={props.photo}
        color="white"
        font="https://cdn.jsdelivr.net/npm/open-fonts@1.1.1/fonts/src/roboto/Roboto-Medium.woff"
      >
        Photo
      </Text>
      <Text
        position={[-0.55, 0.2, 1]}
        scale={[5, 5, 5]}
        fillOpacity={props.opasity}
        ref={props.solver}
        color="white"
        font="https://cdn.jsdelivr.net/npm/open-fonts@1.1.1/fonts/src/roboto/Roboto-Light.woff"
      >
        Solver
      </Text>
      <Text
        position={[-1.85, -0.3, 1]}
        scale={[2, 2, 2]}
        fillOpacity={props.opasity}
        ref={props.subtitle}
        color="white"
        onClick={() => props.setActiveText(false)}
        font="https://cdn.jsdelivr.net/npm/open-fonts@1.1.1/fonts/src/roboto/Roboto-Light.woff"
      >
        Click here to enter
      </Text>
    </>
  );
}
