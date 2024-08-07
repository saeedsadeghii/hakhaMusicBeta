import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

import { ToastContainer } from "react-toastify";
import Nav from "@/components/Nav";
import Provider from "@/components/providers/Provider";
import MusicPlayer from "@/components/musicPlayer/MusicPlayer";
import { Toaster, toast } from 'sonner'
import Footer from "@/components/footer/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hakha Music | هخا موزیک",
  description: "Developed By Hakha {SOON}...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <Provider>
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href={`/favicon/favicon.ico`} />
      </head>
        <body
          className={`${inter.className} body-gradient h-screen text-gray-300 overflow-hidden`}
        >
          <section className="body-glass h-full flex w-full" dir="rtl">
            <Sidebar />
            <main className="w-full md:px-5 pt-2 container-2xl mx-auto rounded-s-2xl relative flex flex-col article-glass gap-y-3">
            <Nav />
            {children}
            <Toaster richColors position="top-center" dir="rtl" className="font-yekan" theme={"dark"} closeButton/>
            <MusicPlayer/>
            </main>
          </section>
        </body>
    </html>
      </Provider>
  );
}
