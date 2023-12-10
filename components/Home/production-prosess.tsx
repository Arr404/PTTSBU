import Carousel, {CarouselItem} from "@/components/micro/carousel";

export interface slickData {
    img: string
    text: string
}
export const dataSlickHome:slickData[] =
    [
        {img:"./img/Home3.jpg",text:"home"},
        {img:"./img/Home2.jpg",text:"home"},
        {img:"./img/Home1.jpg",text:"home"},
        {img:"./img/Home4.jpg",text:"home"},
        {img:"./img/Home5.jpg",text:"home"}
    ]
export const dataSlickFactory:slickData[] =
    [
        {img:"./img/Factory1.jpg",text:"factory"},
        {img:"./img/Factory2.jpg",text:"factory"},

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
