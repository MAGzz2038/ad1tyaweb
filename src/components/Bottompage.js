import React from 'react';
import './Bottompage.css';
import { Link } from 'react-router-dom';


function Bottompage() {
  return (
    <div className='bottompage-container'>
      
      <div class='bottompage-links'>
        <div className='bottompage-link-wrapper'>
          <div class='bottompage-link-items'>
           <Link to='/aboutme'> <h2>About Me</h2></Link>
          </div>
          <div class='bottompage-link-items'>
            <h2>Contact Us</h2>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='bottompage-logo'>
            <Link to='/' className='social-logo'>
              Ad1tyahiphop
            </Link>
          </div>
          <div class='social-icons'>
            <h1 className='bpagetext'>Social Media</h1>

            <a
              class='social-icon-link instagram'
              aria-label='Instagram'
             href='https://www.instagram.com/ad1tyahiphop/' target="_blank"
                   rel="noopener noreferrer"><i class='fab fa-instagram' /></a>
            <a
              class='social-icon-link youtube'
              aria-label='Youtube'
              href='https://www.youtube.com/watch?v=Vt6Nr2q-uoM/' target="_blank"
                   rel="noopener noreferrer">
              <i class='fab fa-youtube' />
            </a>

            <a
              class='social-icon-link spotify'
              aria-label='Spotify'
              href='https://open.spotify.com/artist/5g6PWbtWEOwPZ18wkfdWEf?si=Bni1YYdRREqBBU61FY77ZA&nd=1' target="_blank"
                   rel="noopener noreferrer"
              >
             <i class="fa-brands fa-spotify"/>
            </a>


          </div>
        </div>
      </section>
    </div>
  );
}

export default Bottompage;