import React from 'react';
import '../App.css';
import { Button } from './Buttonspotify';
import {Buttonyt}  from './Buttonyoutube';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/homescreenvid.mp4' autoPlay loop muted />

     <div className='herotext'>
      <p >Aditya Singh</p>
      </div> 
      <div className='hero-btns'>
        <Button
          className='btns'
          ButtonSize='btn--large'
        >
        Spotify                    <i class="fa-brands fa-spotify"/> 
         
        </Button>
        <Buttonyt
          className='btns'
          buttonSize='btn--large'

        >
        Youtube                     <i class='fab fa-youtube' />
        </Buttonyt>
      </div>
    </div>
  );
}

export default HeroSection;
