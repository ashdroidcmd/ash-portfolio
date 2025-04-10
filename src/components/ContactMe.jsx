import React from 'react'
import '../App.css'

const ContactMe = () => {
  return (
    <section className="bg-black hero d-flex justify-content-center align-items-center vh-100 px-3 border-top border-danger" id="contact-section">

      <div className="container text-white text-center">
        <h1 className="fw-bolder text-danger  mt-5">LET'S CONNECT</h1>
        <p className="">I'm currently looking for new opportunities, my inbox is always open.</p>

        <div className="mx-auto">
          <form className="card bg-dark p-4 mx-auto border border-danger rounded-5">
            <div className="form-group text-start text-white ">
              <h6 className="mb-1">Name:</h6>
              <input type="text" className="form-control" id="InputName"/>
            </div>
      
            <div className="form-group text-start text-white mt-3 ">
              <h6 className="mb-1">Email:</h6>
              <input type="email" className="form-control" id="InputEmail" />
            </div>
      
            <div className="form-group text-start text-white mt-3 ">
              <h6 className="mb-1">Message:</h6>
              <textarea className="form-control" id="Textarea" rows="6"></textarea>
            </div>
      
            <a className=""><button type="submit" className="custom-btn my-3 px-4 w-50 mx-auto">Send</button></a>
      
            <div className="d-flex justify-content-center">
              <a href="https://www.linkedin.com/in/ashlee-zoe-gesite-25a28334b/" target="_blank" className="text-white fs-1 logo"><i className="bi bi-linkedin" title="Linkedin"></i></a>
              <a href="https://github.com/ashdroidcmd" target="_blank" className="text-white fs-1 logo"><i className="bi bi-github" title="Github"></i></a>
              <a href="mailto:ashgesite25@gmail.com" className="text-white fs-1 logo"><i className="bi bi-envelope-fill" title="Email"></i></a>
            </div>
            <small className="text-white ">&copy; 2025 Ashlee Zoe Gesite, All Rights Reserved.</small>
          </form>
        </div>
      </div>

    </section>
  )
}

export default ContactMe