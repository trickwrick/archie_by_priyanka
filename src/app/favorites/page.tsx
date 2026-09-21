"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import QuickViewModal from "@/components/QuickViewModal";
import { Product } from "@/data/products";
import { useShop } from "@/context/ShopContext";
import { Heart, ShoppingBag, Eye, Trash2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function FavoritesPage() {
  const router = useRouter();
    const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const { wishlist, toggleWishlist, addToCart } = useShop();

  return (
    <main className="min-h-screen bg-[#F5EFE6] text-[#1E332D] flex flex-col font-sans pt-56">
      <Navbar />

      <div className="flex-1 max-w-7xl mx-auto w-full px-6 lg:px-12 py-12">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1E332D] mb-4">
            Your Wishlist
          </h1>
          <p className="text-sm uppercase tracking-widest text-neutral-500 max-w-2xl mx-auto">
            Curated pieces saved for you.
          </p>
        </div>

        {wishlist.length === 0 ? (
          <div className="text-center py-24 bg-white shadow-sm border border-[#E0D9C8]">
            <Heart className="w-16 h-16 text-[#CCC] mx-auto stroke-1 mb-6" />
            <p className="font-serif text-2xl text-[#666] mb-4">Your wishlist is empty</p>
            <p className="text-sm text-[#888] max-w-md mx-auto mb-8">
              Save your favorite swimwear pieces here while you browse.
            </p>
            <button
              onClick={() => router.push("/products")}
              className="px-8 py-4 bg-[#1A1A1A] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#9A7B38] transition-colors"
            >
              Explore Collection
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {wishlist.map((product) => (
              <div key={product.id} className="group flex flex-col">
                <div className="relative aspect-3/4 overflow-hidden bg-neutral-200 mb-4">
                  <Link href={`/products/${product.id}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                    />
                  </Link>

                  {/* Remove from Wishlist Button */}
                  <button
                    onClick={() => toggleWishlist(product)}
                    className="absolute top-3 right-3 bg-white/90 p-2 rounded-full shadow hover:text-red-600 transition-colors z-10 text-neutral-500"
                    title="Remove from Wishlist"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>

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

      <Footer />
      <CartDrawer />
            <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={addToCart}
      />
    </main>
  );
}
