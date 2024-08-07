import prisma from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";
import React from "react";
export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const musics = await prisma.musics.findMany();
  const musicJSON = JSON.stringify(musics, (key, value) =>
    typeof value === "bigint" ? value.toString() : value
  );
  return new Response(musicJSON, { status: 200 });
}
export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { title, artist, ...otherData } = req.body;
    const newMusic = await prisma.musics.create({
      data: { title, artist, ...otherData },
    });
    return res.status(201).json(newMusic);
  } catch (error) {
    console.error("Error creating music:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
