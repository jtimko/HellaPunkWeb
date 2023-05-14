import { PrismaClient } from '@prisma/client';
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const prisma = new PrismaClient();
  const {id} = await req.json();

  const examples = await prisma.post.findFirst({
    where: {
        id: id,
    },
    select: {
      comments: {
        where: {
          isDeleted: false,
        },
        select: {
          id: true,
          message: true,
          createdAt: true,
          user: {
            select: {
              name: true,
              image: true,
            }
          }
        },
        orderBy: {
          createdAt: "asc"
        }
      }
    },
  });
  
  return NextResponse.json(examples);
};
