import OptimisticTodos from "./(optimistic-todos)";

export default async function TodosOptimisticPage() {
  const response = await fetch("http://localhost:3000/api/todos", {
    next: {
      revalidate: 30,
      tags: ["todos"],
    },
  });
  const todos = await response.json();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 w-full">
      <h1 className="text-2xl">Todos Page (Optimistic UI)</h1>

      <OptimisticTodos todos={todos} />
    </main>
  );
}
