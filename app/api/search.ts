import prisma from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
      case "GET":
        return new Response(JSON.stringify({ message: 'Hello frommmm saeed(GET)!' }))
      case "POST":
        try {
          const {q:query} = req.query;
          console.log(query)
          const foundedData = prisma.musics.findMany({
            where:{
                OR:[
                    {
                        name:{
                            contains : query as string,
                            mode:'insensitive',
                        },
                    },
                    {
                        singer:{
                            contains: query as string,
                            mode:'insensitive',
                        }
                    }
                ],
            },
            include:{}
        })
          console.log(foundedData)
          return res.status(200).json(foundedData)
        } catch (error) {
          console.error(error);
          return res.status(500).json({ message: "خطای داخلی سرور" });
        }
        break;
    
      default:
        return res.status(500).json({ message: "خطای داخلی سروfffر" });
    }
  }
export {handler as POST , handler as GET}