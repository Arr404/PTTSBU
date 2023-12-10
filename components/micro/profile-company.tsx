import Image from "next/image";
import Backround from "@/public/img/Shipping1.jpg"
import {Separator} from "@/components/ui/separator";
import Logo from "@/components/ui/logo";
export default function ProfileCompany(
    props:
        {text:string}
) {
    return(
        <>
            <div className="grid max-xl:grid-rows-2 xl:grid-cols-2 content-center">
                <div className="mx-20">
                    <Image
                        className=" relative z-[-1]"
                        src="./shape/dot-for.svg"
                        height={300}
                        width={300}
                        alt={"wow"}/>

                    <div className="mt-[-12rem] ml-24 gap-4 border border-white border-4 flex flex-col w-[12rem] pt-[3rem] h-[12rem] bg-[#FFD646] text-center  text-white">
                        <h1 className="text-6xl font-bold">
                            2018
                        </h1>
                        <h5 className="h5">
                            Established
                        </h5>
                    </div>
                    <Image
                        src={Backround}
                        alt="No image"
                        className="relative object-cover top-[-10rem] md:top-[-16rem] left-[12rem] z-[-1]
                        max-w-[20rem] min-h-[16rem] md:max-w-[28rem] md:min-h-[24rem]"
                        priority={true}
                        quality={50}/>
                </div>
                <div className="mx-24 xl:mr-24">
                    <Logo className="w-24 h-24 my-10 m-auto"/>
                    <Separator className="mb-4"/>
                    <div className="w-full text-md text-justify text-gray-600">
                        <div dangerouslySetInnerHTML={{__html: props.text}}/>
                    </div>
                </div>
            </div>
        </>
    )
}
