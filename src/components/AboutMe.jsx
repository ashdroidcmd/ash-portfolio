import React from 'react'
import '../App.css'

const AboutMe = () => {
return (
    <section className="bg-black border-bottom border-top border-danger d-flex align-items-center justify-content-center flex-column" id="about-section">
        <div className="container mt-4">
        
            <section>
                <div className="text-white text-start mb-4 border-danger rounded-5 card h-100 px-5 py-4 custom-card bg-dark">
                    <h1 className="text-danger m-0 fw-bolder">I'm Ashlee Zoe Gesite</h1>
                    <small className="">Location: Bohol, Philippines</small>
                    <small className="text-secondary">Front End Web Developer | 3D Artist</small>
                    <p className="m-0">I specialize in creating interactive websites and designing immersive 3D environments. Passionate about crafting digital experiences with a blend of creativity and technology.</p>
                </div>
            </section>

            <section className="row">
                <div className="col-md-6 mb-4">
                    <div className="card h-100 bg-dark border-danger rounded-5 custom-card">
                        <div className="card-body">
                            <h5 className="card-title text-danger text-center fw-bold">Front End Web Dev</h5>
                            <p className="fs-5 text-white text-center">"A user interface is like a joke. If you have to explain it, it’s not that good."</p>
                            <div className="d-flex justify-content-center gap-2 mt-3">
                                <img className="logo" src='/ash-portfolio/img/logo/html.png' alt="HTML" title="HTML" />
                                <img className="logo" src='/ash-portfolio/img/logo/css.png' alt="CSS" title="CSS" />
                                <img className="logo" src='/ash-portfolio/img/logo/js.png' alt="Javascript" title="Javascript" />
                                <img className="logo" src='/ash-portfolio/img/logo/bootstrap.png' alt="Bootstrap"title="Bootstrap" />
                                <img className="logo" src='/ash-portfolio/img/logo/react.png' alt="React" title="React" />
                            </div>
                        </div>
                    </div>
                </div>
            
                <div className="col-md-6 mb-4">
                    <div className="card h-100 bg-dark border-danger rounded-5 custom-card">
                        <div className="card-body">
                            <h5 className="card-title text-danger fw-bold text-center">3D Artist</h5>
                            <p className="fs-5 text-white text-center">"The best way to improve is to keep creating."</p>
                            <div className="d-flex justify-content-center gap-2 mt-3">
                                <img className="logo" src='/ash-portfolio/img/logo/blender.png' alt="Blender" title="Blender" />
                                <img className="logo" src='/ash-portfolio/img/logo/photoshop.png' alt="Photoshop" title="Adobe Photoshop" />
                                <img className="logo" src='/ash-portfolio/img/logo/davinci.png' alt="Davinci Resolve" title="Davinci Resolve" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    </section>
)
}

export default AboutMe