"use client";

import React from "react";
import { Product } from "@/data/products";
import { Heart, ShoppingBag } from "lucide-react";
import Link from "next/link";

interface StickyProductGridProps {
  products: Product[];
  onQuickView: (product: Product) => void;
}

export default function StickyProductGrid({ products, onQuickView }: StickyProductGridProps) {
  // Duplicate products to fill the grid (let's show 6 products instead of 8 so it's shorter)
  const gridProducts = [...products, ...products].slice(0, 6);

  return (
    <section className="bg-[#FAF6F0] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 relative items-stretch">
          
          {/* Left Side: Sticky Banner Container */}
          <div className="w-full lg:w-1/3 shrink-0 relative mb-8 lg:mb-0">
            <div className="lg:sticky lg:top-32 w-full h-[600px] bg-[#F8E7D8] rounded-xl overflow-hidden flex flex-col items-center shadow-sm">
              {/* Banner Top Text/Graphic */}
              <div className="pt-8 pb-4 px-4 text-center w-full relative z-10">
                <div className="inline-block bg-[#F1592A] text-white px-6 py-2 text-2xl font-black tracking-widest relative">
                  STEAL
                  <span className="absolute -top-3 -right-5 rotate-12 bg-white text-[#F1592A] border border-[#F1592A] px-1.5 py-0.5 text-[9px] font-bold shadow-xs">
                    deal
                  </span>
                </div>
                <p className="mt-3 text-[10px] font-bold tracking-widest text-[#4A1525] uppercase">
                  Limited Period Offer
                </p>
              </div>

              {/* Banner Image */}
              <div className="relative w-full flex-1 min-h-[300px]">
                <img
                  src="/images/hero_beach_luxury.jpg" 
                  alt="Deal of the day"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
                {/* Overlay Gradient at Bottom */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-[#F8E7D8] via-[#F8E7D8]/80 to-transparent" />
                
                {/* Bottom Call to Action */}
                <div className="absolute bottom-6 inset-x-0 flex flex-col items-center">
                  <p className="text-white font-medium text-base drop-shadow-md mb-3">
                    Deal of the day
                  </p>
                  <button className="bg-[#5C162E] text-white px-8 py-2 text-xs font-bold rounded-full hover:bg-[#3A0E1D] shadow-lg transition-colors">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Scrolling Product Grid */}
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {gridProducts.map((product, idx) => (
                <div
                  key={`sticky-${product.id}-${idx}`}
                  className="bg-white flex flex-col border border-neutral-100 shadow-xs rounded-sm group relative"
                >
                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-0 left-0 bg-[#FF6B6B] text-white text-[10px] font-bold px-2 py-1 z-10">
                      {product.badge}
                    </div>
                  )}

                  {/* Image Section */}
                  <div className="relative aspect-4/5 overflow-hidden bg-neutral-100 p-2">
                    <Link href={`/products/${product.id}`} className="block w-full h-full">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </Link>

                    {/* Heart Icon (Wishlist) */}
                    <button className="absolute top-4 right-4 text-neutral-400 hover:text-[#5C162E] transition-colors z-10 bg-white/80 p-1 rounded-full backdrop-blur-xs">
                      <Heart className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Details Section */}
                  <div className="p-3 sm:p-4 flex flex-col grow">
                    <span className="text-[9px] tracking-wider uppercase text-neutral-400 mb-1">
                      ARCHIE&apos;S
                    </span>
                    <Link href={`/products/${product.id}`}>
                      <h3 className="text-[11px] sm:text-xs font-medium text-[#1E332D] mb-2 sm:mb-3 hover:text-[#5C162E] transition-colors line-clamp-2">
                        {product.name}
                      </h3>
                    </Link>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs sm:text-sm font-semibold text-neutral-800">
                        ₹ {product.price.toLocaleString("en-IN")}
                      </span>
                      {product.originalPrice && (
                        <span className="text-[10px] sm:text-xs text-neutral-400 line-through">
                          ₹ {product.originalPrice.toLocaleString("en-IN")}
                        </span>
                      )}
                    </div>

                    <div className="mt-auto flex items-center justify-between">
                      {/* Swatch */}
                      <div className="flex gap-1">
                        {product.colors.map((color, cIdx) => (
                          <div
                            key={cIdx}
                            className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border border-neutral-200"
                            style={{ backgroundColor: color.hex }}
                            title={color.name}
                          />
                        ))}
                      </div>
                      
                      {/* Bag Button */}
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          onQuickView(product);
                        }}
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#5C162E] text-white flex items-center justify-center hover:bg-[#3A0E1D] transition-colors shrink-0"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
