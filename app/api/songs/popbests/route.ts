import { jsonResponse } from "@/components/functions/Functions";
import prisma from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
      const response = await prisma.musics.findMany({
        where: {
          genre: "پاپ",
        },
        orderBy: {
          visited: "desc",
        },
        // skip: 0,
        // take: 10,
      });
      return new NextResponse(jsonResponse(response));
    } catch (error) {
      console.error("Request Failed");
    }
  };