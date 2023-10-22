import Image from "next/image";
import Background from "@/public/background.webp"
import {AiFillInstagram,AiFillYoutube,AiFillFacebook} from "react-icons/ai"
import {Separator} from "@/components/ui/separator";
export default function OurTeam(){
    return(
        <>
            <div>
                <h1 className="text-center h1 mt-20">
                    Our Team
                </h1>
                <div className="flex flex-row gap-3 justify-center my-4 ">
                    <Separator className={"w-12 border-2 rounded-sm border-yellow-500"}/><Separator className={"w-2 border-2 rounded-sm border-yellow-500"}/>
                </div>
                <h4 className="text-center text-slate-400">
                    Getting close with our team and owner Briquettes
                </h4>
                <div className="flex flex-wrap items-center">
                    <div className="team-box relative  mx-8 mt-8 w-[32rem] h-[32rem]">
                        <Image
                            src={Background}
                            alt="Hero Login Image"
                            fill
                            className="object-cover"
                            sizes="{(max-width: 768px) 768px, (max-width: 1440px) 1440px, 100vw}"
                            priority={true}
                            placeholder="blur"
                            quality={50}
                        />
                        <div className="team-gradient text-white absolute inset-x-0 text-center bottom-0
                                        bg-gradient-to-b from-transparent to-gray-800
                                        pt-24 pb-14">

                            <div className="display team-social">
                                <h4 className="h4 ">
                                    Agil Fuad Gumelars
                                </h4>
                                <div className="flex flex-row justify-center ">
                                    <a href="./" className="bg-white rounded-full p-4 m-3.5">
                                        <AiFillInstagram className="text-4xl text-slate-700" />
                                    </a>
                                    <a href="./" className="bg-white rounded-full p-4 m-3.5">
                                        <AiFillFacebook className="text-4xl text-slate-700" />
                                    </a>
                                    <a href="./" className="bg-white rounded-full p-4 m-3.5">
                                        <AiFillYoutube className="text-4xl text-slate-700" />
                                    </a>
                                </div>
                            </div>

                            <div className="team-name">
                                <h4 className="h6 ">
                                    Agil Fuad Gumelar
                                </h4>
                                <p>
                                    Owner
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
