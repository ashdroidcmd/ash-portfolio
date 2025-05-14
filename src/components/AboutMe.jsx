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
                        <p className="m-0 fs-5 ">I'm a front-end developer and 3D environment artist crafting interactive websites and immersive visuals.</p>
                    </div>
                </section>

                <div className="card bg-dark border-danger rounded-5 custom-card mb-4">
                    <div className="card-body">
                        <h5 className="card-title text-danger text-center fw-bold">Front End Web Dev</h5>
                        <p className="fs-5 text-white text-center">"A user interface is like a joke. If you have to explain it, it’s not that good."</p>
                        <div className="d-flex justify-content-center flex-wrap gap-2 mt-3">
                            <img className="logo img-fluid" src={`${import.meta.env.BASE_URL}img/logo/html.png`} alt="HTML" title="HTML" />
                            <img className="logo img-fluid" src={`${import.meta.env.BASE_URL}img/logo/css.png`} alt="CSS" title="CSS" />
                            <img className="logo img-fluid" src={`${import.meta.env.BASE_URL}img/logo/js.png`} alt="Javascript" title="Javascript" />
                            <img className="logo img-fluid" src={`${import.meta.env.BASE_URL}img/logo/bootstrap.png`} alt="Bootstrap" title="Bootstrap" />
                            <img className="logo img-fluid" src={`${import.meta.env.BASE_URL}img/logo/tailwind.png`} alt="Tailwind" title="Tailwind" />
                            <img className="logo img-fluid" src={`${import.meta.env.BASE_URL}img/logo/react.png`} alt="React" title="React" />
                            <img className="logo img-fluid" src={`${import.meta.env.BASE_URL}img/logo/git.png`} alt="Git" title="Git" />
                            <img className="logo img-fluid" src={`${import.meta.env.BASE_URL}img/logo/github.png`} alt="Github" title="Github" />
                            <img className="logo img-fluid" src={`${import.meta.env.BASE_URL}img/logo/firebase.png`} alt="Firebase" title="Firebase" />
                        </div>
                    </div>
                </div>

                <div className="card bg-dark border-danger rounded-5 custom-card mb-4">
                    <div className="card-body">
                        <h5 className="card-title text-danger fw-bold text-center">3D Artist</h5>
                        <p className="fs-5 text-white text-center">"The best way to improve is to keep creating."</p>
                        <div className="d-flex justify-content-center gap-2 mt-3">
                            <img className="logo img-fluid" src={`${import.meta.env.BASE_URL}img/logo/blender.png`} alt="Blender" title="Blender" />
                            <img className="logo img-fluid" src={`${import.meta.env.BASE_URL}img/logo/photoshop.png`} alt="Photoshop" title="Adobe Photoshop" />
                            <img className="logo img-fluid" src={`${import.meta.env.BASE_URL}img/logo/davinci.png`} alt="Davinci Resolve" title="Davinci Resolve" />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default AboutMe