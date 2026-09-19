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
import CartDrawer from "@/components/CartDrawer";
import QuickViewModal from "@/components/QuickViewModal";
import Footer from "@/components/Footer";
import { Product } from "@/data/products";
import { useShop } from "@/context/ShopContext";

export default function Home() {
  const { addToCart } = useShop();
  const [isCustomFitModalOpen, setIsCustomFitModalOpen] = useState<boolean>(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

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
        onAddToCart={addToCart}
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
        onAddToCart={addToCart}
        onQuickView={(p) => setQuickViewProduct(p)}
        onOpenCustomFitModal={() => setIsCustomFitModalOpen(true)}
      />

      {/* Footer */}
      <Footer onOpenCustomFitModal={() => setIsCustomFitModalOpen(true)} />

      {/* Cart Drawer */}
      <CartDrawer
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
        onAddToCart={addToCart}
        onOpenCustomFitModal={() => setIsCustomFitModalOpen(true)}
      />
    </main>
  );
}
