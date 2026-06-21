"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import LoadingSkeleton from "./LoadingSkeleton";
import NotFound from "./NotFound";
import CarInfo from "./CarInfo";
import BookingCard from "./BookingCard";

const CarDetails = ({ id }) => {
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/cars/${id}`,
          {
            cache: "no-store",
          },
        );

        const data = await res.json();

        setCar(data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCar();
  }, [id]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="min-h-screen bg-slate-50 py-20 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {loading ? (
          <LoadingSkeleton />
        ) : !car ? (
          <NotFound />
        ) : (
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <CarInfo car={car} />
            </div>

            <div>
              <BookingCard car={car} />
            </div>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default CarDetails;
