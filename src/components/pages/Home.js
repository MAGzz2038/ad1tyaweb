import React from 'react';
import './Pages.css';
import Navbar from './components/Navbar';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Bottompage from '../Bottompage';

function Home() {
  return (
    <>
      <Navbar/>
      <HeroSection />
      <Cards/>
      <Bottompage/>
      
    </>
  );
}

export default Home;
