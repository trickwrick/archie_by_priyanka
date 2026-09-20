"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Product } from "@/data/products";
import { X, Trash2, ShoppingBag, Sparkles, ArrowRight, ShieldCheck, Truck } from "lucide-react";
import { useShop, CartItem } from "@/context/ShopContext";

interface CartDrawerProps {
  onOpenCustomFitModal: () => void;
}

export default function CartDrawer({
  onOpenCustomFitModal,
}: CartDrawerProps) {
  const { isCartOpen, setIsCartOpen, cartItems, updateQuantity, removeFromCart } = useShop();
  const [promoCode, setPromoCode] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);

  if (!isCartOpen) return null;

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  const discount = discountApplied ? Math.round(subtotal * 0.1) : 0;
  const shippingThreshold = 5000;
  const freeShipping = subtotal >= shippingThreshold || subtotal === 0;
  const shippingCost = freeShipping ? 0 : 350;
  const grandTotal = Math.max(0, subtotal - discount + shippingCost);
  const progressPercent = Math.min(100, (subtotal / shippingThreshold) * 100);

  const applyPromo = () => {
    if (promoCode.trim().toUpperCase() === "PRIYANKA10" || promoCode.trim().toUpperCase() === "SWIM10") {
      setDiscountApplied(true);
    } else {
      alert("Invalid code. Use PRIYANKA10 for 10% off!");
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="fixed inset-y-0 right-0 w-full max-w-md bg-[#FDFBF7] shadow-2xl flex flex-col justify-between border-l border-[#E0D9C8]">
        {/* Cart Drawer Header */}
        <div className="p-6 bg-[#1A1A1A] text-white flex items-center justify-between border-b border-[#333]">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-[#D4AF37]" />
            <div>
              <h2 className="font-serif text-xl font-medium tracking-wide">Your Luxury Bag</h2>
              <p className="text-[10px] text-neutral-400 uppercase tracking-widest">
                {cartItems.length} {cartItems.length === 1 ? "Item" : "Items"} Selected
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 text-neutral-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Free Shipping Progress Bar */}
        <div className="bg-[#F4F0E8] p-4 border-b border-[#E0D9C8]">
          <div className="flex items-center justify-between text-xs text-[#333] mb-1.5 font-medium">
            <span className="flex items-center gap-1.5">
              <Truck className="w-4 h-4 text-[#9A7B38]" />
              {freeShipping
                ? "You unlocked Complimentary Express Shipping!"
                : `Add ₹${(shippingThreshold - subtotal).toLocaleString("en-IN")} more for Free Shipping`}
            </span>
          </div>
          <div className="w-full bg-[#E0DACC] h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-[#9A7B38] h-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <ShoppingBag className="w-12 h-12 text-[#CCC] mx-auto stroke-1" />
              <p className="font-serif text-2xl text-[#666]">Your bag is currently empty</p>
              <p className="text-xs text-[#888] max-w-xs mx-auto">
                Explore our signature monokinis, bikinis, and custom resortwear pieces.
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="mt-4 px-6 py-3 bg-[#1A1A1A] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#9A7B38] transition-colors"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            cartItems.map((item, idx) => (
              <div
                key={`${item.product.id}-${item.size}-${item.color}-${idx}`}
                className="flex gap-4 pb-6 border-b border-[#EBE6DC]"
              >
                <Link href={`/products/${item.product.id}`} onClick={() => setIsCartOpen(false)}>
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-24 object-cover border border-[#E0D9C8] bg-neutral-100 hover:opacity-90 transition-opacity"
                  />
                </Link>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <Link href={`/products/${item.product.id}`} onClick={() => setIsCartOpen(false)}>
                        <h4 className="font-serif text-base font-medium text-[#1A1A1A] hover:text-[#9A7B38] transition-colors">
                          {item.product.name}
                        </h4>
                      </Link>
                      <button
                        onClick={() => removeFromCart(item.product.id, item.size, item.color)}
                        className="text-[#999] hover:text-red-600 transition-colors"
                        title="Remove"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="text-xs text-[#666] mt-1 space-y-0.5">
                      <p>Size: <span className="font-semibold text-black">{item.size}</span></p>
                      <p>Color: <span className="font-semibold text-black">{item.color}</span></p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    {/* Quantity Selector */}
                    <div className="flex items-center border border-[#CCC] bg-white">
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.size, item.color, -1)
                        }
                        className="px-2.5 py-0.5 text-xs text-[#555] hover:bg-[#EEE]"
                      >
                        -
                      </button>
                      <span className="px-3 py-0.5 text-xs font-semibold">{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.size, item.color, 1)
                        }
                        className="px-2.5 py-0.5 text-xs text-[#555] hover:bg-[#EEE]"
                      >
                        +
                      </button>
                    </div>

                    <span className="font-semibold text-sm text-[#1A1A1A]">
                      ₹{(item.product.price * item.quantity).toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Cart Drawer Footer Summary */}
        {cartItems.length > 0 && (
          <div className="p-6 bg-white border-t border-[#E0D9C8] space-y-4 shadow-inner">
            {/* Promo Code Box */}
            <div className="flex gap-2">
              <input
                type="text"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                placeholder="Promo code (e.g. PRIYANKA10)"
                className="flex-1 px-3 py-2 border border-[#DDD] text-xs focus:outline-none focus:ring-1 focus:ring-[#9A7B38] uppercase"
              />
              <button
                onClick={applyPromo}
                className="px-4 py-2 bg-[#1A1A1A] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#9A7B38] transition-colors"
              >
                Apply
              </button>
            </div>

            {/* Custom fit note trigger */}
            <button
              onClick={() => {
                setIsCartOpen(false);
                onOpenCustomFitModal();
              }}
              className="w-full text-left py-2 px-3 bg-[#F8F5EE] border border-[#E0D9C8] text-[11px] text-[#9A7B38] font-bold flex items-center justify-between"
            >
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Need custom sizing adjustments for items in bag?
              </span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Summary Lines */}
            <div className="space-y-1.5 text-xs text-[#444] pt-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString("en-IN")}</span>
              </div>
              {discountApplied && (
                <div className="flex justify-between text-[#25D366] font-semibold">
                  <span>VIP Discount (10%)</span>
                  <span>-₹{discount.toLocaleString("en-IN")}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{freeShipping ? "FREE" : `₹${shippingCost}`}</span>
              </div>
              <div className="flex justify-between text-base font-bold text-[#1A1A1A] pt-2 border-t border-[#EEE]">
                <span>Total Amount</span>
                <span>₹{grandTotal.toLocaleString("en-IN")}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <Link
              href="/checkout"
              onClick={() => setIsCartOpen(false)}
              className="w-full py-4 bg-[#1A1A1A] text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#9A7B38] transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
            >
              Proceed to Secure Checkout
              <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
