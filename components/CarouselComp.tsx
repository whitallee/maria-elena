import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
import Image from "next/image";

export default function CarouselComp(){
    return(
        // Autoplay() function moved to carousel.tsx
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
    );
};