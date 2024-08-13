"use client"
import { TiShoppingCart } from "react-icons/ti";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

import { Separator } from "@/components/ui/separator"
import { useCartStore } from "./store/cart-store";
import { useState } from "react";
import { CartItemQuantity } from "./cart/item-quantity";
import { DialogBuy } from "@/app/components/checkout/dialog";


export const SheetCar = () => {
    const [checkoutOpen, setCheckoutOpen] = useState(false)
    const { cart } = useCartStore(state => state);

    let subtotal = 0;
    for (let item of cart) {
        subtotal += item.quantity * item.product.preco;
    }

    return (
        <Sheet >
            <SheetTrigger asChild >
                <div className="relative">
                    <TiShoppingCart className="text-[30px] cursor-pointer" />
                    {cart.length > 0 &&
                        <div className="absolute size-2.5 bg-red-600 rounded-full -right-0 -top-0"></div>
                    }
                </div>
            </SheetTrigger>
            <SheetContent className=" bg-black text-white">
                <SheetHeader>
                    <SheetTitle >
                        <div className="flex items-center gap-4">
                            <p>Carrinho</p>
                            <TiShoppingCart />
                        </div>
                    </SheetTitle>
                </SheetHeader>
                <div className="">
                    {cart.map(item => (
                        <div key={item.product.id} className="flex items-center gap-3 xl:gap-5 my-5">
                            <div className="w-16 overflow-hidden">
                                <img className="xl:w-full h-auto object-cover" src={item.product.url} alt="" />
                            </div>
                            <div className="flex-1 ">
                                <p className="
                                w-[90px] xl:w-full text-[10px] xl:text-[14px] truncate capitalize">{item.product.nome}</p>
                                <p className="text-xs opacity-50">R$ {item.product.preco.toFixed(2)}</p>
                            </div>
                            <div>
                                <CartItemQuantity cartItem={item} />
                            </div>
                        </div>
                    ))}
                </div>
                <Separator className="my-4" />
                <div className="flex justify-between items-center text-xs">
                    <div className="text-[15px] font-bold sm:text-sm">Subtotal:</div>
                    <div>R$ {subtotal.toFixed(2)}</div>
                </div>
                <Separator className="my-4" />

                <div className="text-center">
                    <Button
                        onClick={() => setCheckoutOpen(true)}
                        disabled={cart.length === 0}>
                        Finalizar Compra
                    </Button>
                </div>
                <DialogBuy
                open={checkoutOpen}
                onOpenChange={setCheckoutOpen}
                
                />
            </SheetContent>
        </Sheet>
    )
}
