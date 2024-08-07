import { jsonResponse } from "@/components/functions/Functions";
import prisma from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
      const response = await prisma.playlist.findMany();
      return new NextResponse(jsonResponse(response));
    } catch (error) {
      console.log(error);
    }
  };