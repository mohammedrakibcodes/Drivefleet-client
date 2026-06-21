"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { MapPin, Users, CarFront, BadgeDollarSign, Eye } from "lucide-react";
import Image from "next/image";
import { Button } from "@heroui/react";

const CarCard = ({ car }) => {
  const {
    _id,
    image,
    carName,
    carType,
    seatCapacity,
    pickupLocation,
    dailyRentPrice,
    availability,
  } = car;

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900"
    >
      <div className="relative overflow-hidden">
        <Image
          src={image}
          alt={carName}
          className="h-64 w-full object-cover"
          width={800}
          height={500}
          loading="eager"
        />

        <span
          className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-xl ${
            availability === "Available"
              ? "bg-green-500/90 text-white"
              : "bg-red-500/90 text-white"
          }`}
        >
          {availability}
        </span>
      </div>

      <div className="space-y-5 p-6">
        <div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            {carName}
          </h3>

          <p className="mt-1 text-slate-500 dark:text-slate-400">{carType}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
            <Users size={18} className="text-blue-600" />
            {seatCapacity} Seats
          </div>

          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
            <MapPin size={18} className="text-blue-600" />
            {pickupLocation}
          </div>

          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
            <CarFront size={18} className="text-blue-600" />
            {carType}
          </div>

          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
            <BadgeDollarSign size={18} className="text-blue-600" />$
            {dailyRentPrice}/day
          </div>
        </div>

        <Link href={`/cars/${car._id}`}>
          <Button
            variant="outline"
            className="flex items-center gap-2 rounded-xl"
          >
            <Eye size={18} />
            View Details
          </Button>
        </Link>
      </div>
    </motion.article>
  );
};

export default CarCard;
