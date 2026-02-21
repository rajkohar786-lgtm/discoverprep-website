"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface IPhoneMockupProps {
  imageSrc: string;
  alt?: string;
  size?: "sm" | "md" | "lg";
  animate?: boolean;
  priority?: boolean;
  className?: string;
}

// Frame is 680 x 1472 px
// Screen area fits inside the black bezel of the frame
const sizes = {
  sm: {
    wrapper: "w-[170px]",
    screenTop: "top-[5.8%]",
    screenLeft: "left-[7%]",
    screenRight: "right-[7%]",
    screenBottom: "bottom-[5.8%]",
    screenRadius: "rounded-[20px]",
  },
  md: {
    wrapper: "w-[227px]",
    screenTop: "top-[5.8%]",
    screenLeft: "left-[7%]",
    screenRight: "right-[7%]",
    screenBottom: "bottom-[5.8%]",
    screenRadius: "rounded-[26px]",
  },
  lg: {
    wrapper: "w-[340px]",
    screenTop: "top-[5.8%]",
    screenLeft: "left-[7%]",
    screenRight: "right-[7%]",
    screenBottom: "bottom-[5.8%]",
    screenRadius: "rounded-[40px]",
  },
};

export function IPhoneMockup({
  imageSrc,
  alt = "App screenshot",
  size = "lg",
  animate = true,
  priority = false,
  className,
}: IPhoneMockupProps) {
  const s = sizes[size];

  return (
    <div className={cn("relative", s.wrapper, className)}>
      {/* Ambient glow */}
      <div className="absolute -inset-6 bg-gradient-to-b from-orange-400/10 via-canadian-red/10 to-slate-600/10 rounded-full blur-3xl -z-10" />

      {/* Container with aspect ratio matching frame (680:1472) */}
      <div className="relative w-full" style={{ aspectRatio: "680 / 1472" }}>
        {/* Screenshot - positioned behind frame */}
        <div
          className={cn(
            "absolute overflow-hidden bg-white z-0",
            s.screenTop,
            s.screenLeft,
            s.screenRight,
            s.screenBottom,
            s.screenRadius
          )}
        >
          {animate ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={imageSrc}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="relative w-full h-full"
              >
                <Image
                  src={imageSrc}
                  alt={alt}
                  fill
                  className="object-cover object-top"
                  sizes={`(max-width: 640px) ${sizes.sm.wrapper}, (max-width: 1024px) ${sizes.md.wrapper}, ${sizes.lg.wrapper}`}
                  priority={priority}
                />
              </motion.div>
            </AnimatePresence>
          ) : (
            <Image
              src={imageSrc}
              alt={alt}
              fill
              className="object-cover object-top"
              sizes={`(max-width: 640px) ${sizes.sm.wrapper}, (max-width: 1024px) ${sizes.md.wrapper}, ${sizes.lg.wrapper}`}
              priority={priority}
            />
          )}
        </div>

        {/* iPhone frame overlay */}
        <Image
          src="/iphone-frame.png"
          alt="iPhone frame"
          fill
          className="relative z-10 pointer-events-none"
          priority
        />
      </div>

      {/* Bottom shadow */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-2/3 h-4 bg-black/15 blur-xl rounded-full" />
    </div>
  );
}
