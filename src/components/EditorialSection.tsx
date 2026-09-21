"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

interface EditorialSectionProps {
}

export default function EditorialSection({}: EditorialSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const isLeftInView = useInView(leftRef, { once: true, margin: "-100px" });
  const isRightInView = useInView(rightRef, { once: true, margin: "-100px" });

  // Parallax scroll on images
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const img1Y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const img2Y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section
      id="editorial"
      ref={sectionRef}
      className="relative py-24 lg:py-36 bg-[#FAF6F0] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-4 mb-24 lg:mb-32"
        >
          <span className="w-16 h-px bg-[#C8A366]" />
          <span className="text-xs font-bold tracking-[0.4em] uppercase text-[#1E332D]">
            THE ARCHIE ATELIER EDIT
          </span>
          <span className="w-16 h-px bg-[#C8A366]" />
        </motion.div>

        {/* LOOK 1 — Mesh Collection (Image Left, Text Right Overlap) */}
        <div
          ref={leftRef}
          className="relative flex flex-col items-center lg:items-start lg:block mb-32 lg:mb-48"
        >
          {/* Image Panel */}
          <div className="w-full lg:w-[65%] relative aspect-4/5 lg:aspect-16/10 overflow-hidden rounded-sm shadow-xl">
            <motion.img
              src="/images/swimsuit_mesh_black.jpg"
              alt="The Optical Mesh Collection"
              className="w-full h-full object-cover object-center scale-[1.15]"
              style={{ y: img1Y }}
            />
            {/* Tag */}
            <div className="absolute top-6 left-6 lg:top-10 lg:left-10 bg-white/95 backdrop-blur-sm px-5 py-2 shadow-lg">
              <span className="text-[10px] font-black tracking-[0.3em] uppercase text-[#1E332D]">
                EDITION I · 2026
              </span>
            </div>
          </div>

          {/* Text Panel (Overlap) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isLeftInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="w-11/12 lg:w-[45%] bg-[#1E332D] text-white p-10 lg:p-16 shadow-2xl z-10 -mt-20 lg:mt-0 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2"
          >
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#C8A366] font-bold mb-6 block">
              MESH & CUTOUT ARTISTRY
            </span>

            <div className="overflow-hidden mb-6">
              <motion.h3 
                initial={{ y: "100%" }}
                animate={isLeftInView ? { y: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
                className="font-serif text-4xl sm:text-5xl font-light text-white leading-[1.1]"
              >
                The Optical
                <br />
                <em className="text-[#C8A366]">Mesh</em> Collection
              </motion.h3>
            </div>

            <div className="w-12 h-px bg-[#C8A366] mb-6" />

            <p className="text-sm text-white/80 font-light leading-relaxed mb-8">
              Plunge mesh paneling paired with sculptural high-leg leglines. Designed for resort lounging and 
              sunset yacht parties across Amalfi, Goa &amp; Ibiza. Each piece is constructed with our signature 
              double-layered Italian lycra — zero see-through, maximum glamour.
            </p>

            <ul className="space-y-3 mb-10">
              {["Sheer Optical Mesh Panels", "Italian Lycra Lining", "UV 50+ Protection", "Tailored Sculpting Fit"].map((feat) => (
                <li key={feat} className="flex items-center gap-4 text-xs text-white/90 font-medium tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8A366] shrink-0" />
                  {feat}
                </li>
              ))}
            </ul>

            <Link
              href="/products?category=Mesh"
              className="inline-flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.3em] text-[#C8A366] group w-fit border-b border-[#C8A366] pb-1 hover:text-white hover:border-white transition-colors"
            >
              Shop Mesh Styles
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* LOOK 2 — Capri Blues (Image Right, Text Left Overlap) */}
        <div
          ref={rightRef}
          className="relative flex flex-col items-center lg:items-end lg:block"
        >
          {/* Image Panel */}
          <div className="w-full lg:w-[65%] lg:ml-auto relative aspect-4/5 lg:aspect-16/10 overflow-hidden rounded-sm shadow-xl">
            <motion.img
              src="/images/swimsuit_ocean_blue.jpg"
              alt="Capri Riviera Blues"
              className="w-full h-full object-cover object-center scale-[1.15]"
              style={{ y: img2Y }}
            />
            {/* Tag */}
            <div className="absolute bottom-6 right-6 lg:bottom-10 lg:right-10 bg-[#1E332D]/95 backdrop-blur-sm text-white px-5 py-2 shadow-lg">
              <span className="text-[10px] font-black tracking-[0.3em] uppercase">
                BESPOKE COLLECTION
              </span>
            </div>
          </div>

          {/* Text Panel (Overlap) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isRightInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="w-11/12 lg:w-[45%] bg-[#1E332D] text-white p-10 lg:p-16 shadow-2xl z-10 -mt-20 lg:mt-0 lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2"
          >
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#C8A366] font-bold mb-6 block">
              24K GOLD-PLATED HARDWARE
            </span>

            <div className="overflow-hidden mb-6">
              <motion.h3 
                initial={{ y: "100%" }}
                animate={isRightInView ? { y: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
                className="font-serif text-4xl sm:text-5xl font-light leading-[1.1]"
              >
                Capri &amp;
                <br />
                <em className="text-[#8FB3E0]">Riviera</em> Blues
              </motion.h3>
            </div>

            <div className="w-12 h-px bg-[#C8A366] mb-6" />

            <p className="text-sm text-white/80 font-light leading-relaxed mb-8">
              Vibrant high-pigment swim fabrics styled with anti-tarnish gold buckle hardware. 
              Available in custom cup sizes from A to G. We tailor everything to your exact measurements, 
              bringing our atelier craft directly to your wardrobe.
            </p>

            <ul className="space-y-3 mb-10">
              {["Anti-Tarnish 24K Gold Clasps", "Cup Sizes A–G Available", "High Compression Swim Satin", "Bespoke Color Matching"].map((feat) => (
                <li key={feat} className="flex items-center gap-4 text-xs font-medium tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8A366] shrink-0" />
                  {feat}
                </li>
              ))}
            </ul>

            <button
              className="inline-flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.3em] text-[#C8A366] group w-fit border-b border-[#C8A366] pb-1 hover:text-white hover:border-white transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Request Custom Color &amp; Fit
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
