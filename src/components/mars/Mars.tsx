import React, { useRef } from "react";
import MarsMap from "@/assets/textura/marte.jpg";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";


export const Mars = () => {
  const [marsMap] = useLoader(TextureLoader, [
    MarsMap.src
  ]);

//   const earthRef = useRef<THREE.Mesh>(null!);
  const marsRef = useRef<THREE.Mesh>(null!);

  useFrame(({clock})=>{
      const elapsedTime = clock.getElapsedTime();
      if(marsRef.current){
        marsRef.current.rotation.y = elapsedTime / 6;
      }   
  });


  return (

    <>
      <ambientLight intensity={3} />
      <pointLight color="white"  position={[2, 0, 5]} intensity={1.2}/>
      <Stars
        radius={300}
        depth={60}
        count={20000}
        factor={7}
        saturation={0}
        fade={true} />
      <mesh ref={marsRef}  position={[0, 0, 3]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial specularMap={marsMap} />
        <meshStandardMaterial map={marsMap} normalMap={marsMap} metalness={0.4} roughness={0.7}/>
        <OrbitControls
          enableZoom={false}
          maxZoom={600}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
        />
      </mesh>
    </>

  );
};

