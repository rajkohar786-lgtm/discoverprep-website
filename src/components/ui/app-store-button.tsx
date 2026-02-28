"use client";

import Image from "next/image";

interface AppStoreButtonProps {
  size?: "sm" | "lg";
  className?: string;
}

export function AppStoreButton({ size = "lg", className = "" }: AppStoreButtonProps) {
  const handleClick = () => {
    // Track conversion in Google Ads
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: "AW-17983618905/ajUTCIKcy4AcENn-oP9C",
        value: 1.0,
        currency: "CAD",
      });
    }
  };

  const sizes = {
    sm: {
      padding: "px-4 py-2",
      icon: 24,
      topText: "text-[10px]",
      bottomText: "text-base",
      rounded: "rounded-lg",
    },
    lg: {
      padding: "px-6 py-3",
      icon: 36,
      topText: "text-xs",
      bottomText: "text-2xl",
      rounded: "rounded-xl",
    },
  };

  const s = sizes[size];

  return (
    <a
      href="https://apps.apple.com/ca/app/discoverprep-citizenship-2026/id6755275035"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`inline-flex items-center gap-2 bg-black hover:bg-gray-900 text-white ${s.padding} ${s.rounded} transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${className}`}
    >
      <Image
        src="/apple-logo.png"
        alt="Apple"
        width={s.icon}
        height={s.icon}
        className="invert"
      />
      <div className="flex flex-col items-start leading-tight">
        <span className={`${s.topText} font-normal`}>Download on the</span>
        <span className={`${s.bottomText} font-semibold -mt-0.5`}>App Store</span>
      </div>
    </a>
  );
}
