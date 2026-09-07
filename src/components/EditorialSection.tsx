"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

interface EditorialSectionProps {
  onOpenCustomFitModal: () => void;
}

export default function EditorialSection({ onOpenCustomFitModal }: EditorialSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const isLeftInView = useInView(leftRef, { once: true, margin: "-80px" });
  const isRightInView = useInView(rightRef, { once: true, margin: "-80px" });

  // Parallax scroll on images
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const img1Y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const img2Y = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

  return (
    <section
      id="editorial"
      ref={sectionRef}
      className="relative py-24 lg:py-36 bg-white overflow-hidden"
    >
      {/* Top rule */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-[#DDD4C0] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="w-12 h-px bg-[#C8A366]" />
          <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#C8A366]">
            THE ARCHIE ATELIER EDIT
          </span>
        </motion.div>

        {/* CARD 1 — Mesh Collection (left-right layout) */}
        <div
          ref={leftRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-0 mb-4 border border-[#EBE6DC] overflow-hidden"
        >
          {/* Image Panel */}
          <div className="relative aspect-3/4 lg:aspect-auto lg:min-h-150 overflow-hidden bg-[#E8E2D5] order-2 lg:order-1">
            <motion.img
              src="/images/swimsuit_mesh_black.jpg"
              alt="The Optical Mesh Collection"
              className="w-full h-full object-cover object-center scale-[1.1]"
              style={{ y: img1Y }}
            />
            {/* Overlay tag */}
            <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2">
              <span className="text-[9px] font-black tracking-[0.35em] uppercase text-[#1A1A1A]">
                EDITION I · 2026
              </span>
            </div>
          </div>

          {/* Text Panel */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isLeftInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center p-10 lg:p-16 bg-white order-1 lg:order-2"
          >
            <span className="text-[9px] tracking-[0.4em] uppercase text-[#9A7B38] font-bold mb-6 block">
              MESH & CUTOUT ARTISTRY
            </span>

            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#1A1A1A] leading-[1.1] mb-6">
              The Optical
              <br />
              <em className="text-[#9A7B38]">Mesh</em> Collection
            </h3>

            <div className="w-10 h-px bg-[#C8A366] mb-6" />

            <p className="text-sm text-[#666] font-light leading-relaxed mb-8">
              Plunge mesh paneling paired with sculptural high-leg leglines. Designed for resort lounging and 
              sunset yacht parties across Amalfi, Goa &amp; Ibiza. Each piece constructed with our signature 
              double-layered Italian lycra — zero see-through, maximum glamour.
            </p>

            <ul className="space-y-2.5 mb-10">
              {["Sheer Optical Mesh Panels", "Italian Lycra Lining", "UV 50+ Protection", "Available in Custom Measurements"].map((feat) => (
                <li key={feat} className="flex items-center gap-3 text-xs text-[#4A5D57] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8A366] shrink-0" />
                  {feat}
                </li>
              ))}
            </ul>

            <a
              href="#collections"
              className="inline-flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.3em] text-[#1A1A1A] group w-fit border-b border-[#1A1A1A] pb-1 hover:text-[#9A7B38] hover:border-[#9A7B38] transition-colors"
            >
              Shop Mesh Monokinis
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* CARD 2 — Capri Blues (right-left layout) */}
        <div
          ref={rightRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-[#EBE6DC] overflow-hidden"
        >
          {/* Text Panel */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isRightInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center p-10 lg:p-16 bg-[#F5EFE6] order-1"
          >
            <span className="text-[9px] tracking-[0.4em] uppercase text-[#9A7B38] font-bold mb-6 block">
              24K GOLD-PLATED HARDWARE
            </span>

            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#1A1A1A] leading-[1.1] mb-6">
              Capri &amp;
              <br />
              <em className="text-[#0047ab]">Riviera</em> Blues
            </h3>

            <div className="w-10 h-px bg-[#C8A366] mb-6" />

            <p className="text-sm text-[#666] font-light leading-relaxed mb-8">
              Vibrant high-pigment swim fabrics styled with anti-tarnish gold buckle hardware. 
              Available in custom cup sizes from A to G. Your exact measurements, our atelier craft.
            </p>

            <ul className="space-y-2.5 mb-10">
              {["Anti-Tarnish 24K Gold Clasps", "Cup Sizes A–G Available", "High Compression Swim Satin", "Bespoke Color Matching"].map((feat) => (
                <li key={feat} className="flex items-center gap-3 text-xs text-[#4A5D57] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8A366] shrink-0" />
                  {feat}
                </li>
              ))}
            </ul>

            <button
              onClick={onOpenCustomFitModal}
              className="inline-flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.3em] text-[#9A7B38] group w-fit border-b border-[#9A7B38] pb-1 hover:text-[#1A1A1A] hover:border-[#1A1A1A] transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Request Custom Color &amp; Fit
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </button>
          </motion.div>

          {/* Image Panel */}
          <div className="relative aspect-3/4 lg:aspect-auto lg:min-h-150 overflow-hidden bg-[#E8E2D5] order-2">
            <motion.img
              src="/images/swimsuit_ocean_blue.jpg"
              alt="Capri Riviera Blues"
              className="w-full h-full object-cover object-center scale-[1.1]"
              style={{ y: img2Y }}
            />
            <div className="absolute bottom-6 right-6 bg-[#9A7B38] text-white px-4 py-2">
              <span className="text-[9px] font-black tracking-[0.35em] uppercase">
                BESPOKE FITTING
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
