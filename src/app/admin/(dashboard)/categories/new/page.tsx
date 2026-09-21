"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save, Loader2 } from "lucide-react";

export default function NewCategoryPage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSaving(true);
    
    const formData = new FormData(e.currentTarget);
    const newCategory = {
      name: formData.get("name"),
    };

    try {
      const res = await fetch(`/api/categories`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newCategory),
      });

      if (res.ok) {
        alert("Category created successfully!");
        router.push("/admin/categories");
      } else {
        alert("Failed to create category.");
      }
    } catch (error) {
      console.error("Create error:", error);
      alert("An error occurred.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/admin/categories" className="p-2 border border-[#E0D9C8] hover:bg-white transition-colors">
            <ArrowLeft className="w-5 h-5 text-[#997451]" />
          </Link>
          <div>
            <h2 className="font-serif text-2xl text-[#997451]">Add New Category</h2>
            <p className="text-xs text-neutral-500 mt-1 uppercase tracking-widest">Create a new category</p>
          </div>
        </div>
        <button 
          type="submit"
          disabled={saving}
          className="bg-[#997451] text-white px-6 py-2.5 text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-[#C8A366] transition-colors disabled:opacity-50"
        >
          {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />} 
          {saving ? 'Creating...' : 'Create Category'}
        </button>
      </div>

      <div className="bg-white border border-[#E0D9C8] shadow-sm p-6 space-y-6">
        <h3 className="font-serif text-lg text-[#997451] border-b border-[#E0D9C8] pb-4">Category Details</h3>
        
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-neutral-600 mb-2">Category Name</label>
          <input name="name" required type="text" placeholder="e.g., Summer Collection" className="w-full px-4 py-2 border border-[#E0D9C8] focus:outline-none focus:ring-1 focus:ring-[#C8A366]" />
        </div>
      </div>
    </form>
  );
}
