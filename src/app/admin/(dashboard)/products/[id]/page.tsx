"use client";

import React, { useEffect, useState, use } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save, Upload, Loader2 } from "lucide-react";

export default function EditProductPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const { id } = use(params);
  
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products/${id}`);
        if (res.ok) {
          const data = await res.json();
          setProduct(data);
        } else {
          alert("Product not found");
          router.push('/admin/products');
        }
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id, router]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSaving(true);
    
    const formData = new FormData(e.currentTarget);
    const updatedData = {
      name: formData.get("name"),
      price: formData.get("price"),
      originalPrice: formData.get("originalPrice"),
      description: formData.get("description"),
      category: formData.get("category"),
    };

    try {
      const res = await fetch(`/api/products/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });

      if (res.ok) {
        alert("Product updated successfully!");
        router.push("/admin/products");
      } else {
        alert("Failed to update product.");
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

  if (!product) return null;

  return (
    <form onSubmit={handleSubmit} className="max-w-5xl space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/admin/products" className="p-2 border border-[#E0D9C8] hover:bg-white transition-colors">
            <ArrowLeft className="w-5 h-5 text-[#997451]" />
          </Link>
          <div>
            <h2 className="font-serif text-2xl text-[#997451]">Edit Product</h2>
            <p className="text-xs text-neutral-500 mt-1 uppercase tracking-widest">{product.name}</p>
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Details */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white border border-[#E0D9C8] shadow-sm p-6 space-y-6">
            <h3 className="font-serif text-lg text-[#997451] border-b border-[#E0D9C8] pb-4">Basic Information</h3>
            
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-neutral-600 mb-2">Product Title</label>
              <input name="name" required type="text" defaultValue={product.name} className="w-full px-4 py-2 border border-[#E0D9C8] focus:outline-none focus:ring-1 focus:ring-[#C8A366]" />
            </div>
            
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-neutral-600 mb-2">Description</label>
              <textarea name="description" rows={6} defaultValue={product.description} className="w-full px-4 py-2 border border-[#E0D9C8] focus:outline-none focus:ring-1 focus:ring-[#C8A366] resize-none"></textarea>
            </div>
          </div>

          <div className="bg-white border border-[#E0D9C8] shadow-sm p-6 space-y-6">
            <h3 className="font-serif text-lg text-[#997451] border-b border-[#E0D9C8] pb-4">Pricing</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-neutral-600 mb-2">Price (₹)</label>
                <input name="price" required type="number" defaultValue={product.price} className="w-full px-4 py-2 border border-[#E0D9C8] focus:outline-none focus:ring-1 focus:ring-[#C8A366]" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-neutral-600 mb-2">Original Price (₹)</label>
                <input name="originalPrice" type="number" defaultValue={product.originalPrice} placeholder="Optional" className="w-full px-4 py-2 border border-[#E0D9C8] focus:outline-none focus:ring-1 focus:ring-[#C8A366]" />
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
              <select name="category" defaultValue={product.category} className="w-full px-4 py-2 border border-[#E0D9C8] focus:outline-none focus:ring-1 focus:ring-[#C8A366] bg-white">
                <option value="Monokinis">Monokinis</option>
                <option value="Bikinis">Bikinis</option>
                <option value="Mesh & Cutouts">Mesh & Cutouts</option>
                <option value="Resortwear">Resortwear</option>
              </select>
            </div>
          </div>

          <div className="bg-white border border-[#E0D9C8] shadow-sm p-6 space-y-4">
            <h3 className="font-serif text-lg text-[#997451] border-b border-[#E0D9C8] pb-4">Product Image</h3>
            <div className="aspect-3/4 bg-neutral-100 border-2 border-dashed border-[#E0D9C8] relative group">
              <img src={product.image} alt="Product" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <button type="button" onClick={() => alert('Image upload not implemented for this demo')} className="bg-white text-[#997451] px-4 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-[#C8A366] hover:text-white transition-colors flex items-center gap-2">
                  <Upload className="w-4 h-4" /> Change
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
