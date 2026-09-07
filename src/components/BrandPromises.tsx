"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Ruler, Sparkles, ShieldCheck, Truck, RefreshCw, Star } from "lucide-react";

const PROMISES = [
  {
    icon: Ruler,
    title: "Made-to-Measure",
    desc: "Every piece tailored to your exact measurements. No standard sizing constraints.",
  },
  {
    icon: Star,
    title: "Italian Lycra",
    desc: "Double-layered premium lycra sourced from Italy. UV50+ chlorine resistant.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Guarantee",
    desc: "Each piece hand-inspected by Priyanka before dispatch from the Mumbai atelier.",
  },
  {
    icon: Sparkles,
    title: "Bespoke Colors",
    desc: "Custom fabric and colorway requests available. Your vision, our craft.",
  },
  {
    icon: Truck,
    title: "Pan-India Shipping",
    desc: "Free express delivery across India. International shipping available on request.",
  },
  {
    icon: RefreshCw,
    title: "Easy Alterations",
    desc: "Complimentary fit alterations within 14 days of delivery.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function BrandPromises() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative bg-[#EDE6DA] py-20 lg:py-28 overflow-hidden">
      {/* Top border line */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-[#C8A366]/50 to-transparent" />

      {/* Decorative watermark */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
        aria-hidden
      >
        <span className="font-serif text-[200px] sm:text-[280px] font-black text-[#D8CEBC]/40 leading-none tracking-tight">
          ✦
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="flex items-center gap-3 text-[10px] font-bold tracking-[0.5em] uppercase text-[#C8A366] mb-5">
            <span className="w-8 h-px bg-[#C8A366] inline-block" />
            THE ARCHIE PROMISE
            <span className="w-8 h-px bg-[#C8A366] inline-block" />
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#1E332D] tracking-tight leading-[1.05]">
            Designed Around
            <br />
            <em className="text-[#9A7B38]">You</em>
          </h2>
        </motion.div>

        {/* Promise Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {PROMISES.map((promise) => {
            const Icon = promise.icon;
            return (
              <motion.div
                key={promise.title}
                variants={itemVariants}
                className="group bg-white/60 hover:bg-white border border-[#D8CEBC] hover:border-[#C8A366]/50 p-8 lg:p-9 transition-all duration-400 hover:shadow-sm"
              >
                {/* Icon box */}
                <div className="w-11 h-11 flex items-center justify-center border border-[#C8A366]/40 bg-[#F5EFE6] mb-6 group-hover:border-[#C8A366] group-hover:bg-[#C8A366]/10 transition-all duration-300">
                  <Icon className="w-5 h-5 text-[#9A7B38]" strokeWidth={1.5} />
                </div>

                {/* Gold accent line */}
                <div className="w-6 h-px bg-[#C8A366] mb-4 group-hover:w-10 transition-all duration-400" />

                <h3 className="font-serif text-lg font-medium text-[#1E332D] mb-2.5">
                  {promise.title}
                </h3>
                <p className="text-sm text-[#5A6B65] font-light leading-relaxed">
                  {promise.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-3 gap-8 mt-16 pt-14 border-t border-[#C8A366]/30 text-center"
        >
          {[
            { value: "500+", label: "Pieces Crafted" },
            { value: "100%", label: "Custom Fit Guarantee" },
            { value: "4.9★", label: "Customer Rating" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#9A7B38] mb-2">
                {stat.value}
              </div>
              <div className="text-[10px] font-bold tracking-[0.35em] uppercase text-[#7A8D87]">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom border line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-[#C8A366]/50 to-transparent" />
    </section>
  );
}
