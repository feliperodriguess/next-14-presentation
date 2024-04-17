import { Todo } from "@prisma/client";

import { Checkbox } from ".";

export function TodosListOld({ todos }: { todos: Todo[] }) {
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
