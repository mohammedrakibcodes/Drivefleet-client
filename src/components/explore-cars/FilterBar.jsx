const categories = [
  "All",
  "SUV",
  "Luxury SUV",
  "Luxury Sedan",
  "Sedan",
  "Sports",
  "Sports Coupe",
  "Supercar",
  "Pickup",
  "MPV",
  "Hatchback",
];

const FilterBar = ({ activeFilter, setActiveFilter }) => {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveFilter(category)}
          className={`rounded-full px-5 py-2 font-medium transition ${
            activeFilter === category
              ? "bg-blue-600 text-white"
              : "border border-slate-300 bg-white hover:border-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
