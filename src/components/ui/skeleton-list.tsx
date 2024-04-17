import { Skeleton } from "./skeleton";

export function SkeletonList() {
  return (
    <div className="space-y-3">
      <Skeleton className="h-4 w-[300px]" />
      <Skeleton className="h-4 w-[300px]" />
      <Skeleton className="h-4 w-[300px]" />
    </div>
  );
}
