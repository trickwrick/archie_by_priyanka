"use client";

import React from "react";
import { Search, Mail } from "lucide-react";

export default function AdminCustomers() {
  const customers = [
    { id: "CUST-001", name: "Aisha Khan", email: "aisha.k@example.com", orders: 3, totalSpent: "₹36,499" },
    { id: "CUST-002", name: "Meera Patel", email: "meera.patel@example.com", orders: 1, totalSpent: "₹24,500" },
    { id: "CUST-003", name: "Neha Gupta", email: "neha.g@example.com", orders: 5, totalSpent: "₹85,200" },
    { id: "CUST-004", name: "Priya Sharma", email: "priya.s@example.com", orders: 1, totalSpent: "₹8,999" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-extrabold text-[#1E293B]">Customers</h1>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white">
          <h2 className="text-lg font-bold text-gray-900">All Customers</h2>
          
          <div className="relative w-full sm:w-auto">
            <input 
              type="text" 
              placeholder="Search by name or email..." 
              className="w-full sm:w-80 pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all bg-gray-50"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50 border-b border-gray-100 text-xs uppercase tracking-widest text-gray-500">
                <th className="p-5 font-bold">Customer Name</th>
                <th className="p-5 font-bold">Email</th>
                <th className="p-5 font-bold text-center">Total Orders</th>
                <th className="p-5 font-bold text-right">Total Spent</th>
                <th className="p-5 font-bold text-center">Contact</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                  <td className="p-5 text-sm font-bold text-gray-900">{customer.name}</td>
                  <td className="p-5 text-sm font-medium text-gray-600">{customer.email}</td>
                  <td className="p-5 text-sm text-gray-600 text-center">{customer.orders}</td>
                  <td className="p-5 text-sm font-bold text-gray-900 text-right">{customer.totalSpent}</td>
                  <td className="p-5 text-center">
                    <button 
                      onClick={() => alert(`Open email draft to ${customer.email}`)}
                      className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors inline-block"
                    >
                      <Mail className="w-4 h-4" />
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
