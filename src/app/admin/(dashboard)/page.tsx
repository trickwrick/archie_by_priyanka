"use client";

import React from "react";

export default function AdminDashboard() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 border border-[#E0D9C8] shadow-sm">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 mb-2">Total Revenue</h3>
          <p className="font-serif text-3xl text-[#997451]">₹1,25,000</p>
        </div>
        <div className="bg-white p-6 border border-[#E0D9C8] shadow-sm">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 mb-2">Active Orders</h3>
          <p className="font-serif text-3xl text-[#997451]">24</p>
        </div>
        <div className="bg-white p-6 border border-[#E0D9C8] shadow-sm">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 mb-2">Pending Fittings</h3>
          <p className="font-serif text-3xl text-[#997451]">7</p>
        </div>
      </div>
      
      <div className="bg-white border border-[#E0D9C8] shadow-sm">
        <div className="p-6 border-b border-[#E0D9C8]">
          <h2 className="font-serif text-xl text-[#997451]">Recent Orders</h2>
        </div>
        <div className="p-12 text-center text-sm text-neutral-500">
          No recent orders to display.
        </div>
      </div>
    </>
  );
}
