"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useShop } from "@/context/ShopContext";
import { Lock, CreditCard, CheckCircle, ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function CheckoutPage() {
  const { cartItems, cartTotalPrice, placeOrder } = useShop();
    const [orderPlaced, setOrderPlaced] = useState(false);

  const shippingThreshold = 5000;
  const freeShipping = cartTotalPrice >= shippingThreshold || cartTotalPrice === 0;
  const shippingCost = freeShipping ? 0 : 350;
  const grandTotal = Math.max(0, cartTotalPrice + shippingCost);

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    placeOrder(grandTotal);
    setOrderPlaced(true);
  };

  if (cartItems.length === 0 && !orderPlaced) {
    return (
      <main className="min-h-screen bg-[#F5EFE6] text-[#1E332D] flex flex-col font-sans pt-56">
        <Navbar />
        <div className="flex-1 max-w-3xl mx-auto w-full px-6 py-24 text-center">
          <ShoppingBag className="w-20 h-20 text-neutral-300 mx-auto mb-6 stroke-1" />
          <h1 className="font-serif text-4xl text-[#1E332D] mb-4">Your Cart is Empty</h1>
          <p className="text-neutral-600 mb-8 max-w-md mx-auto leading-relaxed">
            You have no items in your cart to checkout.
          </p>
          <Link
            href="/products"
            className="px-8 py-4 bg-[#1A1A1A] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#9A7B38] transition-colors inline-block"
          >
            Return to Shop
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  if (orderPlaced) {
    return (
      <main className="min-h-screen bg-[#F5EFE6] text-[#1E332D] flex flex-col font-sans pt-56">
        <Navbar />
        <div className="flex-1 max-w-3xl mx-auto w-full px-6 py-24 text-center">
          <CheckCircle className="w-20 h-20 text-[#C8A366] mx-auto mb-6" />
          <h1 className="font-serif text-4xl text-[#1E332D] mb-4">Order Confirmed</h1>
          <p className="text-neutral-600 mb-8 max-w-md mx-auto leading-relaxed">
            Thank you for shopping with Archie&apos;s by Priyanka. Your luxury swimwear is being prepared with care in our atelier. We will notify you once it ships.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/orders"
              className="px-8 py-4 bg-transparent border border-[#1A1A1A] text-[#1A1A1A] text-xs font-bold uppercase tracking-widest hover:bg-[#1A1A1A] hover:text-white transition-colors"
            >
              View Order History
            </Link>
            <Link
              href="/products"
              className="px-8 py-4 bg-[#1A1A1A] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#9A7B38] transition-colors inline-block"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F5EFE6] text-[#1E332D] flex flex-col font-sans pt-56">
      <Navbar />

      <div className="flex-1 max-w-6xl mx-auto w-full px-6 lg:px-12 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Checkout Form */}
          <div className="flex-1">
            <h1 className="font-serif text-3xl text-[#1E332D] mb-8">Checkout</h1>
            
            <form onSubmit={handlePlaceOrder} className="space-y-8">
              {/* Contact Information */}
              <div className="bg-white p-6 border border-[#E0D9C8] shadow-sm">
                <h2 className="text-sm font-bold uppercase tracking-widest text-[#1E332D] mb-6 border-b border-[#E0D9C8] pb-2">Contact Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-600 mb-1">Email Address</label>
                    <input required type="email" className="w-full px-4 py-3 bg-[#FDFBF7] border border-[#E0D9C8] focus:outline-none focus:ring-1 focus:ring-[#C8A366] text-sm" placeholder="Email" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-600 mb-1">Phone Number</label>
                    <input required type="tel" className="w-full px-4 py-3 bg-[#FDFBF7] border border-[#E0D9C8] focus:outline-none focus:ring-1 focus:ring-[#C8A366] text-sm" placeholder="Phone" />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-white p-6 border border-[#E0D9C8] shadow-sm">
                <h2 className="text-sm font-bold uppercase tracking-widest text-[#1E332D] mb-6 border-b border-[#E0D9C8] pb-2">Shipping Address</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-xs font-semibold text-neutral-600 mb-1">First Name</label>
                    <input required type="text" className="w-full px-4 py-3 bg-[#FDFBF7] border border-[#E0D9C8] focus:outline-none focus:ring-1 focus:ring-[#C8A366] text-sm" placeholder="First Name" />
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-xs font-semibold text-neutral-600 mb-1">Last Name</label>
                    <input required type="text" className="w-full px-4 py-3 bg-[#FDFBF7] border border-[#E0D9C8] focus:outline-none focus:ring-1 focus:ring-[#C8A366] text-sm" placeholder="Last Name" />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-xs font-semibold text-neutral-600 mb-1">Address</label>
                    <input required type="text" className="w-full px-4 py-3 bg-[#FDFBF7] border border-[#E0D9C8] focus:outline-none focus:ring-1 focus:ring-[#C8A366] text-sm" placeholder="Address" />
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-xs font-semibold text-neutral-600 mb-1">City</label>
                    <input required type="text" className="w-full px-4 py-3 bg-[#FDFBF7] border border-[#E0D9C8] focus:outline-none focus:ring-1 focus:ring-[#C8A366] text-sm" placeholder="City" />
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-xs font-semibold text-neutral-600 mb-1">Postal Code</label>
                    <input required type="text" className="w-full px-4 py-3 bg-[#FDFBF7] border border-[#E0D9C8] focus:outline-none focus:ring-1 focus:ring-[#C8A366] text-sm" placeholder="Postal Code" />
                  </div>
                </div>
              </div>

              {/* Payment Processing */}
              <div className="bg-white p-6 border border-[#E0D9C8] shadow-sm">
                <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#1E332D] mb-6 border-b border-[#E0D9C8] pb-2">
                  <CreditCard className="w-5 h-5 text-[#C8A366]" /> Payment
                </h2>
                <div className="space-y-4">
                  <div className="col-span-2">
                    <label className="block text-xs font-semibold text-neutral-600 mb-1">Card Number</label>
                    <input required type="text" className="w-full px-4 py-3 bg-[#FDFBF7] border border-[#E0D9C8] focus:outline-none focus:ring-1 focus:ring-[#C8A366] text-sm" placeholder="0000 0000 0000 0000" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-600 mb-1">Expiry (MM/YY)</label>
                      <input required type="text" className="w-full px-4 py-3 bg-[#FDFBF7] border border-[#E0D9C8] focus:outline-none focus:ring-1 focus:ring-[#C8A366] text-sm" placeholder="MM/YY" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-600 mb-1">CVV</label>
                      <input required type="text" className="w-full px-4 py-3 bg-[#FDFBF7] border border-[#E0D9C8] focus:outline-none focus:ring-1 focus:ring-[#C8A366] text-sm" placeholder="123" />
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-5 bg-[#1A1A1A] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#9A7B38] transition-all duration-300 shadow-xl flex items-center justify-center gap-2"
              >
                <Lock className="w-4 h-4 text-[#D4AF37]" /> Place Secure Order
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:w-100">
            <div className="bg-white p-8 border border-[#E0D9C8] shadow-sm sticky top-32">
              <h3 className="font-serif text-xl font-medium text-[#1A1A1A] mb-6">Order Summary</h3>
              
              <div className="space-y-4 mb-6 max-h-64 overflow-y-auto pr-2">
                {cartItems.map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <img src={item.product.image} alt={item.product.name} className="w-16 h-20 object-cover bg-neutral-100" />
                    <div className="flex-1 text-sm">
                      <p className="font-serif text-[#1E332D]">{item.product.name}</p>
                      <p className="text-xs text-neutral-500 mt-1">{item.size} / {item.color}</p>
                      <p className="text-xs font-semibold mt-1">Qty: {item.quantity}</p>
                    </div>
                    <div className="text-sm font-semibold">
                      ₹{(item.product.price * item.quantity).toLocaleString("en-IN")}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 text-sm text-[#444] pt-4 border-t border-[#EEE]">
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
            </div>
          </div>
        </div>
      </div>

      <Footer />
          </main>
  );
}
