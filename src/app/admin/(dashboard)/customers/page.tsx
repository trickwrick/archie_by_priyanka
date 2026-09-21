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
    <div className="bg-white border border-[#E0D9C8] shadow-sm">
      <div className="p-6 border-b border-[#E0D9C8] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="font-serif text-xl text-[#997451]">Customers</h2>
        
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search by name or email..." 
            className="pl-9 pr-4 py-2 border border-[#E0D9C8] text-sm focus:outline-none focus:ring-1 focus:ring-[#C8A366] w-64"
          />
          <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-2.5" />
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#FDFBF7] border-b border-[#E0D9C8] text-[10px] uppercase tracking-widest text-neutral-500">
              <th className="p-4 font-bold">Customer Name</th>
              <th className="p-4 font-bold">Email</th>
              <th className="p-4 font-bold text-center">Total Orders</th>
              <th className="p-4 font-bold text-right">Total Spent</th>
              <th className="p-4 font-bold text-center">Contact</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="border-b border-[#E0D9C8] hover:bg-neutral-50 transition-colors">
                <td className="p-4 text-sm font-medium text-[#997451]">{customer.name}</td>
                <td className="p-4 text-sm text-neutral-600">{customer.email}</td>
                <td className="p-4 text-sm text-neutral-600 text-center">{customer.orders}</td>
                <td className="p-4 text-sm font-bold text-[#997451] text-right">{customer.totalSpent}</td>
                <td className="p-4 text-center">
                  <button 
                    onClick={() => alert(`Open email draft to ${customer.email}`)}
                    className="text-neutral-400 hover:text-[#C8A366] inline-block"
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
  );
}
