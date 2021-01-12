import React, { useEffect } from 'react';
import emailjs from "emailjs-com";
import './ContactPage.css';
import Button from '@material-ui/core/Button';
import Aos from 'aos';
import 'aos/dist/aos.css';
import TextField from '@material-ui/core/TextField';
import MailOutlineIcon from '@material-ui/icons/MailOutline';


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

export default function ContactPage() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
}, []);

  

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
      'service_n69xjq2', 
      'template_hmwj6ry', 
      e.target, 
      'user_2K8EzR7KCI0ITth6MafqV'
      )
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  
  return (
      
      <div className="form-section">
        <div className="row header">
              <h2>Contact Us <MailOutlineIcon /></h2>
              <div className='contact--text' data-aos="fade-in">
              <p>Questions? Comments? Want to start a project? Whatever the reason, we want to hear from you. 
              Fill out the form below to reach us!</p>
              </div>
        </div>

            <form onSubmit={sendEmail} className="contact-form" > 
              <TextField id="outlined-basic" fullWidth data-aos="fade-in" type="text" name="name" label="Name" variant="outlined" required/>
              <br></br>
              <br></br>
              <TextField id="outlined-basic" fullWidth data-aos="fade-in" type="text" name="email" label="Email" variant="outlined" required/>
              <br></br>
              <br></br>
              <TextField id="outlined-basic" fullWidth data-aos="fade-in" type="text" name="subject" label="Subject" variant="outlined" required/>
              <br></br>
              <br></br>
              <TextField id="outlined-basic" fullWidth data-aos="fade-in" multiline
                rowsMax={4} name="message" rows="4" type="text" label="Message" variant="outlined" required/>
              <br></br>
              <br></br>
              <Button className='contact--button' data-aos="fade-in" variant="contained" color='primary' type="submit" >Send</Button>
    
            </form>




        </div>
          

  );
}