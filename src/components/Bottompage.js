import React from 'react';
import './Bottompage.css';
import { Link } from 'react-router-dom';


function Bottompage() {
  return (
    <div className='bottompage-container'>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='bottompage-logo'>
            <Link to='/' className='social-logo'>
              Ad1tyahiphop
            </Link>
          </div>
          <div class='social-icons'>


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
      <br/><br/>
      <div><text className='btmpagetext'>Disclaimer: This is not AD1TYA's official website. This is a project made in React.js only for learning purposes. Developed by Anmol Manked. Github:-</text>
      <a class='social-icon-link spotify'
              aria-label='github'
              href='https://github.com/MAGzz2038' target="_blank"
                   rel="noopener noreferrer"
              >
             <i class="fa-brands fa-github"/><text className='btmpagetext'>MAGzz2038</text></a></div>
    </div>
  );
}

export default Bottompage;