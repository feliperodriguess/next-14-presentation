import { Suspense } from "react";

import { FormNew } from "@/components/ui/form-new";
import { SkeletonList } from "@/components/ui/skeleton-list";
import { TodosListNew } from "@/components/ui/todos-list-new";

export default async function TodosPageNew() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 w-full">
      <h1 className="text-2xl">Todos Page (New Version)</h1>
      <FormNew />
      <Suspense fallback={<SkeletonList />}>
        <TodosListNew />
      </Suspense>
    </main>
  );
}
