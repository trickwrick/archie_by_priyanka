"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import Image from "next/image";

export default function AboutPage() {
  
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#1E332D] flex flex-col font-sans pt-32 md:pt-40">
      <Navbar />

      <div className="flex-1">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center mb-16 md:mb-24">
          <h1 className="font-serif text-4xl md:text-6xl text-[#1E332D] mb-6">Our Atelier Story</h1>
          <p className="text-xs uppercase tracking-[0.25em] text-[#C8A366] font-bold mb-8">Archie's by Priyanka</p>
          <p className="text-base md:text-lg text-neutral-600 leading-relaxed font-light">
            Redefining luxury resort wear through meticulous craftsmanship, sculptural cuts, and an unyielding commitment to confidence.
          </p>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative aspect-4/5 bg-neutral-200">
            {/* Placeholder for a beautiful brand image */}
            <div className="absolute inset-0 bg-[#1E332D]/5"></div>
            <img 
              src="https://images.unsplash.com/photo-1515347619362-717db4457e4b?q=80&w=2070&auto=format&fit=crop" 
              alt="Priyanka working on a design"
              className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="space-y-8">
            <h2 className="font-serif text-3xl md:text-4xl text-[#1E332D]">The Visionary Behind the Brand</h2>
            <p className="text-neutral-600 leading-relaxed text-sm md:text-base">
              Archie's by Priyanka was born out of a simple, yet profound realization: standard swimwear sizes rarely fit the beautiful complexity of real human bodies. Our founder, Priyanka, noticed that women were constantly compromising—choosing between style and comfort, between fashion-forward cutouts and the security of a perfect fit.
            </p>
            <p className="text-neutral-600 leading-relaxed text-sm md:text-base">
              Trained in traditional couture techniques, Priyanka set out to create luxury resort wear that flatters and holds with uncompromising elegance. Every piece we create is more than just a garment; it is a meticulously engineered second skin designed to empower.
            </p>
            <div className="pt-6 border-t border-[#E0D9C8]">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C8A366] mb-4">Our Core Philosophy</h3>
              <ul className="space-y-3 text-sm text-[#1E332D] font-medium">
                <li>✨ Zero-Pinch Confidence</li>
                <li>✨ Double-Lined Italian Luxury Fabrics</li>
                <li>✨ Hand-Crafted in our Mumbai Atelier</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Collection Call to Action */}
        <div className="bg-[#1E332D] text-white py-24 px-6 text-center">
          <h2 className="font-serif text-3xl md:text-5xl mb-6">Discover the Atelier</h2>
          <p className="text-white/70 max-w-xl mx-auto mb-10 text-sm tracking-wide leading-relaxed">
            Explore our curated collections of monokinis, bikinis, and statement resort pieces crafted with Italian lycra and 24K gold hardware.
          </p>
          <Link
            href="/products"
            className="inline-block bg-[#C8A366] text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.25em] hover:bg-white hover:text-[#1E332D] transition-colors shadow-xl"
          >
            Explore The Collection
          </Link>
        </div>
      </div>

      <Footer />
      <CartDrawer />
          </main>
  );
}
