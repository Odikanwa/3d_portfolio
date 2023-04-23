import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";
import { DoubleSide } from "three";
import { technologies } from "../../constants";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial
          color="#fff8eb"
          side={DoubleSide}
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

// const Badge = () => {
//   return (
//     <div className="h-auto w-full flex flex-row flex-wrap justify-center">
//       {technologies.map((technology) => (
//         <img key={technology.id} className="py-2 px-3 h-[45px] w-[45px]">{technology.icon}</img>
//       ))}
//     </div>
//   )
// }


const BallCanvas = ({ icon }) => {
  return (
    <>
    {/* <div className="hidden lg:block"> */}
    <Canvas
      // frameloop="Infinity"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      className="hidden lg:block"
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
    {/* </div> */}
    <img
          src={icon}
          alt="web-development"
          className="w-[70%] h-[70%] object-contain rounded-xl block sm:hidden bg-white mb-[5px]"
        />
    </>
  );
};

export default BallCanvas;
