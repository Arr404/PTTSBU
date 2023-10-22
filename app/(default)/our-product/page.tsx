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
            title:"SHISHA BRIQUETTES",
            spec:[
                {title:"Product Spesification",
                    item:[
                        {specTitle:"Ash Content",specDec:": 1,8%-2,5%"},
                        {specTitle:"Ash Color",specDec:" : White / Light Grey"},
                        {specTitle:"Burning Time",specDec:" : 90-120 minutes"},
                        {specTitle:"Ignition Time",specDec:" : <5 minutes"},
                        {specTitle:"Fix Carbon",specDec:" : Minimal 80%"},
                        {specTitle:"Moisture ",specDec:" : Max 5%"},
                        {specTitle:"Volatile matter",specDec:" : 13,07%"},
                        {specTitle:"Calorific value",specDec:" : 7000-7500 Kcal/kg"},
                        {specTitle:"Origin",specDec:" : Boyolali, Central Java, Indonesia"},
                        {specTitle:"Heat Content",specDec:" : < 550 derajat celcius "},
                        {specTitle:"Material ",specDec:" : 100% Charcoal Shell Coconut"},
                    ]},
                {title:"Product Spesification",
                    item:[
                        {specTitle:"Ash Content",specDec:": 1,8%-2,5%"},
                        {specTitle:"Ash Color",specDec:" : White / Light Grey"},
                        {specTitle:"Burning Time",specDec:" : 90-120 minutes"},
                        {specTitle:"Ignition Time",specDec:" : <5 minutes"},
                        {specTitle:"Fix Carbon",specDec:" : Minimal 80%"},
                        {specTitle:"Moisture ",specDec:" : Max 5%"},
                        {specTitle:"Volatile matter",specDec:" : 13,07%"},
                        {specTitle:"Calorific value",specDec:" : 7000-7500 Kcal/kg"},
                        {specTitle:"Origin",specDec:" : Boyolali, Central Java, Indonesia"},
                        {specTitle:"Heat Content",specDec:" : < 550 derajat celcius "},
                        {specTitle:"Material ",specDec:" : 100% Charcoal Shell Coconut"},
                    ]}
            ],
            image:[
                {url:"./logo2.png",title:"Fillo Briquettes"},
                {url:"./logo2.png",title:"Fillo Briquettes"}
            ]
        }
    ]
    return(
        <>
            <Header active={"our-product"}/>
            <BackgroundGhost/>

            <ProfileCompany text={
                "We have 2 main types of charcoal briquettes for Shisa, Hookah and Barbeque with any grade and requirements"+
                "<br/><br/>"+
                "We are committed to delivering the highest quality products from raw materials, processes, production to packaging for a sustainable business and long term relationship"+
                "<br/><br/>"+
                "Our product made from 100% coconut shell as the raw material. As a totally natural and eco-friendly. Resulting in eco-friendly briquettes, that are free from chemicals and toxic"
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
                                        src={Backround}
                                        alt="No image"
                                        className="object-cover max-w-[10rem] min-h-[10rem] md:max-w-[16rem] md:min-h-[16rem]"
                                        priority={true}
                                        quality={50}/>
                                    <h5 className="text-sm md:h5">
                                        Coconut Charcoal Briquettes
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
