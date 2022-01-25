export default function Lights(): JSX.Element {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight intensity={1.0} position={[5, 3, 5]} />
    </>
  );
}
