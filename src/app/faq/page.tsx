"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomFittingStudio from "@/components/CustomFittingStudio";
import CartDrawer from "@/components/CartDrawer";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How does the Bespoke Custom Fitting process work?",
    answer: "Our bespoke fitting is a personalized experience. You provide your measurements through our Custom Fitting Studio modal, and Priyanka will directly consult with you via WhatsApp. We craft a piece uniquely tailored to your anatomical measurements, ensuring zero-pinch confidence."
  },
  {
    question: "What fabrics do you use?",
    answer: "We source only the finest double-lined Italian luxury Lycra. Our fabrics are designed to offer maximum support, durability, and a second-skin feel that moves flawlessly with your body."
  },
  {
    question: "Can I customize the coverage or style of a swimsuit?",
    answer: "Absolutely! We believe you shouldn't have to compromise between style and comfort. During the custom fitting process, you can select your preferred silhouette, rear coverage (e.g., medium, full modest, or high cut cheeky), and cup style."
  },
  {
    question: "How long does a custom order take?",
    answer: "Because every bespoke piece is handcrafted in our Mumbai atelier, please allow 10-14 business days for production before your item is shipped. We take pride in the meticulous details of our craftsmanship."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship globally! Shipping costs and delivery times vary by destination and will be calculated at checkout. Please refer to our Shipping page for detailed timelines."
  }
];

export default function FAQPage() {
  const [isCustomFitModalOpen, setIsCustomFitModalOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#1E332D] flex flex-col font-sans pt-32 md:pt-40">
      <Navbar onOpenCustomFitModal={() => setIsCustomFitModalOpen(true)} />

      <div className="flex-1 max-w-4xl mx-auto w-full px-6 lg:px-12 mb-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl text-[#1E332D] mb-6">Frequently Asked Questions</h1>
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-500 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our products, bespoke services, and brand philosophy.
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

      <Footer onOpenCustomFitModal={() => setIsCustomFitModalOpen(true)} />
      <CartDrawer onOpenCustomFitModal={() => setIsCustomFitModalOpen(true)} />
      <CustomFittingStudio isOpen={isCustomFitModalOpen} onClose={() => setIsCustomFitModalOpen(false)} />
    </main>
  );
}
