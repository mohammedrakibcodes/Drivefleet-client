import Link from "next/link";
import { CarFront } from "lucide-react";
import { motion } from "framer-motion";

const EmptyState = () => {
  return (
    <motion.section
      className="flex min-h-screen items-center justify-center bg-slate-50 dark:bg-slate-950"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="text-center px-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          <CarFront size={70} className="text-blue-600 mx-auto" />
        </motion.div>

        <motion.h2
          className="mt-6 text-4xl font-bold text-slate-900 dark:text-white"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          No Cars Added
        </motion.h2>

        <motion.p
          className="mt-4 text-slate-600 dark:text-slate-400"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          You haven't listed any vehicles yet.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Link
            href="/add-car"
            className="mt-8 inline-flex rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Add Your First Car
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default EmptyState;
