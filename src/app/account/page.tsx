"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import Link from "next/link";
import { ArrowRight, User } from "lucide-react";

export default function AccountPage() {
  
  return (
    <main className="min-h-screen bg-[#F5EFE6] text-[#1E332D] flex flex-col font-sans pt-56">
      <Navbar />

      <div className="flex-1 max-w-5xl mx-auto w-full px-6 lg:px-12 py-16">
        <div className="text-center mb-16">
          <User className="w-10 h-10 text-[#C8A366] mx-auto mb-4 stroke-1" />
          <h1 className="font-serif text-4xl md:text-5xl text-[#1E332D] mb-4">My Account</h1>
          <p className="text-sm uppercase tracking-widest text-neutral-500">
            Sign in to access your bespoke orders and saved items.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* Login Section */}
          <div className="flex flex-col">
            <h2 className="font-serif text-2xl text-[#1E332D] mb-6 border-b border-[#E0D9C8] pb-4">
              Sign In
            </h2>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6 flex-1">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-neutral-600 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 bg-[#FDFBF7] border border-[#E0D9C8] focus:outline-none focus:ring-1 focus:ring-[#C8A366] text-sm transition-colors"
                  placeholder="Email"
                />
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-xs font-bold uppercase tracking-widest text-neutral-600">
                    Password *
                  </label>
                  <a href="#" className="text-[10px] uppercase tracking-widest text-neutral-400 hover:text-[#C8A366] underline">
                    Forgot Password?
                  </a>
                </div>
                <input
                  type="password"
                  required
                  className="w-full px-4 py-3 bg-[#FDFBF7] border border-[#E0D9C8] focus:outline-none focus:ring-1 focus:ring-[#C8A366] text-sm transition-colors"
                  placeholder="Password"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-[#1A1A1A] text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#9A7B38] transition-all duration-300 shadow-md mt-4"
              >
                Sign In
              </button>
            </form>
          </div>

          {/* Registration Section */}
          <div className="flex flex-col">
            <h2 className="font-serif text-2xl text-[#1E332D] mb-6 border-b border-[#E0D9C8] pb-4">
              Create an Account
            </h2>
            <div className="flex-1 flex flex-col justify-between">
              <div className="space-y-4 text-sm text-neutral-600 leading-relaxed mb-8">
                <p>Join Archie's VIP Circle to unlock exclusive privileges:</p>
                <ul className="space-y-3 list-disc list-inside marker:text-[#C8A366]">
                  <li>Early access to limited-edition collections.</li>
                  <li>Track your orders and bespoke tailoring requests.</li>
                  <li>Save your favorite pieces to your wishlist.</li>
                  <li>Faster checkout with saved addresses.</li>
                </ul>
              </div>
              
              <button
                type="button"
                className="w-full py-4 bg-transparent border border-[#1A1A1A] text-[#1A1A1A] text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#1A1A1A] hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Register Now <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Mock Order History Link (for the dummy UI) */}
        <div className="mt-20 text-center border-t border-[#E0D9C8] pt-12">
           <p className="text-sm text-neutral-500 mb-4">Already signed in on another device?</p>
           <Link href="/orders" className="text-xs font-bold uppercase tracking-widest text-[#C8A366] hover:text-[#1A1A1A] underline transition-colors">
              View your past orders directly
           </Link>
        </div>
      </div>

      <Footer />
      <CartDrawer />
          </main>
  );
}
