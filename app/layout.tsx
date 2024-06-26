import type { Metadata } from "next";
import { Dosis, Montez } from "next/font/google";
import "./globals.css";
import TopNav from "@/components/TopNav";

import { ClerkProvider } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import Footer from "@/components/Footer";

const dosis = Dosis({ subsets: ['latin'], weight: ['400'] });
const montez = Montez({ subsets: ['latin'], weight: ['400'] });

export const metadata: Metadata = {
  title: "Maria Elena by Milan Creations",
  description: "A Jewelry and Decor Collection",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //const user = await currentUser();
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={dosis.className + " bg-[var(--light-tan)] text-[var(--dark-purple)] flex flex-col items-center"}>
          <TopNav/>
          <h1 className={montez.className + " lg:text-9xl md:text-7xl text-6xl flex flex-col items-center justify-center pb-4 pt-16"}>Maria Elena<br/><span className={dosis.className + " text-2xl"}>by Milan Creations</span></h1>
          {children}
        </body>
        <Footer/>
      </html>
    </ClerkProvider>
  );
}
