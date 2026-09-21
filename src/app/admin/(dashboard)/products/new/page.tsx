"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save, Upload, Loader2 } from "lucide-react";

export default function NewProductPage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSaving(true);
    
    const formData = new FormData(e.currentTarget);
    const newProduct = {
      name: formData.get("name"),
      price: formData.get("price"),
      originalPrice: formData.get("originalPrice"),
      description: formData.get("description"),
      category: formData.get("category"),
    };

    try {
      const res = await fetch(`/api/products`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });

      if (res.ok) {
        alert("Product created successfully!");
        router.push("/admin/products");
      } else {
        alert("Failed to create product.");
      }
    } catch (error) {
      console.error("Create error:", error);
      alert("An error occurred.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-5xl space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/admin/products" className="p-2 border border-[#E0D9C8] hover:bg-white transition-colors">
            <ArrowLeft className="w-5 h-5 text-[#997451]" />
          </Link>
          <div>
            <h2 className="font-serif text-2xl text-[#997451]">Add New Product</h2>
            <p className="text-xs text-neutral-500 mt-1 uppercase tracking-widest">Create a new listing</p>
          </div>
        </div>
        <button 
          type="submit"
          disabled={saving}
          className="bg-[#997451] text-white px-6 py-2.5 text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-[#C8A366] transition-colors disabled:opacity-50"
        >
          {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />} 
          {saving ? 'Creating...' : 'Create Product'}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Details */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white border border-[#E0D9C8] shadow-sm p-6 space-y-6">
            <h3 className="font-serif text-lg text-[#997451] border-b border-[#E0D9C8] pb-4">Basic Information</h3>
            
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-neutral-600 mb-2">Product Title</label>
              <input name="name" required type="text" placeholder="e.g., Aegean Black Mesh Plunge Monokini" className="w-full px-4 py-2 border border-[#E0D9C8] focus:outline-none focus:ring-1 focus:ring-[#C8A366]" />
            </div>
            
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-neutral-600 mb-2">Description</label>
              <textarea name="description" rows={6} placeholder="Describe your product..." className="w-full px-4 py-2 border border-[#E0D9C8] focus:outline-none focus:ring-1 focus:ring-[#C8A366] resize-none"></textarea>
            </div>
          </div>

          <div className="bg-white border border-[#E0D9C8] shadow-sm p-6 space-y-6">
            <h3 className="font-serif text-lg text-[#997451] border-b border-[#E0D9C8] pb-4">Pricing</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-neutral-600 mb-2">Price (₹)</label>
                <input name="price" required type="number" placeholder="0" className="w-full px-4 py-2 border border-[#E0D9C8] focus:outline-none focus:ring-1 focus:ring-[#C8A366]" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-neutral-600 mb-2">Original Price (₹)</label>
                <input name="originalPrice" type="number" placeholder="Optional" className="w-full px-4 py-2 border border-[#E0D9C8] focus:outline-none focus:ring-1 focus:ring-[#C8A366]" />
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Settings */}
        <div className="space-y-8">
          <div className="bg-white border border-[#E0D9C8] shadow-sm p-6 space-y-6">
            <h3 className="font-serif text-lg text-[#997451] border-b border-[#E0D9C8] pb-4">Organization</h3>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-neutral-600 mb-2">Category</label>
              <select name="category" className="w-full px-4 py-2 border border-[#E0D9C8] focus:outline-none focus:ring-1 focus:ring-[#C8A366] bg-white">
                <option value="Monokinis">Monokinis</option>
                <option value="Bikinis">Bikinis</option>
                <option value="Mesh & Cutouts">Mesh & Cutouts</option>
                <option value="Resortwear">Resortwear</option>
              </select>
            </div>
          </div>

          <div className="bg-white border border-[#E0D9C8] shadow-sm p-6 space-y-4">
            <h3 className="font-serif text-lg text-[#997451] border-b border-[#E0D9C8] pb-4">Product Image</h3>
            <div className="aspect-3/4 bg-neutral-50 border-2 border-dashed border-[#E0D9C8] flex items-center justify-center relative group">
              <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">No Image</span>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <button type="button" onClick={() => alert('Image upload not implemented for this demo')} className="bg-white text-[#997451] px-4 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-[#C8A366] hover:text-white transition-colors flex items-center gap-2">
                  <Upload className="w-4 h-4" /> Upload
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
