import {inter} from "@/app/api/util";
import Image from "next/image";
import cube from "@/public/shape/cube.svg";
import finger from "@/public/shape/finger.svg";
import flat from "@/public/shape/flat.png";
import hexagon from "@/public/shape/hexagon.svg";

export default function OurProduct() {
    return(
        <>
            <div className={`text-center mt-18 md:mt-28`}>
                <h2 className={`h2 mb-4 `}>Our Product</h2>
                <div className="flex justify-center flex-row">
                    <p className={`text-5xl bg-yellow-500 px-2 pt-2 mr-2 text-white`}>A</p>
                    <p className={` max-w-screen-sm text-justify`}>
                        ny type of our Coconut Charcoal Briquettes.
                        Our product made from coconut shell as the raw material.
                        As a totally natural and eco-friendly. Resulting in eco-friendly briquettes,
                        that are free from chemicals and toxic
                    </p>
                </div>

                <div className="mt-12 flex flex-wrap md:gap-28 gap-12">
                    <div className="m-8 grid grid-rows-2">
                        <Image
                            src={cube}
                            alt="Product"
                            height={100}
                            width={100}
                            priority={true}
                            quality={50}
                        />
                        <h4 className="h4">
                            Cube
                        </h4>
                    </div>
                    <div className="m-8 grid grid-rows-2">
                        <Image
                            src={flat}
                            alt="Product"
                            className="w-[100px] mt-6 h-[50px] object-fill"
                            priority={true}
                            quality={50}
                        />
                        <h4 className="h4">
                            Flat
                        </h4>
                    </div>
                    <div className="m-8 align-center justify-center grid grid-rows-2">
                        <Image
                            src={finger}
                            alt="Product"
                            className="w-20 h-20"
                            priority={true}
                            quality={50}
                        />
                        <h4 className="h4">
                            Finger
                        </h4>
                    </div>
                    <div className="m-8 align-center justify-center grid grid-rows-2">
                        <Image
                            src={hexagon}
                            alt="Product"
                            className="w-20 h-20"
                            priority={true}
                            quality={50}
                        />
                        <h4 className="h4">
                            Hexagon
                        </h4>
                    </div>
                </div>
            </div>
        </>
    )
}
