import React from 'react';
import './Pages.css';
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