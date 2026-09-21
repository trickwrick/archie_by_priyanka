"use client";

import React from "react";
import { TrendingUp, TrendingDown, DollarSign, ShoppingBag, Users, Activity, Plus, FileText, Settings, BarChart2 } from "lucide-react";
import Link from "next/link";

export default function AdminDashboard() {
  const chartData = [
    { day: "Mon", sales: 40 },
    { day: "Tue", sales: 60 },
    { day: "Wed", sales: 45 },
    { day: "Thu", sales: 80 },
    { day: "Fri", sales: 110 },
    { day: "Sat", sales: 90 },
    { day: "Sun", sales: 130 },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-12">
      {/* 1. Advanced Metrics Overview (Top Row) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Metric 1: Today's Sales */}
        <div className="bg-white p-6 border border-[#E0D9C8] shadow-sm relative overflow-hidden group">
          <div className="absolute -bottom-4 -right-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <DollarSign className="w-24 h-24 text-[#997451]" />
          </div>
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">Today's Sales</h3>
            <div className="p-2 bg-[#997451]/10 rounded-full">
              <TrendingUp className="w-4 h-4 text-[#997451]" />
            </div>
          </div>
          <p className="font-serif text-3xl text-[#997451] mb-2">₹12,450</p>
          <div className="flex items-center gap-2 text-[10px] font-bold">
            <span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-sm">+15.2%</span>
            <span className="text-neutral-400">vs yesterday</span>
          </div>
        </div>

        {/* Metric 2: Last Month Revenue */}
        <div className="bg-white p-6 border border-[#E0D9C8] shadow-sm relative overflow-hidden group">
          <div className="absolute -bottom-4 -right-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <BarChart2 className="w-24 h-24 text-[#997451]" />
          </div>
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">Last Month</h3>
            <div className="p-2 bg-[#997451]/10 rounded-full">
              <TrendingUp className="w-4 h-4 text-[#997451]" />
            </div>
          </div>
          <p className="font-serif text-3xl text-[#997451] mb-2">₹8,45,000</p>
          <div className="flex items-center gap-2 text-[10px] font-bold">
            <span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-sm">+8.4%</span>
            <span className="text-neutral-400">vs previous month</span>
          </div>
        </div>

        {/* Metric 3: Active Orders */}
        <div className="bg-white p-6 border border-[#E0D9C8] shadow-sm relative overflow-hidden group">
          <div className="absolute -bottom-4 -right-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <ShoppingBag className="w-24 h-24 text-[#997451]" />
          </div>
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">Active Orders</h3>
            <div className="p-2 bg-[#997451]/10 rounded-full">
              <Activity className="w-4 h-4 text-[#997451]" />
            </div>
          </div>
          <p className="font-serif text-3xl text-[#997451] mb-2">42</p>
          <div className="flex items-center gap-2 text-[10px] font-bold">
            <span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-sm">12 New</span>
            <span className="text-neutral-400">pending fulfillment</span>
          </div>
        </div>

        {/* Metric 4: Conversion Rate */}
        <div className="bg-white p-6 border border-[#E0D9C8] shadow-sm relative overflow-hidden group">
          <div className="absolute -bottom-4 -right-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Users className="w-24 h-24 text-[#997451]" />
          </div>
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">Conversion Rate</h3>
            <div className="p-2 bg-red-50 rounded-full">
              <TrendingDown className="w-4 h-4 text-red-500" />
            </div>
          </div>
          <p className="font-serif text-3xl text-[#997451] mb-2">2.4%</p>
          <div className="flex items-center gap-2 text-[10px] font-bold">
            <span className="text-red-500 bg-red-50 px-2 py-0.5 rounded-sm">-0.3%</span>
            <span className="text-neutral-400">vs last week</span>
          </div>
        </div>

      </div>

      {/* 2. Middle Row: Visual Analytics & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Sales Chart (CSS based) */}
        <div className="lg:col-span-2 bg-white p-6 border border-[#E0D9C8] shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-serif text-xl text-[#997451]">Sales Overview (Last 7 Days)</h2>
            <button className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 hover:text-[#997451]">
              View Full Report
            </button>
          </div>
          
          <div className="h-64 flex items-end justify-between gap-2 px-2">
            {chartData.map((data, index) => (
              <div key={index} className="flex flex-col items-center w-full group">
                <div className="w-full flex justify-center mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] font-bold text-[#997451]">₹{data.sales * 100}</span>
                </div>
                <div 
                  className="w-full max-w-10 bg-[#E0D9C8] group-hover:bg-[#997451] transition-colors rounded-t-sm relative overflow-hidden"
                  style={{ height: `${(data.sales / 130) * 100}%` }}
                >
                  <div className="absolute bottom-0 w-full bg-[#997451]/20 h-full"></div>
                </div>
                <span className="text-[10px] uppercase font-bold text-neutral-400 mt-4">{data.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-6 border border-[#E0D9C8] shadow-sm">
          <h2 className="font-serif text-xl text-[#997451] mb-6">Quick Actions</h2>
          <div className="space-y-4">
            <Link href="/admin/products/new" className="flex items-center gap-4 p-4 border border-[#E0D9C8] hover:border-[#997451] hover:bg-[#997451]/5 transition-all group">
              <div className="w-10 h-10 bg-[#997451]/10 flex items-center justify-center text-[#997451] group-hover:bg-[#997451] group-hover:text-white transition-colors">
                <Plus className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#1E332D]">Add Product</h4>
                <p className="text-[10px] text-neutral-500 mt-1">Upload new resortwear</p>
              </div>
            </Link>

            <Link href="/admin/orders" className="flex items-center gap-4 p-4 border border-[#E0D9C8] hover:border-[#997451] hover:bg-[#997451]/5 transition-all group">
              <div className="w-10 h-10 bg-[#997451]/10 flex items-center justify-center text-[#997451] group-hover:bg-[#997451] group-hover:text-white transition-colors">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#1E332D]">Manage Orders</h4>
                <p className="text-[10px] text-neutral-500 mt-1">Fulfill pending orders</p>
              </div>
            </Link>

            <Link href="/admin/customers" className="flex items-center gap-4 p-4 border border-[#E0D9C8] hover:border-[#997451] hover:bg-[#997451]/5 transition-all group">
              <div className="w-10 h-10 bg-[#997451]/10 flex items-center justify-center text-[#997451] group-hover:bg-[#997451] group-hover:text-white transition-colors">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#1E332D]">View Customers</h4>
                <p className="text-[10px] text-neutral-500 mt-1">Manage VIP clients</p>
              </div>
            </Link>
          </div>
        </div>

      </div>

      {/* 3. Bottom Row: Recent Activity */}
      <div className="bg-white border border-[#E0D9C8] shadow-sm">
        <div className="p-6 border-b border-[#E0D9C8] flex justify-between items-center">
          <h2 className="font-serif text-xl text-[#997451]">Recent Activity</h2>
          <button className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 hover:text-[#997451]">
            View All
          </button>
        </div>
        <div className="p-6">
          <div className="relative pl-6 space-y-8 before:absolute before:inset-0 before:ml-2.75 before:w-px before:bg-[#E0D9C8]">
            
            {/* Activity Item 1 */}
            <div className="relative">
              <div className="absolute -left-7.25 w-4 h-4 rounded-full bg-[#997451] border-2 border-white flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <p className="text-sm text-[#1E332D]"><span className="font-bold">New order #1024</span> placed by Priya M.</p>
                  <p className="text-xs text-neutral-500 mt-1">Includes The Aurelia Wrap Monokini</p>
                </div>
                <span className="text-[10px] font-bold text-[#997451] bg-[#997451]/10 px-2 py-1 rounded-sm">10 min ago</span>
              </div>
            </div>

            {/* Activity Item 2 */}
            <div className="relative">
              <div className="absolute -left-7.25 w-4 h-4 rounded-full bg-[#C8A366] border-2 border-white flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <p className="text-sm text-[#1E332D]">Inventory alert: <span className="font-bold">Riviera High-Waist Bikini</span></p>
                  <p className="text-xs text-neutral-500 mt-1">Only 2 items left in size M</p>
                </div>
                <span className="text-[10px] font-bold text-[#997451] bg-[#997451]/10 px-2 py-1 rounded-sm">2 hours ago</span>
              </div>
            </div>

            {/* Activity Item 3 */}
            <div className="relative">
              <div className="absolute -left-7.25 w-4 h-4 rounded-full bg-neutral-300 border-2 border-white"></div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <p className="text-sm text-[#1E332D]">New VIP Customer signed up</p>
                  <p className="text-xs text-neutral-500 mt-1">Ananya S. joined the Atelier Club</p>
                </div>
                <span className="text-[10px] font-bold text-[#997451] bg-[#997451]/10 px-2 py-1 rounded-sm">5 hours ago</span>
              </div>
            </div>
            
            {/* Activity Item 4 */}
            <div className="relative">
              <div className="absolute -left-7.25 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white"></div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <p className="text-sm text-[#1E332D]">Order <span className="font-bold">#1021</span> fulfilled</p>
                  <p className="text-xs text-neutral-500 mt-1">Shipped via BlueDart Express</p>
                </div>
                <span className="text-[10px] font-bold text-[#997451] bg-[#997451]/10 px-2 py-1 rounded-sm">Yesterday</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
