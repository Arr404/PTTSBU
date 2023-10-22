import {inter} from "@/app/api/util";
import {Separator} from "@/components/ui/separator";
import {navbar} from "@/app/api/value";
import Link from "next/link";


export default function Footer  (){
    return (
        <>
            <footer className={`${inter.variable} bg-blue-800 font-inter antialiased  text-gray-900 tracking-tight px-20 pt-20 pb-8`}>
                <div className="flex flex-col align-center md:flex-row m-auto min-w-full h-2/5">
                    <div className="grow">
                        <h2 className="text-xl text-white font-bold">Working Hours</h2>
                            <Separator className="my-6 bg-slate-300"/>
                        <div className="text-slate-300 flex flex-row">
                            <p className="grow">Mon - Sat : </p>
                            <p> 8.00 - 17.00</p>
                        </div>
                        <div className="mt-3 text-slate-300 flex flex-row">
                            <p className="grow">Sunday : </p>
                            <p> Closed</p>
                        </div>
                    </div>
                    <div className="grow mt-10 md:mt-0 md:ml-10">
                        <h2 className="text-xl text-white font-bold">Office</h2>
                        <Separator className="my-6 bg-slate-300"/>
                        <div className="text-slate-300 flex flex-row">
                            <a href="https:wa.me/6281235358908" className="grow hover:text-white"> Office : +62812-3535-8908</a>
                        </div>
                        <div className="mt-4 text-slate-300 flex flex-row">
                            <a href="https:wa.me/6281235358908" className="grow hover:text-white"> Owner : +62822-4593-4783</a>
                        </div>
                        <div className="mt-4 text-slate-300 flex flex-row">
                            <a href="https:wa.me/6281235358908" className="grow hover:text-white">
                                Address :
                                JL. Simo-Klego Km 3. <br/>Ds. Kedung Lengkong, Simo, Boyolali, Central Java 57377
                            </a>
                        </div>
                        <div className="mt-4 text-slate-300 flex flex-row">
                            <a href="mailto:agilfuad@gmail.com" className="grow hover:text-white">
                                Email : contact@indobriquettes.com
                            </a>
                        </div>
                    </div>
                    <div className="grow text-lg mt-10 md:mt-0 md:ml-10">
                        <h2 className="text-xl text-white font-bold">Our Blog</h2>
                        <Separator className="my-6 bg-slate-300"/>
                        <div className="mt-4 text-slate-200 flex flex-row">
                            <a href="./how-to-test-shisha-briquettes" className="grow hover:text-white">
                                How to test Shisha Briquettes
                            </a>
                        </div>
                        <div className="mt-4 text-slate-200 flex flex-row">
                            <a href="./how-to-test-shisha-briquettes" className="grow hover:text-white">
                                How to test Shisha Briquettes
                            </a>
                        </div>
                        <div className="mt-4 text-slate-200 flex flex-row">
                            <a href="./how-to-test-shisha-briquettes" className="grow hover:text-white">
                                How to test Shisha Briquettes
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row mt-16 text-white">
                    <div className="grow">
                        © 2023 Fillo Briquettes.
                    </div>
                    {navbar.map((object, index) => (
                        <div key={index}>
                            <Link
                                href={"/"+object.link}
                                className={` font-medium hover:text-gray-900 px-5 flex items-center transition duration-150 ease-in-out`}
                            >
                                {object.name}
                            </Link>
                        </div>
                    ))}

                </div>
            </footer>
        </>
    )
}

