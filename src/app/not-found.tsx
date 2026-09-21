"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#1E332D] flex flex-col font-sans">
      <Navbar  />

      <div className="flex-1 flex flex-col items-center justify-center text-center px-6 pt-32 pb-24">
        <h1 className="font-serif text-8xl md:text-9xl text-[#C8A366] mb-6">404</h1>
        <h2 className="font-serif text-3xl md:text-4xl text-[#1E332D] mb-6">
          Page Not Found
        </h2>
        <p className="text-sm uppercase tracking-widest text-neutral-500 max-w-md mx-auto mb-12 leading-relaxed">
          The page you are looking for has either been moved, deleted, or does not exist in our bespoke collection.
        </p>
        
        <Link 
          href="/" 
          className="bg-[#1E332D] text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#C8A366] transition-colors shadow-lg"
        >
          Return to Home
        </Link>
      </div>

      <Footer  />
    </main>
  );
}
