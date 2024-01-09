import {
  RenderTexture,
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Scene } from "./Scene";

export const scenes = [
  {
    path: "models/model3_scene.glb",
    mainColor: "#FFC0C0",
    // mainColor: "#c0ffe1",
    name: "Model 3",
    description: "The car of the future",
    price: 29740,
    range: 576,
  },
];

export const Experience = () => {
  const viewport = useThree((state) => state.viewport);
  return (
    <>
      <ambientLight intensity={0.2} />
      {/* MAIN WORLD */}

      {scenes.map((scene, index) => (
        <mesh
          key={index}
          position={[index * (viewport.width), 0, 0]}
        >
          <planeGeometry args={[viewport.width, viewport.height]} />
          <meshBasicMaterial toneMapped={false}>
            <RenderTexture attach="map">
              <Scene {...scene} />
            </RenderTexture>
          </meshBasicMaterial>
        </mesh>
      ))}
    </>
  );
};
