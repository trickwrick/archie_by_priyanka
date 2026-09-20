"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, ArrowRight } from "lucide-react";
import Logo from "@/components/Logo";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login for now
    setTimeout(() => {
      router.push("/admin");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#1E332D] flex-col justify-between p-12 relative overflow-hidden">
        {/* Subtle decorative background elements */}
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-[#C8A366] opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-[#C8A366] opacity-10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <Logo light={true} compact={false} />
        </div>
        
        <div className="relative z-10 text-white space-y-6 max-w-md">
          <h1 className="font-serif text-4xl leading-tight">
            Archie's Command Center
          </h1>
          <p className="text-sm uppercase tracking-widest text-white/60 leading-relaxed">
            Exclusive access for administration, order management, and bespoke client fitting schedules.
          </p>
        </div>
        
        <div className="relative z-10 text-[10px] uppercase tracking-widest text-white/40">
          &copy; {new Date().getFullYear()} ARCHIE'S BY PRIYANKA. ALL RIGHTS RESERVED.
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-[#FDFBF7]">
        <div className="w-full max-w-md space-y-12">
          
          {/* Mobile Logo */}
          <div className="lg:hidden flex justify-center mb-12">
             <div className="bg-[#1E332D] p-6 rounded-lg shadow-xl inline-block">
               <Logo light={true} compact={true} />
             </div>
          </div>

          <div className="space-y-3">
            <div className="w-12 h-12 bg-[#1E332D] text-[#C8A366] flex items-center justify-center mb-6">
              <Lock className="w-5 h-5 stroke-1" />
            </div>
            <h2 className="font-serif text-3xl text-[#1E332D]">Admin Portal</h2>
            <p className="text-sm uppercase tracking-widest text-neutral-500">
              Please authenticate to continue
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-1">
              <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-[#FDFBF7] border border-[#E0D9C8] focus:outline-none focus:ring-1 focus:ring-[#C8A366] text-sm transition-colors text-[#1E332D]"
                placeholder="admin@archies.com"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 bg-[#FDFBF7] border border-[#E0D9C8] focus:outline-none focus:ring-1 focus:ring-[#C8A366] text-sm transition-colors text-[#1E332D]"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 bg-[#1E332D] text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#C8A366] transition-all duration-300 shadow-lg flex items-center justify-center gap-3 group mt-8 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? "Authenticating..." : "Access Portal"}
              {!isLoading && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}
