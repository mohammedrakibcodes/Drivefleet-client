import { SearchX } from "lucide-react";

const EmptyState = () => {
  return (
    <div className="py-28 text-center">
      <SearchX size={70} className="mx-auto text-red-700" />

      <h2 className="mt-6 text-3xl font-bold text-slate-900 dark:text-white">
        No Cars Found
      </h2>

      <p className="mt-3 text-slate-600 dark:text-slate-400">
        Try searching with another keyword or change the selected category.
      </p>
    </div>
  );
};

export default EmptyState;
