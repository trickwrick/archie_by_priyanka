"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOut, Users, ShoppingBag, LayoutDashboard, Settings, Package, Tag, Image as ImageIcon } from "lucide-react";
import Logo from "@/components/Logo";

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
    <div className="min-h-screen flex bg-[#FDFBF7]">
      {/* Sidebar */}
      <aside className="w-64 bg-[#997451] text-white flex flex-col transition-all duration-300 shrink-0 h-screen sticky top-0">
        <div className="p-6 border-b border-white/10 flex justify-center">
          <Link href="/admin">
            <Logo light={true} compact={true} />
          </Link>
        </div>
        
        <nav className="flex-1 py-8 px-4 space-y-2 overflow-y-auto">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            
            return (
              <Link 
                key={link.name}
                href={link.href} 
                className={`flex items-center gap-3 px-4 py-3 rounded-sm text-xs font-bold uppercase tracking-widest transition-colors ${
                  isActive 
                    ? "bg-[#C8A366]/20 text-[#C8A366]" 
                    : "text-white/70 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon className="w-4 h-4 stroke-1" /> {link.name}
              </Link>
            );
          })}
        </nav>
        
        <div className="p-4 border-t border-white/10">
          <Link href="/admin/login" className="flex items-center gap-3 px-4 py-3 text-white/70 hover:text-[#C8A366] text-xs font-bold uppercase tracking-widest transition-colors">
            <LogOut className="w-4 h-4 stroke-1" /> Sign Out
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-h-screen">
        {/* Topbar */}
        <header className="h-20 shrink-0 bg-white border-b border-[#E0D9C8] flex items-center justify-between px-8 sticky top-0 z-10">
          <h1 className="font-serif text-2xl text-[#997451]">
            {links.find(l => l.href === pathname)?.name || "Dashboard"}
          </h1>
          <div className="flex items-center gap-4">
            <div className="text-right hidden md:block">
              <p className="text-xs font-bold uppercase tracking-widest text-[#997451]">Admin User</p>
              <p className="text-[10px] text-neutral-500 uppercase tracking-widest">admin@archies.com</p>
            </div>
            <div className="w-10 h-10 bg-[#C8A366] rounded-full flex items-center justify-center text-white font-serif text-lg">
              A
            </div>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <div className="flex-1 p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
