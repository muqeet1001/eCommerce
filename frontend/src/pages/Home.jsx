import React from 'react'
import Hero from '../components/Hero.jsx'
import LatestCollection from '../components/LatestCollection.jsx'
import BestSeller from '../components/BestSeller.jsx'
import OurPolicy from './../components/OurPolicy';
import NewsLetterBox from '../components/NewsLetterBox.jsx';
function Home() {
  return (
    <>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy/>
      <NewsLetterBox/>
    </>
  )
}

export default Home