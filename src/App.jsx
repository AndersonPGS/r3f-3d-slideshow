import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Overlay } from "./components/Overlay";

function App() {
  return (
    <>
      <Overlay />
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 30 }}>
        <color attach="background" args={["#fff"]} />
        <Experience />
      </Canvas>

      <div>aklsjdakljsdklasjd</div>
      <div>aklsjdakljsdklasjd</div>
      <div>aklsjdakljsdklasjd</div>
      <div>aklsjdakljsdklasjd</div>
      <div>aklsjdakljsdklasjd</div>
      <div>aklsjdakljsdklasjd</div>
      <div>aklsjdakljsdklasjd</div>
      <div>aklsjdakljsdklasjd</div>
      <div>aklsjdakljsdklasjd</div>
      <div>aklsjdakljsdklasjd</div>
      <div>aklsjdakljsdklasjd</div>
      <div>aklsjdakljsdklasjd</div>
      <div>aklsjdakljsdklasjd</div>
      <div>aklsjdakljsdklasjd</div>
      <div>aklsjdakljsdklasjd</div>
      <div>aklsjdakljsdklasjd</div>
      <div>aklsjdakljsdklasjd</div>
      <div>aklsjdakljsdklasjd</div>
      <div>aklsjdakljsdklasjd</div>
      <div>aklsjdakljsdklasjd</div>
    </>
  );
}

export default App;
