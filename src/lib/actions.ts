"use server";

import { revalidateTag } from "next/cache";

import { prisma } from "./prisma";

export async function addTodo(formData: FormData) {
  const title = formData.get("title");

  try {
    await prisma.todo.create({
      data: {
        title: title as string,
      },
    });

    return { success: true };
  } catch (error) {
    return { success: false, error };
  } finally {
    revalidateTag("todos");
  }
}

export async function toggleTodoStatus(todoId: string, completed = false) {
  try {
    await prisma.todo.update({
      where: { id: todoId },
      data: {
        completed,
      },
    });

    return { success: true };
  } catch (error) {
    return { success: false, error };
  } finally {
    revalidateTag("todos");
  }
}
