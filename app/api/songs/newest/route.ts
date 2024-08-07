import { jsonResponse } from "@/components/functions/Functions";
import { authOptions } from "@/utils/auth";
import prisma from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(authOptions);
    try {
      if (session) {
        const user = await prisma.user.findFirst({
          where:{email:session.user?.email}
        })
      }
      const response = await prisma.musics.findMany({
        skip: 0,
        take: 8,
      });

      return new NextResponse(jsonResponse(response),{status:200})
    } catch (error) {
      // return res.status(200).json(response)
      // return new NextResponse(jsonResponse,{status:200})
      // return new Response(jsonResponse,{status:200})
      console.error("Request Failed : ",error);
    }
  };