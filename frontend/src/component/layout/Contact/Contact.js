import React, { Fragment } from 'react'
import "./contact.css"
import { useAlert } from "react-alert";

const Contact = () => {


    const alert = useAlert();

    const sentMessage=(e)=>{

        e.preventDefault();
       
   
      alert.success("Your message send Successfully");
      
    


    }


  return (
    <Fragment>
    
    <section class="section contact" id="contact">
    <div class="contact-center container">
        <div class="left" data-aos="fade-down-right" data-aos-duration="2000">
            <h2>Contact Us</h2>
            <p>
               Hello my name is "MD.ANWAR HOSSAIN ''. I'm a full Stack Web Developer & I am enthusiastic, dedicated. Have more than 2+ years of experience in the field of Web Design & Web Development.
            </p>
            <p>
                My objectives are increasing my knowledge in computer science fields and new technologies especially, web development and web Design field. Always looking forward to learning new technologies and being a part of a huge change in the world.
            </p>
            <div class="bottom">
                <div class="first">
                    <span><i class="fas fa-map-marked-alt"></i></span>
                    <h4>Phone </h4>
                    <small>01783473583</small>
                </div>
                <div class="second">
                    <span><i class="far fa-envelope-open"></i></span>
                    <h4>Email</h4>
                    <small>mdanwarhossain@gmail.com</small>
                </div>
            </div>
        </div>
        <div class="right" data-aos="fade-up-left" data-aos-duration="2000">
            <form class="form">
                <div>
                    <input type="text" placeholder="First Name" />
                    <input type="email" placeholder="E-mail" />
                </div>
                <textarea rows="10" cols="30"  placeholder="Message"></textarea>
                <a href="" onClick ={sentMessage}>SEND</a>
            </form>
        </div>
    </div>
</section>
    
    </Fragment>
  )
}

export default Contact