import React from 'react'
import './Pages.css'
import Bottompage from '../Bottompage';
import { Link } from 'react-router-dom';

function Aboutme(){
    return(
   <><>
            <img className='aboutme-container' src='images/aboutmebg.jpg' alt='bg'></img>
            <div className='bgaboutme'>
                <div className="aboutme">

                    <div>
                        <br/>
                        <h1>About me</h1>
                        <br />
                        <p>
                        AD1TYA aka Aditya Singh.<br/>
                        Born and raised amidst the vibrant streets of Ahmedabad.
                        <br/>From making Reels on Instagram to Local Comedy Shows and Music Shows to making total Banger Music,<br/>
                         proudly on a mission to represent Gujarat's rap scene with 
                         raw and authentic style that captures the essence of Gujarat's streets.
                        <br/>The journey has just begun. Bigger things on the way as I continue to push the boundaries.
                        <br/><br/><br/><br/><br/><br/>
                        <br/>Stay updated with AD1TYA's latest releases and updates on:<br/><br/>
                    <div align='left'>
                    Instagram : <a aria-label='Instagram' href='https://www.instagram.com/instafunny.adi/' target="_blank"
                   rel="noopener noreferrer"> <i class='fab fa-instagram' /><text className='socialtags'> @instafunny.adi</text></a> 
                    <a aria-label='Instagram' href='https://www.instagram.com/ad1tyahiphop/' target="_blank"
                   rel="noopener noreferrer"> <i class='fab fa-instagram' /><text className='socialtags'> @ad1tyahiphop</text><br/></a>
                    </div><br/>
                    Or Email us:<br/><br/>
                    <Link to='/contactme'><input type='button' className='cardsbtn' value='Send Email'/> </Link>
                    <br/><br/><br/></p>
                    </div>
                </div>
            </div>


        </>
        <>
        <Bottompage/>   
            </>
            
            </>
    );
}

  

export default Aboutme;