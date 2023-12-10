import {inter} from "@/app/api/util";
import {Separator} from "@/components/ui/separator";
import {navbar} from "@/app/api/value";
import Link from "next/link";


export default function Footer  (){
    return (
        <>
            <footer className={`${inter.variable} bg-[#1C4225] font-inter antialiased  text-gray-900 tracking-tight px-20 pt-20 pb-8`}>
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
                            <a href="https:wa.me/628161166600" className="grow hover:text-white"> Phone : +628161166600 (Mr. Tommy Van Blora)</a>
                        </div>
                        <div className="mt-4 text-slate-300 flex flex-row">
                            <a href="https://www.google.com/maps/@-7.0953262,111.1403563,3a,75y,75.95h,75.77t/data=!3m6!1e1!3m4!1siyxD0x7gK0kwnczgXxaHRg!2e0!7i16384!8i8192?entry=ttu" className="grow hover:text-white">
                                Address :
                                Jalan Raya Nasional Blora - Purwodadi, Dsn. Semenrejo, <br/>Ds. Truwulo, Ngaringan,
                                Grobongan, Central Java, Indonesia (58193)
                            </a>
                        </div>
                        <div className="mt-4 text-slate-300 flex flex-row">
                            <a href="mailto:agilfuad@gmail.com" className="grow hover:text-white">
                                Email :
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
                        © 2023 Tani Solusi Berjaya Utama.
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

