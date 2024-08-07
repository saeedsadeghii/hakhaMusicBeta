import GithubProvider from "next-auth/providers/github"
import GoogleProvider from 'next-auth/providers/google'
import EmailProvider from "next-auth/providers/email";
import SpotifyProvider from 'next-auth/providers/spotify'
import { NextAuthOptions } from 'next-auth';
import prisma from "./db";
import { PrismaAdapter } from "@auth/prisma-adapter";
import type { Adapter } from "next-auth/adapters";
export const authOptions = {
    adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
        clientId:process.env.GOOGLE_ID as string,
        clientSecret:process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    EmailProvider({
        server: {
          host: process.env.EMAIL_SERVER_HOST,
          port: process.env.EMAIL_SERVER_PORT,
          auth: {
            user: process.env.EMAIL_SERVER_USER,
            pass: process.env.EMAIL_SERVER_PASSWORD
          }
        },
        from: process.env.EMAIL_FROM
      }),
      SpotifyProvider({
        clientId: process.env.SPOTIFY_CLIENT_ID as string,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string
      })
  ],
} satisfies NextAuthOptions
