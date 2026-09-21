"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product } from "@/data/products";

export interface CartItem {
  product: Product;
  size: string;
  color: string;
  quantity: number;
}

export interface Order {
  id: string;
  date: string;
  items: CartItem[];
  total: number;
}

interface ShopContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, size: string, color: string) => void;
  updateQuantity: (productId: string, size: string, color: string, delta: number) => void;
  removeFromCart: (productId: string, size: string, color: string) => void;
  cartTotalCount: number;
  cartTotalPrice: number;
  
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  
  wishlist: Product[];
  toggleWishlist: (product: Product) => void;
  isInWishlist: (productId: string) => boolean;
  wishlistCount: number;
  
  orders: Order[];
  placeOrder: (total: number) => void;
  toastMessage: string | null;
  showToast: (message: string) => void;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
    try {
      const savedCart = localStorage.getItem("cart");
      const savedWishlist = localStorage.getItem("wishlist");
      const savedOrders = localStorage.getItem("orders");
      if (savedCart) setCartItems(JSON.parse(savedCart));
      if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
      if (savedOrders) setOrders(JSON.parse(savedOrders));
    } catch (e) {
      console.error("Failed to parse local storage", e);
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  }, [cartItems, isMounted]);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
  }, [wishlist, isMounted]);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("orders", JSON.stringify(orders));
    }
  }, [orders, isMounted]);

  const addToCart = (product: Product, size: string, color: string) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.size === size && item.color === color
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      }
      return [...prev, { product, size, color, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (productId: string, size: string, color: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId && item.size === size && item.color === color) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const removeFromCart = (productId: string, size: string, color: string) => {
    setCartItems((prev) =>
      prev.filter(
        (item) => !(item.product.id === productId && item.size === size && item.color === color)
      )
    );
  };

  const toggleWishlist = (product: Product) => {
    setWishlist((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) {
        showToast("Removed from wishlist");
        return prev.filter((p) => p.id !== product.id);
      } else {
        showToast("Added to wishlist");
        return [...prev, product];
      }
    });
  };

  const isInWishlist = (productId: string) => {
    return wishlist.some((p) => p.id === productId);
  };

  const cartTotalCount = cartItems.reduce((acc, i) => acc + i.quantity, 0);
  const cartTotalPrice = cartItems.reduce((acc, i) => acc + i.product.price * i.quantity, 0);
  const wishlistCount = wishlist.length;

  const placeOrder = (total: number) => {
    const newOrder: Order = {
      id: "ORD-" + Math.random().toString(36).substring(2, 9).toUpperCase(),
      date: new Date().toISOString(),
      items: [...cartItems],
      total,
    };
    setOrders((prev) => [newOrder, ...prev]);
    setCartItems([]);
  };

  return (
    <ShopContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        cartTotalCount,
        cartTotalPrice,
        isCartOpen,
        setIsCartOpen,
        wishlist,
        toggleWishlist,
        isInWishlist,
        wishlistCount,
        orders,
        placeOrder,
        toastMessage,
        showToast,
      }}
    >
      {children}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1E332D] text-white px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] shadow-2xl animate-in slide-in-from-bottom-5 fade-in duration-300">
          {toastMessage}
        </div>
      )}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (context === undefined) {
    throw new Error("useShop must be used within a ShopProvider");
  }
  return context;
};
