import React from 'react';
import './Pages.css';
import Bottompage from '../Bottompage';


function Projects() {
  return (
    <>
    <img src='images/projectsbg.png' alt='projbg'/>
    <div className='projects'>
    <div className='projects__item__link'>
      <figure className='projects__item__pic-wrap' data-category='label1'>
        <img
          className='projects__item__img'
          alt='card-img'
          src='images/cardcover4.png'
        />
      </figure>
      <div className='projects__item__info'>
        <p className='projects__item__text'>Tabadtob<br/>Credits:<br/>Artist & Lyrics :  AD1TYA<br/>Prod. by KOSHISH.<br/>Directed by Rezin & Vedant Ghadia<br/>D.O.P : Rezin & Dion<br/>Cinematography : Vedant Gadhia & Tarun Verma
        </p><br/>
        <a href='https://www.youtube.com/watch?v=bgPXqEQMkic'target="_blank"rel="noopener noreferrer"><input type='button' value='Watch on Youtube'/></a><br/>
        <br/>
        <a align='right 'href='https://open.spotify.com/track/7HBTDIQykcJaDjqTkJVTjs' target="_blank" rel="noopener noreferrer"><input type='button' value='Listen on spotify'/></a>    
      </div>
    </div>
    <br/>
    <br/>
    <div className='projects__item__link'>
      <figure className='projects__item__pic-wrap' data-category='label1'>
        <img
          className='projects__item__img'
          alt='card-img'
          src='images/cardcover2.png'
        />
      </figure>
      <div className='projects__item__info'>
        <p className='projects__item__text'>Amdavad No Chokro<br/>Credits:<br/>Artist & Lyrics :  AD1TYA<br/>Prod. by Jerry Martin<br/>Directed by nocap Motion<br/> D.O.P : Bhautik Bundela<br/>Cinematography : Vedant Gadhia & Shreyansh Joshi
        <br/><br/><a href='https://www.youtube.com/watch?v=Vt6Nr2q-uoM'target="_blank"rel="noopener noreferrer"><input type='button' value='Watch on Youtube'/></a></p>
        <br/><a href='https://open.spotify.com/track/0CQykjdtR347K5usQuWP7V' target="_blank" rel="noopener noreferrer"><input type='button' value='Listen on spotify'/></a>      
      </div>
    </div>
    <br/>
    <br/>
    <div className='projects__item__link'>
      <figure className='projects__item__pic-wrap' data-category='label1'>
        <img
          className='projects__item__img'
          alt='card-img'
          src='images/cardcover1.png'
        />
      </figure>
      <div className='projects__item__info'>
        <p className='projects__item__text'>Talabgaar<br/>Credits:<br/>Artist & Lyrics :  AD1TYA<br/>Prod. by Priyanshu Raval<br/>Produced by Hiren Mala<br/>Directed by nocap Motion & Rain Again <br/> D.O.P : Bhautik Bundela<br/>Cinematography : Abhay Rajpurohit
        <br/><br/><a href='https://www.youtube.com/watch?v=UB0StZN6Eb4'target="_blank"rel="noopener noreferrer"><input type='button' value='Watch on Youtube'/></a></p>
        <br/><a href='https://open.spotify.com/track/5imbxmUtWIgt4tuBDfevtm' target="_blank" rel="noopener noreferrer"><input type='button' value='Listen on spotify'/></a>      
      </div>
    </div>
    <br/>
    <br/>
    <div className='projects__item__link'>
      <figure className='projects__item__pic-wrap' data-category='label1'>
        <img
          className='projects__item__img'
          alt='card-img'
          src='images/cardcover3.png'
        />
      </figure>
      <div className='projects__item__info'>
        <p className='projects__item__text'>Rawaiya<br/>Credits:<br/>Artist & Lyrics :  AD1TYA<br/>Prod. by Alex Music<br/>Directed by nocap Motion<br/>Producer & Feature : Mehul Bharwad<br/>Director & D.O.P : nocap Motion
        <br/><br/><a href='https://www.youtube.com/watch?v=g0a12HfQ6Lo'target="_blank"rel="noopener noreferrer"><input type='button' value='Watch on Youtube'/></a></p>
        <br/><a href='https://open.spotify.com/track/548QsBju6gu8kuaAG8xMpC' target="_blank" rel="noopener noreferrer"><input type='button' value='Listen on spotify'/></a>      
      </div>
    </div>

    </div>
    <Bottompage/>
    </>
  );
}

export default Projects;