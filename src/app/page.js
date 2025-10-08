import DestinationCarousel from '@/components/Carousel'
import FooterLP from '@/components/Footer'
import HeroSection from '@/components/Hero'
import InternalPromotions from '@/components/InternalPromotion'
import Navbar from '@/components/Navbar'
import TravelSection from '@/components/TravelSection'
import React from 'react'

const Page = () => {
  return (
    <>
    <Navbar />
    <HeroSection />
    <TravelSection />
    <InternalPromotions />
    <DestinationCarousel />
    <FooterLP />
    </>
  )
}

export default Page
