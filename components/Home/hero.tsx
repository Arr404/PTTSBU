import Image from "next/image";
import Background from "@/public/img/bg1.webp";
import Link from "next/link";
import {inter} from "@/app/api/util";

import bg1 from "@/public/img/bg1.webp"
import bg2 from "@/public/img/bg2.webp"
import bg3 from "@/public/img/bg3.webp"
const bgImage:string[] = [
    bg1,
    bg2,
    bg3
]
function Hero() {
    return (
        <section className="min-w-full p-12 pt-28 md:p-6 relative min-h-[110vh] flex flex-col md:flex-row pl-16 md:pl-32 md:items-center">
            <Image
                src={bgImage[Math.floor(Math.random() * (bgImage.length))]}
                alt="Hero Login Image"
                fill
                className="z-[-1] object-cover max-h-screen"
                sizes="{(max-width: 768px) 768px, (max-width: 1440px) 1440px, 100vw}"
                priority={true}
                placeholder="blur"
                quality={50}
            />
            <div className=" px-9 py-16 ring-slate-200/70 rounded-[25px] bg-gradient-to-tr from-[#ccc3] to-[#ccca] backdrop-blur-sm">
                <h4
                    className={`text-slate-300 md:text-xl text-lg py-2 font-bold bg-gradient-to-r from-[#ffffffdb] to-[#FFF] text-transparent bg-clip-text ${inter.className}`}
                >
                    PREMIUM EXPORT QUALITY </h4>
                <h1
                    className={`md:text-6xl text-5xl py-2 font-extrabold bg-gradient-to-r from-[#ffffffdb] to-[#FFF] text-transparent bg-clip-text ${inter.className}`}
                >
                    The{" "}

                    Briquettes
                </h1>
                <div className="md:max-w-[50%] antialiased drop-shadow-xl">
                    <Link href="/register">
                        <button
                            className={`mt-6 px-6 py-2 rounded-lg text-xl text-orange-50 font-bold bg-[#FFA31D] ${inter.className} hover:text-white hover:bg-orange-400 hover:translate-x-1 transition-all duration-300`}
                        >
                            <span className="drop-shadow-md">About Us!</span>
                        </button>
                    </Link>
                </div>
            </div>


        </section>
    );
}

export default Hero;
