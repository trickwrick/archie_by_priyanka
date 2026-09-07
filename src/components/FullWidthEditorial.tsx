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
          className="w-full h-full object-cover object-top grayscale brightness-95"
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

      {/* Subtle bottom vignette to blend naturally */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/40 to-transparent pointer-events-none" />
    </section>
  );
}
