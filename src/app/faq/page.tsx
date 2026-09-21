"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How do I choose the best size for me?",
    answer: "Our pieces are tailored true-to-size with premium Italian Lycra that stretches comfortably to fit your natural curves. You can refer to our detailed Size Guide on each product page or reach out to our stylist team for personal sizing advice."
  },
  {
    question: "What fabrics do you use?",
    answer: "We source only the finest double-lined Italian luxury Lycra with UV 50+ protection and chlorine resistance. Our fabrics offer seamless support, supreme durability, and a silky second-skin feel."
  },
  {
    question: "How should I care for my luxury swimwear?",
    answer: "To preserve the vibrancy and stretch of your pieces, gently hand wash in cold water with mild detergent after each use. Lay flat in the shade to dry, and avoid wringing or machine washing."
  },
  {
    question: "How long does shipping take?",
    answer: "Each piece is meticulously crafted in our Mumbai atelier. Domestic delivery across India takes 3-5 business days, while international express delivery takes 5-8 business days."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship worldwide with premier express couriers! Shipping costs and delivery estimates are calculated automatically at checkout."
  }
];

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#1E332D] flex flex-col font-sans pt-32 md:pt-40">
      <Navbar />

      <div className="flex-1 max-w-4xl mx-auto w-full px-6 lg:px-12 mb-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl text-[#1E332D] mb-6">Frequently Asked Questions</h1>
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-500 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our collections, sizing, and brand philosophy.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white border border-[#E0D9C8] overflow-hidden"
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="font-serif text-lg text-[#1E332D] text-left pr-4">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#C8A366] shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-neutral-400 shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 text-sm text-neutral-600 leading-relaxed border-t border-[#E0D9C8] pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center border-t border-[#E0D9C8] pt-12">
          <p className="text-sm text-neutral-500 mb-6">Still have questions? We're here to help.</p>
          <a href="/contact" className="inline-block border border-[#1E332D] text-[#1E332D] px-8 py-3 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#1E332D] hover:text-white transition-colors">
            Contact Support
          </a>
        </div>
      </div>

      <Footer />
      <CartDrawer />
          </main>
  );
}
