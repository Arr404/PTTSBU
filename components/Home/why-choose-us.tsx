import Background from "@/public/background.webp";
import Image from "next/image";
import {BsCheckLg} from "react-icons/bs";
import {useRouter} from "next/navigation";

export default function WhyChooseUs() {
    const router = useRouter()
    return(
        <>
            <div className="mt-20 flex flex-col place-items-center xl:place-items-start justify-center xl:flex-row ">

                <div className="w-full xl:w-6/12 ">
                    <Image
                        src={Background}
                        alt="Hero Login Image"
                        className="object-cover xl:h-[80vh]"
                        sizes="{(max-width: 768px) 768px, (max-width: 1440px) 1440px, 100vw}"
                        priority={true}
                        placeholder="blur"
                        quality={50}
                    />

                </div>
                <div className="pb-10 text-center xl:mt-[20vh] absolute w-[80vw] xl:w-[30rem] h-[18rem] xl:h-[20rem] ring-slate-200/70 rounded-[10px] bg-gradient-to-tr from-[#ccfd] to-[#ccfa] backdrop-blur-sm">
                    <h3 className="h3 mt-8 font-semibold">
                        Why Choose Us
                    </h3>
                    <h3 className="h2 text-left px-10 py-6 " >
                        Great Quality For Briquettes Product & Sustainable Business
                    </h3>
                    <button onClick={()=> router.push("/contact")} className=" group relative btn overflow-hidden rounded-lg bg-white shadow">
                        <div className="absolute inset-0 w-3 bg-slate-800 transition-all duration-[250ms] ease-out group-hover:w-full"/>
                        <span className="relative text-black group-hover:text-white">Get Quote</span>
                    </button>

                </div>
                <div className="w-full xl:mt-[24vh] relative xl:w-6/12">
                    <ul className="mx-10 my-8 xl:m-0 xl:mr-10 xl:absolute xl:left-[16vw]">
                        <li className="flex flex-row  ">
                            <BsCheckLg className="rounded-full  p-0.5 m-1.5"/>
                            <span className="font-semibold tracking-tighter text-lg">
                                Reliability
                            </span>
                        </li>
                        <p className="ml-8 mb-8">Our products based on grade and requirement, We are committed to quality check our products from the raw matterials to the final products. </p>

                        <li className="flex flex-row  ">
                            <BsCheckLg className="rounded-full  p-0.5 m-1.5"/>
                            <span className="font-semibold tracking-tighter text-lg">
                                Reliability
                            </span>
                        </li>
                        <p className="ml-8">Our products based on grade and requirement, We are committed to quality check our products from the raw matterials to the final products. </p>
                    </ul>
                </div>
            </div>
        </>
    )
}
