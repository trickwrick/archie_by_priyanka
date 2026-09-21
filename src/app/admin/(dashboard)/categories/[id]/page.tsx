"use client";

import React, { useEffect, useState, use } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save, Loader2 } from "lucide-react";

export default function EditCategoryPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const { id } = use(params);
  
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [category, setCategory] = useState<any>(null);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await fetch(`/api/categories/${id}`);
        if (res.ok) {
          const data = await res.json();
          setCategory(data);
        } else {
          alert("Category not found");
          router.push('/admin/categories');
        }
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategory();
  }, [id, router]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSaving(true);
    
    const formData = new FormData(e.currentTarget);
    const updatedData = {
      name: formData.get("name"),
    };

    try {
      const res = await fetch(`/api/categories/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });

      if (res.ok) {
        alert("Category updated successfully!");
        router.push("/admin/categories");
      } else {
        alert("Failed to update category.");
      }
    } catch (error) {
      console.error("Update error:", error);
      alert("An error occurred.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="p-12 flex justify-center"><Loader2 className="w-8 h-8 animate-spin text-[#C8A366]" /></div>;
  }

  if (!category) return null;

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/admin/categories" className="p-2 border border-[#E0D9C8] hover:bg-white transition-colors">
            <ArrowLeft className="w-5 h-5 text-[#997451]" />
          </Link>
          <div>
            <h2 className="font-serif text-2xl text-[#997451]">Edit Category</h2>
            <p className="text-xs text-neutral-500 mt-1 uppercase tracking-widest">{category.name}</p>
          </div>
        </div>
        <button 
          type="submit"
          disabled={saving}
          className="bg-[#997451] text-white px-6 py-2.5 text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-[#C8A366] transition-colors disabled:opacity-50"
        >
          {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />} 
          {saving ? 'Saving...' : 'Save Changes'}
        </button>
      </div>

      <div className="bg-white border border-[#E0D9C8] shadow-sm p-6 space-y-6">
        <h3 className="font-serif text-lg text-[#997451] border-b border-[#E0D9C8] pb-4">Category Details</h3>
        
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-neutral-600 mb-2">Category Name</label>
          <input name="name" required type="text" defaultValue={category.name} className="w-full px-4 py-2 border border-[#E0D9C8] focus:outline-none focus:ring-1 focus:ring-[#C8A366]" />
        </div>
      </div>
    </form>
  );
}
