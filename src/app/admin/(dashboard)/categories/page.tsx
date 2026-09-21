"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Plus, Edit2, Trash2, Loader2 } from "lucide-react";

interface Category {
  id: string;
  name: string;
  count: number;
}

export default function AdminCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await fetch('/api/categories');
      if (res.ok) {
        const data = await res.json();
        setCategories(data);
      }
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to delete the category '${name}'?`)) return;

    try {
      const res = await fetch(`/api/categories/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setCategories(categories.filter((c) => c.id !== id));
      } else {
        alert("Failed to delete category");
      }
    } catch (error) {
      console.error("Delete error:", error);
      alert("Error deleting category");
    }
  };

  return (
    <div className="bg-white border border-[#E0D9C8] shadow-sm max-w-4xl">
      <div className="p-6 border-b border-[#E0D9C8] flex justify-between items-center">
        <h2 className="font-serif text-xl text-[#997451]">Categories</h2>
        <Link href="/admin/categories/new" className="bg-[#997451] text-white px-4 py-2 text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-[#C8A366] transition-colors">
          <Plus className="w-4 h-4" /> Add Category
        </Link>
      </div>
      
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-[#FDFBF7] border-b border-[#E0D9C8] text-[10px] uppercase tracking-widest text-neutral-500">
            <th className="p-4 font-bold">Category Name</th>
            <th className="p-4 font-bold">Total Products</th>
            <th className="p-4 font-bold text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={3} className="p-8 text-center">
                <Loader2 className="w-6 h-6 animate-spin mx-auto text-[#C8A366]" />
              </td>
            </tr>
          ) : categories.length === 0 ? (
            <tr>
              <td colSpan={3} className="p-8 text-center text-neutral-500 text-sm">
                No categories found.
              </td>
            </tr>
          ) : (
            categories.map((cat) => (
              <tr key={cat.id} className="border-b border-[#E0D9C8] hover:bg-neutral-50 transition-colors">
                <td className="p-4 text-sm font-medium text-[#997451]">{cat.name}</td>
                <td className="p-4 text-sm text-neutral-600">{cat.count || 0} Items</td>
                <td className="p-4 text-right space-x-3">
                  <Link href={`/admin/categories/${cat.id}`} className="text-blue-500 hover:text-blue-700">
                    <Edit2 className="w-4 h-4 inline" />
                  </Link>
                  <button onClick={() => handleDelete(cat.id, cat.name)} className="text-red-500 hover:text-red-700">
                    <Trash2 className="w-4 h-4 inline" />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
