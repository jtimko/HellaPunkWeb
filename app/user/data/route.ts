"use server";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const prisma = new PrismaClient()

  const body = await req.json();

  const data = await prisma.user.findFirst({
    where: {
        id: body.userId,
    },
    select: {
        id: true,
        email: true,
        name: true,
    }
  })
  return NextResponse.json(data);
};
