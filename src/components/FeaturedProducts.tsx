"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { PRODUCTS, Product } from "@/data/products";
import { Eye, Heart, ShoppingBag, MessageCircle, Sparkles, Check, ArrowRight } from "lucide-react";

interface FeaturedProductsProps {
  onAddToCart: (product: Product, size: string, color: string) => void;
  onQuickView: (product: Product) => void;
  onOpenCustomFitModal: () => void;
  externalCategory?: string;
  onCategoryChange?: (cat: string) => void;
}

const CATEGORIES = ["All", "Monokinis", "Bikinis", "Mesh & Cutouts", "Resortwear"];

// Stagger container variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function FeaturedProducts({
  onAddToCart,
  onQuickView,
  onOpenCustomFitModal,
  externalCategory,
  onCategoryChange,
}: FeaturedProductsProps) {
  const [activeCategory, setActiveCategory] = useState<string>(externalCategory || "All");
  const [selectedSizes, setSelectedSizes] = useState<{ [key: string]: string }>({});
  const [selectedColors, setSelectedColors] = useState<{ [key: string]: string }>({});
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [addedAnimation, setAddedAnimation] = useState<string | null>(null);

  useEffect(() => {
    if (externalCategory) {
      setActiveCategory(externalCategory);
    }
  }, [externalCategory]);

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  const filteredProducts =
    activeCategory === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  const toggleWishlist = (id: string) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleSizeSelect = (productId: string, size: string) => {
    if (size === "Custom Fit") {
      onOpenCustomFitModal();
    } else {
      setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
    }
  };

  const handleColorSelect = (productId: string, colorName: string) => {
    setSelectedColors((prev) => ({ ...prev, [productId]: colorName }));
  };

  const handleAddToCart = (product: Product) => {
    const size = selectedSizes[product.id] || product.sizes[0];
    const color = selectedColors[product.id] || product.colors[0].name;
    onAddToCart(product, size, color);
    setAddedAnimation(product.id);
    setTimeout(() => setAddedAnimation(null), 1500);
  };

  return (
    <section
      id="collections"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#F5EFE6] overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-[#C8A366]/40 to-transparent" />
      <div className="absolute top-40 right-0 w-72 h-72 rounded-full bg-[#C8A366]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-96 h-96 rounded-full bg-[#1E332D]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header — 2026 editorial style */}
        <div ref={headerRef} className="mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={isHeaderInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-2 text-[10px] sm:text-xs font-bold tracking-[0.4em] uppercase text-[#C8A366] mb-4"
              >
                <span className="w-8 h-px bg-[#C8A366] inline-block" />
                HANDCRAFTED IN MUMBAI
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#1E332D] tracking-tight leading-[0.95]"
              >
                Signature
                <br />
                <span className="italic text-[#9A7B38]">Collection</span>
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="lg:max-w-xs"
            >
              <p className="text-sm text-[#4A5D57] font-light leading-relaxed mb-6">
                Inspired by coastal luxury. Constructed with double-layered Italian lycra for ultimate fit and silhouette support.
              </p>
              <button
                onClick={onOpenCustomFitModal}
                className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.3em] uppercase text-[#1E332D] border-b border-[#1E332D] pb-0.5 hover:text-[#9A7B38] hover:border-[#9A7B38] transition-colors group"
              >
                <Sparkles className="w-3 h-3" />
                BESPOKE CUSTOM FIT
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>

          {/* Filter Tabs — modern pill style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-2 mt-12 border-b border-[#DDD4C0] pb-4"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-5 py-2 text-[11px] uppercase tracking-[0.25em] font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? "text-white"
                    : "text-[#4A5D57] hover:text-[#1E332D]"
                }`}
              >
                {activeCategory === cat && (
                  <motion.span
                    layoutId="filterBg"
                    className="absolute inset-0 bg-[#1E332D]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}

            <span className="ml-auto text-[11px] text-[#888] tracking-wider">
              {filteredProducts.length} piece{filteredProducts.length !== 1 ? "s" : ""}
            </span>
          </motion.div>
        </div>

        {/* Product Grid — 2026 staggered bento layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12"
          >
            {filteredProducts.map((product, index) => {
              const currentSize = selectedSizes[product.id] || product.sizes[0];
              const currentColor = selectedColors[product.id] || product.colors[0].name;
              const isWishlisted = wishlist.includes(product.id);
              const isJustAdded = addedAnimation === product.id;
              // Make first card tall on desktop
              const isFeatured = index === 0;

              return (
                <motion.div
                  key={product.id}
                  variants={cardVariants}
                  className={`group flex flex-col ${isFeatured ? "lg:row-span-2" : ""}`}
                >
                  {/* Image Container */}
                  <div className={`relative overflow-hidden bg-[#EDE8DF] ${isFeatured ? "aspect-3/5" : "aspect-3/4"}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Badge */}
                    {product.badge && (
                      <span className="absolute top-4 left-4 bg-white text-[#1A1A1A] text-[9px] uppercase font-black tracking-[0.25em] px-3 py-1.5 z-10">
                        {product.badge}
                      </span>
                    )}

                    {/* Wishlist */}
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className={`absolute top-4 right-4 w-9 h-9 flex items-center justify-center transition-all duration-300 z-10 ${
                        isWishlisted
                          ? "bg-[#9A7B38] text-white"
                          : "bg-white/90 text-[#333] hover:bg-white hover:text-[#9A7B38]"
                      }`}
                      aria-label="Wishlist"
                    >
                      <Heart className={`w-4 h-4 ${isWishlisted ? "fill-current" : ""}`} />
                    </button>

                    {/* Hover actions */}
                    <div className="absolute inset-x-0 bottom-0 p-5 opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-4 group-hover:translate-y-0 flex items-center gap-2 z-10">
                      <button
                        onClick={() => onQuickView(product)}
                        className="flex-1 py-2.5 bg-white text-black text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#D4AF37] hover:text-white transition-colors flex items-center justify-center gap-1.5"
                      >
                        <Eye className="w-3 h-3" />
                        Quick View
                      </button>
                      <a
                        href={`https://wa.me/919876543210?text=Hi%20Priyanka!%20Interested%20in%20${encodeURIComponent(product.name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-[#25D366] text-white flex items-center justify-center hover:bg-[#1ebd59] transition-colors"
                        title="Chat on WhatsApp"
                      >
                        <MessageCircle className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Card Info */}
                  <div className="pt-4 flex-1 flex flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <span className="text-[9px] tracking-[0.3em] uppercase text-[#999] font-medium block mb-1">
                          {product.category}
                        </span>
                        <h3 className="font-serif text-[15px] sm:text-base font-medium text-[#1A1A1A] hover:text-[#9A7B38] transition-colors leading-tight">
                          {product.name}
                        </h3>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="font-semibold text-sm text-[#1A1A1A]">
                          ₹{product.price.toLocaleString("en-IN")}
                        </div>
                        {product.originalPrice && (
                          <div className="text-[10px] text-[#aaa] line-through">
                            ₹{product.originalPrice.toLocaleString("en-IN")}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Color Swatches */}
                    <div className="flex items-center gap-1.5 mt-3">
                      {product.colors.map((c) => (
                        <button
                          key={c.name}
                          onClick={() => handleColorSelect(product.id, c.name)}
                          className={`w-4 h-4 rounded-full transition-all ${
                            currentColor === c.name
                              ? "ring-2 ring-offset-2 ring-[#9A7B38] scale-110"
                              : "border border-[#ccc] hover:scale-110"
                          }`}
                          style={{ backgroundColor: c.hex }}
                          title={c.name}
                        />
                      ))}
                      <span className="text-[10px] text-[#888] ml-1 truncate">{currentColor}</span>
                    </div>

                    {/* Size Pills */}
                    <div className="mt-3">
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-[9px] uppercase tracking-wider text-[#777]">Size</span>
                        <button
                          onClick={onOpenCustomFitModal}
                          className="text-[9px] font-bold text-[#9A7B38] hover:underline flex items-center gap-0.5"
                        >
                          <Sparkles className="w-2 h-2" />
                          Custom?
                        </button>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {product.sizes.map((s) => (
                          <button
                            key={s}
                            onClick={() => handleSizeSelect(product.id, s)}
                            className={`text-[9px] font-semibold px-2 py-1 transition-all ${
                              s === "Custom Fit"
                                ? "bg-[#9A7B38]/10 text-[#9A7B38] border border-[#9A7B38]/50"
                                : currentSize === s
                                ? "bg-[#1A1A1A] text-white"
                                : "bg-[#EEE8DC] text-[#555] hover:bg-[#E2DBCF]"
                            }`}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Add to Cart */}
                    <button
                      onClick={() => handleAddToCart(product)}
                      className={`mt-auto pt-4 w-full py-3 text-[10px] uppercase font-black tracking-[0.25em] transition-all duration-300 flex items-center justify-center gap-2 ${
                        isJustAdded
                          ? "bg-[#25D366] text-white"
                          : "bg-[#1A1A1A] text-white hover:bg-[#9A7B38]"
                      }`}
                    >
                      {isJustAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          Added to Bag
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-3.5 h-3.5" />
                          Add to Bag
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16 pt-12 border-t border-[#DDD4C0]"
        >
          <p className="text-xs text-[#777] tracking-wider">Can&apos;t find your style?</p>
          <button
            onClick={onOpenCustomFitModal}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#1E332D] text-white text-[11px] font-black uppercase tracking-[0.3em] hover:bg-[#9A7B38] transition-all group"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Design Your Custom Fit
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
