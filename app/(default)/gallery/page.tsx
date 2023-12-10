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
        url:"/img/Gallery1.jpg",
        label:"Factory Front View"
    },
    {
        url:"/img/Gallery2.jpg",
        label:"Factory Front View"
    },
    {
        url:"/img/Gallery3.jpg",
        label:"Hardwood Charcoal"
    },
    {
        url:"/img/Gallery4.jpg",
        label:"Coconut Shell Charcoal"
    },
    {
        url:"/img/Gallery5.jpg",
        label:"Charcoal Burning Test"
    },
    {
        url:"/img/Gallery7.jpg",
        label:"Hookah Shisha with Briqquetes"
    },
    {
        url:"/img/Gallery8.jpg",
        label:"Charcoal Burning Test"
    },
    {
        url:"/img/Gallery9.jpg",
        label:"Factory Working Environment"
    },
    {
        url:"/img/Gallery10.jpg",
        label:"Inside the oven"
    },
    {
        url:"/img/Gallery14.jpg",
        label:"Workers Photos"
    },
    {
        url:"/img/Gallery15.jpg",
        label:"Workers Photos"
    }
    ,{
        url:"/img/Gallery18.jpg",
        label:"Factory Inside View"
    }
    ,{
        url:"/img/Gallery19.jpg",
        label:"Factory Inside View"
    }
    ,{
        url:"/img/Gallery21.jpg",
        label:"Cube Charcoal Briqquettes"
    },
    {
        url:"/img/Gallery22.jpg",
        label:"Factory Working Environment"
    },
    {
        url:"/img/Gallery23.jpg",
        label:"Factory Working Environment"
    },
    {
        url:"/img/Gallery24(1).jpg",
        label:"Factory Inside View"
    },
    {
        url:"/img/Gallery24.jpg",
        label:"Cube Charcoal Briqquettes"
    },
    {
        url:"/img/Gallery25.jpg",
        label:"Cube Charcoal Briqquettes"
    },
    {
        url:"/img/Gallery26.jpg",
        label:"Factory Working Environment"
    },
    {
        url:"/img/Gallery27.jpg",
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
