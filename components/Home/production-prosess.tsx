import Carousel, {CarouselItem} from "@/components/micro/carousel";

export interface slickData {
    img: String
    text: String
}

export default function ProductionProsess() {
    const data:slickData[] =
        [
            {img:"./logo2.png",text:"Hoak1"},
            {img:"./logo2.png",text:"Hoak2"},
            {img:"./logo2.png",text:"Hoak3"},
            {img:"./logo2.png",text:"Hoak4"},
            {img:"./logo2.png",text:"Hoak5"},
            {img:"./logo2.png",text:"Hoak6"},
            {img:"./logo2.png",text:"Hoak7"},

        ]
    return(
        <>
            <Carousel>
                {data.map((obj ,index)=>(
                    <CarouselItem >
                        <img src={obj.img} alt="eror"/>
                        <p>{obj.text}</p>
                    </CarouselItem>
                ))}
            </Carousel>
        </>
    )
}
