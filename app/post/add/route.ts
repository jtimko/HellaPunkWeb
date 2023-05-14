import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST (req: Request) {
  const prisma = new PrismaClient()

  const { userId, postId, comment } = await req.json();

  const data = await prisma.comments.create({
    data: {
        userId: userId,
        postId: postId,
        message: comment,
    }
  });

  const updatePost = await prisma.post.update({
    where: {
        id: postId
    }, 
    data: {
        updatedAt: new Date()
    }
  });

  if (data && updatePost)
    return NextResponse.json(data);
};

