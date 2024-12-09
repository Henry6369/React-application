import React from 'react'
import Hero from '../InnerPages/Hero';
import Features from '../InnerPages/Features';
import Contents from '../InnerPages/Contents';
import Gallery from '../InnerPages/Gallery';
import Partners from '../InnerPages/Partners';
import Testimonials from '../InnerPages/Testimonials';
const Home = () => {
  return (
    <div>
      <Hero/>
      <Features/>
      <Contents/>
      <Gallery/>
      <Partners/>
      <Testimonials/>
    </div>
  )
}

export default Home;
