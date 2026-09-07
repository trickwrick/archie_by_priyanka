"use client";

import React from "react";

interface LogoProps {
  light?: boolean;
  compact?: boolean;
  className?: string;
}

export default function Logo({ light = false, compact = false, className = "" }: LogoProps) {
  const textColor = light ? "text-white" : "text-[#1E332D]";
  const subtextColor = light ? "text-neutral-200" : "text-[#1E332D]";
  const strokeColor = light ? "#F3E5AB" : "#C8A366";

  if (compact) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        {/* Sun & Wave Icon */}
        <svg
          className="w-5 h-5 shrink-0"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="44" stroke={strokeColor} strokeWidth="2.5" />
          <path
            d="M 12 50 C 30 38, 45 62, 88 44"
            stroke={strokeColor}
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 12 60 C 35 48, 55 68, 88 56"
            stroke={strokeColor}
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
        <div>
          <span className={`font-serif text-base tracking-[0.15em] font-normal uppercase ${textColor} block leading-none`}>
            Archie&apos;s
          </span>
          <span className={`text-[7.5px] tracking-[0.3em] uppercase font-sans font-medium ${subtextColor} block mt-0.5`}>
            BY PRIYANKA
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center text-center py-1 ${className}`}>
      {/* Official Brand Sun & Wave Icon */}
      <svg
        className="w-6 h-6 sm:w-7 sm:h-7 mb-1"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="44" stroke={strokeColor} strokeWidth="2.5" />
        <path
          d="M 12 48 C 30 36, 45 60, 88 42"
          stroke={strokeColor}
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 12 58 C 35 46, 55 66, 88 54"
          stroke={strokeColor}
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      {/* Main Title: Archie's */}
      <h1 className={`font-serif text-xl sm:text-2xl font-normal tracking-widest ${textColor} leading-tight`}>
        Archie&apos;s
      </h1>

      {/* Gold Line Divider with Center Dot */}
      <div className="flex items-center justify-center space-x-2 my-0.5 w-20 sm:w-28 opacity-90">
        <div className="h-px flex-1 bg-linear-to-r from-transparent to-[#C8A366]"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-[#C8A366]"></div>
        <div className="h-px flex-1 bg-linear-to-l from-transparent to-[#C8A366]"></div>
      </div>

      {/* Subtitle: B Y  P R I Y A N K A */}
      <span className={`text-[8px] sm:text-[9px] tracking-[0.45em] uppercase font-sans font-medium ${subtextColor} block mt-0.5`}>
        B Y  P R I Y A N K A
      </span>
    </div>
  );
}
