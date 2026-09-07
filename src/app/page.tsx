"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import FeaturedProducts from "@/components/FeaturedProducts";
import EditorialSection from "@/components/EditorialSection";
import BrandPromises from "@/components/BrandPromises";
import InstagramShop from "@/components/InstagramShop";
import FullWidthEditorial from "@/components/FullWidthEditorial";
import ShopBySilhouette from "@/components/ShopBySilhouette";
import CustomFittingStudio from "@/components/CustomFittingStudio";
import CartDrawer, { CartItem } from "@/components/CartDrawer";
import QuickViewModal from "@/components/QuickViewModal";
import Footer from "@/components/Footer";
import { Product } from "@/data/products";

export default function Home() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isCustomFitModalOpen, setIsCustomFitModalOpen] = useState<boolean>(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const handleAddToCart = (product: Product, size: string, color: string) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.size === size && item.color === color
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      }
      return [...prev, { product, size, color, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, size: string, color: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId && item.size === size && item.color === color) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (productId: string, size: string, color: string) => {
    setCartItems((prev) =>
      prev.filter(
        (item) => !(item.product.id === productId && item.size === size && item.color === color)
      )
    );
  };

  const totalCartCount = cartItems.reduce((acc, i) => acc + i.quantity, 0);

  return (
    <main className="min-h-screen bg-[#F5EFE6] text-[#1E332D] flex flex-col font-sans selection:bg-[#1E332D] selection:text-white m-0 p-0">
      {/* Hidden trigger button for FullWidthEditorial CTA */}
      <button
        id="custom-fit-trigger"
        onClick={() => setIsCustomFitModalOpen(true)}
        className="hidden"
        aria-hidden="true"
      />

      {/* Sticky Luxury Navbar */}
      <Navbar
        cartCount={totalCartCount}
        wishlistCount={2}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenCustomFitModal={() => setIsCustomFitModalOpen(true)}
      />

      {/* Hero Slider */}
      <Hero onOpenCustomFitModal={() => setIsCustomFitModalOpen(true)} />

      {/* Shop By Category Section */}
      <CategorySection
        onSelectCategory={(cat) => setSelectedCategory(cat)}
        onOpenCustomFitModal={() => setIsCustomFitModalOpen(true)}
      />

      {/* Featured Product Catalog */}
      <FeaturedProducts
        externalCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        onAddToCart={handleAddToCart}
        onQuickView={(p) => setQuickViewProduct(p)}
        onOpenCustomFitModal={() => setIsCustomFitModalOpen(true)}
      />

      {/* Brand Promises / USP Section */}
      <BrandPromises />

      {/* Editorial Split Feature */}
      <EditorialSection onOpenCustomFitModal={() => setIsCustomFitModalOpen(true)} />

      {/* Instagram Shop Grid */}
      <InstagramShop />

      {/* Full-Width B&W Parallax Editorial Banner */}
      <FullWidthEditorial />

      {/* Shop By Silhouette */}
      <ShopBySilhouette
        onAddToCart={handleAddToCart}
        onQuickView={(p) => setQuickViewProduct(p)}
        onOpenCustomFitModal={() => setIsCustomFitModalOpen(true)}
      />

      {/* Footer */}
      <Footer onOpenCustomFitModal={() => setIsCustomFitModalOpen(true)} />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onOpenCustomFitModal={() => setIsCustomFitModalOpen(true)}
      />

      {/* Custom Fit Studio Modal */}
      <CustomFittingStudio
        isOpen={isCustomFitModalOpen}
        onClose={() => setIsCustomFitModalOpen(false)}
      />

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        onOpenCustomFitModal={() => setIsCustomFitModalOpen(true)}
      />
    </main>
  );
}
