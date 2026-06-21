"use client";

import { useState } from "react";
import BookingModal from "./BookingModal";

const BookingCard = ({ car }) => {
  const [open, setOpen] = useState(false);

  const isAvailable = car.availability === "Available";

  return (
    <>
      <div className="sticky top-24 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900">
        <p className="text-sm text-slate-500">Daily Rent</p>

        <h2 className="mt-2 text-5xl font-bold text-slate-900 dark:text-white">
          ${car.dailyRentPrice}
        </h2>

        <p className="mt-1 text-slate-500">Per Day</p>

        <div className="my-8 border-t border-b border-slate-200 py-6 dark:border-slate-700">
          <div className="mb-5 flex items-center justify-between">
            <span className="text-slate-500">Availability</span>

            <span
              className={`rounded-full px-3 py-1 text-sm font-semibold ${
                isAvailable
                  ? "bg-green-500/90 text-white"
                  : "bg-red-500/90 text-white"
              }`}
            >
              {car.availability}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-slate-500">Car Type</span>
            <span className="font-bold">{car.carType}</span>
          </div>

          <div className="flex items-center justify-between mt-4">
            <span className="text-slate-500">Seats</span>
            <span className="font-bold">{car.seatCapacity}</span>
          </div>

          <div className="flex items-center justify-between mt-4">
            <span className="text-slate-500">Pickup</span>
            <span className="font-bold">{car.pickupLocation}</span>
          </div>

          <div className="flex items-center justify-between mt-4">
            <span className="text-slate-500">Bookings</span>
            <span className="font-bold">{car.bookingCount}</span>
          </div>
        </div>

        <button
          disabled={!isAvailable}
          onClick={() => setOpen(true)}
          className="w-full h-10 text-base font-semibold bg-blue-600 text-white rounded-2xl transition
                     disabled:bg-slate-300 disabled:text-slate-600
                     dark:disabled:bg-slate-700 dark:disabled:text-slate-400"
        >
          {isAvailable ? "Book Now" : "Currently Unavailable"}
        </button>
      </div>

      <BookingModal open={open} onClose={() => setOpen(false)} car={car} />
    </>
  );
};

export default BookingCard;
