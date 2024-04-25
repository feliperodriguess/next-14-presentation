import { Suspense } from "react";

import { CharactersList } from "@/components/ui/characters-list";
import { SkeletonCards } from "@/components/ui/skeleton-cards";

export default async function CharactersPage() {
  return (
    <main className="flex min-h-screen flex-col gap-16 items-center p-24">
      <Suspense fallback={<SkeletonCards />}>
        <CharactersList />
      </Suspense>
    </main>
  );
}
