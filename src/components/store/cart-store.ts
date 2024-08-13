"use client"
import { Cart } from "@/types/cart";
import { Product } from "@/types/items";
import { useEffect } from "react";
import { create } from "zustand";

type States = {
    cart: Cart[];
}

type Actions = {
    upsertCartItem: (product: Product, quantity: number) => void;
}


const loadCartFromLocalStorage = (): Cart[] => {
    const cart = localStorage.getItem("cart");
    if (cart) {
        try {
            return JSON.parse(cart);
        } catch {
            return [];
        }
    }
    return [];
};

const saveCartToLocalStorage = (cart: Cart[]) => {
    localStorage.setItem("cart", JSON.stringify(cart));
};

const initialState: States = {
    cart: loadCartFromLocalStorage()
}


export const useCartStore = create<States & Actions>()(set => ({


    ...initialState,
    upsertCartItem: (product, quantity) => set(state => {
        let newCart = state.cart;

        let productIndex = newCart.findIndex(item => item.product.id === product.id);

        if (productIndex < 0) {
            newCart.push({ product, quantity: 0 });
            productIndex = newCart.findIndex(item => item.product.id === product.id);
        }

        newCart[productIndex].quantity += quantity;

        if (newCart[productIndex].quantity <= 0) {
            newCart = newCart.filter(item => item.product.id !== product.id)
        }

        saveCartToLocalStorage(newCart);

        return { ...state, cart: newCart }
    })
}))