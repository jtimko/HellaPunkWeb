import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const prisma = new PrismaClient()

  const body = await req.json();

  const data = await prisma.user.update({
    where: {
        id: body.userId,
    },
    data: {
        name: body.name,
    }
  })
  return NextResponse.json(data);
};