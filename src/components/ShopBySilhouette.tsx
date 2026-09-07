"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, ShoppingBag, Sparkles, ArrowRight } from "lucide-react";
import { Product, PRODUCTS } from "@/data/products";

interface ShopBySilhouetteProps {
  onAddToCart: (product: Product, size: string, color: string) => void;
  onQuickView: (product: Product) => void;
  onOpenCustomFitModal: () => void;
}

type TabType = "BIKINIS" | "ONE PIECE" | "RESORT WEAR";

const TABS: TabType[] = ["BIKINIS", "ONE PIECE", "RESORT WEAR"];

const ALL_PRODUCTS: Record<TabType, { id: string; name: string; price: number; image: string }[]> = {
  "BIKINIS": [
    { id: "sil-1", name: "The Aurelia V-Hardware Bikini",    price: 8400, image: "/images/swimsuit_ocean_blue.jpg" },
    { id: "sil-2", name: "The Riviera Scoop Contour Set",    price: 7900, image: "/images/swimsuit_neon_lime.jpg" },
    { id: "sil-3", name: "The Aegean Polka Bandeau",         price: 8900, image: "/images/oye_luxury_hero.jpg" },
    { id: "sil-4", name: "The Capri Gold Halter Set",        price: 9200, image: "/images/hero_beach_luxury.jpg" },
  ],
  "ONE PIECE": [
    { id: "sil-5", name: "The Sheer Plunge Monokini",        price: 9800, image: "/images/swimsuit_mesh_black.jpg" },
    { id: "sil-6", name: "The Sky Blue Cutout Monokini",     price: 9400, image: "/images/insta_blue_plunge.jpg" },
    { id: "sil-7", name: "Hot Pink Keyhole Monokini",        price: 8900, image: "/images/insta_pink_cutout.jpg" },
    { id: "sil-8", name: "Ocean Ombre Yacht Monokini",       price: 9600, image: "/images/insta_ombre_blue.jpg" },
  ],
  "RESORT WEAR": [
    { id: "sil-9",  name: "Crochet Knit Resort Cardigan",   price: 6500, image: "/images/insta_blue_plunge.jpg" },
    { id: "sil-10", name: "Dramatic Wide Straw Sunhat",      price: 4900, image: "/images/insta_straw_hat.jpg" },
    { id: "sil-11", name: "Luxe Linen Sarong & Cover-up",   price: 5800, image: "/images/swimsuit_mesh_black.jpg" },
    { id: "sil-12", name: "Silk Beach Kimono Robe",          price: 7200, image: "/images/hero_beach_luxury.jpg" },
  ],
};

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
  exit:    { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

export default function ShopBySilhouette({
  onAddToCart,
  onQuickView,
  onOpenCustomFitModal,
}: ShopBySilhouetteProps) {
  const [activeTab, setActiveTab] = useState<TabType>("BIKINIS");
  const currentProducts = ALL_PRODUCTS[activeTab];

  return (
    <section className="relative bg-[#F5EFE6] py-24 lg:py-32 overflow-hidden">
      {/* Top rule */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-[#C8A366]/40 to-transparent" />

      {/* Large decorative text behind */}
      <div
        className="absolute top-12 left-1/2 -translate-x-1/2 pointer-events-none select-none"
        aria-hidden
      >
        <span className="font-serif text-[100px] sm:text-[160px] lg:text-[220px] font-black text-[#E8DFD0]/60 leading-none tracking-tight uppercase whitespace-nowrap">
          ARCHIE
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="flex items-center gap-2 text-[10px] font-bold tracking-[0.5em] uppercase text-[#C8A366] mb-5">
            <span className="w-8 h-px bg-[#C8A366] inline-block" />
            CURATED FOR YOU
            <span className="w-8 h-px bg-[#C8A366] inline-block" />
          </span>

          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#1E332D] leading-[0.95] tracking-tight">
            Shop By
            <br />
            <em className="text-[#9A7B38]">Silhouette</em>
          </h2>
        </motion.div>

        {/* Tab Navigation — modern underline style */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center items-center gap-0 mb-14 border-b border-[#DDD4C0]"
        >
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-6 sm:px-10 py-4 text-[11px] font-black tracking-[0.35em] uppercase transition-all duration-300 ${
                activeTab === tab
                  ? "text-[#1E332D]"
                  : "text-[#999] hover:text-[#555]"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.span
                  layoutId="silhouetteUnderline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1E332D]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Product Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={gridVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-7 mb-14"
          >
            {currentProducts.map((p) => (
              <motion.div
                key={p.id}
                variants={cardVariants}
                className="group flex flex-col"
              >
                {/* Image */}
                <div className="relative aspect-3/4 overflow-hidden bg-[#EDE8DF] mb-4">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center gap-2">
                    <button
                      onClick={() => onQuickView(PRODUCTS[0])}
                      className="px-4 py-2.5 bg-white text-black text-[9px] font-black uppercase tracking-[0.25em] hover:bg-[#C8A366] hover:text-white transition-colors flex items-center gap-1.5"
                    >
                      <Eye className="w-3 h-3" />
                      Quick View
                    </button>
                  </div>

                  {/* Index label */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1">
                    <span className="text-[8px] font-black tracking-[0.3em] text-[#1A1A1A]">
                      {activeTab.charAt(0)}{String(currentProducts.indexOf(p) + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 flex flex-col">
                  <h4 className="font-serif text-sm font-medium text-[#1A1A1A] line-clamp-2 mb-1 leading-snug">
                    {p.name}
                  </h4>
                  <div className="flex items-center justify-between mt-auto pt-2">
                    <span className="text-sm font-semibold text-[#1A1A1A]">
                      ₹{p.price.toLocaleString("en-IN")}
                    </span>
                    <button
                      onClick={onOpenCustomFitModal}
                      className="text-[9px] text-[#9A7B38] font-bold tracking-wider uppercase flex items-center gap-0.5 hover:underline"
                    >
                      <Sparkles className="w-2.5 h-2.5" />
                      Custom
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#collections"
            className="group inline-flex items-center gap-3 px-10 py-4 bg-[#1E332D] text-white text-[11px] font-black uppercase tracking-[0.35em] hover:bg-[#9A7B38] transition-all"
          >
            <ShoppingBag className="w-4 h-4" />
            All Products
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
          <button
            onClick={onOpenCustomFitModal}
            className="group inline-flex items-center gap-3 px-8 py-4 border border-[#1E332D] text-[#1E332D] text-[11px] font-black uppercase tracking-[0.3em] hover:bg-[#F0E9DB] transition-all"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Custom Order
          </button>
        </motion.div>
      </div>
    </section>
  );
}
