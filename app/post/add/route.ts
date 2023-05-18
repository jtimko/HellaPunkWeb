import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST (req: Request) {
  const prisma = new PrismaClient()

  const body = await req.json();

  const data = await prisma.comments.create({
    data: {
        userId: body.userId,
        postId: body.postId,
        message: body.comment,
    }
  });

  const updatePost = await prisma.post.update({
    where: {
        id: body.postId
    }, 
    data: {
        updatedAt: new Date()
    }
  });

  if (data && updatePost)
    return NextResponse.json(data);
};

