"use client"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { StepUser } from "@/app/components/checkout/step-user";
import { StepAddress } from "@/app/components/checkout/step-address";
import { StepFinish } from "@/app/components/checkout/step-finish";
import { CheckoutSteps } from "@/types/chekout-steps";
import { Separator } from "@radix-ui/react-select";

type Props = {
    name: string;
    url: string;
    description: string;
}

export const AboutImg = ({ name, url, description }: Props) => {


    return <Dialog>
        <DialogTrigger asChild>
            <div className="absolute bg-black opacity-0 hover:opacity-70  w-full h-full cursor-pointer">
                <span className="flex justify-center items-center text-center h-full text-white ">{name}</span>
            </div>
        </DialogTrigger>
        <DialogContent className="z-[100] text-white bg-black xl:w-screen w-[360px]">
            <DialogHeader className="z-[100] text-white">
                <DialogTitle className="z-[100] text-white">
                    <h1 className="text-white">{name}</h1>
                </DialogTitle>
                <Separator className="text-white"/>
                <div className="flex  flex-col gap-4">
                    <div className="">
                        <img className=" md:w-[70%] md:h-[200px] 2xl:w-full 2xl:h-full" src={url} alt={name} />
                    </div>
                    <div className="">
                        <span className="text-sm ">{description}</span>
                    </div>
                </div>
            </DialogHeader>
        </DialogContent>
    </Dialog>

}


// className="z-[1000] bg-black text-white"