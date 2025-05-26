import React from 'react'
import '../App.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-black">
        <div className="container-fluid justify-content-end">
          <button className="navbar-toggler bg-danger" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon "></span>
          </button>
    
          <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link fs-5 px-4 text-white" href="#home-section">Home</a>
              </li>
            </ul>
          </div>
        </div>
    </nav>
  )
}

export default Navbar