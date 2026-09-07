"use client";

import React, { useState, useEffect } from "react";
import { Search, ShoppingBag, Heart, Menu, X, Sparkles } from "lucide-react";
import Logo from "@/components/Logo";

interface NavbarProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenCustomFitModal: () => void;
}

export default function Navbar({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenCustomFitModal,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out">
      {/* 1. Top Ticker Bar (Collapses smoothly on scroll) */}
      <div
        className={`w-full text-[11px] uppercase tracking-[0.25em] text-center font-medium overflow-hidden transition-all duration-700 ease-in-out border-b ${
          isScrolled
            ? "max-h-0 opacity-0 py-0 border-transparent"
            : "max-h-10 opacity-100 py-1.5 bg-[#1E332D]/90 backdrop-blur-md text-white border-white/10"
        }`}
      >
        <span className="text-[#C8A366]">
          COMPLIMENTARY GLOBAL EXPRESS SHIPPING ON ORDERS OVER ₹5,000 • BESPOKE CUSTOM FITTING AVAILABLE
        </span>
      </div>

      {/* 2. Main Navigation Wrapper */}
      <nav
        className={`w-full transition-all duration-700 ease-in-out ${
          isScrolled
            ? "bg-[#F5EFE6]/95 backdrop-blur-md py-2.5 border-b border-[#C8A366]/30 shadow-md text-[#1E332D]"
            : "bg-linear-to-b from-[#1E332D]/85 via-[#1E332D]/40 to-transparent py-4 text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center">
          {/* Big Official Logo Header Row (Smoothly slides up on scroll) */}
          <div
            className={`w-full flex items-center justify-between transition-all duration-700 ease-in-out overflow-hidden ${
              isScrolled
                ? "max-h-0 opacity-0 -translate-y-3 pointer-events-none mb-0"
                : "max-h-40 opacity-100 translate-y-0 mb-1 py-0.5"
            }`}
          >
            {/* Mobile Menu Icon */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden text-white hover:text-[#C8A366] transition-colors"
              aria-label="Open Mobile Menu"
            >
              <Menu className="w-6 h-6 stroke-1" />
            </button>

            {/* Left Atelier Mumbai text */}
            <div className="hidden lg:block w-48 text-[11px] uppercase tracking-[0.25em] font-medium text-white/80">
              <button
                onClick={onOpenCustomFitModal}
                className="flex items-center gap-1.5 hover:text-[#C8A366] transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#C8A366]" />
                ATELIER MUMBAI
              </button>
            </div>

            {/* Center Official Brand Logo (Sun & Wave Icon + Archie's + Divider + BY PRIYANKA) */}
            <div className="text-center py-1">
              <a href="#">
                <Logo light={true} />
              </a>
            </div>

            {/* Top Right Action Links */}
            <div className="flex items-center space-x-6 text-xs uppercase font-medium tracking-[0.25em]">
              <button
                onClick={onOpenCustomFitModal}
                className="hidden md:inline-block font-semibold text-[#C8A366] hover:text-white transition-colors"
              >
                BESPOKE FIT
              </button>

              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="hover:text-[#C8A366] transition-colors flex items-center gap-1 text-white"
              >
                <Search className="w-4 h-4 stroke-1 inline md:hidden" />
                <span className="hidden md:inline">SEARCH</span>
              </button>

              <button
                onClick={onOpenCart}
                className="bg-[#F5EFE6] text-[#1E332D] hover:bg-[#C8A366] hover:text-white border border-[#C8A366]/40 px-3.5 py-1.5 text-xs font-bold tracking-[0.25em] uppercase transition-all shadow-sm"
              >
                CART ({cartCount})
              </button>
            </div>
          </div>

          {/* 3. Sticky Slim Bar (Smoothly transitions on scroll) */}
          <div
            className={`w-full flex items-center justify-between transition-all duration-700 ease-in-out ${
              isScrolled ? "pt-0 border-t-0" : "pt-3 border-t border-white/20"
            }`}
          >
            {/* Scrolled Compact Logo */}
            <div
              className={`transition-all duration-700 ease-in-out ${
                isScrolled ? "opacity-100 w-auto" : "opacity-0 w-0 overflow-hidden"
              }`}
            >
              <a href="#">
                <Logo light={false} compact={true} />
              </a>
            </div>

            {/* Centered Navigation Category Links */}
            <div
              className={`flex items-center justify-center space-x-8 sm:space-x-10 text-[11px] font-semibold tracking-[0.3em] uppercase transition-all duration-700 ${
                isScrolled ? "text-[#1E332D]" : "text-white/90"
              }`}
            >
              <a
                href="#collections"
                className={`pb-0.5 transition-colors ${
                  isScrolled ? "hover:text-[#C8A366]" : "hover:text-white hover:border-b border-white"
                }`}
              >
                SWIMWEAR
              </a>
              <a
                href="#collections"
                className={`pb-0.5 transition-colors ${
                  isScrolled ? "hover:text-[#C8A366]" : "hover:text-white hover:border-b border-white"
                }`}
              >
                ONE PIECE
              </a>
              <a
                href="#collections"
                className={`pb-0.5 transition-colors ${
                  isScrolled ? "hover:text-[#C8A366]" : "hover:text-white hover:border-b border-white"
                }`}
              >
                BIKINIS
              </a>
              <button
                onClick={onOpenCustomFitModal}
                className={`font-bold transition-colors ${
                  isScrolled ? "text-[#C8A366] hover:text-[#1E332D]" : "text-[#C8A366] hover:text-white"
                }`}
              >
                CUSTOM FITTING
              </button>
              <a
                href="#instagram"
                className={`pb-0.5 transition-colors ${
                  isScrolled ? "hover:text-[#C8A366]" : "hover:text-white hover:border-b border-white"
                }`}
              >
                IG SHOP
              </a>
            </div>

            {/* Scrolled Compact Action Links */}
            <div
              className={`transition-all duration-700 ease-in-out flex items-center space-x-4 ${
                isScrolled ? "opacity-100 w-auto" : "opacity-0 w-0 overflow-hidden"
              }`}
            >
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="hover:text-[#C8A366] transition-colors"
                aria-label="Search"
              >
                <Search className="w-4 h-4 text-[#1E332D] stroke-1" />
              </button>
              <button
                onClick={onOpenCart}
                className="bg-[#1E332D] text-white px-3 py-1 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-[#C8A366] transition-colors shadow-xs"
              >
                CART ({cartCount})
              </button>
            </div>
          </div>
        </div>

        {/* Expandable Search Input */}
        {searchOpen && (
          <div className="max-w-2xl mx-auto px-4 mt-3 animate-in fade-in duration-300">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="SEARCH MONOKINIS, BIKINIS, MESH CUTOUTS..."
                className={`w-full px-6 py-2.5 border text-xs font-medium tracking-widest uppercase focus:outline-none ${
                  isScrolled
                    ? "bg-[#F5EFE6] border-[#1E332D] text-[#1E332D] focus:outline-none focus:ring-1 focus:ring-[#C8A366]"
                    : "bg-[#1E332D]/90 border-white/40 text-white focus:outline-none focus:ring-1 focus:ring-[#C8A366]"
                }`}
                autoFocus
              />
              <button
                onClick={() => setSearchOpen(false)}
                className={`absolute right-4 top-2.5 ${
                  isScrolled ? "text-[#1E332D] hover:text-[#C8A366]" : "text-white hover:text-[#C8A366]"
                }`}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#F5EFE6] lg:hidden p-8 flex flex-col justify-between text-[#1E332D] animate-in fade-in">
          <div>
            <div className="flex justify-between items-center pb-6 border-b border-[#C8A366]/30">
              <Logo light={false} compact={true} />
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="w-6 h-6 text-[#1E332D]" />
              </button>
            </div>
            <div className="flex flex-col space-y-6 mt-8 text-xs uppercase tracking-[0.3em] font-bold text-[#1E332D]">
              <a href="#collections" onClick={() => setMobileMenuOpen(false)}>SWIMWEAR COLLECTION</a>
              <a href="#collections" onClick={() => setMobileMenuOpen(false)}>ONE PIECE & MONOKINIS</a>
              <a href="#collections" onClick={() => setMobileMenuOpen(false)}>BIKINIS</a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCustomFitModal();
                }}
                className="text-left text-[#C8A366] font-bold"
              >
                BESPOKE CUSTOM FITTING
              </button>
              <a href="#instagram" onClick={() => setMobileMenuOpen(false)}>IG SHOP @ARCHIE_BY_PRIYANKA</a>
            </div>
          </div>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenCustomFitModal();
            }}
            className="w-full py-4 bg-[#1E332D] text-white font-semibold text-xs tracking-[0.25em] uppercase hover:bg-[#C8A366]"
          >
            BOOK CUSTOM FITTING
          </button>
        </div>
      )}
    </header>
  );
}
