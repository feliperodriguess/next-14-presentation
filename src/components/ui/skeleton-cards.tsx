import { Skeleton } from "./skeleton";

export function SkeletonCards() {
  return (
    <section className="space-y-20">
      <div className="flex flex-wrap justify-center gap-12 w-full">
        {Array.from({ length: 12 }).map(() => (
          <div key={Math.random()} className="space-y-2 max-w-[300px]">
            <Skeleton className="h-6 w-[40%]" />
            <Skeleton className="h-6 w-[50%]" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-[300px] w-[300px] border-2 border-pink-700 rounded-lg" />
          </div>
        ))}
      </div>
    </section>
  );
}
