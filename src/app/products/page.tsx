"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomFittingStudio from "@/components/CustomFittingStudio";
import CartDrawer from "@/components/CartDrawer";
import QuickViewModal from "@/components/QuickViewModal";
import { PRODUCTS, Product } from "@/data/products";
import { useShop } from "@/context/ShopContext";
import { Heart, ShoppingBag, Eye } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";
  const searchQuery = searchParams.get("q") || "";
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [sortBy, setSortBy] = useState<string>("featured");
  const [isCustomFitModalOpen, setIsCustomFitModalOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const { addToCart, toggleWishlist, isInWishlist } = useShop();

  React.useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) {
      setSelectedCategory(cat);
    } else {
      setSelectedCategory("All");
    }
  }, [searchParams]);

  const categories = ["All", "Monokinis", "Bikinis", "Mesh & Cutouts", "Resortwear"];
  
  let filteredProducts = PRODUCTS;

  if (selectedCategory !== "All") {
    filteredProducts = filteredProducts.filter((p) => p.category === selectedCategory);
  }

  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filteredProducts = filteredProducts.filter(
      (p) => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
    );
  }

  if (sortBy === "price_asc") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === "price_desc") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  }

  return (
    <main className="min-h-screen bg-[#F5EFE6] text-[#1E332D] flex flex-col font-sans pt-56">
      <Navbar onOpenCustomFitModal={() => setIsCustomFitModalOpen(true)} />

      <div className="flex-1 max-w-7xl mx-auto w-full px-6 lg:px-12 py-12">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1E332D] mb-4">
            {searchQuery ? `Search Results for "${searchQuery}"` : "The Collection"}
          </h1>
          <p className="text-sm uppercase tracking-widest text-neutral-500 max-w-2xl mx-auto">
            {searchQuery 
              ? `Found ${filteredProducts.length} results` 
              : "Discover our meticulously handcrafted luxury swimwear. Designed for confidence."}
          </p>
        </div>

        {/* Category Filter and Sorting */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-bold tracking-[0.2em] uppercase transition-all pb-1 border-b-2 ${
                  selectedCategory === cat
                    ? "border-[#C8A366] text-[#1E332D]"
                    : "border-transparent text-neutral-400 hover:text-[#C8A366]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-bold tracking-widest uppercase text-neutral-500">Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent text-xs font-bold uppercase tracking-widest border-b-2 border-[#E0D9C8] pb-1 focus:outline-none focus:ring-0 text-[#1E332D] cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="font-serif text-2xl text-[#1E332D] mb-4">No products found</h2>
            <p className="text-neutral-500">Try adjusting your filters or search query.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group flex flex-col">
                <div className="relative aspect-3/4 overflow-hidden bg-neutral-200 mb-4">
                  <Link href={`/products/${product.id}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                    />
                  </Link>

                  {/* Badges */}
                  {product.badge && (
                    <div className="absolute top-3 left-3 bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-[#1E332D]">
                      {product.badge}
                    </div>
                  )}

                  {/* Hover Actions */}
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 translate-y-4 group-hover:translate-y-0">
                    <button
                      onClick={() => addToCart(product, product.sizes[0], product.colors[0].name)}
                      className="bg-white text-[#1E332D] hover:bg-[#C8A366] hover:text-white p-3 rounded-full transition-colors shadow-lg"
                      title="Quick Add"
                    >
                      <ShoppingBag className="w-5 h-5 stroke-1" />
                    </button>
                    <button
                      onClick={() => setQuickViewProduct(product)}
                      className="bg-white text-[#1E332D] hover:bg-[#C8A366] hover:text-white p-3 rounded-full transition-colors shadow-lg"
                      title="Quick View"
                    >
                      <Eye className="w-5 h-5 stroke-1" />
                    </button>
                    <button
                      onClick={() => toggleWishlist(product)}
                      className="bg-white text-[#1E332D] hover:bg-[#C8A366] hover:text-white p-3 rounded-full transition-colors shadow-lg"
                      title="Wishlist"
                    >
                      <Heart
                        className="w-5 h-5 stroke-1"
                        fill={isInWishlist(product.id) ? "currentColor" : "none"}
                      />
                    </button>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center mt-2">
                  <Link href={`/products/${product.id}`}>
                    <h3 className="font-serif text-lg text-[#1E332D] mb-1 hover:text-[#C8A366] transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="flex items-center gap-2 text-sm">
                    {product.originalPrice && (
                      <span className="text-neutral-400 line-through">
                        ₹{product.originalPrice.toLocaleString()}
                      </span>
                    )}
                    <span className="font-bold text-[#1E332D]">
                      ₹{product.price.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer onOpenCustomFitModal={() => setIsCustomFitModalOpen(true)} />
      <CartDrawer onOpenCustomFitModal={() => setIsCustomFitModalOpen(true)} />
      <CustomFittingStudio
        isOpen={isCustomFitModalOpen}
        onClose={() => setIsCustomFitModalOpen(false)}
      />
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={addToCart}
        onOpenCustomFitModal={() => setIsCustomFitModalOpen(true)}
      />
    </main>
  );
}
