"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { AuthContext } from "@/context/AuthProvider";

const slides = [
  {
    id: 1,
    image: "/Images/Hero/Hero1.jpg",
    badge: "Premium Car Rental",
    title: "Drive Your Journey With Comfort & Confidence",
    description:
      "Choose from premium cars for business trips, family vacations, and everyday travel with transparent pricing and instant booking.",
  },
  {
    id: 2,
    image: "/Images/Hero/Herov2.jpg",
    badge: "Luxury Collection",
    title: "Find The Perfect Ride For Every Destination",
    description:
      "SUVs, Sedans, Hatchbacks, and Luxury Cars—all professionally maintained for a safe and comfortable driving experience.",
  },
  {
    id: 3,
    image: "/Images/Hero/Herov3.jpg",
    badge: "Fast Booking",
    title: "Book In Minutes. Drive Without Limits.",
    description:
      "Reserve your favorite vehicle anytime with a smooth booking experience built for modern travelers.",
  },
];

const Hero = () => {
  const { user } = useContext(AuthContext);

  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative h-[calc(100vh-80px)] min-h-170 overflow-hidden bg-slate-950"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current].image}
            alt={slides[current].title}
            fill
            priority
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/65 to-slate-900/20 dark:from-black/95 dark:via-slate-950/75 dark:to-slate-950/35" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 z-10 flex items-center">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-xl dark:bg-white/5">
              <span className="h-2 w-2 rounded-full bg-blue-600"></span>

              {slides[current].badge}
            </div>

            <h1 className="mt-7 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
              {slides[current].title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              {slides[current].description}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/cars"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-3 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 dark:bg-white/5"
              >
                Explore Cars
                <ChevronRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              {!user && (
                <Link
                  href="/register"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-3 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/15 dark:hover:bg-white/10"
                >
                  Get Started
                </Link>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setCurrent(index)}
            className={`transition-all duration-300 ${
              current === index
                ? "h-3 w-10 rounded-full bg-blue-600"
                : "h-3 w-3 rounded-full bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
