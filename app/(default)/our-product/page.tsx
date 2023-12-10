'use client'
import Header from "@/components/ui/header";
import BackgroundGhost from "@/components/micro/background-ghost";
import Footer from "@/components/micro/footer";
import ProfileCompany from "@/components/micro/profile-company";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import Image from "next/image";
import Backround from "@/public/img/bg1.webp";

interface ourProductSpec {
    title: string;
    spec: { title: string, item: { specTitle: string, specDec: string }[] }[];
    image: { url: string, title: string }[];
}
export default function OurProduct() {
    const produc:ourProductSpec[] =[
        {
            title:"Shisha/Hookah Briquettes",
            spec:[
                {title:"Product Spesification",
                    item:[
                        {specTitle:"Moisture ",specDec:" : 5%"},
                        {specTitle:"Ash Content",specDec:": 2%"},
                        {specTitle:"Ash Color",specDec:" : White "},
                        {specTitle:"Fix Carbon",specDec:" : 85%"},
                        {specTitle:"Calorific value",specDec:" : 8000 Kcal"},
                        {specTitle:"Volatile matter",specDec:" : 10%"},
                        {specTitle:"Material ",specDec:" : Pure Natural Coconut Shell"},
                        {specTitle:"Burning Time",specDec:" : 2 Hours"},
                        {specTitle:"Size",specDec:" : Cube 2.2, Cube 2.5, Cube 2.6, Cube 2.7, Finger, Half Finger, Hexa, Kalaud (Can be customized) "},

                    ]},
            ],
            image:[
                {url:"/img/Shisha.jpg",title:"Tani Solusi Berjaya Utama"},

            ]
        },
        {
            title:"Barbecue Briquettes",
            spec:[
                {title:"Product Spesification",
                    item:[
                        {specTitle:"Moisture ",specDec:" : 5%"},
                        {specTitle:"Ash Content",specDec:": 4-10%"},
                        {specTitle:"Fix Carbon",specDec:" : 85%"},
                        {specTitle:"Calorific value",specDec:" : 8500 Kcal"},
                        {specTitle:"Volatile matter",specDec:" : 15%"},
                        {specTitle:"Material ",specDec:" : Coconut Shell and Hardwood"},
                        {specTitle:"Burning Time",specDec:" : 5 Hours"},

                    ]},
            ],
            image:[
                {url:"/img/BBq.jpg",title:"Tani Solusi Berjaya Utama"},
            ]
        },
        {
            title:"Hardwood/Lump Charcoal",
            spec:[
                {title:"Product Spesification",
                    item:[
                        {specTitle:"Shape",specDec:": Lump"},
                        {specTitle:"Size",specDec:" : 5-20 Cm"},
                        {specTitle:"Moisture ",specDec:" : Max 10%"},
                        {specTitle:"Colories",specDec:" : Min. 7800"},
                        {specTitle:"Burning Time",specDec:" : 3 Hours"},

                    ]},
            ],
            image:[
                {url:"/img/Hardwood.jpg",title:"Tani Solusi Berjaya Utama"},
            ]
        }
    ]
    return(
        <>
            <Header active={"our-product"}/>
            <BackgroundGhost/>

            <ProfileCompany text={
                "Discover Our Diverse Charcoal Briquette Selection:"+"<br/><br/>"+
                "1. Shisha/Hookah Briquettes: Tailored for the perfect smoking experience."+"<br/>"+
                "2. Barbecue Briquettes: Ignite the flavor of your grills."+"<br/>"+
                "3. Hardwood/Lump Charcoal: Pure, robust, and ideal for an authentic barbecue experience."+"<br/><br/>"+
                "For each of these premium products, we offer bespoke grading and specifications, tailored to your exact needs. Additionally, our packaging solutions are fully customizable, ensuring that your requirements are met to perfection. Our dedication to quality spans from the selection of raw materials, through the meticulous processes, right down to the final packaging, underscoring our commitment to fostering a sustainable business and nurturing long-term relationships."
            }/>
            {produc.map((obj,index)=>(
                <div key={index} className="ml-12 md:ml-24">
                    <h3 className="h3">
                        {obj.title}
                    </h3>

                    <div className="grid grid-cols-2">
                        <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
                            {obj.spec.map((obj,index)=>(
                                <div key={index}>
                                    <AccordionItem value={`item-${index}`}>
                                        <AccordionTrigger>{obj.title}</AccordionTrigger>
                                        <AccordionContent>
                                            <ul className="list-disc m-8">
                                                {obj.item.map((obj,index)=>(
                                                    <li className="my-2 text-md" key={index}>
                                                        <p >
                                                            <span className="font-bold">{obj.specTitle}</span>
                                                            <span className="font-normal">{obj.specDec}</span>
                                                        </p>

                                                    </li>
                                                ))}
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                </div>
                            ))}
                        </Accordion>

                        <div className="flex flex-wrap">
                            {obj.image.map((obj,index)=>(
                                <div className="w-fit text-center m-8" key={index}>
                                    <Image
                                        src={obj.url}
                                        width={200}
                                        height={100}
                                        alt="No image"
                                        className="object-cover max-w-[10rem] max-h-[10rem] md:max-w-[16rem] md:min-h-[16rem]"
                                        priority={true}
                                        quality={50}/>
                                    <h5 className="text-sm md:h5">
                                        {obj.title}
                                    </h5>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            ))}

            <Footer/>
        </>
    )
}
