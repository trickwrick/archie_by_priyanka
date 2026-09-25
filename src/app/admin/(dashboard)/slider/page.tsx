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
    <div className="space-y-6 max-w-5xl">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-extrabold text-[#1E293B]">Hero Slider</h1>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white">
          <div>
            <h2 className="text-lg font-bold text-gray-900">Manage Slider Images</h2>
            <p className="text-sm text-gray-500 mt-1">Manage the images displayed on the home page hero slider.</p>
          </div>
          <button 
            onClick={() => alert("Upload Image action triggered")}
            className="bg-[#E02424] text-white px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-red-700 transition-colors shadow-sm"
          >
            <Upload className="w-4 h-4" /> Upload New
          </button>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sliderImages.map((img, idx) => (
              <div key={idx} className="relative group aspect-21/9 sm:aspect-auto sm:h-56 bg-gray-100 rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                <img src={img} alt={`Slider ${idx + 1}`} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gray-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3">
                  <button 
                    onClick={() => alert("Change Image action triggered")}
                    className="bg-white text-gray-900 px-4 py-2 rounded-lg text-xs font-bold shadow-sm hover:bg-gray-100 transition-colors"
                  >
                    Change Image
                  </button>
                  <button 
                    onClick={() => alert("Remove Image action triggered")}
                    className="text-white text-xs font-bold hover:text-red-400 transition-colors"
                  >
                    Remove
                  </button>
                </div>
                <div className="absolute top-3 left-3 bg-gray-900/80 text-white text-[10px] px-3 py-1 font-bold tracking-widest rounded-md backdrop-blur-sm">
                  Slide {idx + 1}
                </div>
              </div>
            ))}
            
            {/* Empty Slot for adding */}
            <div 
              onClick={() => alert("Add Slide action triggered")}
              className="aspect-21/9 sm:aspect-auto sm:h-56 border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-200 hover:bg-red-50 transition-all cursor-pointer bg-gray-50"
            >
              <ImageIcon className="w-8 h-8 mb-2 opacity-50" />
              <span className="text-xs font-bold">Add Slide</span>
            </div>
          </div>
        </div>
        
        <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end">
          <button 
            onClick={() => alert("Save Changes action triggered")}
            className="bg-[#1E293B] text-white px-6 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-gray-800 transition-colors shadow-sm"
          >
            <Save className="w-4 h-4" /> Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
