"use client";

import { useEffect, useState } from "react";
import MyCarCard from "./MyCarCard";
import EmptyState from "./EmptyState";
import { Spinner } from "@heroui/react";
import { motion } from "framer-motion";

const MyCars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCars = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/my-cars`,
        {
          credentials: "include",
          cache: "no-store",
        },
      );

      const data = await res.json();

      if (res.ok) {
        setCars(data.data || []);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  if (loading) {
    return (
      <section className="min-h-screen bg-slate-50 py-20 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Spinner />
        </div>
      </section>
    );
  }

  if (!cars.length) return <EmptyState />;

  return (
    <section className="min-h-screen bg-slate-50 py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white">
            My Added Cars
          </h1>
          <p className="mt-3 text-slate-600 dark:text-slate-400">
            Manage all vehicles you have listed.
          </p>
          <p className="mt-2 text-sm font-semibold text-blue-600">
            {cars.length} Cars Found
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          {cars.map((car) => (
            <MyCarCard key={car._id} car={car} refresh={fetchCars} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MyCars;
