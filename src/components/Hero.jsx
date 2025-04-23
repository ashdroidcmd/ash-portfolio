import React from 'react'
import '../App.css'


const Hero = () => {
return (
    <>
    <section className="bg-black hero d-flex  justify-content-center flex-column" id="home-section">
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
                    <p className="lead mb-4">Bringing pixels to life, one frame at a time.</p>
                    <a href="#project-section" className=""><button type="button" className="custom-btn">View Web Projects</button></a>
                    <a href="https://www.instagram.com/kuroi_3d/" target="_blank" className="mx-2"><button type="button" className="custom-btn">View 3D Projects</button></a>
                    <a href='/resume.pdf' className=""><button type="button" className="custom-btn">Download CV</button></a>
                </div>
        </div>
    </section>
    </>
)
}

export default Hero