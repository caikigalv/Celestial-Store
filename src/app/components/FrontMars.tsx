import React from "react";
import styled from "styled-components";
import { TiShoppingCart } from "react-icons/ti";
import { BsArrowsMove } from "react-icons/bs";

const TopSectionContainer2 = styled.div`
 position:absolute;
 width:100%;
 display:flex;
 justify-content:end;
 overflow-x:hidden;
`;



export const FrontMars = () => {
    return (
        <>          
            <TopSectionContainer2>
                <p className="font-bold uppercase text-white">Mars</p>
             <BsArrowsMove className=" text-[50px] animate-pulse mt-8 mr-8  text-white"/>
            </TopSectionContainer2>
        </>
    )
}