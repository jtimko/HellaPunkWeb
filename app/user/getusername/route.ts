import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const prisma = new PrismaClient()
    const body = await req.json();

    const resp = await prisma.user.findUnique({
        where: {
            email: body.email,
        },
        select: {
            name: true,
        }
    });

    return NextResponse.json(resp);
}