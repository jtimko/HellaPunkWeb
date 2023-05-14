import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const prisma = new PrismaClient()

  const {userId, name} = await req.json();

  const data = await prisma.user.update({
    where: {
        id: userId,
    },
    data: {
        name: name,
    }
  })
  return NextResponse.json(data);
};