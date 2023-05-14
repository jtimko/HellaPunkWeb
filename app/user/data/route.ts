"use server";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const prisma = new PrismaClient()

  const {userId} = await req.json();

  const data = await prisma.user.findFirst({
    where: {
        id: userId,
    },
    select: {
        id: true,
        email: true,
        name: true,
    }
  })
  return NextResponse.json(data);
};
