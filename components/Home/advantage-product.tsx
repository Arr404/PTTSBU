import {inter} from "@/app/api/util";
import Image from "next/image";
import logo from "@/public/vercel.svg";
import {Separator} from "@/components/ui/separator";

export default function AdvantageProduct() {
    return(
        <>
            <div className={`text-center mt-10`}>
                <p className={`${inter.className} text-slate-500 text-md font-bold`}>100% COCONUT SHELL MATERIALS</p>
                <h2 className={`h2 mb-4 `}>The Advantages Of Our Product</h2>
                <div className="flex flex-row gap-3 justify-center my-4 ">
                    <Separator className={"w-12 border-2 rounded-sm border-yellow-500"}/><Separator className={"w-2 border-2 rounded-sm border-yellow-500"}/>
                </div>
                <div className="flex justify-center flex-row">
                    <p className={`md:text-lg max-w-screen-sm text-center`}>
                        We Produce and delivery the best product of coconut charcoal briquettes
                        to around the world by using 100% coconut shell raw materials from
                        <br/>
                        <span className={`font-bold`}> Indonesia</span>
                    </p>
                </div>

                <div className="my-20 flex gap-[2rem] mx-20 flex-wrap justify-center">
                    {["Smoke Less","Odor Less","no spark",
                        "FREE CHEMICALS& TOXIC","ASH CONTENT","QUICK IGNITION TIME","100% COCONUT SHELL","LONG BURNING TIME",].map((obj,ind)=>(
                        <div key={ind} className="border-2 box pt-[5rem] w-[16rem] h-[12rem]">
                            <p className=" font-bold">
                                {obj.toUpperCase()}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
