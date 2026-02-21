"use client";

import { motion } from "framer-motion";
import { IPhoneMockup } from "@/components/ui/iphone-mockup";
import { AppStoreButton } from "@/components/ui/app-store-button";

export function Hero() {
  return (
    <section className="relative bg-navy overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 lg:pt-36 pb-20 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight tracking-tight"
            >
              Pass Your Canadian Citizenship Test{" "}
              <span className="text-canadian-red">With Confidence.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="mt-6 text-lg sm:text-xl text-slate-300 max-w-xl mx-auto lg:mx-0"
            >
              The only Canadian Citizenship Test 2026 app that turns the dry
              government guide into engaging conversational podcasts.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
            >
              <AppStoreButton size="lg" />
              <span className="text-slate-400 text-sm">
                Free • iOS 17+
              </span>
            </motion.div>
          </motion.div>

          {/* Right Column - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <IPhoneMockup
              imageSrc="/hero-screenshot.png"
              alt="DiscoverPrep App Screenshot"
              size="lg"
              animate={false}
              priority
            />
          </motion.div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-canadian-red/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
