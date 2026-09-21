"use client";

import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { Product } from "@/data/products";
import { Eye, ArrowRight } from "lucide-react";
import Link from "next/link";

interface FeaturedProductsProps {
  products: Product[];
  onQuickView: (product: Product) => void;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function FeaturedProducts({
  products,
  onQuickView,
}: FeaturedProductsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isSectionInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Curated 4 products for Best Sellers (prioritize bestseller tagged products)
  const bestsellerProducts = products.filter((p) => p.isBestseller);
  const bestSellers =
    bestsellerProducts.length >= 4
      ? bestsellerProducts.slice(0, 4)
      : products.slice(0, 4);

  return (
    <section
      id="collections"
      ref={sectionRef}
      className="relative py-20 lg:py-28 bg-white overflow-hidden border-b border-[#E0D9C8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isSectionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 text-[10px] sm:text-xs font-bold tracking-[0.4em] uppercase text-[#C8A366] mb-4"
            >
              <span className="w-8 h-px bg-[#C8A366] inline-block" />
              CURATED SELECTION
            </motion.div>
            
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                animate={isSectionInView ? { y: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
                className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1E332D]"
              >
                Best <span className="italic text-[#9A7B38]">Sellers</span>
              </motion.h2>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#1E332D] border-b border-[#1E332D] pb-1 hover:text-[#9A7B38] hover:border-[#9A7B38] transition-colors group"
            >
              View Full Collection
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Minimalist Grid */}
        <motion.div
          initial="hidden"
          animate={isSectionInView ? "visible" : "hidden"}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {bestSellers.map((product) => (
            <motion.div key={product.id} variants={cardVariants} className="group cursor-pointer">
              {/* Large Image Card */}
              <div className="relative overflow-hidden aspect-3/4 bg-neutral-100 mb-6 rounded-sm">
                <Link href={`/products/${product.id}`} className="block w-full h-full">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                </Link>

                {/* Sleek Quick View Button (Slides up on hover) */}
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      onQuickView(product);
                    }}
                    className="w-full bg-white/95 backdrop-blur text-[#1E332D] py-3 text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg hover:bg-[#1E332D] hover:text-white transition-colors flex items-center justify-center gap-2"
                  >
                    <Eye className="w-4 h-4" />
                    Quick View
                  </button>
                </div>
              </div>

              {/* Minimal Text Info - Editorial Style */}
              <div className="mt-5 text-left">
                <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-neutral-400 block mb-1.5">
                  {product.category}
                </span>
                <Link href={`/products/${product.id}`}>
                  <h3 className="font-serif text-base md:text-lg text-[#1E332D] mb-1.5 group-hover:text-[#C8A366] transition-colors leading-tight">
                    {product.name}
                  </h3>
                </Link>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-[#1E332D]">
                    ₹{product.price.toLocaleString("en-IN")}
                  </span>
                  {product.originalPrice && (
                    <span className="text-[11px] text-neutral-400 line-through">
                      ₹{product.originalPrice.toLocaleString("en-IN")}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
