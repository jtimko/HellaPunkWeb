import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET (req: Request) {
  const prisma = new PrismaClient()

  const examples = await prisma.post.findMany({
    select: {
      id: true,
      title: true, 
      updatedAt: true,
      user: {
        select: {
          name: true,
          image: true,
        }
      },
      _count: {
        select: {
          comments: true
        }
      }
    },
    where: {
      isDeleted: false,
    },
    orderBy: {
        updatedAt: "desc"
    }
  });
  return NextResponse.json(examples);
};
