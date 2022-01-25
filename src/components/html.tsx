import { Html } from "@react-three/drei";

export default function HtmlForm(props: {
  forms: React.MutableRefObject<HTMLInputElement>;
}): JSX.Element {
  return (
    <Html
      position={[-3.3, 0.6, 0]}
      style={{
        opacity: 0,
      }}
      ref={props.forms}
    >
      <form action="/action_page.php">
        <label htmlFor="img">Select image:</label>
        <input type="file" id="img" name="img" accept="image/*" />
        <input type="submit" />
      </form>
    </Html>
  );
}
