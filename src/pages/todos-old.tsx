import { useState } from "react";
import { Todo } from "@prisma/client";
import superjson from "superjson";

import { FormOld } from "@/components/ui/form-old";
import { TodosListOld } from "@/components/ui/todos-list-old";
import { prisma } from "@/lib/prisma";

export default function TodosPageOld({
  todos: initialTodos,
}: {
  todos: Todo[];
}) {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 w-full">
      <h1 className="mb-4 text-2xl">Todos Page (Old Version)</h1>
      <FormOld setTodos={setTodos} />
      <TodosListOld todos={todos} />
    </main>
  );
}

export async function getServerSideProps() {
  const todos = await prisma.todo.findMany();

  const serializedTodos = superjson.serialize(todos);

  return { props: { todos: serializedTodos.json } };
}
