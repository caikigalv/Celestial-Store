"use client"
import { Cart } from "@/types/cart"
import { useCartStore } from "@/components/store/cart-store";
import { Button } from "../ui/button";
import { MinusIcon, PlusIcon } from "lucide-react";

type Props = {
    cartItem: Cart;
}
export const CartItemQuantity = ({cartItem}: Props)=>{
    const { upsertCartItem } = useCartStore(state => state)

    const handleAddItem = ()=>{
      upsertCartItem(cartItem.product, 1);
    }
    const handleRemoveItem = ()=>{
      upsertCartItem(cartItem.product, -1)
    }

    return(
        <div className="flex items-center gap-2">
            <Button variant="outline" size="icon"  className="size-6" onClick={handleAddItem}><PlusIcon className="size-3 text-black"/></Button>
            <div  className="text-xs">{cartItem.quantity}</div>
            <Button variant="outline" size="icon"  className="size-6" onClick={handleRemoveItem}><MinusIcon className="size-3 text-black"/></Button>
        </div>
    )
}