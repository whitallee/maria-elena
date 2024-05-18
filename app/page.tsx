import Image from "next/image";
import { Montez, Dosis } from "next/font/google";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Link from "next/link";
import Gallery from "@/components/Gallery";
import Bio from "@/components/Bio";
import Marquee from "react-fast-marquee";
import CarouselComp from "@/components/CarouselComp";
import Footer from "@/components/Footer";


const montez = Montez({ subsets: ['latin'], weight: ['400'] });
const dosis = Dosis({ subsets: ['latin'], weight: ['400'] });


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between z-20 w-full">
      <CarouselComp/>
      <div className="w-2/3 flex justify-between text-xl sm:text-5xl py-2">
        <Link href={""}>Jewelry</Link>
        <Link href={""}>Clay Decorations</Link>
      </div>
      <div className="w-3/4 mb-6">
        <Gallery/>
        <Bio/>
      </div>
      <div className="bg-[var(--dark-purple)] text-[var(--light-tan)] w-full">
        <div className="bg-[var(--lighter-dark-purple)] text-2xl py-4 rounded-b-3xl">
          <Marquee autoFill={true} speed={65}>
            <p className="mx-16">⭐FREE SHIPPING⭐ on orders worth $50 or more!</p>
          </Marquee>
        </div>
        {/* <Footer/> */}
      </div>
    </main>
  );
}
