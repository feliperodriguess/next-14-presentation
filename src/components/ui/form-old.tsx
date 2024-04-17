"use client";

import { useState } from "react";
import { Todo } from "@prisma/client";

import { Button } from "./button";
import { Input } from "./input";

export function FormOld({ setTodos }: { setTodos: (todos: Todo[]) => void }) {
  const [inputText, setInputText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify({ title: inputText }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const newTodosResponse = await fetch("http://localhost:3000/api/todos");
    const newTodos = await newTodosResponse.json();
    setTodos(newTodos);

    setInputText("");
    setIsSubmitting(false);
  };

  return (
    <form className="my-16 space-y-4 w-[300px]" onSubmit={handleSubmit}>
      <Input
        name="title"
        placeholder="Write your todo..."
        required
        value={inputText}
        onChange={(event) => setInputText(event.target.value)}
      />
      <Button isLoading={isSubmitting} className="w-full" variant="secondary">
        Add
      </Button>
    </form>
  );
}
