"use client";

import React, { useState } from "react";
import { Sparkles, X, CheckCircle, Ruler, Send, ShieldCheck, HeartHandshake } from "lucide-react";

interface CustomFittingStudioProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CustomFittingStudio({ isOpen, onClose }: CustomFittingStudioProps) {
  const [bust, setBust] = useState<number>(34);
  const [waist, setWaist] = useState<number>(27);
  const [hips, setHips] = useState<number>(37);
  const [torso, setTorso] = useState<number>(60);
  const [coverage, setCoverage] = useState<string>("Medium Coverage");
  const [padding, setPadding] = useState<string>("Removable Soft Cups");
  const [stylePreference, setStylePreference] = useState<string>("Monokini Cutout");
  const [notes, setNotes] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSendToPriyanka = () => {
    const text = `Hi Priyanka! 🌸 I would like to order a bespoke custom-fitted swimsuit from Archie's by Priyanka:

*My Measurements (in inches):*
- Bust: ${bust}"
- Waist: ${waist}"
- Hips: ${hips}"
- Torso Height: ${torso}"

*Preferences:*
- Silhouette: ${stylePreference}
- Rear Coverage: ${coverage}
- Cup Style: ${padding}
- Notes: ${notes || "None"}

Please guide me with fabric options and placement! ✨`;

    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#FDFBF7] border border-[#D4AF37]/30 shadow-2xl overflow-hidden my-8">
        {/* Modal Top Header */}
        <div className="bg-[#1A1A1A] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-[#D4AF37] uppercase mb-2">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            PRIYANKA'S ATELIER MUMBAI
          </div>
          <h2 className="font-serif text-3xl font-light tracking-wide text-white">
            Bespoke Custom Fitting Studio
          </h2>
          <p className="text-xs text-neutral-400 font-light mt-1 max-w-lg">
            No two bodies are identical. We hand-craft your swimsuit to your exact anatomical measurements for zero-pinch confidence.
          </p>
        </div>

        {/* Modal Form Content */}
        {!submitted ? (
          <div className="p-6 sm:p-8 space-y-6">
            {/* Interactive Measurement Sliders */}
            <div className="space-y-4 bg-white p-5 border border-[#EAE4D6] rounded-none">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#1A1A1A] flex items-center gap-2">
                <Ruler className="w-4 h-4 text-[#9A7B38]" />
                1. Adjust Your Measurements (Inches)
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Bust */}
                <div>
                  <div className="flex justify-between text-xs font-medium text-[#333] mb-1">
                    <span>Bust Size</span>
                    <span className="font-bold text-[#9A7B38]">{bust} inches</span>
                  </div>
                  <input
                    type="range"
                    min="30"
                    max="46"
                    value={bust}
                    onChange={(e) => setBust(Number(e.target.value))}
                    className="w-full accent-[#9A7B38]"
                  />
                </div>

                {/* Waist */}
                <div>
                  <div className="flex justify-between text-xs font-medium text-[#333] mb-1">
                    <span>Waist Size</span>
                    <span className="font-bold text-[#9A7B38]">{waist} inches</span>
                  </div>
                  <input
                    type="range"
                    min="22"
                    max="42"
                    value={waist}
                    onChange={(e) => setWaist(Number(e.target.value))}
                    className="w-full accent-[#9A7B38]"
                  />
                </div>

                {/* Hips */}
                <div>
                  <div className="flex justify-between text-xs font-medium text-[#333] mb-1">
                    <span>Hips Size</span>
                    <span className="font-bold text-[#9A7B38]">{hips} inches</span>
                  </div>
                  <input
                    type="range"
                    min="32"
                    max="50"
                    value={hips}
                    onChange={(e) => setHips(Number(e.target.value))}
                    className="w-full accent-[#9A7B38]"
                  />
                </div>

                {/* Torso Height */}
                <div>
                  <div className="flex justify-between text-xs font-medium text-[#333] mb-1">
                    <span>Torso Height</span>
                    <span className="font-bold text-[#9A7B38]">{torso} cm</span>
                  </div>
                  <input
                    type="range"
                    min="52"
                    max="72"
                    value={torso}
                    onChange={(e) => setTorso(Number(e.target.value))}
                    className="w-full accent-[#9A7B38]"
                  />
                </div>
              </div>
            </div>

            {/* Customization Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Preferred Style */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#333] mb-2">
                  Silhouette Preference
                </label>
                <select
                  value={stylePreference}
                  onChange={(e) => setStylePreference(e.target.value)}
                  className="w-full text-xs p-3 bg-white border border-[#DDD] focus:outline-none focus:ring-1 focus:ring-[#9A7B38]"
                >
                  <option value="Monokini Cutout">Monokini Cutout (High Fashion)</option>
                  <option value="High-Waist Bikini 2-Piece">High-Waist Bikini 2-Piece</option>
                  <option value="Plunge Sheer Mesh Monokini">Plunge Sheer Mesh Monokini</option>
                  <option value="Bespoke Resortwear & Cover-up">Bespoke Cover-up / Sarong</option>
                </select>
              </div>

              {/* Rear Coverage */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#333] mb-2">
                  Rear Coverage
                </label>
                <select
                  value={coverage}
                  onChange={(e) => setCoverage(e.target.value)}
                  className="w-full text-xs p-3 bg-white border border-[#DDD] focus:outline-none focus:ring-1 focus:ring-[#9A7B38]"
                >
                  <option value="Medium Coverage">Medium Coverage (Classic)</option>
                  <option value="Full Modest Coverage">Full Modest Coverage</option>
                  <option value="High Cut Brazilian">High Cut Cheeky</option>
                </select>
              </div>
            </div>

            {/* Additional Custom Request Notes */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#333] mb-1">
                Specific Customization Notes (Optional)
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="e.g. Extra bust support, longer torso, specific color pairing..."
                rows={2}
                className="w-full p-3 bg-white border border-[#DDD] text-xs focus:outline-none focus:ring-1 focus:ring-[#9A7B38]"
              />
            </div>

            {/* Trust Badges */}
            <div className="flex items-center justify-around py-3 bg-[#F4F0E8] border border-[#E0D9C8] text-[11px] text-[#555]">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-[#9A7B38]" />
                Double-Lined Italian Lycra
              </span>
              <span className="flex items-center gap-1">
                <HeartHandshake className="w-4 h-4 text-[#9A7B38]" />
                Personal Fitting by Priyanka
              </span>
            </div>

            {/* Submit Action Button */}
            <button
              onClick={handleSendToPriyanka}
              className="w-full py-4 bg-[#1A1A1A] text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#9A7B38] transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4 text-[#D4AF37]" />
              Send Custom Specification to Designer
            </button>
          </div>
        ) : (
          <div className="p-12 text-center space-y-4">
            <CheckCircle className="w-16 h-16 text-[#25D366] mx-auto" />
            <h3 className="font-serif text-3xl text-[#1A1A1A]">
              Custom Fitting Request Generated!
            </h3>
            <p className="text-xs text-[#666] max-w-md mx-auto">
              WhatsApp opened with your pre-filled custom measurements. Priyanka will connect with you directly to approve your bespoke fit!
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-3 bg-[#1A1A1A] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#9A7B38]"
            >
              Back to Store
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
