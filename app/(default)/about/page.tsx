'use client'
import Header from "@/components/ui/header";
import BackgroundGhost from "@/components/micro/background-ghost";
import Footer from "@/components/micro/footer";
import ProfileCompany from "@/components/micro/profile-company";
import OurTeam from "@/components/Home/team";
import OurCertificate from "@/components/Home/our-certificate";

export default function About() {
    return(
        <>
            <Header active={"about"}/>
            <BackgroundGhost/>
            {/*<ProfileCompany text={*/}
            {/*    "<h1 class='h2'>Coconut Charcoal Briquettes</h1>"+*/}
            {/*    "<br/><br/>"+*/}
            {/*    "PT. Tani Solusi Berjaya Utama is a charcoal briquette factory which is one of the leading suppliers and exporters of coconut charcoal briquettes. Our factory is located in Boyolali, Central Java – Indonesia. We have two main types of charcoal briquettes for Shisa, Hookah and Barbeque with any grade and requirements"*/}
            {/*    +"<br/><br/>"+*/}
            {/*    "We are committed to delivering the highest quality products from raw materials, processes, production to packaging for a sustainable business and long term relationship"*/}
            {/*}/>*/}
            <OurTeam/>
            <OurCertificate/>
            <Footer/>
        </>
    )
}
