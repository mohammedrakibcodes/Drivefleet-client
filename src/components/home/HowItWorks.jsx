"use client";

import { motion } from "framer-motion";

import { Search, CalendarCheck2, CarFront } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Browse Cars",
    description:
      "Explore a wide range of vehicles and choose the perfect one for your journey.",
  },
  {
    icon: CalendarCheck2,
    title: "Book Instantly",
    description:
      "Select your preferred rental date and confirm your booking within minutes.",
  },
  {
    icon: CarFront,
    title: "Drive & Enjoy",
    description:
      "Pick up your car and enjoy a safe, comfortable and memorable trip.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full border border-blue-200 bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:border-blue-800 dark:bg-blue-900/20 dark:text-blue-400">
            How It Works
          </span>

          <h2 className="mt-5 text-4xl font-black text-slate-900 dark:text-white">
            Rent Your Car in 3 Easy Steps
          </h2>

          <p className="mt-5 text-slate-600 dark:text-slate-400">
            Renting a car with DriveFleet is quick, secure and hassle-free. Just
            follow these simple steps to start your journey.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:border-blue-500 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900"
              >
                <span className="absolute right-6 top-6 text-5xl font-black text-slate-100 dark:text-slate-800">
                  {`0${index + 1}`}
                </span>

                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-900/20 dark:text-blue-400">
                  <Icon size={32} />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                  {step.title}
                </h3>

                <p className="leading-7 text-slate-600 dark:text-slate-400">
                  {step.description}
                </p>

                {index !== steps.length - 1 && (
                  <div className="absolute -right-8 top-1/2 hidden -translate-y-1/2 xl:flex">
                    <div className="h-[2px] w-16 bg-blue-300 dark:bg-blue-800"></div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
