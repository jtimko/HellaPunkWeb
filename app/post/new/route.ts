import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const prisma = new PrismaClient()

    const body = await req.json();

    const userId = await prisma.user.findUnique({
        where: {
            email: body.email
        },
        select: {
            id: true
        }
    });

    if (!userId)
        return NextResponse.error();

    const data = await prisma.post.create({
        data: {
            title: body.title,
            message: body.message,
            updatedAt: new Date(),
            userId: userId.id
        }
    });
    return NextResponse.json(data);
};

