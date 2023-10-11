import Image from "next/image"
import {inter} from "@/app/api/util";

export default function Profile(){
    return(
        <>
            <div className="grid grid-cols-1 md:grid-cols-2  md:items-center justify-center min-h-[60vh]">
                <div className="flex-col grow bg-red-500 my-10 m-auto  ">
                    <Image
                        src="/logo2.png"
                        height={100}
                        width={370}
                        quality={50}
                        alt="Hero"
                        className="object-contain w-auto h-auto"
                    />
                </div>
                <div className="flex-col grow bg-red-500 text-center md:text-left ">
                    <h2 className={`h2 bg-blue-500 justify-center mb-8`}>
                        Leading Manufacturer and exporter coconut charcoal briquettes
                    </h2>
                    <p className={`${inter.className} text-md mr-4 mb-8`}>
                        CV. Fillo Briquettes is a charcoal briquette factory which is one of the leading suppliers and exporters of coconut charcoal briquettes. Our factory is located in Boyolali, Central Java – Indonesia. We have 2 main types of charcoal briquettes for Shisa, Hookah and Barbeque with any grade and requirements
                        <br/><br/>
                        We are committed to delivering the highest quality products from raw materials, processes, production to packaging for a sustainable business and long term relationship
                    </p>

                    <ul>
                        <li>
                            100% Coconut shell materials
                        </li>
                        <li>
                            Smokeless, odorless, low ash content
                        </li>
                        <li>
                            Long burning time, quick ignition time
                        </li>
                    </ul>
                    <button className="btn my-8 text-white bg-blue-600 hover:bg-blue-700">
                        Know More
                    </button>

                </div>
            </div>
        </>
    )
}
