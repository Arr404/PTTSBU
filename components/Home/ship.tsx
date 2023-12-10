import ResponsiveCarousel from "@/components/micro/carousel/responsive";

export default function Ship(){
    return(
        <>
            <div className="w-full mt-12">
                <div className="w-full py-10 flex items-center md:flex-row flex-col gap-8">
                    <div className="md:w-[50vw] w-[100vw] py-10 bg-[#FFD646] w-[50vw] flex flex-col items-center ">
                        <h1 className="h3 text-center ">
                            We Ship All Around The World
                        </h1>
                        <p className='md:px-0 px-10 mt-6 mb-10 md:w-6/12 w-12/12 text-grey-200 text-md text-center'>
                            Start Order Out Charcoal Now! You Can Send Us A Message via Whatsapp by Clicking The Button contact
                        </p>

                    </div>
                    <div className="flex flex-col md:mt-0 mt-[-3rem] items-center ml-[-3rem]">
                        <div className={"md:w-[50vw] w-full"}>
                            <ResponsiveCarousel option={"factory"} className={" max-h-[15.8rem] "} />
                        </div>
                        <button className="absolute btn my-24 text-black bg-[#FFD646] hover:text-white hover:bg-yellow-600">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
