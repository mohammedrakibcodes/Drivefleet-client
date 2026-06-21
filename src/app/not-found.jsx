"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TriangleAlert, House } from "lucide-react";

const NotFound = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-50 px-6 dark:bg-slate-950">
      <div className="max-w-xl text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <TriangleAlert size={80} className="mx-auto mb-6 text-blue-600" />

          <h2 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white">
            Page Not Found
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-400">
            The page you're looking for doesn't exist or has been moved.
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            <House size={20} />
            Go To Home
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default NotFound;
