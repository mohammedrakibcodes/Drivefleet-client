import Link from "next/link";
import { CalendarX2 } from "lucide-react";
import { motion } from "framer-motion";

const EmptyState = () => {
  return (
    <motion.div
      className="flex min-h-[60vh] flex-col items-center justify-center text-center px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.4 }}
      >
        <CalendarX2 size={70} className="text-blue-600" />
      </motion.div>

      <motion.h2
        className="mt-6 text-3xl font-bold text-slate-900 dark:text-white"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        No Bookings Yet
      </motion.h2>

      <motion.p
        className="mt-3 max-w-md text-slate-600 dark:text-slate-400"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        You haven't booked any cars yet. Explore available cars and make your
        first booking.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Link
          href="/cars"
          className="mt-6 inline-flex rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white hover:bg-blue-700"
        >
          Explore Cars
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default EmptyState;
