"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CalendarDays, Clock3, Wallet } from "lucide-react";

import CancelBookingDialog from "./CancelBookingDialog";

const BookingCard = ({ booking, refresh }) => {
  const [open, setOpen] = useState(false);

  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-GB").replace(/\//g, "-");

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -2 }}
        transition={{ duration: 0.25 }}
        className="w-full block"
      >
        <div
          className="
          w-full
          flex flex-col md:flex-row
          bg-white dark:bg-slate-900
          rounded-2xl
          shadow-md
          border border-slate-200 dark:border-slate-800
          overflow-hidden
        "
        >
          <div className="relative w-full md:w-60 h-48 flex-shrink-0">
            <Image
              src={booking.carImage}
              alt={booking.carName}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex-1 p-5 min-w-0 w-full">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white break-words">
              {booking.carName}
            </h2>

            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm w-full">
              <div className="flex gap-2">
                <CalendarDays size={16} className="text-blue-600" />
                <div>
                  <p className="text-xs text-gray-500">Booking</p>
                  <p className="font-medium">
                    {formatDate(booking.bookingDate)}
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <CalendarDays size={16} className="text-green-600" />
                <div>
                  <p className="text-xs text-gray-500">Return</p>
                  <p className="font-medium">
                    {formatDate(booking.returnDate)}
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <Clock3 size={16} className="text-orange-500" />
                <div>
                  <p className="text-xs text-gray-500">Days</p>
                  <p className="font-medium">{booking.totalDays}</p>
                </div>
              </div>

              <div className="flex gap-2">
                <Wallet size={16} className="text-purple-600" />
                <div>
                  <p className="text-xs text-gray-500">Price</p>
                  <p className="font-bold text-blue-600">
                    ${booking.totalPrice}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex md:flex-col items-center justify-center p-5">
            <button
              onClick={() => setOpen(true)}
              className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-xl text-sm font-semibold whitespace-nowrap"
            >
              Cancel
            </button>
          </div>
        </div>
      </motion.div>

      <CancelBookingDialog
        open={open}
        onClose={() => setOpen(false)}
        bookingId={booking._id}
        refresh={refresh}
      />
    </>
  );
};

export default BookingCard;
