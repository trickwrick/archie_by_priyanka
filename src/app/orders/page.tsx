"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomFittingStudio from "@/components/CustomFittingStudio";
import CartDrawer from "@/components/CartDrawer";
import { useShop } from "@/context/ShopContext";
import { Package, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function OrdersPage() {
  const router = useRouter();
  const [isCustomFitModalOpen, setIsCustomFitModalOpen] = useState(false);
  const { orders } = useShop();

  return (
    <main className="min-h-screen bg-[#F5EFE6] text-[#1E332D] flex flex-col font-sans pt-56">
      <Navbar onOpenCustomFitModal={() => setIsCustomFitModalOpen(true)} />

      <div className="flex-1 max-w-7xl mx-auto w-full px-6 lg:px-12 py-12">
        <div className="text-center md:text-left mb-12">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1E332D] mb-4">
            Order History
          </h1>
          <p className="text-sm uppercase tracking-widest text-neutral-500">
            View and manage your past orders.
          </p>
        </div>

        {orders.length === 0 ? (
          <div className="text-center py-24 bg-white shadow-sm border border-[#E0D9C8]">
            <Package className="w-16 h-16 text-[#CCC] mx-auto stroke-1 mb-6" />
            <p className="font-serif text-2xl text-[#666] mb-4">You have no past orders</p>
            <p className="text-sm text-[#888] max-w-md mx-auto mb-8">
              Looks like you haven't made a purchase yet. Explore our luxury collections and find your perfect fit.
            </p>
            <button
              onClick={() => router.push("/products")}
              className="px-8 py-4 bg-[#1A1A1A] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#9A7B38] transition-colors"
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            {orders.map((order) => (
              <div key={order.id} className="bg-white border border-[#E0D9C8] shadow-sm overflow-hidden">
                <div className="bg-[#1A1A1A] text-white p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-bold tracking-widest uppercase text-xs text-[#C8A366] mb-1">Order Placed</h3>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{new Date(order.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold tracking-widest uppercase text-xs text-[#C8A366] mb-1">Total</h3>
                    <span className="text-sm">₹{order.total.toLocaleString("en-IN")}</span>
                  </div>
                  <div>
                    <h3 className="font-bold tracking-widest uppercase text-xs text-[#C8A366] mb-1">Order #</h3>
                    <span className="text-sm font-mono">{order.id}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="font-serif text-xl text-[#1E332D] mb-6 border-b border-[#E0D9C8] pb-3">Items in Order</h4>
                  <div className="space-y-6">
                    {order.items.map((item, idx) => (
                      <div key={idx} className="flex gap-6 items-center">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-20 h-28 object-cover border border-[#E0D9C8] bg-neutral-100"
                        />
                        <div className="flex-1">
                          <h5 className="font-serif text-lg font-medium text-[#1A1A1A] hover:text-[#C8A366] transition-colors inline-block mb-1">
                            <Link href={`/products/${item.product.id}`}>{item.product.name}</Link>
                          </h5>
                          <div className="text-sm text-[#666] space-y-1">
                            <p>Size: <span className="font-semibold text-black">{item.size}</span></p>
                            <p>Color: <span className="font-semibold text-black">{item.color}</span></p>
                            <p>Qty: <span className="font-semibold text-black">{item.quantity}</span></p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="font-bold text-lg text-[#1A1A1A]">
                            ₹{(item.product.price * item.quantity).toLocaleString("en-IN")}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#F4F0E8] p-4 flex justify-end border-t border-[#E0D9C8]">
                  <Link href={`/products`} className="text-xs font-bold uppercase tracking-widest text-[#1A1A1A] hover:text-[#C8A366] flex items-center gap-2 transition-colors">
                    Buy Again <ArrowRight className="w-4 h-4" />
                  </Link>
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
    </main>
  );
}
