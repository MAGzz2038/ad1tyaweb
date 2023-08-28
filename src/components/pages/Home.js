import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Bottompage from '../Bottompage';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards/>
      <Bottompage/>
      
    </>
  );
}

export default Home;