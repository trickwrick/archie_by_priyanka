"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

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

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-[#F5EFE6]">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-[#1E332D] mb-4">Frequently Asked Questions</h2>
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">Everything you need to know about our products</p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white border border-[#E0D9C8] overflow-hidden rounded-sm transition-all duration-300 hover:border-[#C8A366]"
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between focus:outline-none group"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="font-serif text-base text-[#1E332D] text-left pr-4 group-hover:text-[#C8A366] transition-colors">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#C8A366] shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-neutral-400 shrink-0 group-hover:text-[#C8A366] transition-colors" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 text-sm text-neutral-600 leading-relaxed border-t border-[#E0D9C8] pt-4 animate-in fade-in duration-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Link href="/faq" className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#C8A366] hover:text-[#1E332D] transition-colors border-b border-[#C8A366] hover:border-[#1E332D] pb-1">
            View All FAQs
          </Link>
        </div>
      </div>
    </section>
  );
}
