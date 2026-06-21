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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg dark:border-slate-800 dark:bg-slate-900"
      >
        <div className="relative h-56 w-full">
          <Image
            src={booking.carImage}
            alt={booking.carName}
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-5 p-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            {booking.carName}
          </h2>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <CalendarDays size={18} className="text-blue-600" />

              <div>
                <p className="text-xs text-slate-500">Booking Date</p>
                <p className="font-medium dark:text-white">
                  {formatDate(booking.bookingDate)}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <CalendarDays size={18} className="text-green-600" />

              <div>
                <p className="text-xs text-slate-500">Return Date</p>
                <p className="font-medium dark:text-white">
                  {formatDate(booking.returnDate)}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Clock3 size={18} className="text-orange-500" />

              <div>
                <p className="text-xs text-slate-500">Total Days</p>
                <p className="font-medium dark:text-white">
                  {booking.totalDays} Days
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Wallet size={18} className="text-purple-600" />

              <div>
                <p className="text-xs text-slate-500">Total Price</p>
                <p className="font-bold text-blue-600">${booking.totalPrice}</p>
              </div>
            </div>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="w-full rounded-xl bg-red-600 py-3 font-semibold text-white transition hover:bg-red-700"
          >
            Cancel Booking
          </button>
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
