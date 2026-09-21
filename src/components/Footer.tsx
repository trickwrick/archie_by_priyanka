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
  onOpenCustomFitModal: () => void;
}

export default function Footer({ onOpenCustomFitModal }: FooterProps) {
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
    <footer className="bg-[#1E332D] text-white pt-20 pb-10 border-t border-[#C8A366]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Newsletter & Atelier Box */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pb-16 border-b border-[#C8A366]/30">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-[#C8A366] uppercase mb-3">
              <Sparkles className="w-4 h-4 text-[#C8A366]" />
              THE PRIVATE ATELIER CLUB
            </div>
            <h3 className="font-serif text-3xl font-normal text-white mb-3">
              Join Archie&apos;s VIP Circle
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
                  className="px-6 py-3 bg-[#C8A366] text-[#1E332D] font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors flex items-center gap-2"
                >
                  Join <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            ) : (
              <div className="p-4 bg-white/10 border border-[#C8A366] text-xs text-[#C8A366] font-semibold max-w-md">
                Welcome to the VIP Circle! You will receive our next collection lookbook directly.
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xs text-white/70">
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
                  <Link href="/contact" className="hover:text-[#C8A366] transition-colors">
                    Contact Atelier
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

            {/* Client Care */}
            <div>
              <h4 className="font-serif text-base font-medium text-white mb-4 tracking-wider uppercase">
                Client Care
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <button
                    onClick={onOpenCustomFitModal}
                    className="text-[#C8A366] font-bold hover:underline flex items-center gap-1"
                  >
                    <Sparkles className="w-3 h-3" />
                    Bespoke Fitting
                  </button>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-[#C8A366] transition-colors">
                    FAQ & Lycra Guide
                  </Link>
                </li>
                <li>
                  <Link href="/shipping" className="hover:text-[#C8A366] transition-colors">
                    Global Shipping
                  </Link>
                </li>
                <li>
                  <Link href="/returns" className="hover:text-[#C8A366] transition-colors">
                    Returns & Exchanges
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Brand Copyright Footer Bottom */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-serif text-xl tracking-[0.2em] font-light text-white uppercase block">
              ARCHIE&apos;S BY PRIYANKA
            </span>
            <p className="text-[11px] text-white/60 font-light mt-1">
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

          <div className="flex flex-col items-center md:items-end gap-3 text-[11px] text-white/50 mt-4 md:mt-0">
            <p className="text-center md:text-right">
              &copy; {new Date().getFullYear()} Archie&apos;s by Priyanka. All rights reserved.
            </p>
            <img src="/payment-icons.png" alt="Accepted Payment Methods" className="h-7 md:h-8 opacity-80 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </footer>
  );
}
