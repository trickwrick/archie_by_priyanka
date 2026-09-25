"use client";

import React from "react";
import { TrendingUp, TrendingDown, DollarSign, ShoppingBag, Users, Activity, Plus, Package, BarChart2 } from "lucide-react";
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
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-extrabold text-[#1E293B]">Admin Dashboard</h1>
      </div>

      {/* 1. Top Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Metric 1: Today's Sales */}
        <div className="bg-white p-5 rounded-xl shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center shrink-0">
            <DollarSign className="w-5 h-5 text-red-500" />
          </div>
          <div>
            <h3 className="text-xs font-medium text-gray-500 mb-0.5">Today's Sales</h3>
            <div className="flex items-baseline gap-2">
              <p className="text-xl font-bold text-gray-900">₹12,450</p>
              <span className="text-[10px] text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded font-bold">+15%</span>
            </div>
          </div>
        </div>

        {/* Metric 2: Last Month Revenue */}
        <div className="bg-white p-5 rounded-xl shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center shrink-0">
            <BarChart2 className="w-5 h-5 text-green-600" />
          </div>
          <div>
            <h3 className="text-xs font-medium text-gray-500 mb-0.5">Last Month</h3>
            <div className="flex items-baseline gap-2">
              <p className="text-xl font-bold text-gray-900">₹8.4L</p>
              <span className="text-[10px] text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded font-bold">+8%</span>
            </div>
          </div>
        </div>

        {/* Metric 3: Active Orders */}
        <div className="bg-white p-5 rounded-xl shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center shrink-0">
            <ShoppingBag className="w-5 h-5 text-purple-600" />
          </div>
          <div>
            <h3 className="text-xs font-medium text-gray-500 mb-0.5">Active Orders</h3>
            <div className="flex items-baseline gap-2">
              <p className="text-xl font-bold text-gray-900">42</p>
              <span className="text-[10px] text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded font-bold">12 New</span>
            </div>
          </div>
        </div>

        {/* Metric 4: Conversion Rate */}
        <div className="bg-white p-5 rounded-xl shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
            <Users className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h3 className="text-xs font-medium text-gray-500 mb-0.5">Conversion Rate</h3>
            <div className="flex items-baseline gap-2">
              <p className="text-xl font-bold text-gray-900">2.4%</p>
              <span className="text-[10px] text-red-600 bg-red-50 px-1.5 py-0.5 rounded font-bold">-0.3%</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Middle Row: Visual Analytics & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Sales Chart */}
        <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-lg font-bold text-gray-900">Sales Overview (Last 7 Days)</h2>
            <button className="text-xs font-bold uppercase tracking-widest text-red-500 hover:text-red-700">
              Full Report
            </button>
          </div>
          
          <div className="h-64 flex items-end justify-between gap-2 px-2">
            {chartData.map((data, index) => (
              <div key={index} className="flex flex-col items-center w-full group">
                <div className="w-full flex justify-center mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] font-bold text-gray-700">₹{data.sales * 100}</span>
                </div>
                <div 
                  className="w-full max-w-10 bg-gray-100 group-hover:bg-red-500 transition-colors rounded-t-lg relative overflow-hidden"
                  style={{ height: `${(data.sales / 130) * 100}%` }}
                >
                </div>
                <span className="text-[10px] uppercase font-bold text-gray-400 mt-4">{data.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="space-y-4">
            <Link href="/admin/products/new" className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl hover:border-red-200 hover:bg-red-50 transition-all group">
              <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors">
                <Plus className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">Add Product</h4>
                <p className="text-xs text-gray-500 mt-1">Upload new item</p>
              </div>
            </Link>

            <Link href="/admin/orders" className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl hover:border-red-200 hover:bg-red-50 transition-all group">
              <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">Manage Orders</h4>
                <p className="text-xs text-gray-500 mt-1">Fulfill pending orders</p>
              </div>
            </Link>

            <Link href="/admin/customers" className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl hover:border-red-200 hover:bg-red-50 transition-all group">
              <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">View Customers</h4>
                <p className="text-xs text-gray-500 mt-1">Manage user accounts</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* 3. Bottom Row: Recent Activity */}
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold text-gray-900">Recent Activity</h2>
          <button className="text-xs font-bold uppercase tracking-widest text-red-500 hover:text-red-700">
            View All
          </button>
        </div>
        <div className="relative pl-6 space-y-8 before:absolute before:inset-0 before:ml-2.75 before:w-px before:bg-gray-200">
            
          {/* Activity Item 1 */}
          <div className="relative">
            <div className="absolute -left-7.25 w-4 h-4 rounded-full bg-red-500 border-2 border-white flex items-center justify-center">
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <p className="text-sm text-gray-900"><span className="font-bold">New order #1024</span> placed by Priya M.</p>
                <p className="text-xs text-gray-500 mt-1">Includes The Aurelia Wrap Monokini</p>
              </div>
              <span className="text-xs font-bold text-gray-500">10 min ago</span>
            </div>
          </div>

          {/* Activity Item 2 */}
          <div className="relative">
            <div className="absolute -left-7.25 w-4 h-4 rounded-full bg-orange-400 border-2 border-white flex items-center justify-center">
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <p className="text-sm text-gray-900">Inventory alert: <span className="font-bold">Riviera High-Waist Bikini</span></p>
                <p className="text-xs text-gray-500 mt-1">Only 2 items left in size M</p>
              </div>
              <span className="text-xs font-bold text-gray-500">2 hours ago</span>
            </div>
          </div>

          {/* Activity Item 3 */}
          <div className="relative">
            <div className="absolute -left-7.25 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white"></div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <p className="text-sm text-gray-900">Order <span className="font-bold">#1021</span> fulfilled</p>
                <p className="text-xs text-gray-500 mt-1">Shipped via BlueDart Express</p>
              </div>
              <span className="text-xs font-bold text-gray-500">Yesterday</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
