"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOut, Users, ShoppingBag, LayoutDashboard, Settings, Package, Tag, Image as ImageIcon, Menu } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const links = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Orders", href: "/admin/orders", icon: ShoppingBag },
    { name: "Products", href: "/admin/products", icon: Package },
    { name: "Categories", href: "/admin/categories", icon: Tag },
    { name: "Customers", href: "/admin/customers", icon: Users },
    { name: "Slider", href: "/admin/slider", icon: ImageIcon },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen flex bg-[#F4F7F6] font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col shrink-0 h-screen sticky top-0 shadow-sm">
        <div className="h-20 flex items-center px-6 gap-3 border-b border-transparent">
          <Menu className="w-5 h-5 text-gray-700" />
          <span className="font-bold text-gray-900 text-lg">Admin Panel</span>
        </div>
        
        <nav className="flex-1 py-6 px-4 space-y-1 overflow-y-auto">
          <p className="px-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-4">Management</p>
          {links.map((link) => {
            const Icon = link.icon;
            // Handle matching the base /admin route correctly vs sub-routes
            const isActive = link.href === "/admin" ? pathname === "/admin" : pathname.startsWith(link.href);
            
            return (
              <Link 
                key={link.name}
                href={link.href} 
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive 
                    ? "bg-[#FFF0F0] text-[#E02424]" 
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#E02424]' : 'text-gray-500'}`} /> {link.name}
              </Link>
            );
          })}
        </nav>
        
        <div className="p-4">
          <Link href="/admin/login" className="flex items-center justify-center gap-2 w-full bg-[#E02424] text-white py-2.5 rounded-lg font-medium text-sm hover:bg-red-700 transition-colors shadow-sm">
            Logout
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-h-screen">
        {/* Dynamic Page Content */}
        <div className="flex-1 p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
