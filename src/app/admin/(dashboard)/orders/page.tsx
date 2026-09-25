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
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-extrabold text-[#1E293B]">Order Management</h1>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white">
          <div className="relative w-full sm:w-auto">
            <input 
              type="text" 
              placeholder="Search orders..." 
              className="w-full sm:w-80 pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all bg-gray-50"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 text-gray-600 text-sm font-medium transition-colors">
            <Filter className="w-4 h-4" />
            Filter
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50 border-b border-gray-100 text-xs uppercase tracking-widest text-gray-500">
                <th className="p-5 font-bold">Order ID</th>
                <th className="p-5 font-bold">Customer</th>
                <th className="p-5 font-bold">Date</th>
                <th className="p-5 font-bold">Total</th>
                <th className="p-5 font-bold">Status</th>
                <th className="p-5 font-bold text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {mockOrders.map((order) => (
                <tr key={order.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                  <td className="p-5 text-sm font-bold text-gray-900">{order.id}</td>
                  <td className="p-5 text-sm font-medium text-gray-600">{order.customer}</td>
                  <td className="p-5 text-sm text-gray-500">{order.date}</td>
                  <td className="p-5 text-sm font-bold text-gray-900">{order.total}</td>
                  <td className="p-5">
                    <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                      order.status === 'Pending' ? 'bg-amber-100 text-amber-800' :
                      order.status === 'Processing' ? 'bg-blue-100 text-blue-800' :
                      order.status === 'Shipped' ? 'bg-purple-100 text-purple-800' :
                      'bg-emerald-100 text-emerald-800'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="p-5 text-center">
                    <button onClick={() => alert(`View details for ${order.id}`)} className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                      <Eye className="w-4 h-4 mx-auto" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
