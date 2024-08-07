import { jsonResponse } from "@/components/functions/Functions";
import prisma from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
      const response = await prisma.albums.findMany({
        skip: 0,
        take: 5,
        orderBy:{year:"desc"}
      });
      return new NextResponse(jsonResponse(response),{status:200});
    } catch (error) {
      console.error("Request Failed");
    }
  };