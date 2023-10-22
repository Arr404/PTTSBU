export default function OurCertificate(){
    return(
        <>
            <div className="w-full mt-12">
                <div className="w-full py-10 flex max-xl:bg-blue-800 items-center flex-col gap-8 xl:flex-row ">
                    <div className="xl:py-10 bg-blue-800 flex flex-col w-[55vw] items-center xl:skew-x-[20deg] ml-[-3rem]">
                        <h1 className="h3 text-white text-center xl:skew-x-[-20deg]">
                            Our Certificate
                        </h1>
                        <p className='mt-6 mb-10 w-7/12 text-slate-200 text-center xl:skew-x-[-20deg]'>
                            Our factories operate under official licenses,
                            in addition to certifications for factories and products
                        </p>
                    </div>
                    <div className="max-xl: flex flex-row gap-10">
                        <img className="max-w-[12rem]" src="./logo2.png" alt="eror"/>
                        <img className="max-w-[12rem]" src="./logo2.png" alt="eror"/>

                    </div>
                </div>
            </div>
        </>
    )
}
