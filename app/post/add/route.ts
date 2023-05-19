import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const prisma = new PrismaClient();

  const body = await req.json();

  const userId = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
    select: {
      id: true,
    },
  });

  if (!userId) return NextResponse.error();

  const data = await prisma.comments.create({
    data: {
      userId: userId!.id,
      postId: body.postId,
      message: body.message,
    },
  });

  const updatePost = await prisma.post.update({
    where: {
      id: body.postId,
    },
    data: {
      updatedAt: new Date(),
    },
  });

  if (data && updatePost) return NextResponse.json(data);
}
