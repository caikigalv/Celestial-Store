
import { MenusPage } from "@/components/Menu";
import { SheetCar } from "@/components/shopping-sheet";
import { useEffect, useState } from "react";
import React from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { TabMenuNav } from "@/components/tabs-nav";





export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    console.log(isScrolled)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className={`w-screen fixed z-10 flex justify-around h-[80px]  items-center ${isScrolled ? 'bg-slate-900  h-[50px] bg-opacity-90 drop-shadow-md ' : 'bg-transparent'}`}>
            <h1 className="uppercase font-extrabold xl:text-[20px] text-white cursor-pointer hover:text-blue-700"><a>Celestial Store</a></h1>
            <div>
                <div className="flex justify-center items-center xl:gap-8 gap-4 text-white">

                    {MenusPage.map(item => (
                        <div>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem >
                                    {item.name === 'Loja' && <BreadcrumbLink href="#Loja" className="text-white uppercase hover:text-blue-700 hover:border-b-white hover:border-b-2">{item.name}</BreadcrumbLink>}
                                    {item.name === 'Galeria' && <BreadcrumbLink href="#Galeria" className="text-white  uppercase hover:text-blue-700 hover:border-b-white hover:border-b-2">{item.name}</BreadcrumbLink>}
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                        </div>
                    ))}
                    <div className="hover:text-blue-700"><SheetCar/></div>
                </div>
            </div>
        </div>
    )
}


{/* <li className="text-[17px] hover:border-b-2 hover:border-b-white cursor-pointer" key={item.id}>
                            {item.name}
</li> */}