import Image from "next/image";

function MiniGallery({children}: {children: React.ReactNode}){
    return(
        <div className="w-full border-2 border-[var(--light-purple)] shadow-lg shadow-[var(--light-purple)] overflow-hidden rounded-[32px] p-4 flex gap-4 justify-between flex-col lg:flex-row">
            {children}
        </div>
    )
}

export default function Gallery(){
    return(
        <div className="w-full flex gap-4 justify-between mt-2">
            <MiniGallery>
                <Image priority={true} src='/EM_testImg1.jpeg' alt="gallery 1" width={144} height={100} className="aspect-[4/3] rounded-[16px]"/>
                <Image priority={true} src='/EM_testImg1.jpeg' alt="gallery 1" width={144} height={100} className="aspect-[4/3] rounded-[16px]"/>
                <Image priority={true} src='/EM_testImg1.jpeg' alt="gallery 1" width={144} height={100} className="aspect-[4/3] rounded-[16px]"/>
            </MiniGallery>
            <MiniGallery>
                <Image priority={true} src='/EM_testImg1.jpeg' alt="gallery 1" width={144} height={100} className="aspect-[4/3] rounded-[16px]"/>
                <Image priority={true} src='/EM_testImg1.jpeg' alt="gallery 1" width={144} height={100} className="aspect-[4/3] rounded-[16px]"/>
                <Image priority={true} src='/EM_testImg1.jpeg' alt="gallery 1" width={144} height={100} className="aspect-[4/3] rounded-[16px]"/>
            </MiniGallery>
        </div>
    );
};