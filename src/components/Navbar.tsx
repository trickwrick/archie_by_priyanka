"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Search, ShoppingBag, Heart, Menu, X, Sparkles, User } from "lucide-react";
import Logo from "@/components/Logo";
import { useShop } from "@/context/ShopContext";

interface NavbarProps {
  onOpenCustomFitModal: () => void;
}

export default function Navbar({
  onOpenCustomFitModal,
}: NavbarProps) {
  const { cartTotalCount, setIsCartOpen, wishlistCount } = useShop();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  
  const isHome = pathname === "/";

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out">
      {/* 1. Top Ticker Bar */}
      <div className="w-full text-[10px] uppercase tracking-[0.25em] text-center font-bold overflow-hidden bg-[#1A1A1A] text-[#C8A366] py-2">
        <span>
          COMPLIMENTARY GLOBAL EXPRESS SHIPPING ON ORDERS OVER ₹5,000
        </span>
      </div>

      {/* 2. Main Navigation */}
      <nav
        className={`w-full transition-all duration-300 ease-in-out ${
          isScrolled || !isHome
            ? "bg-[#1E332D]/95 backdrop-blur-md shadow-md py-3"
            : "bg-linear-to-b from-black/50 to-transparent py-4 md:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-3 items-center">
            
            {/* Left: Brand Logo */}
            <div className="flex items-center justify-start">
              {/* Mobile Menu Icon */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden transition-colors text-white hover:text-[#C8A366] mr-4"
                aria-label="Open Mobile Menu"
              >
                <Menu className="w-6 h-6 stroke-1" />
              </button>
              <Link href="/">
                <Logo light={true} compact={isScrolled || !isHome} />
              </Link>
            </div>

            {/* Center: Navigation Links */}
            <div className="flex items-center justify-center gap-8">
              {/* Desktop Links */}
              <div className="hidden lg:flex items-center space-x-8 text-[11px] font-bold tracking-[0.25em] uppercase text-white">
                <Link href="/products" className="hover:text-[#C8A366] transition-colors">
                  SHOP
                </Link>
                <Link href="/products?category=Monokinis" className="hover:text-[#C8A366] transition-colors">
                  MONOKINIS
                </Link>
                <Link href="/products?category=Bikinis" className="hover:text-[#C8A366] transition-colors">
                  BIKINIS
                </Link>
                <button onClick={onOpenCustomFitModal} className="hover:text-[#C8A366] transition-colors">
                  CUSTOM FIT
                </button>
              </div>
            </div>

            {/* Right: Utility Icons */}
            <div className="flex items-center justify-end space-x-4 lg:space-x-6 text-white mt-1">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="hover:text-[#C8A366] transition-colors flex flex-col items-center gap-1 group"
                aria-label="Search"
              >
                <Search className="w-5 h-5 sm:w-[22px] sm:h-[22px] stroke-[1.5]" />
                <span className="text-[8px] sm:text-[9px] uppercase tracking-wider font-semibold opacity-80 group-hover:opacity-100 hidden md:block">Search</span>
              </button>
              
              <Link href="/account" className="hover:text-[#C8A366] transition-colors hidden md:flex flex-col items-center gap-1 group" title="My Account">
                <User className="w-5 h-5 sm:w-[22px] sm:h-[22px] stroke-[1.5]" />
                <span className="text-[8px] sm:text-[9px] uppercase tracking-wider font-semibold opacity-80 group-hover:opacity-100">Account</span>
              </Link>

              <Link href="/favorites" className="hover:text-[#C8A366] transition-colors relative flex flex-col items-center gap-1 group" title="Wishlist">
                <div className="relative">
                  <Heart className="w-5 h-5 sm:w-[22px] sm:h-[22px] stroke-[1.5]" />
                  {wishlistCount > 0 && (
                    <span className="absolute -top-1.5 -right-2 bg-[#C8A366] text-white text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                      {wishlistCount}
                    </span>
                  )}
                </div>
                <span className="text-[8px] sm:text-[9px] uppercase tracking-wider font-semibold opacity-80 group-hover:opacity-100 hidden md:block">Wishlist</span>
              </Link>

              <button
                onClick={() => setIsCartOpen(true)}
                className="hover:text-[#C8A366] transition-colors relative flex flex-col items-center gap-1 group"
                title="Cart"
              >
                <div className="relative">
                  <ShoppingBag className="w-5 h-5 sm:w-[22px] sm:h-[22px] stroke-[1.5]" />
                  {cartTotalCount > 0 && (
                    <span className="absolute -top-1.5 -right-2 bg-[#C8A366] text-white text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                      {cartTotalCount}
                    </span>
                  )}
                </div>
                <span className="text-[8px] sm:text-[9px] uppercase tracking-wider font-semibold opacity-80 group-hover:opacity-100 hidden md:block">My Cart</span>
              </button>
            </div>
          </div>
        </div>

        {/* Expandable Search Input */}
        {searchOpen && (
          <div className="max-w-2xl mx-auto px-4 mt-4 animate-in fade-in duration-300">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="SEARCH MONOKINIS, BIKINIS, MESH CUTOUTS..."
                className="w-full px-6 py-3 border border-white/20 text-xs font-medium tracking-widest uppercase focus:outline-none focus:ring-1 focus:ring-[#C8A366] bg-[#1A1A1A] text-white"
                autoFocus
              />
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="absolute right-4 top-3 text-white hover:text-[#C8A366]"
              >
                <X className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
      </nav>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#1E332D] lg:hidden p-8 flex flex-col justify-between text-white animate-in slide-in-from-left duration-300">
          <div>
            <div className="flex justify-between items-center pb-6 border-b border-white/20">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <Logo light={true} compact={true} />
              </Link>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="w-6 h-6 text-white" />
              </button>
            </div>
            
            <div className="flex flex-col space-y-6 mt-10 text-sm uppercase tracking-[0.2em] font-bold text-white">
              <Link href="/products" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#C8A366]">SHOP ALL</Link>
              <Link href="/products?category=Monokinis" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#C8A366]">ONE PIECE & MONOKINIS</Link>
              <Link href="/products?category=Bikinis" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#C8A366]">BIKINIS</Link>
              
              <div className="h-px w-8 bg-white/20 my-4"></div>
              
              <Link href="/account" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#C8A366] flex items-center gap-3">
                <User className="w-4 h-4 stroke-1" /> MY ACCOUNT
              </Link>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCustomFitModal();
                }}
                className="text-left text-[#C8A366] flex items-center gap-3"
              >
                <Sparkles className="w-4 h-4 stroke-1" /> BESPOKE CUSTOM FITTING
              </button>
            </div>
          </div>
          
          <div className="space-y-4">
            <a href="#instagram" onClick={() => setMobileMenuOpen(false)} className="block text-center text-xs tracking-widest text-white/70 hover:text-[#C8A366]">
              IG @ARCHIE_BY_PRIYANKA
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCustomFitModal();
              }}
              className="w-full py-4 bg-[#C8A366] text-white font-semibold text-xs tracking-[0.25em] uppercase hover:bg-white hover:text-[#1E332D] transition-colors"
            >
              BOOK CUSTOM FITTING
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
