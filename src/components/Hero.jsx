import React from 'react'
import '../App.css'


const Hero = () => {
return (
    <>
    <section className="bg-black hero d-flex justify-content-center flex-column" id="home-section">
        <div className="wrapper">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <small className="text-white text-center">Front End Web Dev | 3D Artist</small>
        <div>
            <h1 className="display-5 fw-bold text-danger text-center">I'm Ash</h1>
                <div className="col-lg-6 mx-auto text-white text-center">
                    <h3>Hi! If you are seeing this. This is my old dev portfolio. Click the button below to the new one!</h3>
                    <a href="https://ash-portfoliov2.vercel.app/" target="_blank" className="mx-2"><button type="button" className="custom-btn">New Portfolio</button></a>
                </div>
        </div>
    </section>
    </>
)
}

export default Hero