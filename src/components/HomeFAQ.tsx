"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

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
