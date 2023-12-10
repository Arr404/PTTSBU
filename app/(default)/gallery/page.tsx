'use client'
import Header from "@/components/ui/header";
import BackgroundGhost from "@/components/micro/background-ghost";
import Image from "next/image";
import Backround from "@/public/img/bg1.webp"
import Footer from "@/components/micro/footer";

interface galleryItem {
    url: string,
    label: string
}
const galleryItem:galleryItem[] =[
    {
        url:"/img/Gallery1.JPG",
        label:"Factory Front View"
    },
    {
        url:"/img/Gallery2.JPG",
        label:"Factory Front View"
    },
    {
        url:"/img/Gallery3.JPG",
        label:"Hardwood Charcoal"
    },
    {
        url:"/img/Gallery4.JPG",
        label:"Coconut Shell Charcoal"
    },
    {
        url:"/img/Gallery5.JPG",
        label:"Charcoal Burning Test"
    },
    {
        url:"/img/Gallery7.JPG",
        label:"Hookah Shisha with Briqquetes"
    },
    {
        url:"/img/Gallery8.JPG",
        label:"Charcoal Burning Test"
    },
    {
        url:"/img/Gallery9.JPG",
        label:"Factory Working Environment"
    },
    {
        url:"/img/Gallery10.JPG",
        label:"Inside the oven"
    },
    {
        url:"/img/Gallery14.JPG",
        label:"Workers Photos"
    },
    {
        url:"/img/Gallery15.JPG",
        label:"Workers Photos"
    }
    ,{
        url:"/img/Gallery18.JPG",
        label:"Factory Inside View"
    }
    ,{
        url:"/img/Gallery19.JPG",
        label:"Factory Inside View"
    }
    ,{
        url:"/img/Gallery21.JPG",
        label:"Cube Charcoal Briqquettes"
    },
    {
        url:"/img/Gallery22.JPG",
        label:"Factory Working Environment"
    },
    {
        url:"/img/Gallery23.JPG",
        label:"Factory Working Environment"
    },
    {
        url:"/img/Gallery24(1).JPG",
        label:"Factory Inside View"
    },
    {
        url:"/img/Gallery24.JPG",
        label:"Cube Charcoal Briqquettes"
    },
    {
        url:"/img/Gallery25.JPG",
        label:"Cube Charcoal Briqquettes"
    },
    {
        url:"/img/Gallery26.JPG",
        label:"Factory Working Environment"
    },
    {
        url:"/img/Gallery27.JPG",
        label:"Factory Working Environment"
    }
]

export default function Gallery() {
    return(
        <>
            <Header active={"gallery"}/>
            <BackgroundGhost/>

            <div className="flex mx-10 my-24 md:mx-24 flex-wrap md:gap-12  mt-[12rem] md:mt-[17rem]">
                {galleryItem.map((obj,index)=>(
                    <div className="m-4 ">
                        <Image
                            src={obj.url}
                            width={200}
                            height={50}
                            alt="No image"
                            className="object-cover w-[14rem] min-h-[10rem] md:max-w-[16rem] md:min-h-[16rem]"
                            priority={true}
                            quality={50}/>
                        <h5 className="text-sm md:h5 text-center">
                            {obj.label}
                        </h5>
                    </div>
                ))}

            </div>
            <Footer/>
        </>
    )
}
