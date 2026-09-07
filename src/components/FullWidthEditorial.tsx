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
  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  // Parallax for overlay text
  const textY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[80vh] lg:h-screen overflow-hidden bg-black"
    >
      {/* Parallax Background Image */}
      <motion.div
        className="absolute inset-0 scale-[1.2]"
        style={{ y: imageY }}
      >
        <img
          src="/images/fullwidth_bw_editorial.jpg"
          alt="Archie's by Priyanka Black & White Editorial"
          className="w-full h-full object-cover object-center grayscale brightness-75"
        />
      </motion.div>

      {/* Film grain overlay */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-black/20" />

      {/* Centered editorial text */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white"
        style={{ y: textY }}
      >
        {/* Campaign label */}
        <motion.span
          initial={{ opacity: 0, letterSpacing: "0.1em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.5em" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="block text-[10px] sm:text-xs font-bold uppercase text-white/60 mb-6 tracking-[0.5em]"
        >
          BLACK &amp; WHITE CAMPAIGN • MUMBAI ATELIER
        </motion.span>

        {/* Main headline — huge serif */}
        <div className="overflow-hidden mb-2">
          <motion.h2
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl sm:text-7xl lg:text-[100px] xl:text-[120px] font-light text-white leading-[0.9] tracking-tight"
          >
            SCULPTURAL
          </motion.h2>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.h2
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl sm:text-7xl lg:text-[100px] xl:text-[120px] font-light text-white leading-[0.9] tracking-tight"
          >
            <em>ELEGANCE</em>
          </motion.h2>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-lg text-xs sm:text-sm font-light text-white/70 leading-relaxed mb-10 tracking-wider"
        >
          Architectural swim silhouettes designed to celebrate confidence.
          <br />
          Double-layered Italian lycra contoured to your exact body measurements.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#collections"
            className="px-8 py-3.5 border border-white text-white text-[11px] font-black uppercase tracking-[0.35em] hover:bg-white hover:text-black transition-all"
          >
            EXPLORE COLLECTION
          </a>
          <button
            className="px-8 py-3.5 bg-white/10 backdrop-blur-sm border border-white/30 text-white text-[11px] font-black uppercase tracking-[0.35em] hover:bg-white/20 transition-all"
            onClick={() => document.getElementById("custom-fit-trigger")?.click()}
          >
            BOOK CUSTOM FIT
          </button>
        </motion.div>

        {/* Edition info bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-8 left-0 right-0 flex items-center justify-center gap-8"
        >
          <span className="w-12 h-px bg-white/30" />
          <span className="text-[9px] font-medium tracking-[0.4em] uppercase text-white/40">
            ARCHIE BY PRIYANKA • SS 2026
          </span>
          <span className="w-12 h-px bg-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
