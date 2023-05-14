import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const prisma = new PrismaClient()

  const {uid, email} = await req.json();

  const data = await prisma.user.create({
    data: {
        id: uid,
        email: email,
        name: "user" + Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000
    }
  })
  return NextResponse.json(data);
};