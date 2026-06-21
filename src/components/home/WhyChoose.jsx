"use client";

import { motion } from "framer-motion";

import { CarFront, ShieldCheck, BadgeDollarSign, Zap } from "lucide-react";

const features = [
  {
    icon: CarFront,
    title: "Wide Selection",
    description:
      "Choose from SUVs, sedans, sports cars and luxury vehicles for every journey.",
  },
  {
    icon: BadgeDollarSign,
    title: "Affordable Pricing",
    description:
      "Transparent daily rental pricing with no hidden charges or surprises.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Verified",
    description:
      "Every vehicle is inspected and verified to ensure maximum safety.",
  },
  {
    icon: Zap,
    title: "Instant Booking",
    description:
      "Reserve your favorite car within minutes through our simple booking process.",
  },
];

const WhyChoose = () => {
  return (
    <section className="bg-white py-20 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full border border-blue-200 bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:border-blue-800 dark:bg-blue-900/20 dark:text-blue-400">
            Why Choose Us
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900 dark:text-white">
            Why Choose DriveFleet
          </h2>

          <p className="mt-5 text-slate-600 dark:text-slate-400">
            Experience premium car rentals with trusted vehicles, transparent
            pricing, and a seamless booking process designed for every traveler.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="group rounded-3xl border border-slate-200 bg-white/70 p-8 shadow-lg backdrop-blur-xl transition-all duration-300 hover:border-blue-500 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900/70"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-900/20 dark:text-blue-400">
                  <Icon size={32} />
                </div>

                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  {feature.title}
                </h3>

                <p className="leading-7 text-slate-600 dark:text-slate-400">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
