"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasSeen, setHasSeen] = useState(false);

  useEffect(() => {
    // Check if the user has already seen the preloader in this session
    const seen = sessionStorage.getItem("hasSeenPreloader");
    if (seen) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setHasSeen(true);
      setIsLoading(false);
      return;
    }

    // Disable scroll while loading
    document.body.style.overflow = "hidden";
    
    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("hasSeenPreloader", "true");
      document.body.style.overflow = ""; // restore scroll
    }, 2200); // 2.2s cinematic load

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  // If already seen, don't render anything (prevents the exit animation from playing)
  if (hasSeen) return null;

  return (
    <AnimatePresence>
      {isLoading && (
          <motion.div
            id="preloader-overlay"
            key="preloader"
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-[#1A1A1A] text-white"
          >
          <div className="flex flex-col items-center gap-6 overflow-hidden">
            {/* Logo Mark Reveal */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-[#C8A366]">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                <path d="M8 10s1.5-2 4-2 4 2 4 2" />
              </svg>
            </motion.div>
            
            {/* Split Text Reveal for Brand Name */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
                className="font-serif text-3xl md:text-4xl tracking-[0.2em] uppercase font-light text-white"
              >
                Archie&apos;s
              </motion.h1>
            </div>
            
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
                className="text-[9px] tracking-[0.4em] text-[#C8A366] font-bold uppercase"
              >
                BY PRIYANKA
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
