"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { Users, MapPin, Eye, BadgeCheck } from "lucide-react";
import { Button } from "@heroui/react";

const ExploreCarCard = ({ car }) => {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.25,
      }}
      className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900"
    >
      <Image
        src={car.image}
        alt={car.carName}
        width={800}
        height={500}
        className="h-60 w-full object-cover"
        loading="eager"
      />

      <div className="space-y-5 p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            {car.carName}
          </h2>

          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              car.availability === "Available"
                ? "bg-green-500/90 text-white"
                : "bg-red-500/90 text-white"
            }`}
          >
            {car.availability}
          </span>
        </div>

        <div className="flex items-center justify-between text-slate-500">
          <div className="flex items-center gap-2">
            <Users size={18} />
            {car.seatCapacity} Seats
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={18} />
            {car.pickupLocation}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500">Per Day</p>

            <p className="text-xl font-bold text-black dark:text-white">
              ${car.dailyRentPrice}
            </p>
          </div>

          <Link href={`/cars/${car._id}`}>
            <Button
              variant="outline"
              className="flex items-center gap-2 rounded-xl"
            >
              Book
              <BadgeCheck size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ExploreCarCard;
