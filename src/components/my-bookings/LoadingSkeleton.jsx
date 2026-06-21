import { Skeleton } from "@heroui/react";

const LoadingSkeleton = () => {
  return (
    <section className="min-h-screen bg-slate-50 py-20 dark:bg-slate-950">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <Skeleton
              animationType="pulse"
              className="h-48 w-full rounded-2xl"
            />

            <div className="mt-4 space-y-3">
              <Skeleton
                animationType="pulse"
                className="h-4 w-2/3 rounded-lg"
              />

              <Skeleton
                animationType="pulse"
                className="h-3 w-5/6 rounded-lg"
              />

              <Skeleton
                animationType="pulse"
                className="h-3 w-4/6 rounded-lg"
              />
            </div>

            <div className="mt-6">
              <Skeleton
                animationType="pulse"
                className="h-10 w-full rounded-xl"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LoadingSkeleton;
