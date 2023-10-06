import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/homescreenvid2.mp4' autoPlay loop muted />

     <div>
      <p className='herotext' >Aditya Singh</p>
      </div> 
      <div className='hero-btns'>
        <div  className='button'>
        <a class='social-icon-link youtube' aria-label='Youtube' href='https://www.youtube.com/watch?v=Vt6Nr2q-uoM/' target="_blank" rel="noopener noreferrer">
             <text className='buttontxt'><i class="fa-brands fa-youtube"/> Youtube</text>
              </a> 
              </div>
          <div className='button'>
        <a class='social-icon-link spotify' href='https://open.spotify.com/artist/5g6PWbtWEOwPZ18wkfdWEf?si=Bni1YYdRREqBBU61FY77ZA&nd=1' target="_blank" rel="noopener noreferrer">
        <text className='buttontxt'><i class="fa-brands fa-spotify"/> Spotify</text>
              </a> 
              </div>    
      </div>
    </div>
  );
}

export default HeroSection;
