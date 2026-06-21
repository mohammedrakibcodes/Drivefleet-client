"use client";

import DeleteDialog from "./DeleteDialog";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Users, CalendarDays, SquarePen, Trash2 } from "lucide-react";
import { useState } from "react";
import EditCarDialog from "./EditCarDialog";
import { Button } from "@heroui/react";

const MyCarCard = ({ car, refresh }) => {
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  return (
    <>
      <EditCarDialog
        open={openEdit}
        onClose={() => setOpenEdit(false)}
        car={car}
        refresh={refresh}
      />

      <DeleteDialog
        open={openDelete}
        onClose={() => setOpenDelete(false)}
        carId={car._id}
        refresh={refresh}
      />

      <motion.div
        whileHover={{ y: -2 }}
        transition={{ duration: 0.25 }}
        className="w-full"
      >
        <div className="flex flex-col md:flex-row w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md dark:border-slate-800 dark:bg-slate-900">
          <div className="relative h-48 w-full md:w-60 flex-shrink-0 overflow-hidden">
            <Image
              src={car.image}
              alt={car.carName}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex-1 min-w-0 w-full p-5">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white break-words">
              {car.carName}
            </h2>

            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm w-full">
              <div className="flex gap-2 min-w-0">
                <Users size={16} className="text-blue-600" />
                <div>
                  <p className="text-xs text-gray-500">Seats</p>
                  <p className="font-medium">{car.seatCapacity}</p>
                </div>
              </div>

              <div className="flex gap-2 min-w-0">
                <CalendarDays size={16} className="text-green-600" />
                <div>
                  <p className="text-xs text-gray-500">Bookings</p>
                  <p className="font-medium">{car.bookingCount}</p>
                </div>
              </div>

              <div className="flex gap-2 col-span-2 min-w-0">
                <MapPin size={16} className="text-orange-500" />
                <div className="min-w-0">
                  <p className="text-xs text-gray-500">Location</p>
                  <p className="font-medium truncate">{car.pickupLocation}</p>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-slate-500">Daily Rent</span>
              <span className="text-xl font-bold text-blue-600">
                ${car.dailyRentPrice}
              </span>
            </div>

            <p className="mt-3 line-clamp-2 text-sm text-slate-500">
              {car.description}
            </p>
          </div>

          <div className="flex md:flex-col items-center justify-center p-5 gap-3">
            <button
              onClick={() => setOpenEdit(true)}
              className="whitespace-nowrap rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Edit
            </button>

            <button
              onClick={() => setOpenDelete(true)}
              className="whitespace-nowrap rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default MyCarCard;
