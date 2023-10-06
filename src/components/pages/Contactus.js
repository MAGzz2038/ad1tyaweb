import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './Pages.css'
import Bottompage from '../Bottompage'

const Contactus = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_grqdkpo",
        "template_76j34h9",
        form.current,
        "jBuq7_Inq4dzShKtf"
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      );
  };

  return (
    <>
    <video src='/videos/homescreenvid2.mp4' autoPlay loop muted />
    <div className='contactus'>
      <div className='contactus-container'>
        <div><br/>
          <h1 className="cptext">
           Email us!
          </h1>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              
             
                  <input placeholder="Name" type="text" name="user_name" required />
                  <input placeholder="Your Email" type="email" name="user_email" required />
                  <input placeholder="Subject" type="text" name="subject" required />
                  <textarea placeholder="Message" name="message" required ></textarea>
                
                <div >
                  <input type="submit" className="sendbtn" value="SUBMIT" />
                </div>
              
            </form>
          </div>
        </div>
      </div>
    </div>
    <Bottompage/>
    </>
  )
}

export default Contactus