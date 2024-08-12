
import React from "react";
import styled from "styled-components";
import { Typewriter } from "react-simple-typewriter";






export const FrontHome = () => {
    return (
        <>
            <div className="absolute  w-[100%] h-[100vh] md:top-0  left-0 flex flex-col items-center pt-[13%] z-[1]">
                <div className="mt-64 xl:mt-0">
                    <h1 className=" text-xl xl:text-[35px] uppercase font-bold text-center ">
                        <Typewriter
                            words={['Olhando para o céu', ' enxergamos nosso passado.']}
                            loop={false}
                            cursor cursorStyle="|"
                            typeSpeed={80}
                            delaySpeed={1000}
                        />
                    </h1>
                    <p className="text-wrap w-[360px] text-lg xl:w-[800px] xl:text-[20px] text-center">Vemos nosso passado e nossa história refletidos nas estrelas. Cada ponto de luz é um vestígio do universo antigo, contando histórias de bilhões de anos atrás. Com um telescópio, você pode explorar esta grande tapeçaria celestial e conectar-se com as origens do cosmos.</p>
                </div>
            </div>
        </>
    )
}