"use client";

import React, { useRef, useState } from "react";
import { Product } from "@/data/products";
import { Heart, ShoppingBag, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

interface NewArrivalsCarouselProps {
  products: Product[];
  onQuickView: (product: Product) => void;
  onOpenCustomFitModal: () => void;
}

export default function NewArrivalsCarousel({
  products,
  onQuickView,
  onOpenCustomFitModal,
}: NewArrivalsCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Duplicate products to ensure we have enough items to scroll in the demo
  const newArrivals = [...products, ...products].slice(0, 7);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 340; // Approx card width + gap
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative py-16 bg-[#FAF6F0] overflow-hidden">
      <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Title */}
        <h2 className="text-center font-sans text-xl sm:text-2xl text-[#1E332D] mb-10 tracking-wide">
          New Arrival
        </h2>

        {/* Layout Container */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
          
          {/* Card 1: The Video Feature (Fixed on Desktop) */}
          <div className="relative shrink-0 w-full lg:w-85 xl:w-95 aspect-4/5 bg-black overflow-hidden rounded-tl-[40px] rounded-bl-[40px] rounded-tr-sm rounded-br-sm shadow-sm">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-70"
            >
              <source src="/Video-54575.mp4" type="video/mp4" />
            </video>
            
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
            
            <div className="absolute inset-0 p-6 flex flex-col justify-end items-center text-center">
              <p className="text-white/90 text-xs font-serif italic mb-6">
                For some, it begins before the sun.
              </p>
              <button
                onClick={onOpenCustomFitModal}
                className="bg-[#5C162E] text-white px-8 py-2.5 text-[11px] font-bold rounded-full hover:bg-[#3A0E1D] transition-colors w-full max-w-50"
              >
                Show Now
              </button>
            </div>
          </div>

          {/* Carousel Container for Products with Arrows */}
          <div className="relative group flex-1 min-w-0">
            
            {/* Left Arrow */}
            <button
              onClick={() => scroll("left")}
              className="absolute left-2 sm:left-4 top-[40%] -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-white rounded-full shadow-lg text-neutral-500 hover:text-[#1E332D] transition-colors"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={() => scroll("right")}
              className="absolute right-2 sm:right-4 top-[40%] -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-white rounded-full shadow-lg text-neutral-500 hover:text-[#1E332D] transition-colors"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Scrollable Area */}
            <div 
              ref={scrollRef}
              className="flex gap-2 sm:gap-4 overflow-x-auto snap-x snap-mandatory pb-8 lg:pt-0 hide-scrollbar cursor-grab"
            >
              {/* Cards 2+: Products (White Boxy Style) */}
              {newArrivals.map((product, idx) => (
                <div
                  key={`${product.id}-${idx}`}
                  className="relative shrink-0 w-[60vw] sm:w-60 bg-white snap-start flex flex-col border border-neutral-100 shadow-xs rounded-sm"
                >
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
                    <button className="absolute top-4 right-4 text-neutral-400 hover:text-[#5C162E] transition-colors">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Details Section */}
                  <div className="p-4 flex flex-col grow">
                    <span className="text-[9px] tracking-wider uppercase text-neutral-400 mb-1">
                      ARCHIE&apos;S
                    </span>
                    <Link href={`/products/${product.id}`}>
                      <h3 className="text-xs font-medium text-[#1E332D] mb-3 hover:text-[#5C162E] transition-colors line-clamp-1">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="text-[11px] text-neutral-600 mb-4">
                      MRP ₹ {product.price.toLocaleString("en-IN")}
                    </p>

                    <div className="mt-auto flex items-center justify-between">
                      {/* Swatch */}
                      {product.colors[0] && (
                        <div
                          className="w-4 h-4 rounded-full border border-neutral-200"
                          style={{ backgroundColor: product.colors[0].hex }}
                          title={product.colors[0].name}
                        />
                      )}
                      
                      {/* Bag Button */}
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          onQuickView(product); // Assuming quick view acts as "Add to bag" preview
                        }}
                        className="w-8 h-8 rounded-full bg-[#5C162E] text-white flex items-center justify-center hover:bg-[#3A0E1D] transition-colors"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Spacer */}
              <div className="shrink-0 w-2 sm:w-4" />
            </div>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}
