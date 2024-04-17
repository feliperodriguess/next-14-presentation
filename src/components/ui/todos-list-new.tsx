import { Todo } from "@prisma/client";

import { Checkbox } from "./checkbox";

export async function TodosListNew() {
  const response = await fetch("http://localhost:3000/api/todos", {
    cache: "no-store",
    // next: {
    //   revalidate: 30,
    //   tags: ["todos"],
    // },
  });
  const todos = (await response.json()) as Todo[];

  return (
    <ul className="flex flex-col gap-4 font-semibold w-[300px]">
      {todos.map((todo) => (
        <li className="flex items-center gap-3" key={todo.id}>
          <Checkbox id={todo.id} />
          <label htmlFor={todo.id} className="checkbox-label">
            {todo.title}
          </label>
        </li>
      ))}
    </ul>
  );
}
