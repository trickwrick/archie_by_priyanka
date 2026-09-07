"use client";

import React, { useState } from "react";
import { Product } from "@/data/products";
import { X, Heart, ShoppingBag, Sparkles, Check, ShieldCheck, Truck } from "lucide-react";

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, size: string, color: string) => void;
  onOpenCustomFitModal: () => void;
}

export default function QuickViewModal({
  product,
  onClose,
  onAddToCart,
  onOpenCustomFitModal,
}: QuickViewModalProps) {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0].name);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(product, selectedSize, selectedColor);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#FDFBF7] border border-[#D4AF37]/30 shadow-2xl overflow-hidden my-8 grid grid-cols-1 md:grid-cols-2">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/60 text-white rounded-full hover:bg-black transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Product Image */}
        <div className="relative aspect-3/4 bg-[#1A1A1A]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          {product.badge && (
            <span className="absolute top-4 left-4 bg-[#1A1A1A] text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1">
              {product.badge}
            </span>
          )}
        </div>

        {/* Right Details */}
        <div className="p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#9A7B38] font-bold block mb-1">
              {product.category} • ARCHIE&apos;S BY PRIYANKA
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#1A1A1A] mb-3">
              {product.name}
            </h2>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-4">
              <span className="font-semibold text-xl text-[#1A1A1A]">
                ₹{product.price.toLocaleString("en-IN")}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-[#999] line-through">
                  ₹{product.originalPrice.toLocaleString("en-IN")}
                </span>
              )}
            </div>

            <p className="text-xs text-[#555] font-light leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Fabric Details */}
            <div className="p-3 bg-[#F4F0E8] border border-[#E0D9C8] text-[11px] text-[#444] mb-6 space-y-1">
              <p className="font-semibold text-[#1A1A1A] uppercase tracking-wider text-[10px]">
                Craftsmanship & Fabric:
              </p>
              <p>{product.fabricDetails}</p>
            </div>

            {/* Color Swatches */}
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#333] block mb-2">
                Color: <span className="font-normal text-[#666]">{selectedColor}</span>
              </span>
              <div className="flex items-center gap-3">
                {product.colors.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setSelectedColor(c.name)}
                    className={`w-6 h-6 rounded-full border-2 transition-all ${
                      selectedColor === c.name
                        ? "ring-2 ring-offset-2 ring-[#9A7B38] scale-110"
                        : "border-[#ccc]"
                    }`}
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                  />
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#333]">
                  Select Size:
                </span>
                <button
                  onClick={() => {
                    onClose();
                    onOpenCustomFitModal();
                  }}
                  className="text-xs font-bold text-[#9A7B38] hover:underline flex items-center gap-1"
                >
                  <Sparkles className="w-3 h-3" />
                  Request Custom Measurement Fit
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => {
                      if (s === "Custom Fit") {
                        onClose();
                        onOpenCustomFitModal();
                      } else {
                        setSelectedSize(s);
                      }
                    }}
                    className={`text-xs font-semibold px-3 py-2 transition-all ${
                      s === "Custom Fit"
                        ? "bg-[#9A7B38]/10 text-[#9A7B38] border border-[#9A7B38]"
                        : selectedSize === s
                        ? "bg-[#1A1A1A] text-white"
                        : "bg-[#F3EFE6] text-[#444] hover:bg-[#EAE4D6]"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-4 border-t border-[#E0D9C8]">
            <button
              onClick={handleAdd}
              className={`w-full py-4 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-2 ${
                added
                  ? "bg-[#25D366] text-white"
                  : "bg-[#1A1A1A] text-white hover:bg-[#9A7B38]"
              }`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" />
                  Added to Bag
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  Add to Shopping Bag
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
