"use client";

import React, { useState } from "react";
import { ArrowDown, ChevronDown } from "lucide-react";

interface HeroProps {
  onOpenCustomFitModal: () => void;
}

export default function Hero({ onOpenCustomFitModal }: HeroProps) {
  const slides = [
    {
      id: 1,
      image: "/images/oye_luxury_hero.jpg",
      subtitle: "INTRODUCING",
      title: "SUMMER 2026",
    },
    {
      id: 2,
      image: "/images/hero_beach_luxury.jpg",
      subtitle: "HANDCRAFTED IN MUMBAI",
      title: "THE AEGEAN MONOKINI",
    },
    {
      id: 3,
      image: "/images/swimsuit_mesh_black.jpg",
      subtitle: "BESPOKE ATELIER",
      title: "SHEER MESH CUTOUTS",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [currency, setCurrency] = useState("USD $");

  return (
    <section className="relative w-full h-screen min-h-175 overflow-hidden bg-black text-white">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-10000 ease-out"
          />
          {/* OYE Style Soft Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-black/40"></div>
        </div>
      ))}

      {/* Content Container (Positioned exact as OYE Swimwear UI screenshot) */}
      <div className="relative z-20 w-full h-full max-w-7xl mx-auto px-6 sm:px-12 flex flex-col justify-end pb-16 pointer-events-none">
        <div className="w-full flex items-end justify-between">
          {/* Bottom Left Hero Title & Action Button */}
          <div className="max-w-md pointer-events-auto">
            <span className="block text-xs sm:text-sm font-semibold tracking-[0.4em] text-white/80 uppercase mb-2">
              {slides[currentSlide].subtitle}
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light tracking-[0.15em] text-white uppercase leading-tight mb-8">
              {slides[currentSlide].title}
            </h2>
            <div className="flex items-center gap-4">
              <a
                href="#collections"
                className="px-8 py-3.5 bg-white text-black font-semibold text-xs tracking-[0.3em] uppercase hover:bg-[#D4AF37] hover:text-white transition-all shadow-lg border border-white"
              >
                SHOP NOW
              </a>
              <button
                onClick={onOpenCustomFitModal}
                className="px-6 py-3.5 bg-black/40 backdrop-blur-md text-white font-semibold text-xs tracking-[0.25em] uppercase hover:bg-white hover:text-black transition-all border border-white/40"
              >
                CUSTOM FIT
              </button>
            </div>
          </div>

          {/* Bottom Right Controls (Currency Switcher & OYE Carousel Dots) */}
          <div className="hidden sm:flex flex-col items-end gap-6 pointer-events-auto">
            {/* Currency Selector Pill */}
            <div className="relative inline-block">
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="appearance-none bg-white text-black text-xs font-semibold uppercase tracking-wider px-4 py-2 pr-8 rounded-none border border-white cursor-pointer focus:outline-none shadow-md"
              >
                <option value="USD $">🇺🇸 USD $</option>
                <option value="INR ₹">🇮🇳 INR ₹</option>
                <option value="EUR €">🇪🇺 EUR €</option>
                <option value="AED د.إ">🇦🇪 AED د.إ</option>
              </select>
              <ChevronDown className="w-4 h-4 text-black absolute right-2.5 top-2.5 pointer-events-none" />
            </div>

            {/* OYE Carousel Dots */}
            <div className="flex items-center space-x-3">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === currentSlide
                      ? "bg-white scale-125 ring-2 ring-offset-2 ring-offset-black ring-white"
                      : "bg-white/40 hover:bg-white/70"
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Center Bottom Down Arrow Button (Exact OYE Circle Button) */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 pointer-events-auto">
          <a
            href="#collections"
            className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#D4AF37] hover:text-white transition-all shadow-xl group"
            aria-label="Scroll down"
          >
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
