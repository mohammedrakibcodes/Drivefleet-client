import { Skeleton } from "@heroui/react";

export default function LoadingSkeletonPage() {
  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      <div className="rounded-xl border p-4 space-y-4">
        <Skeleton animationType="pulse" className="h-40 w-full rounded-lg" />

        <div className="space-y-2">
          <Skeleton animationType="pulse" className="h-4 w-2/3 rounded-lg" />
          <Skeleton animationType="pulse" className="h-3 w-5/6 rounded-lg" />
          <Skeleton animationType="pulse" className="h-3 w-4/6 rounded-lg" />
        </div>
      </div>

      <div className="space-y-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex gap-3 items-center">
            <Skeleton
              animationType="pulse"
              className="h-10 w-10 rounded-full"
            />
            <div className="flex-1 space-y-2">
              <Skeleton
                animationType="pulse"
                className="h-3 w-1/3 rounded-lg"
              />
              <Skeleton
                animationType="pulse"
                className="h-3 w-2/3 rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
