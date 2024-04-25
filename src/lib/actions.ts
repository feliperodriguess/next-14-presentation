"use server";

import { revalidateTag } from "next/cache";

import { prisma } from "./prisma";
import { sleep } from "./utils";

export async function addTodo(formData: FormData) {
  await sleep();
  const title = formData.get("title");

  try {
    await prisma.todo.create({
      data: {
        title: title as string,
      },
    });

    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
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
