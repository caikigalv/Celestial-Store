"use client"
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Earth } from "@/components/earth/Earth";
import { FrontHome } from "@/app/components/FrontHome";

const CanvasContainer = styled.div`
  width:100%;
  height:100%;
 
`;

export const HomePage = ()=>{
    return(
        <div className=" w-screen h-screen text-white bg-black relative">
        <CanvasContainer>
            <FrontHome/>
          <Canvas>
            <Suspense fallback={null}>
              <Earth />
            </Suspense>
          </Canvas>
        </CanvasContainer>
      </div>
    )
}