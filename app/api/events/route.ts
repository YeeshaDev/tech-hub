import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const {
      title,
      description,
      date,
      location,
      price,
      totalTickets,
      imageUrl,
    } = await req.json();

    const event = await prisma.event.create({
      data: {
        title,
        description,
        date: new Date(date),
        location,
        price,
        totalTickets,
        imageUrl,
        organizerId: session.user.id,
      },
    });

    return NextResponse.json(event, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error creating event" },
      { status: 500 }
    );
  }
}