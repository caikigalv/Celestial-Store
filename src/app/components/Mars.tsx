"use client"
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import { Mars } from "@/components/mars/Mars";
import { FrontMars } from "@/app/components/FrontMars";

const CanvasContainer2 = styled.div`
  position:absolute;
  width:100vw;
  height:100vh;
`;

export const MarsPage = () => {
    return (
        <div className=" w-screen h-screen bg-black ">
            <CanvasContainer2>
                <FrontMars />
                <Canvas>
                    <Suspense fallback={null}>
                        <Mars />
                    </Suspense>
                </Canvas>
            </CanvasContainer2>
        </div>
    )
}