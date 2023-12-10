import Carousel, {CarouselItem} from "@/components/micro/carousel";

export interface slickData {
    img: string
    text: string
}
export const dataSlickHome:slickData[] =
    [
        {img:"./img/Home3.JPG",text:"home"},
        {img:"./img/Home2.JPG",text:"home"},
        {img:"./img/Home1.JPG",text:"home"},
        {img:"./img/Home4.JPG",text:"home"},
        {img:"./img/Home5.JPG",text:"home"}
    ]
export const dataSlickFactory:slickData[] =
    [
        {img:"./img/Factory1.JPG",text:"factory"},
        {img:"./img/Factory2.JPG",text:"factory"},

    ]
export const dataSlick:slickData[] =
    [
        {img:"./logo2.png",text:"Hoak1"},
        {img:"./logo2.png",text:"Hoak2"},
        {img:"./logo2.png",text:"Hoak3"},
        {img:"./logo2.png",text:"Hoak4"},
        {img:"./logo2.png",text:"Hoak5"},
        {img:"./logo2.png",text:"Hoak6"},
        {img:"./logo2.png",text:"Hoak7"},

    ]
export default function ProductionProsess() {

    return(
        <>
            <Carousel>
                {dataSlick.map((obj ,index)=>(
                    <CarouselItem key={index} >
                        <img src={obj.img} alt="eror"/>
                        <p>{obj.text}</p>
                    </CarouselItem>
                ))}
            </Carousel>
        </>
    )
}
