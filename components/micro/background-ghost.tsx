'use client'
import Image from "next/image";
import {usePathname} from "next/navigation"

import bg1 from "@/public/img/bg1.webp"
import bg2 from "@/public/img/bg2.webp"
import bg3 from "@/public/img/bg3.webp"
const bgImage:string[] = [
    bg1,
    bg2,
    bg3
]
export default function BackgroundGhost() {
    const pathname = usePathname()
    return(
        <>
            <Image
                src={bgImage[Math.floor(Math.random() * (bgImage.length))]}
                alt="Hero Image"
                fill
                className="object-cover max-h-[22rem] md:max-h-[32rem] z-[-1]"
                sizes="{(max-width: 768px) 768px, (max-width: 1440px) 1440px, 100vw} "
                priority={true}
                placeholder="blur"
                quality={50}
            />
            <div className="flex my-[10rem] md:my-[15rem] gap-2 flex-col items-center">
                <h1 className="h1  text-white "> {pathname.slice(1,2).toUpperCase()+pathname.slice(2)}</h1>
                <h1 className="h4  text-white"><a href="/">Home</a> > {pathname.slice(1)} </h1>
            </div>
        </>
    )
}
