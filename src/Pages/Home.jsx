import React from 'react'
import HeroSection from '../Components/HomeHero'
import FeatureSection from '../Components/HomeFeature'
import PlantCarousel from '../Components/HomeCarousel'
import TrendingProducts from '../Components/HomeProducts'
import TestimonialCarousel from '../Components/HomeTestimonial'
import ImageCard from '../Components/HomeCard'
import HomeBlog from '../Components/HomeBlog'
import NewsletterForm from '../Components/Newsletter'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <FeatureSection/>
      <PlantCarousel/>
      <TrendingProducts/>
      <TestimonialCarousel/>
      <ImageCard/>
      <HomeBlog/>
      <NewsletterForm/>
    </div>
  )
}

export default Home
