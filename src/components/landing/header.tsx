"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-navy/90 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="DiscoverPrep Logo"
              width={52}
              height={52}
              className="rounded-xl"
            />
            <span className="text-white font-bold text-xl hidden sm:block">
              DiscoverPrep
            </span>
          </Link>

          {/* CTA Button */}
          <a
            href="https://apps.apple.com/ca/app/discoverprep-citizenship-2026/id6755275035"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-black hover:bg-gray-900 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            <Image
              src="/apple-logo.png"
              alt="Apple"
              width={24}
              height={24}
              className="invert"
            />
            <div className="flex flex-col items-start leading-tight">
              <span className="text-[10px] font-normal">Download on the</span>
              <span className="text-base font-semibold -mt-0.5">App Store</span>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
}
