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


const montez = Montez({ subsets: ['latin'], weight: ['400'] });
const dosis = Dosis({ subsets: ['latin'], weight: ['400'] });


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-16 z-20">
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
      <div className="w-3/4">
        <Gallery/>
        <Bio/>
      </div>
      {/* <div className={styles.milanInfo}>
        <img className={styles.bioPic} src="milan-bio.png"/>
        <p><span className={styles.name}> My name is Maria Elena Milan.</span><br/>
          I was born in Antigua, Guatemala, grew up in Austin, Texas, and learned design in Fort Collins, Colorado.<br/>
          I am thrilled to be sharing my creations with you. Please reach out if you have any desire for my commission artwork!</p>
      </div>
      <div className={styles.dealContainer}>
        <Marquee speed={65}>
          <p className={styles.deal}>⭐FREE SHIPPING⭐ on orders worth $50 or more!</p>
          <p className={styles.deal}>⭐FREE SHIPPING⭐ on orders worth $50 or more!</p>
          <p className={styles.deal}>⭐FREE SHIPPING⭐ on orders worth $50 or more!</p>
        </Marquee>
      </div>
      <div className={styles.contactInfo}>
        <div className={styles.leftColumn}>
          <h3>Mailing Address</h3>
          <p className={styles.address}>10301 Ranch Rd. 2222<br></br>Apt. # 1234<br></br>Austin, TX 78730</p>
        </div>
        <div className={styles.rightColumn}>
          <span>Email: <a href='mailto:mariaelenamilan00@gmail.com'>mariaelenamilan00@gmail.com</a></span>
          <span>Instagram: <a href='https://www.instagram.com/_elenamilan_/?hl=en'>@_elenamilan_</a></span>
          <a className={styles.faq} href='#'>Frequently Asked Questions</a>
        </div>
      </div> */}
    </main>
  );
}
