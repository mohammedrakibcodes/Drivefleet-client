"use client";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const SortDropdown = ({ sortBy, setSortBy }) => {
  return (
    <Select value={sortBy} onValueChange={setSortBy}>
      <SelectTrigger className="h-12 w-[220px] rounded-xl border border-slate-300 bg-white px-4 dark:border-slate-700 dark:bg-slate-900 dark:text-white">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>

      <SelectContent className="rounded-xl">
        <SelectItem value="newest">Newest</SelectItem>
        <SelectItem value="low">Price: Low to High</SelectItem>
        <SelectItem value="high">Price: High to Low</SelectItem>
        <SelectItem value="booked">Most Booked</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SortDropdown;
