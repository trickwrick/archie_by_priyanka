"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

interface CategorySectionProps {
  onSelectCategory?: (category: string) => void;
  onOpenCustomFitModal: () => void;
}

interface CategoryItem {
  id: string;
  name: string;
  categoryFilter: string;
  tag: string;
  subtitle: string;
  count: string;
  image: string;
  isBespoke?: boolean;
}

const CATEGORIES: CategoryItem[] = [
  {
    id: "cat-onepiece",
    name: "One-Piece & Monokinis",
    categoryFilter: "Monokinis",
    tag: "SCULPTURAL PLUNGE",
    subtitle: "Sheer optical mesh, asymmetrical cutouts & flattering wraps",
    count: "12 Styles",
    image: "/images/swimsuit_mesh_black.jpg",
  },
  {
    id: "cat-bikinis",
    name: "Bikinis & Sets",
    categoryFilter: "Bikinis",
    tag: "24K GOLD HARDWARE",
    subtitle: "High-waisted contour bottoms & supportive underwire tops",
    count: "18 Styles",
    image: "/images/swimsuit_ocean_blue.jpg",
  },
  {
    id: "cat-resortwear",
    name: "Resortwear & Covers",
    categoryFilter: "Resortwear",
    tag: "YACHT & BEACH CLUB",
    subtitle: "Artisanal crochet cardigans, sarongs & dramatic sunhats",
    count: "09 Styles",
    image: "/images/insta_straw_hat.jpg",
  },
  {
    id: "cat-bespoke",
    name: "Custom Atelier",
    categoryFilter: "Custom Fit",
    tag: "MADE-TO-MEASURE",
    subtitle: "Handcrafted in Mumbai to your exact 12 body measurements",
    count: "Bespoke",
    image: "/images/hero_beach_luxury.jpg",
    isBespoke: true,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export default function CategorySection({
  onSelectCategory,
  onOpenCustomFitModal,
}: CategorySectionProps) {
  const handleCategoryClick = (category: CategoryItem) => {
    if (category.isBespoke) {
      onOpenCustomFitModal();
      return;
    }

    if (onSelectCategory) {
      onSelectCategory(category.categoryFilter);
    }

    const collectionsEl = document.getElementById("collections");
    if (collectionsEl) {
      collectionsEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="categories" className="relative bg-[#FAF6F0] py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Subtle border lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-[#C8A366]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-[#C8A366]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-[10px] sm:text-xs font-bold tracking-[0.45em] uppercase text-[#C8A366] mb-3">
              <span className="w-8 h-px bg-[#C8A366] inline-block" />
              CURATED SILHOUETTES
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#1E332D] tracking-tight leading-tight">
              Shop by <span className="italic font-normal text-[#C8A366]">Category</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex items-center gap-3"
          >
            <p className="text-xs text-[#666] max-w-sm font-light hidden sm:block">
              Each piece is meticulously engineered in our Mumbai atelier with premium Italian regenerated fabrics.
            </p>
            <a
              href="#collections"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#1E332D] hover:text-[#C8A366] transition-colors group shrink-0"
            >
              View All
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>

        {/* 4 Category Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6"
        >
          {CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.id}
              variants={cardVariants}
              onClick={() => handleCategoryClick(cat)}
              className="group relative cursor-pointer overflow-hidden rounded-xs bg-[#EDE8DF] aspect-4/5 shadow-xs transition-all duration-500 hover:shadow-xl"
            >
              {/* Image */}
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
              />

              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/25 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              <div className="absolute inset-0 border border-transparent group-hover:border-[#C8A366]/60 transition-colors duration-500 z-10 pointer-events-none" />

              {/* Top Tag & Count */}
              <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/90 backdrop-blur-sm text-[9px] font-black uppercase tracking-[0.25em] text-[#1E332D]">
                  {cat.isBespoke && <Sparkles className="w-2.5 h-2.5 text-[#C8A366]" />}
                  {cat.tag}
                </span>
                <span className="text-[10px] font-bold text-white/70 tracking-widest uppercase">
                  {cat.count}
                </span>
              </div>

              {/* Bottom Content */}
              <div className="absolute inset-x-0 bottom-0 p-5 z-10 flex flex-col justify-end">
                <span className="text-[10px] font-mono text-[#C8A366] tracking-[0.2em] mb-1">
                  0{idx + 1}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-white font-medium mb-1.5 group-hover:text-[#F5EFE6] transition-colors">
                  {cat.name}
                </h3>
                <p className="text-[11px] text-white/75 font-light line-clamp-2 mb-4">
                  {cat.subtitle}
                </p>

                {/* Animated CTA Button */}
                <div className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.25em] uppercase text-white group-hover:text-[#C8A366] transition-all">
                  <span>{cat.isBespoke ? "BOOK BESPOKE" : "EXPLORE"}</span>
                  <div className="w-5 h-px bg-white group-hover:bg-[#C8A366] group-hover:w-8 transition-all duration-300" />
                  <ArrowRight className="w-3 h-3 -ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
