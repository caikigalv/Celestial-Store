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

type Props = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}



export const DialogBuy = ({ open, onOpenChange }: Props) => {
    const [step, setStep] = useState<CheckoutSteps>('user');

    let progressPct = 0;

    switch(step) {
        case 'user': progressPct = 30;
        break;
        case 'address': progressPct = 70;
        break;
        case 'finish': progressPct = 100;
        break;
        default: progressPct;

    }

    return <Dialog open={open} onOpenChange={onOpenChange}>

        <DialogContent className="z-[100]">
            <DialogHeader className="z-[100]">
                <DialogTitle className="z-[100]">
                    {step === 'user' && 'Dados Pessoais'}
                    {step === 'address' && 'Endereço de entrega'}
                    {step === 'finish' && 'Finalizar'}
                </DialogTitle>
                <Progress value={progressPct} />

                <div className="flex flex-col gap-3 z-[100]">
                    {step === 'user' && <StepUser setStep={setStep}/>}
                    {step === 'address' && <StepAddress setStep={setStep}/>}
                    {step === 'finish' && <StepFinish />}
                </div>
            </DialogHeader>
        </DialogContent>
    </Dialog>


}