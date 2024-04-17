import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  const todos = await prisma.todo.findMany();

  return NextResponse.json(todos);
}

export async function POST(request: NextRequest) {
  const { title } = await request.json();

  await prisma.todo.create({
    data: {
      title,
    },
  });

  return NextResponse.json({ success: true });
}
