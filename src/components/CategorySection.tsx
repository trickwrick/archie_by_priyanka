"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Shirt, Sun, Scissors, Umbrella } from "lucide-react";
import Link from "next/link";

interface CategorySectionProps {
  onSelectCategory?: (category: string) => void;
  onOpenCustomFitModal: () => void;
}

const TABS = [
  { id: "Monokinis", label: "MONOKINIS", icon: Shirt },
  { id: "Bikinis", label: "BIKINIS", icon: Sun },
  { id: "Mesh & Cutouts", label: "MESH", icon: Scissors },
  { id: "Resortwear", label: "RESORT", icon: Umbrella },
];

const SUBCATEGORIES: Record<string, { name: string; image: string; link: string }[]> = {
  "Monokinis": [
    { name: "Wrap Monokinis", image: "/images/hero_beach_luxury.jpg", link: "/products?category=Monokinis" },
    { name: "Plunge Monokinis", image: "/images/swimsuit_mesh_black.jpg", link: "/products?category=Monokinis" },
    { name: "Cut-Out Monokinis", image: "/images/hero_beach_luxury.jpg", link: "/products?category=Monokinis" },
    { name: "Halter Monokinis", image: "/images/swimsuit_mesh_black.jpg", link: "/products?category=Monokinis" },
  ],
  "Bikinis": [
    { name: "High-Waist Bikinis", image: "/images/swimsuit_neon_lime.jpg", link: "/products?category=Bikinis" },
    { name: "String Bikinis", image: "/images/swimsuit_ocean_blue.jpg", link: "/products?category=Bikinis" },
    { name: "Bandeau Bikinis", image: "/images/swimsuit_neon_lime.jpg", link: "/products?category=Bikinis" },
    { name: "Push-Up Bikinis", image: "/images/swimsuit_ocean_blue.jpg", link: "/products?category=Bikinis" },
  ],
  "Mesh & Cutouts": [
    { name: "Sheer Paneling", image: "/images/swimsuit_mesh_black.jpg", link: "/products?category=Mesh%20%26%20Cutouts" },
    { name: "Asymmetric Cutouts", image: "/images/hero_beach_luxury.jpg", link: "/products?category=Mesh%20%26%20Cutouts" },
    { name: "Illusion Mesh", image: "/images/swimsuit_mesh_black.jpg", link: "/products?category=Mesh%20%26%20Cutouts" },
  ],
  "Resortwear": [
    { name: "Beach Cover-ups", image: "/images/insta_straw_hat.jpg", link: "/products?category=Resortwear" },
    { name: "Sarongs & Skirts", image: "/images/insta_straw_hat.jpg", link: "/products?category=Resortwear" },
    { name: "Crochet Tops", image: "/images/insta_straw_hat.jpg", link: "/products?category=Resortwear" },
  ]
};

export default function CategorySection({
  onSelectCategory,
}: CategorySectionProps) {
  const [activeTab, setActiveTab] = useState("Monokinis");
  
  const sliderItems = SUBCATEGORIES[activeTab] || [];

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    if (onSelectCategory) {
      onSelectCategory(tabId);
    }
  };

  return (
    <section className="bg-[#FAF6F0] py-16 sm:py-24 overflow-hidden relative border-y border-[#E0D9C8]">
      <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-[#1E332D] mb-4">Shop by Category</h2>
          <div className="w-12 h-px bg-[#C8A366] mx-auto" />
        </div>

        {/* Tabs Navigation - Pill Style */}
        <div className="flex justify-center items-center gap-4 md:gap-6 mb-16 flex-wrap">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all border ${
                  isActive 
                    ? "bg-[#1E332D] text-white border-[#1E332D] shadow-md" 
                    : "bg-transparent text-[#1E332D] border-[#E0D9C8] hover:border-[#1E332D]"
                }`}
              >
                <Icon className={`w-4 h-4`} strokeWidth={2} />
                <span className="text-[10px] font-bold tracking-widest uppercase">
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Carousel / Cards */}
        <div className="relative group">
          {/* Slider Arrows */}
          <button className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 lg:-ml-6 w-12 h-12 rounded-full bg-white border border-[#E0D9C8] hidden items-center justify-center text-[#1E332D] shadow-sm hover:shadow-md transition-all z-20 md:flex hover:text-[#C8A366]">
            <ArrowLeft className="w-5 h-5" />
          </button>
          
          <button className="absolute right-0 top-1/2 -translate-y-1/2 -mr-2 lg:-mr-6 w-12 h-12 rounded-full bg-white border border-[#E0D9C8] hidden items-center justify-center text-[#1E332D] shadow-sm hover:shadow-md transition-all z-20 md:flex hover:text-[#C8A366]">
            <ArrowRight className="w-5 h-5" />
          </button>

          <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 md:gap-8 pb-12 pt-4 px-4 sm:px-0">
            <AnimatePresence mode="wait">
              {sliderItems.map((subcat, idx) => (
                <motion.div
                  key={`${activeTab}-${subcat.name}-${idx}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="shrink-0 w-65 sm:w-75 md:w-85 snap-center group/card"
                >
                  <Link href={subcat.link} className="block relative cursor-pointer outline-none">
                    {/* The Arch Shape Card */}
                    <div className="overflow-hidden aspect-3/4 bg-neutral-200 rounded-t-full rounded-b-2xl relative shadow-lg transition-transform duration-700 group-hover/card:-translate-y-3">
                      <img
                        src={subcat.image}
                        alt={subcat.name}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-110"
                      />
                      {/* Inner border for elegant touch */}
                      <div className="absolute inset-2 border border-white/30 rounded-t-full rounded-b-xl pointer-events-none" />
                    </div>
                    
                    {/* Floating Text Info */}
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-11/12 bg-white p-4 shadow-xl rounded-xl text-center transition-transform duration-500 group-hover/card:-translate-y-2 group-hover/card:shadow-2xl">
                      <h3 className="text-[#1E332D] text-sm md:text-base font-serif font-medium truncate mb-1">
                        {subcat.name}
                      </h3>
                      <div className="flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#C8A366] group-hover/card:text-[#1E332D] transition-colors">
                        Explore <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* View All Button */}
        <div className="mt-12 flex justify-center">
          <Link
            href={`/products?category=${encodeURIComponent(activeTab === 'MESH' ? 'Mesh & Cutouts' : activeTab === 'RESORT' ? 'Resortwear' : activeTab)}`}
            className="bg-[#1E332D] text-white px-8 py-3.5 text-xs font-bold uppercase tracking-widest hover:bg-[#C8A366] transition-colors flex items-center gap-3 group"
          >
            Shop All {activeTab}
            <div className="w-6 h-px bg-white group-hover:w-8 transition-all" />
          </Link>
        </div>

      </div>
    </section>
  );
}
