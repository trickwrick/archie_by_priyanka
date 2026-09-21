"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Plus, Edit2, Trash2, Loader2 } from "lucide-react";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
}

export default function AdminProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await fetch('/api/products');
      if (res.ok) {
        const data = await res.json();
        setProducts(data);
      }
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to delete ${name}?`)) return;

    try {
      const res = await fetch(`/api/products/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setProducts(products.filter((p) => p.id !== id));
      } else {
        alert("Failed to delete product");
      }
    } catch (error) {
      console.error("Delete error:", error);
      alert("Error deleting product");
    }
  };

  return (
    <div className="bg-white border border-[#E0D9C8] shadow-sm">
      <div className="p-6 border-b border-[#E0D9C8] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="font-serif text-xl text-[#997451]">Product Catalog</h2>
        <Link href="/admin/products/new" className="bg-[#997451] text-white px-4 py-2 text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-[#C8A366] transition-colors">
          <Plus className="w-4 h-4" /> Add Product
        </Link>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#FDFBF7] border-b border-[#E0D9C8] text-[10px] uppercase tracking-widest text-neutral-500">
              <th className="p-4 font-bold">Image</th>
              <th className="p-4 font-bold">Product Name</th>
              <th className="p-4 font-bold">Category</th>
              <th className="p-4 font-bold">Price</th>
              <th className="p-4 font-bold text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={5} className="p-8 text-center">
                  <Loader2 className="w-6 h-6 animate-spin mx-auto text-[#C8A366]" />
                </td>
              </tr>
            ) : products.length === 0 ? (
              <tr>
                <td colSpan={5} className="p-8 text-center text-neutral-500 text-sm">
                  No products found.
                </td>
              </tr>
            ) : (
              products.map((product) => (
                <tr key={product.id} className="border-b border-[#E0D9C8] hover:bg-neutral-50 transition-colors">
                  <td className="p-4">
                    <img src={product.image} alt={product.name} className="w-12 h-16 object-cover bg-neutral-100" />
                  </td>
                  <td className="p-4 text-sm font-medium text-[#997451]">{product.name}</td>
                  <td className="p-4 text-sm text-neutral-600">{product.category}</td>
                  <td className="p-4 text-sm font-bold text-[#997451]">₹{product.price.toLocaleString()}</td>
                  <td className="p-4 text-center space-x-3">
                    <Link href={`/admin/products/${product.id}`} className="text-blue-500 hover:text-blue-700">
                      <Edit2 className="w-4 h-4 inline" />
                    </Link>
                    <button onClick={() => handleDelete(product.id, product.name)} className="text-red-500 hover:text-red-700">
                      <Trash2 className="w-4 h-4 inline" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
