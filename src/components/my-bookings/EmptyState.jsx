import Link from "next/link";
import { CalendarX2 } from "lucide-react";

const EmptyState = () => {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center px-4">
      <CalendarX2 size={70} className="text-blue-600" />

      <h2 className="mt-6 text-3xl font-bold text-slate-900 dark:text-white">
        No Bookings Yet
      </h2>

      <p className="mt-3 max-w-md text-slate-600 dark:text-slate-400">
        You haven't booked any cars yet. Explore available cars and make your
        first booking.
      </p>

      <Link
        href="/cars"
        className="mt-6 inline-flex rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white hover:bg-blue-700"
      >
        Explore Cars
      </Link>
    </div>
  );
};

export default EmptyState;
