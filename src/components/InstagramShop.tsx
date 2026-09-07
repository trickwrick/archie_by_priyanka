"use client";

import React from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const InstagramIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const GRID_ITEMS = [
  { id: "grid-1",  image: "/images/swimsuit_mesh_black.jpg",  title: "Aegean Black Mesh Plunge Monokini",  aspect: "aspect-square",  size: "col-span-1" },
  { id: "grid-2",  image: "/images/insta_blue_plunge.jpg",    title: "Sky Blue Plunge & White Crochet Knit", aspect: "aspect-[4/5]",   size: "col-span-1" },
  { id: "grid-3",  image: "/images/insta_pink_cutout.jpg",    title: "Hot Pink Keyhole Santorini Monokini", aspect: "aspect-[3/4]",   size: "col-span-1" },
  { id: "grid-4",  image: "/images/swimsuit_ocean_blue.jpg",  title: "Capri Royal Blue Gold Buckle Set",    aspect: "aspect-square",  size: "col-span-1" },
  { id: "grid-5",  image: "/images/insta_straw_hat.jpg",      title: "Polka Dot Bikini & Wide Straw Hat",   aspect: "aspect-[3/4]",   size: "col-span-1" },
  { id: "grid-6",  image: "/images/swimsuit_neon_lime.jpg",   title: "Riviera High-Waist Neon Lime Set",    aspect: "aspect-square",  size: "col-span-1" },
  { id: "grid-7",  image: "/images/insta_ombre_blue.jpg",     title: "Ocean Blue Ombre Gradient Monokini",  aspect: "aspect-[4/5]",   size: "col-span-1" },
  { id: "grid-8",  image: "/images/hero_beach_luxury.jpg",    title: "Bronze Metallic Criss-Cross Wrap",    aspect: "aspect-square",  size: "col-span-1" },
  { id: "grid-9",  image: "/images/oye_luxury_hero.jpg",      title: "Summer 2026 Towel Wrap Editorial",    aspect: "aspect-[3/4]",   size: "col-span-1" },
  { id: "grid-10", image: "/images/swimsuit_mesh_black.jpg",  title: "Sheer Panel High-Neck Silhouette",    aspect: "aspect-square",  size: "col-span-1" },
  { id: "grid-11", image: "/images/insta_blue_plunge.jpg",    title: "Bespoke Resortwear & Cover-up",       aspect: "aspect-[4/5]",   size: "col-span-1" },
  { id: "grid-12", image: "/images/swimsuit_ocean_blue.jpg",  title: "Mediterranean 24k Gold Accents",      aspect: "aspect-square",  size: "col-span-1" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.92, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function InstagramShop() {
  return (
    <section id="instagram" className="relative bg-white py-20 lg:py-28">
      {/* Top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-[#DDD4C0] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12"
        >
          <div>
            <span className="flex items-center gap-2 text-[10px] font-bold tracking-[0.5em] uppercase text-[#C8A366] mb-3">
              <span className="w-8 h-px bg-[#C8A366] inline-block" />
              AS SEEN ON INSTAGRAM
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#1E332D] tracking-tight">
              Shop Our
              <br />
              <em className="text-[#9A7B38]">Instagram</em>
            </h2>
          </div>

          <a
            href="https://www.instagram.com/archie_by_priyanka/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-6 py-3 border border-[#1E332D] text-[11px] font-black tracking-[0.3em] uppercase text-[#1E332D] hover:bg-[#1E332D] hover:text-white transition-all"
          >
            <InstagramIcon className="w-4 h-4" />
            @archie_by_priyanka
          </a>
        </motion.div>

        {/* Masonry-style Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3"
        >
          {GRID_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className={`group relative overflow-hidden bg-[#EDE8DF] cursor-pointer ${item.aspect}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                style={{ minHeight: "100%", minWidth: "100%" }}
              />

              {/* Instagram-style hover overlay */}
              <div className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-3 p-4">
                <InstagramIcon className="w-7 h-7 text-white" />
                <p className="text-[10px] uppercase tracking-[0.15em] font-medium text-white/90 text-center line-clamp-2">
                  {item.title}
                </p>
                <a
                  href="#collections"
                  className="mt-1 px-4 py-2 bg-white text-black text-[9px] font-black uppercase tracking-[0.3em] hover:bg-[#C8A366] hover:text-white transition-all"
                  onClick={(e) => e.stopPropagation()}
                >
                  SHOP THE LOOK
                </a>
              </div>

              {/* Index number — editorial touch */}
              <div className="absolute bottom-2 left-2 text-white/30 font-black text-xs leading-none group-hover:opacity-0 transition-opacity">
                {String(index + 1).padStart(2, "0")}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 flex flex-col items-center gap-4"
        >
          <a
            href="https://www.instagram.com/archie_by_priyanka/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center border border-[#555] text-[#555] hover:border-[#C8A366] hover:text-[#C8A366] transition-all hover:rotate-45 duration-300"
          >
            <Plus className="w-5 h-5" strokeWidth={1.5} />
          </a>
          <a
            href="https://www.instagram.com/archie_by_priyanka/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-bold tracking-[0.4em] uppercase text-[#555] hover:text-[#C8A366] transition-colors"
          >
            &gt;&gt; SEE MORE ON INSTAGRAM
          </a>
        </motion.div>
      </div>
    </section>
  );
}
