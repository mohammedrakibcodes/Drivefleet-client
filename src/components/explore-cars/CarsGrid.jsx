"use client";

import { AnimatePresence, motion } from "framer-motion";
import ExploreCarCard from "./ExploreCarCard";

const CarsGrid = ({ cars }) => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <AnimatePresence mode="popLayout">
        {cars.map((car) => (
          <motion.div
            key={car._id}
            layout
            initial={{ opacity: 0, y: 25, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{ duration: 0.25 }}
          >
            <ExploreCarCard car={car} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default CarsGrid;
