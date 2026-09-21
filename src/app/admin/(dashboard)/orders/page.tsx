"use client";

import React from "react";
import { Search, Filter, Eye } from "lucide-react";

export default function AdminOrders() {
  const mockOrders = [
    { id: "ORD-9932", customer: "Aisha Khan", date: "Today, 10:42 AM", total: "₹12,499", status: "Pending" },
    { id: "ORD-9931", customer: "Priya Sharma", date: "Yesterday", total: "₹8,999", status: "Processing" },
    { id: "ORD-9930", customer: "Meera Patel", date: "Oct 12, 2026", total: "₹24,500", status: "Shipped" },
    { id: "ORD-9929", customer: "Neha Gupta", date: "Oct 10, 2026", total: "₹15,200", status: "Delivered" },
  ];

  return (
    <div className="bg-white border border-[#E0D9C8] shadow-sm">
      <div className="p-6 border-b border-[#E0D9C8] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="font-serif text-xl text-[#997451]">Order Management</h2>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search orders..." 
              className="pl-9 pr-4 py-2 border border-[#E0D9C8] text-sm focus:outline-none focus:ring-1 focus:ring-[#C8A366]"
            />
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-2.5" />
          </div>
          <button className="p-2 border border-[#E0D9C8] hover:bg-[#FDFBF7] text-neutral-600">
            <Filter className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#FDFBF7] border-b border-[#E0D9C8] text-[10px] uppercase tracking-widest text-neutral-500">
              <th className="p-4 font-bold">Order ID</th>
              <th className="p-4 font-bold">Customer</th>
              <th className="p-4 font-bold">Date</th>
              <th className="p-4 font-bold">Total</th>
              <th className="p-4 font-bold">Status</th>
              <th className="p-4 font-bold text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {mockOrders.map((order) => (
              <tr key={order.id} className="border-b border-[#E0D9C8] hover:bg-neutral-50 transition-colors">
                <td className="p-4 text-sm font-medium text-[#997451]">{order.id}</td>
                <td className="p-4 text-sm text-neutral-600">{order.customer}</td>
                <td className="p-4 text-sm text-neutral-600">{order.date}</td>
                <td className="p-4 text-sm font-medium text-[#997451]">{order.total}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full ${
                    order.status === 'Pending' ? 'bg-amber-100 text-amber-800' :
                    order.status === 'Processing' ? 'bg-blue-100 text-blue-800' :
                    order.status === 'Shipped' ? 'bg-purple-100 text-purple-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {order.status}
                  </span>
                </td>
                <td className="p-4 text-center">
                  <button onClick={() => alert(`View details for ${order.id}`)} className="text-neutral-400 hover:text-[#C8A366]">
                    <Eye className="w-4 h-4 mx-auto" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
