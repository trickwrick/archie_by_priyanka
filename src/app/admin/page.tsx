"use client";

import React from "react";
import Link from "next/link";
import { LogOut, Users, ShoppingBag, LayoutDashboard, Settings } from "lucide-react";
import Logo from "@/components/Logo";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen flex bg-[#FDFBF7]">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1E332D] text-white flex flex-col transition-all duration-300">
        <div className="p-6 border-b border-white/10 flex justify-center">
          <Logo light={true} compact={true} />
        </div>
        
        <nav className="flex-1 py-8 px-4 space-y-2">
          <Link href="/admin" className="flex items-center gap-3 px-4 py-3 bg-white/10 text-[#C8A366] rounded-sm text-xs font-bold uppercase tracking-widest transition-colors">
            <LayoutDashboard className="w-4 h-4 stroke-1" /> Dashboard
          </Link>
          <Link href="/admin/orders" className="flex items-center gap-3 px-4 py-3 text-white/70 hover:bg-white/5 hover:text-white rounded-sm text-xs font-bold uppercase tracking-widest transition-colors">
            <ShoppingBag className="w-4 h-4 stroke-1" /> Orders
          </Link>
          <Link href="/admin/customers" className="flex items-center gap-3 px-4 py-3 text-white/70 hover:bg-white/5 hover:text-white rounded-sm text-xs font-bold uppercase tracking-widest transition-colors">
            <Users className="w-4 h-4 stroke-1" /> Customers
          </Link>
          <Link href="/admin/settings" className="flex items-center gap-3 px-4 py-3 text-white/70 hover:bg-white/5 hover:text-white rounded-sm text-xs font-bold uppercase tracking-widest transition-colors">
            <Settings className="w-4 h-4 stroke-1" /> Settings
          </Link>
        </nav>
        
        <div className="p-4 border-t border-white/10">
          <Link href="/admin/login" className="flex items-center gap-3 px-4 py-3 text-white/70 hover:text-[#C8A366] text-xs font-bold uppercase tracking-widest transition-colors">
            <LogOut className="w-4 h-4 stroke-1" /> Sign Out
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Topbar */}
        <header className="h-20 bg-white border-b border-[#E0D9C8] flex items-center justify-between px-8">
          <h1 className="font-serif text-2xl text-[#1E332D]">Dashboard Overview</h1>
          <div className="flex items-center gap-4">
            <div className="text-right hidden md:block">
              <p className="text-xs font-bold uppercase tracking-widest text-[#1E332D]">Admin User</p>
              <p className="text-[10px] text-neutral-500 uppercase tracking-widest">admin@archies.com</p>
            </div>
            <div className="w-10 h-10 bg-[#C8A366] rounded-full flex items-center justify-center text-white font-serif text-lg">
              A
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-auto p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 border border-[#E0D9C8] shadow-sm">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 mb-2">Total Revenue</h3>
              <p className="font-serif text-3xl text-[#1E332D]">₹1,25,000</p>
            </div>
            <div className="bg-white p-6 border border-[#E0D9C8] shadow-sm">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 mb-2">Active Orders</h3>
              <p className="font-serif text-3xl text-[#1E332D]">24</p>
            </div>
            <div className="bg-white p-6 border border-[#E0D9C8] shadow-sm">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 mb-2">Pending Fittings</h3>
              <p className="font-serif text-3xl text-[#1E332D]">7</p>
            </div>
          </div>
          
          <div className="bg-white border border-[#E0D9C8] shadow-sm">
            <div className="p-6 border-b border-[#E0D9C8]">
              <h2 className="font-serif text-xl text-[#1E332D]">Recent Orders</h2>
            </div>
            <div className="p-12 text-center text-sm text-neutral-500">
              No recent orders to display.
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
