"use client";

import { useCheckout } from "@/components/store/checkout-store";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useEffect, useState } from "react";
import { useCartStore } from "@/components/store/cart-store";

interface CartItem {
    product: {
        nome: string;
        preco: number;
    };
    quantity: number;
}

interface CheckoutState {
    name: string;
}

interface CartState {
    cart: CartItem[];
}

const initialOptions = {
    clientId: "test",
    currency: "BRL",  // Use 'BRL' para Reais Brasileiros
    intent: "capture",
};

export const StepFinish: React.FC = () => {
    const { name } = useCheckout<CheckoutState>(state => state);
    const [scriptLoaded, setScriptLoaded] = useState(false);
    const { cart } = useCartStore<CartState>(state => state);

    // Calcular o valor total do carrinho
    const cartTotal = cart.reduce((total, item) => total + item.product.preco * item.quantity, 0).toFixed(2);

    const addPaypalScript = () => {
        const script = document.createElement("script");
        script.src = "https://www.paypal.com/sdk/js?client-id=ARIANhPBbcj3uA61tSvD95hRCCLF4BgCsilyzUPN7lK7J9kknpVZXqDS3P3ttQ8CZeGu9KqQBTJi1ol8";
        script.type = "text/javascript";
        script.async = true;
        script.onload = () => setScriptLoaded(true);
        document.body.appendChild(script);
    };

    useEffect(() => {
        if (!window.paypal) {
            addPaypalScript();
        } else {
            setScriptLoaded(true);
        }
    }, []);

    return (
        
        <div className="text-center flex flex-col gap-5">
            <p>Perfeito <strong>{name}</strong>!</p>
            <p>Agora finalize sua compra no PayPal.</p>

            {scriptLoaded ? (
                <PayPalScriptProvider options={initialOptions}>
                    <PayPalButtons 
                        style={{ layout: "horizontal" }} 
                        createOrder={(data, actions):Promise<string> => {
                            return actions.order.create({
                                intent:"CAPTURE",
                                purchase_units:[{
                                    amount:{
                                        value: cartTotal,
                                        currency_code:"BRL",
                                    }
                                }]
                            })
                        }}
                        onApprove={async (data, actions) => {
                            if (actions.order) {
                                return actions.order.capture().then((details) => {
                                    const payerName = details?.payer?.name?.given_name;
                                    const payerEmail = details?.payer?.email_address;

                                    if (payerName || payerEmail) {
                                        alert(`Transaction completed by ${payerName ?? payerEmail}`);
                                    } else {
                                        alert("Transaction completed, but payer details are not available.");
                                    }
                                    // Aqui você pode redirecionar o usuário, salvar informações, etc.
                                });
                            } else {
                                console.error("actions.order is undefined");
                            }
                        }}
                    />
                </PayPalScriptProvider>
            ) : (
                <p>Carregando o PayPal...</p>
            )}
        </div>
        
    );
    
};




