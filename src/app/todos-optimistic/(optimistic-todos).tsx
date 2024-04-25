"use client";

import { useOptimistic, useRef } from "react";
import { Todo } from "@prisma/client";

import { Button, Checkbox, Input } from "@/components/ui";
import { addTodo } from "@/lib/actions";

export default function OptimisticTodos({ todos }: { todos: Todo[] }) {
  const [optimisticTodos, addOptimisticTodo] = useOptimistic(
    todos,
    (state, newTodo: Todo) => {
      return [...state, newTodo];
    }
  );
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <>
      <form
        ref={formRef}
        className="my-16 space-y-4 w-[300px]"
        action={async (formData) => {
          const title = formData.get("title") as string;

          addOptimisticTodo({
            id: Math.random().toString(),
            title,
            completed: false,
            createdAt: new Date(),
            updatedAt: new Date(),
          });

          formRef.current?.reset();

          await addTodo(formData);
        }}
      >
        <Input name="title" placeholder="Write your todo..." required />
        <Button className="w-full" variant="secondary">
          Add
        </Button>
      </form>

      <ul className="flex flex-col gap-4 font-semibold w-[300px]">
        {optimisticTodos.map((todo) => (
          <li className="flex items-center gap-3" key={todo.id}>
            <Checkbox id={todo.id} />
            <label htmlFor={todo.id} className="checkbox-label">
              {todo.title}
            </label>
          </li>
        ))}
      </ul>
    </>
  );
}
