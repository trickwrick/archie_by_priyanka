"use client";

import React, { useState } from "react";
import { Send, Heart, Sparkles, ShieldCheck, Truck, Lock } from "lucide-react";
import Link from "next/link";

const InstagramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

interface FooterProps {
}

export default function Footer({}: FooterProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#997451] text-white pt-20 pb-10 border-t border-[#C8A366]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Newsletter & Atelier Box */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pb-16 border-b border-[#C8A366]/30">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-[#C8A366] uppercase mb-3">
              <Sparkles className="w-4 h-4 text-[#C8A366]" />
              THE PRIVATE ATELIER CLUB
            </div>
            <h3 className="font-serif text-3xl font-normal tracking-[0.15em] text-white uppercase mb-3">
              ARCHIE&apos;S BY PRIYANKA
            </h3>
            <p className="text-xs text-white/70 font-light leading-relaxed max-w-md mb-6">
              Subscribe for exclusive previews of Priyanka&apos;s limited-edition resortwear, private fitting sessions, and VIP trunk show invitations.
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  required
                  className="flex-1 px-4 py-3 bg-white/10 border border-[#C8A366]/40 text-xs text-white placeholder:opacity-50 focus:outline-none focus:ring-1 focus:ring-[#C8A366]"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#C8A366] text-[#997451] font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors flex items-center gap-2"
                >
                  Join <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            ) : (
              <div className="p-4 bg-white/10 border border-[#C8A366] text-xs text-[#C8A366] font-semibold max-w-md">
                Welcome to the VIP Circle! You will receive our next collection lookbook directly.
              </div>
            )}

            {/* Payment Methods */}
            <div className="mt-8 max-w-md">
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 mb-3 font-semibold">Accepted Payment Methods</p>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                {/* Visa */}
                <div className="bg-white px-2.5 py-1 rounded-sm shadow-sm flex items-center justify-center h-8" title="Visa">
                  <span className="text-[#1434CB] font-black italic text-sm leading-none">VISA</span>
                </div>
                {/* MasterCard */}
                <div className="bg-white px-2 py-1 rounded-sm shadow-sm flex items-center justify-center h-8" title="MasterCard">
                  <div className="flex items-center">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#EB001B] opacity-90 z-10"></div>
                    <div className="w-3.5 h-3.5 rounded-full bg-[#F79E1B] opacity-90 -ml-1.5 z-0"></div>
                  </div>
                  <span className="text-[#1A1F71] font-bold text-[9px] ml-1">mastercard</span>
                </div>
                {/* Amex */}
                <div className="bg-[#2671B9] px-2 py-1 rounded-sm shadow-sm flex items-center justify-center h-8" title="American Express">
                  <span className="text-white font-bold text-[10px] tracking-wider">AMEX</span>
                </div>
                {/* Net Banking */}
                <div className="bg-white px-2.5 py-1 rounded-sm shadow-sm flex items-center justify-center h-8" title="Net Banking">
                  <span className="text-neutral-700 font-bold text-[10px]">Net Banking</span>
                </div>
                {/* COD */}
                <div className="bg-[#C8A366] px-2.5 py-1 rounded-sm shadow-sm flex items-center justify-center h-8" title="Cash on Delivery">
                  <span className="text-[#997451] font-bold text-[10px]">COD</span>
                </div>
                {/* BHIM UPI */}
                <div className="bg-white px-2 py-1 rounded-sm shadow-sm flex items-center justify-center gap-1 h-8" title="BHIM UPI">
                  <span className="text-[#FF7A00] font-black text-[10px]">BHIM</span>
                  <span className="text-[#00892C] font-black text-[10px]">UPI</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xs text-white/70">
            {/* Customer Care */}
            <div>
              <h4 className="font-serif text-base font-medium text-white mb-4 tracking-wider uppercase">
                Customer Care
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/shipping" className="hover:text-[#C8A366] transition-colors">
                    Shipping / Track Your Order
                  </Link>
                </li>
                <li>
                  <Link href="/returns" className="hover:text-[#C8A366] transition-colors">
                    Return & Refund Policy
                  </Link>
                </li>
                <li>
                  <Link href="/returns" className="hover:text-[#C8A366] transition-colors">
                    Cancellation / Return Order
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-[#C8A366] transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-[#C8A366] transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-[#C8A366] transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#C8A366] transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* The Brand */}
            <div>
              <h4 className="font-serif text-base font-medium text-white mb-4 tracking-wider uppercase">
                The Brand
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/about" className="hover:text-[#C8A366] transition-colors">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="/admin/login" className="hover:text-[#C8A366] transition-colors">
                    Admin Portal
                  </Link>
                </li>
              </ul>
            </div>

            {/* Collections */}
            <div>
              <h4 className="font-serif text-base font-medium text-white mb-4 tracking-wider uppercase">
                Collections
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/products?category=Monokinis" className="hover:text-[#C8A366] transition-colors">
                    The Monokini Edit
                  </Link>
                </li>
                <li>
                  <Link href="/products?category=Mesh & Cutouts" className="hover:text-[#C8A366] transition-colors">
                    Optical Mesh Cutouts
                  </Link>
                </li>
                <li>
                  <Link href="/products?category=Bikinis" className="hover:text-[#C8A366] transition-colors">
                    Riviera Ribbed Bikinis
                  </Link>
                </li>
                <li>
                  <Link href="/products?category=Resortwear" className="hover:text-[#C8A366] transition-colors">
                    Luxe Sarongs & Cover-ups
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Brand Copyright Footer Bottom */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-[11px] text-white/60 font-light mt-1 md:mt-0">
              Handcrafted Swimwear & Resortwear • Designed by Priyanka in Mumbai, India.
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs text-white/70">
            <a
              href="https://www.instagram.com/archie_by_priyanka/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#C8A366] transition-colors font-semibold"
            >
              <InstagramIcon className="w-4 h-4 text-[#C8A366]" />
              @archie_by_priyanka
            </a>
            <span className="text-white/30">|</span>
            <span className="flex items-center gap-1">
              <Lock className="w-3.5 h-3.5 text-[#C8A366]" />
              Encrypted Checkout
            </span>
          </div>

          <p className="text-[11px] text-white/50 text-center md:text-right">
            &copy; {new Date().getFullYear()} Archie&apos;s by Priyanka. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
