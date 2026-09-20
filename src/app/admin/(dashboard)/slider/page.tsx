"use client";

import React, { useState } from "react";
import { Upload, Save, Image as ImageIcon } from "lucide-react";

export default function AdminSlider() {
  const [sliderImages, setSliderImages] = useState([
    "/images/hero_beach_luxury.jpg",
    "/images/oye_luxury_hero.jpg",
    "/images/swimsuit_ocean_blue.jpg"
  ]);

  return (
    <div className="max-w-5xl space-y-8">
      <div className="bg-white border border-[#E0D9C8] shadow-sm">
        <div className="p-6 border-b border-[#E0D9C8] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="font-serif text-xl text-[#1E332D]">Hero Slider Images</h2>
            <p className="text-xs text-neutral-500 mt-1">Manage the images displayed on the home page hero slider.</p>
          </div>
          <button 
            onClick={() => alert("Upload Image action triggered")}
            className="bg-[#1E332D] text-white px-4 py-2 text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-[#C8A366] transition-colors"
          >
            <Upload className="w-4 h-4" /> Upload New
          </button>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sliderImages.map((img, idx) => (
              <div key={idx} className="relative group aspect-21/9 sm:aspect-auto sm:h-56 bg-neutral-100 border border-[#E0D9C8] overflow-hidden">
                <img src={img} alt={`Slider ${idx + 1}`} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3">
                  <button 
                    onClick={() => alert("Change Image action triggered")}
                    className="bg-white text-[#1E332D] px-4 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-[#C8A366] hover:text-white transition-colors"
                  >
                    Change Image
                  </button>
                  <button 
                    onClick={() => alert("Remove Image action triggered")}
                    className="text-white text-[10px] font-bold uppercase tracking-widest hover:text-red-400 transition-colors"
                  >
                    Remove
                  </button>
                </div>
                <div className="absolute top-3 left-3 bg-black/80 text-white text-[10px] px-3 py-1 font-bold tracking-widest">
                  Slide {idx + 1}
                </div>
              </div>
            ))}
            
            {/* Empty Slot for adding */}
            <div 
              onClick={() => alert("Add Slide action triggered")}
              className="aspect-21/9 sm:aspect-auto sm:h-56 border-2 border-dashed border-[#E0D9C8] flex flex-col items-center justify-center text-neutral-400 hover:text-[#C8A366] hover:border-[#C8A366] transition-colors cursor-pointer bg-neutral-50"
            >
              <ImageIcon className="w-8 h-8 mb-2 opacity-50" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Add Slide</span>
            </div>
          </div>
        </div>
        
        <div className="p-6 border-t border-[#E0D9C8] bg-neutral-50 flex justify-end">
          <button 
            onClick={() => alert("Save Changes action triggered")}
            className="bg-[#1E332D] text-white px-6 py-2.5 text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-[#C8A366] transition-colors"
          >
            <Save className="w-4 h-4" /> Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
