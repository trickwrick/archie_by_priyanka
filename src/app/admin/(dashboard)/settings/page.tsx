"use client";

import React from "react";
import { Save, Key } from "lucide-react";

export default function AdminSettings() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-extrabold text-[#1E293B]">Settings</h1>
      </div>

      {/* General Settings */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100 bg-white">
          <h2 className="text-lg font-bold text-gray-900">General Settings</h2>
        </div>
        <div className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Store Name</label>
            <input type="text" defaultValue="Archie's by Priyanka" className="w-full max-w-md px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all bg-gray-50" />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Contact Email</label>
            <input type="email" defaultValue="concierge@archiesbypriyanka.com" className="w-full max-w-md px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all bg-gray-50" />
          </div>
        </div>
        <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-start">
          <button 
            onClick={() => alert("General Settings Saved")}
            className="bg-[#1E293B] text-white px-6 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-gray-800 transition-colors shadow-sm"
          >
            <Save className="w-4 h-4" /> Save Changes
          </button>
        </div>
      </div>

      {/* Security / Password Change */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100 bg-white">
          <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
            <Key className="w-5 h-5 text-gray-500" /> Security
          </h2>
          <p className="text-sm text-gray-500 mt-1">Update your admin dashboard password.</p>
        </div>
        
        <div className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Current Password</label>
            <input type="password" placeholder="••••••••" className="w-full max-w-md px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all bg-gray-50" />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">New Password</label>
            <input type="password" placeholder="••••••••" className="w-full max-w-md px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all bg-gray-50" />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Confirm New Password</label>
            <input type="password" placeholder="••••••••" className="w-full max-w-md px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all bg-gray-50" />
          </div>
        </div>
        
        <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-start">
          <button 
            onClick={() => alert("Password Change action triggered")}
            className="bg-[#E02424] text-white px-6 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-red-700 transition-colors shadow-sm"
          >
            <Save className="w-4 h-4" /> Update Password
          </button>
        </div>
      </div>
    </div>
  );
}
