import { Skeleton } from "@heroui/react";

export default function LoadingSkeletonPage() {
  return (
    <div className="grid gap-10 lg:grid-cols-3 p-6 max-w-5xl mx-auto">
      <div className="lg:col-span-2 space-y-6">
        <div className="rounded-xl border p-4 space-y-4">
          <Skeleton animationType="pulse" className="h-40 w-full rounded-lg" />

          <div className="space-y-2">
            <Skeleton animationType="pulse" className="h-4 w-2/3 rounded-lg" />
            <Skeleton animationType="pulse" className="h-3 w-full rounded-lg" />
          </div>
        </div>

        <div className="space-y-3">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-3 items-center">
              <Skeleton
                animationType="pulse"
                className="h-10 w-10 rounded-full"
              />
              <Skeleton
                animationType="pulse"
                className="h-3 w-2/3 rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl border p-4 space-y-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="flex gap-3 items-center">
            <Skeleton
              animationType="pulse"
              className="h-10 w-10 rounded-full"
            />
            <Skeleton animationType="pulse" className="h-3 w-2/3 rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
}
