"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";
import SortDropdown from "./SortDropdown";
import CarsGrid from "./CarsGrid";
import LoadingSkeleton from "./LoadingSkeleton";
import EmptyState from "./EmptyState";

const ExploreCars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [sortBy, setSortBy] = useState("newest");

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/cars`, {
          cache: "no-store",
        });

        const data = await res.json();
        setCars(data.data || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  const filteredCars = useMemo(() => {
    let result = [...cars];

    if (search.trim()) {
      const keyword = search.toLowerCase();

      result = result.filter(
        (car) =>
          car.carName.toLowerCase().includes(keyword) ||
          car.carType.toLowerCase().includes(keyword) ||
          car.pickupLocation.toLowerCase().includes(keyword),
      );
    }

    if (activeFilter !== "All") {
      result = result.filter((car) => car.carType === activeFilter);
    }

    switch (sortBy) {
      case "low":
        result.sort((a, b) => a.dailyRentPrice - b.dailyRentPrice);
        break;
      case "high":
        result.sort((a, b) => b.dailyRentPrice - a.dailyRentPrice);
        break;
      case "booked":
        result.sort((a, b) => b.bookingCount - a.bookingCount);
        break;
      default:
        result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    return result;
  }, [cars, search, activeFilter, sortBy]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen bg-slate-50 py-20 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-10"
        >
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white">
            Explore Cars
          </h1>
          <p className="mt-3 text-slate-600 dark:text-slate-400">
            Find the perfect vehicle for your next adventure.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <SearchBar search={search} setSearch={setSearch} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between"
        >
          <FilterBar
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />

          <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
        </motion.div>

        {!loading && (
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8 text-lg font-semibold text-slate-700 dark:text-slate-300"
          >
            {filteredCars.length} Cars Found
          </motion.h2>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {loading ? (
            <LoadingSkeleton />
          ) : filteredCars.length === 0 ? (
            <EmptyState />
          ) : (
            <CarsGrid cars={filteredCars} />
          )}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ExploreCars;
