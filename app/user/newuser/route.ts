import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const prisma = new PrismaClient()

  const body = await req.json();

  const data = await prisma.user.create({
    data: {
        email: body.email,
        name: "user" + Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000,
        type: "user",
    }
  });

  return NextResponse.json(data);
};