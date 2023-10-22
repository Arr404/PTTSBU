'use client'
import Header from "@/components/ui/header";

// export const metadata = {
//     icons: {
//         icon: '../../public/favicon.png',
//     },
//   title: 'Charcoal',
//   description: 'Page description',
// }
import Image from 'next/image'
import Footer from "@/components/micro/footer";
import Hero from "@/components/Home/hero";
import Profile from "@/components/Home/profile";
import OurProduct from "@/components/Home/our-product";
import AdvantageProduct from "@/components/Home/advantage-product";
import OurTeam from "@/components/Home/team";
import Faq from "@/components/Home/faq&Moq";
import WhyChooseUs from "@/components/Home/why-choose-us";
import ProductionProsess from "@/components/Home/production-prosess";
import OurCertificate from "@/components/Home/our-certificate";
import Blog from "@/components/Home/blog";
import Maps from "@/components/micro/map";

export default function Home() {
  return (
    <>
        <Header active=""/>
        <main className="flex min-h-screen flex-col items-center justify-between pt-28">
            <Hero/>
            <Profile/>
            <OurProduct/>
            <AdvantageProduct/>
            <OurTeam/>
            <WhyChooseUs/>
            <ProductionProsess/>
            <OurCertificate/>
            <Blog/>
            <Faq/>
        </main>
        <Maps/>
        <Footer />
    </>
  )
}

