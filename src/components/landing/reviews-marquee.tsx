"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    text: "Finally, an app that doesn't sound like a robot reading a textbook.",
    name: "Priya S.",
    location: "Toronto, ON",
    rating: 5,
  },
  {
    id: 2,
    text: "Passed on my first try! The audio podcasts made studying so much easier.",
    name: "Marco L.",
    location: "Vancouver, BC",
    rating: 5,
  },
  {
    id: 3,
    text: "The mock exams are exactly like the real test. I felt so prepared!",
    name: "Wei Chen",
    location: "Calgary, AB",
    rating: 5,
  },
  {
    id: 4,
    text: "Best citizenship test app by far. The lessons are clear and well organized.",
    name: "Fatima K.",
    location: "Montreal, QC",
    rating: 5,
  },
  {
    id: 5,
    text: "I listened to the podcasts during my commute. Passed with 95%!",
    name: "David O.",
    location: "Ottawa, ON",
    rating: 5,
  },
  {
    id: 6,
    text: "My whole family used this app. We all passed on the first attempt.",
    name: "Singh Family",
    location: "Brampton, ON",
    rating: 5,
  },
  {
    id: 7,
    text: "The lessons break everything down so clearly. Made studying enjoyable.",
    name: "Elena R.",
    location: "Edmonton, AB",
    rating: 5,
  },
  {
    id: 8,
    text: "Worth every penny. The audio quality is excellent and very engaging.",
    name: "James T.",
    location: "Halifax, NS",
    rating: 5,
  },
];

function ReviewCard({ review }: { review: (typeof reviews)[0] }) {
  return (
    <div className="flex-shrink-0 w-[320px] sm:w-[380px] mx-3">
      <div className="bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        {/* Stars */}
        <div className="flex gap-1 mb-3">
          {Array.from({ length: review.rating }).map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>

        {/* Review Text */}
        <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
          &ldquo;{review.text}&rdquo;
        </p>

        {/* User Info */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-canadian-red to-red-600 flex items-center justify-center">
            <span className="text-white text-sm font-semibold">
              {review.name.charAt(0)}
            </span>
          </div>
          <div>
            <p className="text-slate-900 text-sm font-semibold">{review.name}</p>
            <p className="text-slate-500 text-xs">{review.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({ direction = "left" }: { direction?: "left" | "right" }) {
  const controls = useAnimationControls();
  const containerRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);

  const duplicatedReviews = [...reviews, ...reviews];

  useEffect(() => {
    if (containerRef.current) {
      const singleSetWidth = containerRef.current.scrollWidth / 2;
      setContentWidth(singleSetWidth);
    }
  }, []);

  useEffect(() => {
    if (contentWidth > 0) {
      const startX = direction === "left" ? 0 : -contentWidth;
      const endX = direction === "left" ? -contentWidth : 0;

      controls.start({
        x: [startX, endX],
        transition: {
          x: {
            duration: 40,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          },
        },
      });
    }
  }, [contentWidth, controls, direction]);

  const handleMouseEnter = () => controls.stop();
  const handleMouseLeave = () => {
    if (contentWidth > 0) {
      const startX = direction === "left" ? 0 : -contentWidth;
      const endX = direction === "left" ? -contentWidth : 0;
      controls.start({
        x: [startX, endX],
        transition: {
          x: { duration: 40, repeat: Infinity, ease: "linear", repeatType: "loop" },
        },
      });
    }
  };

  return (
    <div
      className="overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div ref={containerRef} className="flex" animate={controls}>
        {duplicatedReviews.map((review, index) => (
          <ReviewCard key={`${review.id}-${index}`} review={review} />
        ))}
      </motion.div>
    </div>
  );
}

export function ReviewsMarquee() {
  return (
    <section className="relative overflow-hidden">
      {/* Solid background */}
      <div className="bg-slate-50 pt-20 pb-16">
        {/* Section Label */}
        <div className="text-center mb-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-500 text-sm uppercase tracking-widest font-medium"
          >
            Trusted by thousands of new Canadians
          </motion.p>
        </div>

        {/* Marquee with Edge Masks */}
        <div
          className="relative"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
          }}
        >
          <MarqueeRow direction="left" />
        </div>
      </div>
    </section>
  );
}
