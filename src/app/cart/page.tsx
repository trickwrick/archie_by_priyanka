"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import { useShop } from "@/context/ShopContext";
import { Trash2, ShoppingBag, ArrowRight, Truck } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, cartTotalPrice } = useShop();
    const router = useRouter();

  const shippingThreshold = 5000;
  const freeShipping = cartTotalPrice >= shippingThreshold || cartTotalPrice === 0;
  const shippingCost = freeShipping ? 0 : 350;
  const grandTotal = Math.max(0, cartTotalPrice + shippingCost);
  const progressPercent = Math.min(100, (cartTotalPrice / shippingThreshold) * 100);

  return (
    <main className="min-h-screen bg-[#F5EFE6] text-[#1E332D] flex flex-col font-sans pt-56">
      <Navbar />

      <div className="flex-1 max-w-6xl mx-auto w-full px-6 lg:px-12 py-12">
        <h1 className="font-serif text-3xl md:text-4xl text-[#1E332D] mb-8 text-center md:text-left">
          Your Shopping Bag
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-24 bg-white shadow-sm border border-[#E0D9C8]">
            <ShoppingBag className="w-16 h-16 text-[#CCC] mx-auto stroke-1 mb-6" />
            <p className="font-serif text-2xl text-[#666] mb-4">Your bag is currently empty</p>
            <p className="text-sm text-[#888] max-w-md mx-auto mb-8">
              Explore our signature monokinis, bikinis, and custom resortwear pieces.
            </p>
            <button
              onClick={() => router.push("/products")}
              className="px-8 py-4 bg-[#1A1A1A] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#9A7B38] transition-colors"
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Cart Items List */}
            <div className="flex-1 space-y-8">
              <div className="bg-[#F4F0E8] p-4 border border-[#E0D9C8]">
                <div className="flex items-center justify-between text-xs text-[#333] mb-2 font-medium">
                  <span className="flex items-center gap-2">
                    <Truck className="w-5 h-5 text-[#9A7B38]" />
                    {freeShipping
                      ? "You unlocked Complimentary Express Shipping!"
                      : `Add ₹${(shippingThreshold - cartTotalPrice).toLocaleString("en-IN")} more for Free Shipping`}
                  </span>
                </div>
                <div className="w-full bg-[#E0DACC] h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-[#9A7B38] h-full transition-all duration-500"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>

              <div className="space-y-6">
                {cartItems.map((item, idx) => (
                  <div
                    key={`${item.product.id}-${item.size}-${item.color}-${idx}`}
                    className="flex flex-col sm:flex-row gap-6 p-6 bg-white border border-[#E0D9C8] shadow-sm"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-24 h-32 object-cover border border-[#E0D9C8] bg-neutral-100"
                    />
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="font-serif text-lg font-medium text-[#1A1A1A] hover:text-[#C8A366]">
                            <Link href={`/products/${item.product.id}`}>{item.product.name}</Link>
                          </h4>
                          <button
                            onClick={() => removeFromCart(item.product.id, item.size, item.color)}
                            className="text-[#999] hover:text-red-600 transition-colors p-2"
                            title="Remove"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>

                        <div className="text-sm text-[#666] mt-2 space-y-1">
                          <p>Size: <span className="font-semibold text-black">{item.size}</span></p>
                          <p>Color: <span className="font-semibold text-black">{item.color}</span></p>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center justify-between mt-6 gap-4">
                        <div className="flex items-center border border-[#CCC] bg-white">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.size, item.color, -1)}
                            className="px-4 py-1.5 text-sm text-[#555] hover:bg-[#EEE]"
                          >
                            -
                          </button>
                          <span className="px-4 py-1.5 text-sm font-semibold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.size, item.color, 1)}
                            className="px-4 py-1.5 text-sm text-[#555] hover:bg-[#EEE]"
                          >
                            +
                          </button>
                        </div>
                        <span className="font-bold text-lg text-[#1A1A1A]">
                          ₹{(item.product.price * item.quantity).toLocaleString("en-IN")}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:w-100">
              <div className="bg-white p-8 border border-[#E0D9C8] shadow-sm sticky top-32">
                <h3 className="font-serif text-xl font-medium text-[#1A1A1A] mb-6">Order Summary</h3>
                
                <div className="space-y-4 text-sm text-[#444] mb-6">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>₹{cartTotalPrice.toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>{freeShipping ? "FREE" : `₹${shippingCost}`}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold text-[#1A1A1A] pt-4 border-t border-[#EEE]">
                    <span>Total</span>
                    <span>₹{grandTotal.toLocaleString("en-IN")}</span>
                  </div>
                </div>

                <Link
                  href="/checkout"
                  className="w-full py-4 bg-[#1A1A1A] text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#9A7B38] transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                >
                  Proceed to Checkout
                  <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
                </Link>

                <div className="mt-6 text-center">
                  <Link href="/products" className="text-xs uppercase tracking-widest font-bold text-neutral-500 hover:text-[#C8A366] underline">
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
      <CartDrawer />
          </main>
  );
}
