"use client";

import { useEffect, useState } from "react";

import BookingCard from "./BookingCard";
import EmptyState from "./EmptyState";
import LoadingSkeleton from "./LoadingSkeleton";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBookings = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/my-bookings`,
        {
          credentials: "include",
          cache: "no-store",
        },
      );

      const data = await res.json();

      if (res.ok) {
        setBookings(data.data || []);
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  if (loading) {
    return <LoadingSkeleton />;
  }

  if (bookings.length === 0) {
    return <EmptyState />;
  }

  return (
    <section className="min-h-screen bg-slate-50 py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white">
            My Bookings
          </h1>

          <p className="mt-3 text-slate-600 dark:text-slate-400">
            Manage all your booked vehicles.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {bookings.map((booking) => (
            <BookingCard
              key={booking._id}
              booking={booking}
              refresh={fetchBookings}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyBookings;
