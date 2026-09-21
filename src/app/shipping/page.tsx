"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

export default function ShippingPage() {
  
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#1E332D] flex flex-col font-sans pt-32 md:pt-40">
      <Navbar />

      <div className="flex-1 max-w-3xl mx-auto w-full px-6 lg:px-12 mb-24">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl text-[#1E332D] mb-6">Shipping Information</h1>
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-500 max-w-2xl mx-auto leading-relaxed">
            Delivering luxury worldwide from our Mumbai atelier directly to your door.
          </p>
        </div>

        <div className="prose prose-sm md:prose-base prose-neutral max-w-none text-neutral-700 space-y-10">
          <section>
            <h2 className="font-serif text-2xl text-[#1E332D] mb-4">Processing Times</h2>
            <p className="leading-relaxed">
              <strong>Ready-to-Wear:</strong> Orders are processed and dispatched within 2-3 business days.
            </p>
            <p className="leading-relaxed mt-2">
              <strong>Handcrafted Atelier Orders:</strong> Each piece is meticulously inspected by our master artisans to guarantee zero defects and pristine luxury quality.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#1E332D] mb-4">Domestic Shipping (India)</h2>
            <ul className="list-disc pl-5 space-y-2 leading-relaxed">
              <li><strong>Standard Shipping:</strong> Free on all orders over ₹5,000 (Delivery in 3-5 business days).</li>
              <li><strong>Express Shipping:</strong> ₹300 flat rate (Delivery in 1-2 business days).</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#1E332D] mb-4">International Shipping</h2>
            <p className="leading-relaxed mb-4">
              We ship to most countries worldwide via DHL Express. Shipping rates are calculated dynamically at checkout based on your delivery address.
            </p>
            <ul className="list-disc pl-5 space-y-2 leading-relaxed">
              <li><strong>USA & Canada:</strong> 4-7 business days.</li>
              <li><strong>Europe & UK:</strong> 5-8 business days.</li>
              <li><strong>Middle East & Asia:</strong> 3-6 business days.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#1E332D] mb-4">Duties & Taxes</h2>
            <p className="leading-relaxed">
              For international orders, please note that custom duties, local taxes, and import fees are not included at checkout. These charges are determined by your local customs authority and must be paid upon delivery. Archie&apos;s by Priyanka is not responsible for any delays caused by customs clearance.
            </p>
          </section>
        </div>
      </div>

      <Footer />
      <CartDrawer />
          </main>
  );
}
