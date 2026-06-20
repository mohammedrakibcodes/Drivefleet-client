"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import CarCard from "./CarCard";
import { Button } from "@heroui/react";
import { ArrowRight } from "lucide-react";

const AvailableCars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/cars/home`,
          {
            cache: "no-store",
          },
        );

        const data = await res.json();
        setCars(data.data || []);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-slate-50 py-20 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="rounded-full border border-blue-200 bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:border-blue-800 dark:bg-blue-900/20 dark:text-blue-400">
            Premium Collection
          </span>

          <h2 className="mt-5 text-4xl font-black text-slate-900 dark:text-white">
            Available Cars
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
            Browse our latest collection of premium vehicles ready for your next
            journey.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {loading
            ? Array.from({ length: 6 }).map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="h-[430px] animate-pulse rounded-3xl bg-slate-200 dark:bg-slate-800"
                />
              ))
            : cars.map((car, index) => (
                <motion.div
                  key={car._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <CarCard car={car} />
                </motion.div>
              ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <Link href="/cars">
            <Button className="relative overflow-hidden rounded-full bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700">
              <span className="relative z-10 flex items-center gap-2">
                Explore All Cars
                <ArrowRight size={18} />
              </span>

              <span className="absolute inset-0 -translate-x-full animate-shine bg-gradient-to-r from-transparent via-white/25 to-transparent" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AvailableCars;
