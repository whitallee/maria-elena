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


const montez = Montez({ subsets: ['latin'], weight: ['400'] });
const dosis = Dosis({ subsets: ['latin'], weight: ['400'] });


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between pt-16 z-20">
      <h1 className={montez.className + " text-9xl flex flex-col items-center justify-center pb-4"}>Maria Elena<br/><span className={dosis.className + " text-2xl"}>by Milan Creations</span></h1>
      {/* Autoplay() function moved to carousel.tsx */}
      <Carousel className="w-5/6" opts={{loop: true}}>
        <div className="overflow-hidden rounded-[32px]">  
          <CarouselContent className="-ml-0">
            <CarouselItem className="basis-1/3 pl-0"><Image priority={true} src='/EM_testImg1.jpeg' alt="image 1" width={600} height={600} className="aspect-square"/></CarouselItem>
            <CarouselItem className="basis-1/3 pl-0"><Image priority={true} src='/EM_testImg1.jpeg' alt="image 2" width={600} height={600} className="aspect-square"/></CarouselItem>
            <CarouselItem className="basis-1/3 pl-0"><Image priority={true} src='/EM_testImg1.jpeg' alt="image 3" width={600} height={600} className="aspect-square"/></CarouselItem>
            <CarouselItem className="basis-1/3 pl-0"><Image priority={true} src='/EM_testImg1.jpeg' alt="image 4" width={600} height={600} className="aspect-square"/></CarouselItem>
            <CarouselItem className="basis-1/3 pl-0"><Image priority={true} src='/EM_testImg1.jpeg' alt="image 5" width={600} height={600} className="aspect-square"/></CarouselItem>
            <CarouselItem className="basis-1/3 pl-0"><Image priority={true} src='/EM_testImg1.jpeg' alt="image 6" width={600} height={600} className="aspect-square"/></CarouselItem>
            <CarouselItem className="basis-1/3 pl-0"><Image priority={true} src='/EM_testImg1.jpeg' alt="image 7" width={600} height={600} className="aspect-square"/></CarouselItem>
            <CarouselItem className="basis-1/3 pl-0"><Image priority={true} src='/EM_testImg1.jpeg' alt="image 8" width={600} height={600} className="aspect-square"/></CarouselItem>
          </CarouselContent>
        </div>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="w-2/3 flex justify-between text-5xl py-2">
        <Link href={""}>Jewelry</Link>
        <Link href={""}>Clay Decorations</Link>
      </div>
      <div className="w-3/4 mb-6">
        <Gallery/>
        <Bio/>
      </div>
      <div className="bg-[var(--dark-purple)] text-[var(--light-tan)]">
        <div className="bg-[var(--lighter-dark-purple)] text-2xl py-4 rounded-b-3xl">
          <Marquee autoFill={true} speed={65}>
            <p className="mx-16">⭐FREE SHIPPING⭐ on orders worth $50 or more!</p>
          </Marquee>
        </div>
        <div className="flex w-full justify-center gap-16 py-4">
          <div className="text-center">
            <h3 className="font-semibold decoration-solid decoration-1 decoration-[var(--light-tan)]">Mailing Address</h3>
            <p className="">6789 Main Rd<br></br>PO Box #321<br></br>Austin, TX 78730</p>
          </div>
          <div className="flex flex-col justify-center">
            <span>Email: <a className="text-[var(--light-purple)]" href='mailto:mariaelenamilan00@gmail.com'>mariaelenamilan00@gmail.com</a></span>
            <span>Instagram: <a className="text-[var(--light-purple)]" href='https://www.instagram.com/_elenamilan_/?hl=en'>@_elenamilan_</a></span>
            <a className="text-[var(--light-purple)]" href='#'>Frequently Asked Questions</a>
          </div>
        </div>
      </div>
    </main>
  );
}
