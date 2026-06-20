"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import CarCard from "./CarCard";

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
    <section className="bg-slate-50 py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 text-center">
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
        </div>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {loading
            ? Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="h-[430px] animate-pulse rounded-3xl bg-slate-200 dark:bg-slate-800"
                />
              ))
            : cars.map((car) => <CarCard key={car._id} car={car} />)}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/explore-cars"
            className="inline-flex rounded-full border border-blue-600 bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Explore All Cars
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AvailableCars;
