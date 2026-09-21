"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

export default function ReturnsPage() {
  
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#1E332D] flex flex-col font-sans pt-32 md:pt-40">
      <Navbar />

      <div className="flex-1 max-w-3xl mx-auto w-full px-6 lg:px-12 mb-24">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl text-[#1E332D] mb-6">Returns & Exchanges</h1>
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-500 max-w-2xl mx-auto leading-relaxed">
            Our policy ensures fairness while maintaining the integrity of our bespoke craftsmanship.
          </p>
        </div>

        <div className="prose prose-sm md:prose-base prose-neutral max-w-none text-neutral-700 space-y-8">
          <section>
            <h2 className="font-serif text-2xl text-[#1E332D] mb-4">Ready-to-Wear Returns</h2>
            <p className="leading-relaxed">
              We gladly accept returns of unworn, unwashed, and undamaged ready-to-wear items within 14 days of delivery. All original tags and hygiene liners must be firmly attached and intact. Items returned with signs of wear, makeup, or missing tags will not be accepted and will be sent back to the customer.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#1E332D] mb-4">Bespoke & Custom Orders</h2>
            <p className="leading-relaxed">
              Due to the highly personalized nature of our bespoke and custom-fitted pieces, **all custom orders are final sale**. These items are meticulously handcrafted to your exact anatomical measurements and cannot be restocked.
            </p>
            <p className="leading-relaxed mt-4">
              If you experience a fit issue with your bespoke piece, please contact us within 7 days of receipt. Priyanka and our atelier team will work with you to provide complimentary alterations to ensure zero-pinch confidence.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#1E332D] mb-4">How to Initiate a Return</h2>
            <ol className="list-decimal pl-5 space-y-3 leading-relaxed">
              <li>Email our Concierge at <a href="mailto:concierge@archiesbypriyanka.com" className="text-[#C8A366] hover:underline">concierge@archiesbypriyanka.com</a> with your order number.</li>
              <li>Wait for our team to approve your request and provide a Return Authorization (RA) number.</li>
              <li>Securely package the items and ship them back using a trackable courier service.</li>
            </ol>
            <p className="text-sm text-neutral-500 mt-4 italic">
              Note: Return shipping costs are the responsibility of the customer unless the item received was defective.
            </p>
          </section>
        </div>
      </div>

      <Footer />
      <CartDrawer />
          </main>
  );
}
