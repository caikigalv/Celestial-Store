import { useCartStore } from "@/components/store/cart-store";
import { useCheckout } from "@/components/store/checkout-store";

export const generateMessage = ()=>{
    const {name, address}= useCheckout(state => state);
    const {cart}= useCartStore(state => state);

    let orderProducts = [];
    for(let item of cart){
        orderProducts.push(`${item.quantity}X ${item.product.nome}`);
    }

    return`**Dados do cliente:**
 
Nome:${name}
Endereço:${address.street}, ${address.number}, (${address.complement}) 
${address.district}, ${address.city}/${address.state}
______________
**Pedido:**
${orderProducts.join("\n")}

 `;
}