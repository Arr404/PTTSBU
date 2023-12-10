import Image from "next/image";
import Background from "@/public/background.webp"
import {AiFillInstagram,AiFillYoutube,AiFillFacebook} from "react-icons/ai"
import VideoThumb from '@/public/img/video_thumb.jpg'
import {Separator} from "@/components/ui/separator";
import ModalVideo from "@/components/micro/modal-video";
export default function OurHighlight(){
    return(
        <>
            <div>
                <h1 className="text-center h1 mt-20">
                    Our Highlights
                </h1>
                <div className="flex flex-row gap-3 justify-center my-4 ">
                     <Separator className={"w-12 border-2 rounded-sm border-[#1C4225]"}/><Separator className={"w-2 border-2 rounded-sm border-[#1C4225]"}/>
                </div>
                {/*<h4 className="text-center text-slate-400">*/}
                {/*    Getting close with our team and owner Briquettes*/}
                {/*</h4>*/}
                <div className={"mx-20 md:mx-0"}>
                    <ModalVideo
                        thumb={VideoThumb}
                        thumbWidth={768}
                        thumbHeight={432}
                        thumbAlt="Company Profile Video - PT Tani Solusi Berjaya Uta"
                        video="./video/Company_Profile_Video.mp4"
                        videoWidth={1920}
                        videoHeight={1080} />
                </div>
            </div>
        </>
    )
}
