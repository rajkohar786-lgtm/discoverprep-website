"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { IPhoneMockup } from "@/components/ui/iphone-mockup";

const features = [
  {
    id: 1,
    title: "Audio Podcasts",
    description:
      "Turn your commute into study time. Our conversational podcasts transform dry government text into engaging stories you'll actually remember. Listen while driving, working out, or relaxing at home.",
    imageSrc: "/screenshots/podcasts.png",
  },
  {
    id: 2,
    title: "Interactive Lessons",
    description:
      "Master every chapter of Discover Canada with expertly crafted lessons. Track your progress through each topic with clear checkpoints and build confidence as you learn about Canadian history, rights, and responsibilities.",
    imageSrc: "/screenshots/lessons.png",
  },
  {
    id: 3,
    title: "Mock Exams",
    description:
      "Test your knowledge with realistic practice exams that mirror the actual citizenship test. Track your scores, see your improvement over time, and know exactly when you're ready to pass.",
    imageSrc: "/screenshots/mock-exams.png",
  },
];

// Mobile Feature Trigger - invisible scroll triggers
function MobileFeatureTrigger({
  onInView,
  index,
}: {
  onInView: (index: number) => void;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    margin: "-50% 0px -50% 0px",
  });

  useEffect(() => {
    if (isInView) {
      onInView(index);
    }
  }, [isInView, index, onInView]);

  return <div ref={ref} className="h-screen" />;
}

// Desktop Feature Block
function DesktopFeatureBlock({
  feature,
  index,
  onInView,
}: {
  feature: (typeof features)[0];
  index: number;
  onInView: (index: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    margin: "-40% 0px -40% 0px",
  });

  useEffect(() => {
    if (isInView) {
      onInView(index);
    }
  }, [isInView, index, onInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0.3 }}
      animate={{ opacity: isInView ? 1 : 0.3 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center py-24"
    >
      <div className="max-w-md">
        <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-6">
          {feature.title}
        </h3>
        <p className="text-lg text-slate-300 leading-relaxed">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}

export function MobileScrollFeature() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleInView = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="relative">
      <div className="bg-navy pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Section Header */}
          <div className="hidden lg:block py-16 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
            >
              Everything You Need to{" "}
              <span className="text-canadian-red">Pass</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto"
            >
              Designed by immigrants who passed the test, for immigrants preparing to become Canadian citizens.
            </motion.p>
          </div>

          {/* Mobile Layout - Full sticky experience */}
          <div className="lg:hidden relative">
            {/* Sticky Container - header, phone, and feature text all stick */}
            <div className="sticky top-16 z-10 bg-navy min-h-screen flex flex-col pt-6">
              {/* Mobile Header - sticky */}
              <div className="text-center px-4 pb-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Everything You Need to{" "}
                  <span className="text-canadian-red">Pass</span>
                </h2>
                <p className="mt-2 text-sm text-slate-400">
                  Designed by immigrants who passed the test, for immigrants preparing to become Canadian citizens.
                </p>
              </div>

              {/* iPhone */}
              <div className="py-4 flex justify-center">
                <IPhoneMockup
                  imageSrc={features[activeIndex].imageSrc}
                  size="sm"
                  animate={true}
                />
              </div>

              {/* Feature Text - shows current feature */}
              <div className="flex-1 flex items-start justify-center px-6 pt-4">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-center max-w-sm"
                >
                  <h3 className="text-xl font-extrabold text-white tracking-tight mb-2">
                    {features[activeIndex].title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {features[activeIndex].description}
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Invisible Scroll Triggers - creates scroll height for each feature */}
            <div className="relative -mt-[100vh]">
              {features.map((feature, index) => (
                <MobileFeatureTrigger
                  key={feature.id}
                  index={index}
                  onInView={handleInView}
                />
              ))}
            </div>
          </div>

          {/* Desktop Layout - Sticky scroll */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-16">
            {/* Left Column - Scrollable Feature Blocks */}
            <div>
              {features.map((feature, index) => (
                <DesktopFeatureBlock
                  key={feature.id}
                  feature={feature}
                  index={index}
                  onInView={handleInView}
                />
              ))}
            </div>

            {/* Right Column - Sticky Phone */}
            <div className="sticky top-0 h-screen flex items-center justify-center">
              <IPhoneMockup
                imageSrc={features[activeIndex].imageSrc}
                size="lg"
                animate={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
