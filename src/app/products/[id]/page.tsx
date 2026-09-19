"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { PRODUCTS, Product } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomFittingStudio from "@/components/CustomFittingStudio";
import CartDrawer from "@/components/CartDrawer";
import { useShop } from "@/context/ShopContext";
import { Heart, ShoppingBag, ArrowLeft, Ruler, ShieldCheck, Star } from "lucide-react";
import Link from "next/link";

export default function ProductDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [isCustomFitModalOpen, setIsCustomFitModalOpen] = useState(false);
  
  const { addToCart, toggleWishlist, isInWishlist } = useShop();

  useEffect(() => {
    const p = PRODUCTS.find((p) => p.id === id);
    if (p) {
      setProduct(p);
      setSelectedSize(p.sizes[0]);
      setSelectedColor(p.colors[0].name);

      const related = PRODUCTS.filter((item) => item.category === p.category && item.id !== p.id)
        .sort(() => 0.5 - Math.random())
        .slice(0, 4);
      
      if (related.length < 4) {
        const more = PRODUCTS.filter((item) => item.id !== p.id && !related.find(r => r.id === item.id))
          .sort(() => 0.5 - Math.random())
          .slice(0, 4 - related.length);
        setRelatedProducts([...related, ...more]);
      } else {
        setRelatedProducts(related);
      }
    }
  }, [id]);

  if (!product) {
    return (
      <main className="min-h-screen bg-[#F5EFE6] flex items-center justify-center">
        <div className="text-center">
          <p className="font-serif text-2xl text-[#1E332D] mb-4">Product Not Found</p>
          <button onClick={() => router.push("/products")} className="text-xs uppercase tracking-widest font-bold underline">
            Return to Shop
          </button>
        </div>
      </main>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor);
  };

  return (
    <main className="min-h-screen bg-[#F5EFE6] text-[#1E332D] flex flex-col font-sans pt-56">
      <Navbar onOpenCustomFitModal={() => setIsCustomFitModalOpen(true)} />

      <div className="flex-1 max-w-7xl mx-auto w-full px-6 lg:px-12 py-8">
        <button onClick={() => router.back()} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-500 hover:text-[#C8A366] transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back
        </button>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
          {/* Image Gallery */}
          <div className="md:w-1/2 flex gap-4">
            {/* Thumbnails Sidebar */}
            <div className="hidden md:flex flex-col gap-4 w-20">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`w-20 aspect-3/4 bg-neutral-200 cursor-pointer border-2 transition-all ${i === 1 ? 'border-[#C8A366]' : 'border-transparent hover:border-neutral-300'}`}>
                  <img src={product.image} alt={`${product.name} angle ${i}`} className={`w-full h-full object-cover ${i > 1 ? 'opacity-80' : ''}`} />
                </div>
              ))}
            </div>
            {/* Main Image */}
            <div className="flex-1 aspect-3/4 bg-neutral-200 relative group overflow-hidden cursor-crosshair">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
          </div>

          {/* Product Details */}
          <div className="md:w-1/2 flex flex-col justify-start">
            <div className="mb-2">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#C8A366] mb-2">{product.category}</p>
              <h1 className="font-serif text-3xl md:text-4xl text-[#1E332D] mb-2">{product.name}</h1>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-[#1E332D]">₹{product.price.toLocaleString()}</span>
                {product.originalPrice && (
                  <span className="text-lg text-neutral-400 line-through">₹{product.originalPrice.toLocaleString()}</span>
                )}
              </div>
            </div>

            <div className="my-8 h-px w-full bg-[#E0D9C8]"></div>

            {/* Colors */}
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-widest mb-3 flex justify-between">
                <span>Color: <span className="font-medium text-neutral-500 ml-1">{selectedColor}</span></span>
              </p>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-8 h-8 rounded-full border-2 transition-all ${
                      selectedColor === color.name ? "border-[#C8A366] scale-110" : "border-transparent"
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <p className="text-xs font-bold uppercase tracking-widest">Size</p>
                <button className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 hover:text-[#C8A366] underline flex items-center gap-1">
                  <Ruler className="w-3 h-3" /> Size Guide
                </button>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => {
                      if (size === "Custom Fit") {
                        setIsCustomFitModalOpen(true);
                      } else {
                        setSelectedSize(size);
                      }
                    }}
                    className={`py-3 text-xs font-bold tracking-widest uppercase border transition-all ${
                      selectedSize === size
                        ? "border-[#1E332D] bg-[#1E332D] text-white"
                        : size === "Custom Fit"
                        ? "border-[#C8A366] text-[#C8A366] hover:bg-[#C8A366] hover:text-white col-span-4 mt-2"
                        : "border-[#D0C8B8] text-[#1E332D] hover:border-[#1E332D]"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mb-8">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-[#1E332D] text-white py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#C8A366] transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" /> Add to Cart
              </button>
              <button
                onClick={() => toggleWishlist(product)}
                className={`p-4 border transition-colors ${
                  isInWishlist(product.id) ? "border-[#C8A366] bg-[#C8A366]/10 text-[#C8A366]" : "border-[#D0C8B8] text-neutral-500 hover:border-[#1E332D] hover:text-[#1E332D]"
                }`}
              >
                <Heart className="w-5 h-5" fill={isInWishlist(product.id) ? "currentColor" : "none"} />
              </button>
            </div>

            {/* Description & Details */}
            <div className="space-y-6 text-sm text-neutral-600 leading-relaxed">
              <p>{product.description}</p>
              <div>
                <p className="font-bold text-[#1E332D] mb-1">Fabric & Care</p>
                <p>{product.fabricDetails}</p>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium bg-white/50 p-3 border border-[#E0D9C8]">
                <ShieldCheck className="w-4 h-4 text-[#C8A366]" /> Handcrafted in Mumbai. Guaranteed Quality.
              </div>
            </div>

            {/* Customer Reviews Summary */}
            <div className="mt-12 pt-8 border-t border-[#E0D9C8]">
              <h3 className="font-serif text-2xl text-[#1E332D] mb-6">Customer Reviews</h3>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex text-[#C8A366]">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <span className="text-sm font-bold text-[#1A1A1A]">4.9 / 5.0</span>
                <span className="text-xs text-neutral-500">(24 Reviews)</span>
              </div>
              
              <div className="space-y-8">
                <div className="pb-8 border-b border-[#E0D9C8]/50">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="text-sm font-bold text-[#1A1A1A]">Aisha M.</p>
                      <p className="text-[10px] uppercase tracking-widest text-neutral-500">Verified Buyer</p>
                    </div>
                    <div className="flex text-[#C8A366]">
                      {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                    </div>
                  </div>
                  <p className="text-sm text-neutral-600 italic">"Absolutely stunning! The fit is perfect and the quality of the fabric feels extremely luxurious. Wore it in Maldives and got so many compliments."</p>
                </div>
                
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="text-sm font-bold text-[#1A1A1A]">Priya S.</p>
                      <p className="text-[10px] uppercase tracking-widest text-neutral-500">Verified Buyer</p>
                    </div>
                    <div className="flex text-[#C8A366]">
                      {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                    </div>
                  </div>
                  <p className="text-sm text-neutral-600 italic">"I love the bespoke fitting service. It hugs my body in all the right places. Will definitely order the other color soon!"</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        {relatedProducts.length > 0 && (
          <div className="mt-24 pt-16 border-t border-[#E0D9C8]">
            <h2 className="font-serif text-3xl text-[#1E332D] mb-10 text-center">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((p) => (
                <div key={p.id} className="group flex flex-col">
                  <div className="relative aspect-3/4 overflow-hidden bg-neutral-200 mb-4">
                    <Link href={`/products/${p.id}`}>
                      <img src={p.image} alt={p.name} className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" />
                    </Link>
                  </div>
                  <div className="flex flex-col items-center text-center mt-2">
                    <Link href={`/products/${p.id}`}>
                      <h3 className="font-serif text-base text-[#1E332D] mb-1 hover:text-[#C8A366] transition-colors">{p.name}</h3>
                    </Link>
                    <span className="font-bold text-[#1E332D] text-sm">₹{p.price.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer onOpenCustomFitModal={() => setIsCustomFitModalOpen(true)} />
      <CartDrawer onOpenCustomFitModal={() => setIsCustomFitModalOpen(true)} />
      <CustomFittingStudio isOpen={isCustomFitModalOpen} onClose={() => setIsCustomFitModalOpen(false)} />
    </main>
  );
}
