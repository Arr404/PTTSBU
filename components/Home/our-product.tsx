import {inter} from "@/app/api/util";
import Image from "next/image";
import logo from "@/public/vercel.svg";

export default function OurProduct() {
    return(
        <>
            <div className={`text-center bg-red-500`}>
                <h2 className={`h2 mb-4 bg-blue-500`}>Our Product</h2>
                <div className="flex justify-center flex-row">
                    <p className={`text-5xl`}>A</p>
                    <p className={` max-w-screen-md text-justify`}>
                        ny type of our Coconut Charcoal Briquettes.
                        Our product made from coconut shell as the raw material.
                        As a totally natural and eco-friendly. Resulting in eco-friendly briquettes,
                        that are free from chemicals and toxic
                    </p>
                </div>

                <div className="flex flex-wrap justify-center">
                    <div className="m-8">
                        <Image
                            src={logo}
                            alt="Product"
                            className=""
                            priority={true}
                            quality={50}
                        />
                        <h4 className="h4">
                            Cube
                        </h4>
                    </div>
                    <div className="m-8">
                        <Image
                            src={logo}
                            alt="Product"
                            className=""
                            priority={true}
                            quality={50}
                        />
                        <h4 className="h4">
                            Cube
                        </h4>
                    </div>
                    <div className="m-8">
                        <Image
                            src={logo}
                            alt="Product"
                            className=""
                            priority={true}
                            quality={50}
                        />
                        <h4 className="h4">
                            Cube
                        </h4>
                    </div>
                    <div className="m-8">
                        <Image
                            src={logo}
                            alt="Product"
                            className=""
                            priority={true}
                            quality={50}
                        />
                        <h4 className="h4">
                            Cube
                        </h4>
                    </div>
                </div>
            </div>
        </>
    )
}
