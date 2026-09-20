"use client";

import React from "react";
import { Save, Key } from "lucide-react";

export default function AdminSettings() {
  return (
    <div className="max-w-4xl space-y-8">
      {/* General Settings */}
      <div className="bg-white border border-[#E0D9C8] shadow-sm">
        <div className="p-6 border-b border-[#E0D9C8]">
          <h2 className="font-serif text-xl text-[#1E332D]">General Settings</h2>
        </div>
        <div className="p-6 space-y-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-neutral-600 mb-2">Store Name</label>
            <input type="text" defaultValue="Archie's by Priyanka" className="w-full max-w-md px-4 py-2 border border-[#E0D9C8] focus:outline-none focus:ring-1 focus:ring-[#C8A366]" />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-neutral-600 mb-2">Contact Email</label>
            <input type="email" defaultValue="concierge@archiesbypriyanka.com" className="w-full max-w-md px-4 py-2 border border-[#E0D9C8] focus:outline-none focus:ring-1 focus:ring-[#C8A366]" />
          </div>
        </div>
        <div className="p-6 border-t border-[#E0D9C8] bg-neutral-50 flex justify-start">
          <button 
            onClick={() => alert("General Settings Saved")}
            className="bg-[#1E332D] text-white px-6 py-2.5 text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-[#C8A366] transition-colors"
          >
            <Save className="w-4 h-4" /> Save Changes
          </button>
        </div>
      </div>

      {/* Security / Password Change */}
      <div className="bg-white border border-[#E0D9C8] shadow-sm">
        <div className="p-6 border-b border-[#E0D9C8]">
          <h2 className="font-serif text-xl text-[#1E332D] flex items-center gap-2">
            <Key className="w-5 h-5 text-[#C8A366]" /> Security
          </h2>
          <p className="text-xs text-neutral-500 mt-1">Update your admin dashboard password.</p>
        </div>
        
        <div className="p-6 space-y-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-neutral-600 mb-2">Current Password</label>
            <input type="password" placeholder="••••••••" className="w-full max-w-md px-4 py-2 border border-[#E0D9C8] focus:outline-none focus:ring-1 focus:ring-[#C8A366]" />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-neutral-600 mb-2">New Password</label>
            <input type="password" placeholder="••••••••" className="w-full max-w-md px-4 py-2 border border-[#E0D9C8] focus:outline-none focus:ring-1 focus:ring-[#C8A366]" />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-neutral-600 mb-2">Confirm New Password</label>
            <input type="password" placeholder="••••••••" className="w-full max-w-md px-4 py-2 border border-[#E0D9C8] focus:outline-none focus:ring-1 focus:ring-[#C8A366]" />
          </div>
        </div>
        
        <div className="p-6 border-t border-[#E0D9C8] bg-neutral-50 flex justify-start">
          <button 
            onClick={() => alert("Password Change action triggered")}
            className="bg-[#1E332D] text-white px-6 py-2.5 text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-[#C8A366] transition-colors"
          >
            <Save className="w-4 h-4" /> Update Password
          </button>
        </div>
      </div>
    </div>
  );
}
