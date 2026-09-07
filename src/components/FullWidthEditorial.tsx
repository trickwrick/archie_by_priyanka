"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function FullWidthEditorial() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax for image
  // Gentle parallax for image that doesn't pull top down
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "6%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["2%", "-2%"]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[85vh] lg:h-[90vh] min-h-140 overflow-hidden bg-black"
    >
      {/* Background Image - positioned at top so full face and model are in view */}
      <motion.div
        className="absolute inset-0"
        style={{ y: imageY }}
      >
        <img
          src="/images/fullwidth_bw_editorial.jpg"
          alt="Archie's by Priyanka Black & White Editorial"
          className="w-full h-full object-cover object-top grayscale brightness-90"
        />
      </motion.div>

      {/* Film grain overlay */}
      <div
        className="absolute inset-0 opacity-25 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Soft gradient in lower area for clean text contrast without darkening face */}
      <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />

      {/* Compact Editorial Text Overlay (Positioned in lower third so model face is completely clear) */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-end pb-12 sm:pb-16 lg:pb-20 px-6 text-center text-white z-10"
        style={{ y: textY }}
      >
        {/* Campaign label */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="block text-[9px] sm:text-[10px] font-bold uppercase text-white/70 mb-2.5 tracking-[0.4em]"
        >
          BLACK &amp; WHITE CAMPAIGN • MUMBAI ATELIER
        </motion.span>

        {/* Scaled-down elegant headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-white leading-tight tracking-tight mb-2.5"
        >
          SCULPTURAL <span className="italic font-normal">ELEGANCE</span>
        </motion.h2>

        {/* Compact subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-md text-xs sm:text-[13px] font-light text-white/80 leading-relaxed mb-6 tracking-wide"
        >
          Architectural swim silhouettes designed to celebrate confidence.
          <br className="hidden sm:inline" />
          {" "}Double-layered Italian lycra contoured to your exact body measurements.
        </motion.p>

        {/* Compact buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-3"
        >
          <a
            href="#collections"
            className="px-6 py-2.5 border border-white text-white text-[10px] font-black uppercase tracking-[0.25em] hover:bg-white hover:text-black transition-all"
          >
            EXPLORE COLLECTION
          </a>
          <button
            className="px-6 py-2.5 bg-white/10 backdrop-blur-sm border border-white/30 text-white text-[10px] font-black uppercase tracking-[0.25em] hover:bg-white/20 transition-all"
            onClick={() => document.getElementById("custom-fit-trigger")?.click()}
          >
            BOOK CUSTOM FIT
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
