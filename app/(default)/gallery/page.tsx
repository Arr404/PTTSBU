'use client'
import Header from "@/components/ui/header";
import BackgroundGhost from "@/components/micro/background-ghost";
import Image from "next/image";
import Backround from "@/public/img/bg1.webp"
import Footer from "@/components/micro/footer";
export default function Gallery() {
    return(
        <>
            <Header active={"gallery"}/>
            <BackgroundGhost/>

            <div className="flex mx-10 my-24 md:mx-24 flex-wrap md:gap-12  mt-[12rem] md:mt-[17rem]">
                <div className="m-4 ">
                    <Image
                        src={Backround}
                        alt="No image"
                        className="object-cover max-w-[10rem] min-h-[10rem] md:max-w-[16rem] md:min-h-[16rem]"
                        priority={true}
                        quality={50}/>
                    <h5 className="text-sm md:h5 text-center">
                        Coconut Charcoal Briquettes
                    </h5>
                </div>
                <div className="m-4 ">
                    <Image
                        src={Backround}
                        alt="No image"
                        className="object-cover max-w-[10rem] min-h-[10rem] md:max-w-[16rem] md:min-h-[16rem]"
                        priority={true}
                        quality={50}/>
                    <h5 className="text-sm md:h5 text-center">
                        Coconut Charcoal Briquettes
                    </h5>
                </div>
                <div className="m-4 ">
                    <Image
                        src={Backround}
                        alt="No image"
                        className="object-cover max-w-[10rem] min-h-[10rem] md:max-w-[16rem] md:min-h-[16rem]"
                        priority={true}
                        quality={50}/>
                    <h5 className="text-sm md:h5 text-center">
                        Coconut Charcoal Briquettes
                    </h5>
                </div>

            </div>
            <Footer/>
        </>
    )
}
