import React, {useRef} from 'react'
import '../App.css'
import emailjs from "@emailjs/browser";


const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8lqzc5h",
        "template_f51mfci",
        form.current,
        "5MoyId7sAmWd_gisF"
      )
      .then(
        () => {
          alert("Message sent!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send: " + error.text);
        }
      );
  };
  return (
    <section className="bg-black hero d-flex justify-content-center align-items-center vh-100 px-3 border-top border-danger" id="contact-section">

      <div className="container text-white text-center">
        <h1 className="fw-bolder text-danger  mt-5">Let's create something amazing together</h1>
        
        <div className="mx-auto">
          <form ref={form} onSubmit={sendEmail} className="card bg-dark p-4 mx-auto border border-danger rounded-5">
            <div className="form-group text-start text-white ">
              <h6 className="mb-1">Name:</h6>
              <input type="text" className="form-control" id="InputName" name="name"/>
            </div>
      
            <div className="form-group text-start text-white mt-3 ">
              <h6 className="mb-1">Email:</h6>
              <input type="email" className="form-control" id="InputEmail" name="email"/>
            </div>
      
            <div className="form-group text-start text-white mt-3 ">
              <h6 className="mb-1">Message:</h6>
              <textarea className="form-control" id="Textarea" rows="6" name="message"></textarea>
            </div>
      
            <a className=""><button type="submit" className="custom-btn my-3 px-4 w-50 mx-auto">Send</button></a>
      
            <div className="d-flex justify-content-center">
              <a href="https://www.linkedin.com/in/ashlee-zoe-gesite-25a28334b/" target="_blank" className="text-white fs-1 logo"><i className="bi bi-linkedin" title="Linkedin"></i></a>
              <a href="https://github.com/ashdroidcmd" target="_blank" className="text-white fs-1 logo"><i className="bi bi-github" title="Github"></i></a>
              <a href="mailto:z.wolff25@gmail.com" className="text-white fs-1 logo"><i className="bi bi-envelope-fill" title="Email"></i></a>
            </div>
            <small className="text-white ">&copy; 2025 Ashlee Zoe Gesite, All Rights Reserved.</small>
          </form>
        </div>
      </div>

    </section>
  )
}

export default ContactMe