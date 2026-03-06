import { CardContent } from "@mui/material";
import React, { createContext, useContext, useState, ReactNode } from "react";

type Product = {
    id: number;
    name: string;
    description: string;
    price?: number;
    images: string[];
};

type CartContextType = {
    cartItems: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (id: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cartItems, setCartItems] = useState<Product[]>([]);

    const addToCart = (product: Product) => {
        setCartItems((prev) => [...prev, product]);
    };

    const removeFromCart = (id: number) => {
        setCartItems(prev => prev.filter((item) => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = (): CartContextType => {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCart must be used within a CartProvider");
    return context;
};