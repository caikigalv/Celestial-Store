import React, { useRef } from "react";
import EarthDayMap from "@/assets/textura/8k_earth_daymap.jpg";
import EarthNormalMap from "@/assets/textura/8k_earth_normal_map.jpg";
import EarthSpecularMap from "@/assets/textura/8k_earth_specular_map.jpg";
import EarthCloudsMap from "@/assets/textura/8k_earth_clouds.jpg";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";


export const Earth = () => {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(TextureLoader, [
    EarthDayMap.src,
    EarthNormalMap.src,
    EarthSpecularMap.src,
    EarthCloudsMap.src,
  ]);

  const earthRef = useRef<THREE.Mesh>(null!);
  const cloudsRef = useRef<THREE.Mesh>(null!);

  useFrame(({clock})=>{
      const elapsedTime = clock.getElapsedTime();
      if(earthRef.current){
        earthRef.current.rotation.y = elapsedTime / 6;
      }

      if(cloudsRef.current){
        cloudsRef.current.rotation.y = elapsedTime / 6;
      }   
  });


  return (

    <>
      {/* <ambientLight intensity={1} /> */}
      <pointLight color="white"  position={[2, 0, 5]} intensity={17.2}/>
      <Stars
        radius={300}
        depth={60}
        count={20000}
        factor={7}
        saturation={0}
        fade={true} />
      <mesh ref={cloudsRef}  position={[0, 0, 3]}>
        <sphereGeometry args={[1.005, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.4}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide} />
      </mesh>
      <mesh ref={earthRef}  position={[0, 0, 3]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial map={colorMap} normalMap={normalMap} metalness={0.4} roughness={0.7}/>
        <OrbitControls
          enableZoom={true}
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

