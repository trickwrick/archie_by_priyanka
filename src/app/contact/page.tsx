"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";

export default function ContactPage() {
  
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#1E332D] flex flex-col font-sans pt-32 md:pt-40">
      <Navbar />

      <div className="flex-1 max-w-7xl mx-auto w-full px-6 lg:px-12 mb-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl text-[#1E332D] mb-6">Contact Us</h1>
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-500 max-w-2xl mx-auto leading-relaxed">
            We are here to assist you with product inquiries, order tracking, and styling advice.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-12">
            <div>
              <h2 className="font-serif text-2xl text-[#1E332D] mb-8 border-b border-[#E0D9C8] pb-4">
                Get in Touch
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-[#C8A366] mt-1 stroke-1" />
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-[#1E332D] mb-1">Email</h3>
                    <p className="text-sm text-neutral-600">concierge@archiesbypriyanka.com</p>
                    <p className="text-xs text-neutral-400 mt-1">We aim to reply within 24 hours.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-[#C8A366] mt-1 stroke-1" />
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-[#1E332D] mb-1">Phone / WhatsApp</h3>
                    <p className="text-sm text-neutral-600">+91 98765 43210</p>
                    <p className="text-xs text-neutral-400 mt-1">Mon - Fri, 10am - 6pm (IST)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#C8A366] mt-1 stroke-1" />
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-[#1E332D] mb-1">Mumbai Atelier</h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      123 Luxury Avenue, Bandra West<br />
                      Mumbai, Maharashtra 400050<br />
                      India
                    </p>
                    <p className="text-xs text-neutral-400 mt-1 italic">By appointment only.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1E332D] p-8 text-white">
              <h3 className="font-serif text-xl mb-4">VIP Style & Sizing Advice</h3>
              <p className="text-sm text-white/70 mb-6 leading-relaxed">
                Need guidance selecting your ideal silhouette or sizing? Connect directly with our Mumbai atelier stylists via WhatsApp.
              </p>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold uppercase tracking-[0.2em] text-[#C8A366] hover:text-white transition-colors flex items-center gap-2"
              >
                Chat on WhatsApp <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="font-serif text-2xl text-[#1E332D] mb-8 border-b border-[#E0D9C8] pb-4">
              Send a Message
            </h2>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-neutral-600 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-white border border-[#E0D9C8] focus:outline-none focus:ring-1 focus:ring-[#C8A366] text-sm transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-neutral-600 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-white border border-[#E0D9C8] focus:outline-none focus:ring-1 focus:ring-[#C8A366] text-sm transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-neutral-600 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 bg-white border border-[#E0D9C8] focus:outline-none focus:ring-1 focus:ring-[#C8A366] text-sm transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-neutral-600 mb-2">
                  Subject *
                </label>
                <select className="w-full px-4 py-3 bg-white border border-[#E0D9C8] focus:outline-none focus:ring-1 focus:ring-[#C8A366] text-sm transition-colors text-neutral-700">
                  <option>Order Inquiry</option>
                  <option>Sizing & Fit Advice</option>
                  <option>Press / Partnerships</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-neutral-600 mb-2">
                  Message *
                </label>
                <textarea
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-[#E0D9C8] focus:outline-none focus:ring-1 focus:ring-[#C8A366] text-sm transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#1A1A1A] text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#9A7B38] transition-all duration-300 shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
      <CartDrawer />
          </main>
  );
}
