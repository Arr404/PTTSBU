import {inter} from "@/app/api/util";
import Image from "next/image";
import logo from "@/public/vercel.svg";

export default function AdvantageProduct() {
    return(
        <>
            <div className={`text-center bg-red-500 mt-10`}>
                <p className={`${inter.className} text-slate-500 text-md font-bold`}>100% COCONUT SHELL MATERIALS</p>
                <h2 className={`h2 mb-4 bg-blue-500`}>The Advantages Of Our Product</h2>
                <div className="flex justify-center flex-row">
                    <p className={`md:text-lg max-w-screen-sm text-center`}>
                        We Produce and delivery the best product of coconut charcoal briquettes
                        to around the world by using 100% coconut shell raw materials from
                        <span className={`font-bold`}> Indonesia</span>
                    </p>
                </div>

                <div className="flex flex-wrap justify-center">
                    {["cube","cube","cube","cube","cube","cube","cube","cube",].map((obj,ind)=>(
                        <div key={ind} className="box my-8 mx-16 pt-[4rem] w-[12rem] h-[10rem]">
                            <p className="text-xl font-bold">
                                {obj}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
