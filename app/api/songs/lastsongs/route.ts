import { jsonResponse } from "@/components/functions/Functions";
import prisma from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
      try {
        const response = await prisma.musics.findMany({
          orderBy:{
            createdAt:"desc"
          },
        //   skip: 0,
        //   take: 8,
        });
  
        return new NextResponse(jsonResponse(response),{status:200})
      } catch (error) {
        console.error("Request Failed : ",error);
      }
    };