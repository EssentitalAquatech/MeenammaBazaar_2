// src/components/pages/Home.js
import React from 'react';
import Hero from '../pages/Hero';

import About from '../pages/About';
import Category from '../pages/Category';
import TradingFooter from '../pages/TradingFooter';
import DealsOfTheDay from '../pages/DealsOfTheDay';
import Trending from '../pages/Trending';
import AppPromo from '../pages/AppPromo';
import Ads from '../pages/Ads';



function Home() {
  return (
    <>
    
      <Hero />
       <Category/>
       <DealsOfTheDay/>
          <TradingFooter/>
          <Trending/>
          <Ads/>
          <AppPromo/>
      <About/>
   
     
      
      
    </>
  );
}

export default Home;