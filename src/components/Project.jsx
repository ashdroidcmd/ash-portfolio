import '../App.css'
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import AutotekImage from '/img/auto-tek1.png';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "projects"));
        const projectList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        console.log("Fetched Projects:", projectList);
        setProjects(projectList);

      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (

    <section className="bg-black py-5" id="project-section">
    <div className="container">
      <h1 className="text-danger text-center mb-5">PROJECTS</h1>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {projects.length === 0 ? (
          <p className="text-center text-white">No projects found.</p>
        ) : (
          projects.map((project) => (
            <div className="col" key={project.id}>
              <div className="card h-100 border-danger bg-black">
                  <img src={AutotekImage} className="card-img-top border-danger border-bottom" alt={project.name} />
                <div className="card-body bg-black rounded">
                  <h3 className="card-title text-danger text-center">{project.name}</h3>
                  <p className="m-0 text-white text-center">{project.description}</p>
                  <div className="d-flex justify-content-center">
                    <small className="border px-2 py-1 m-2 rounded text-white">
                      {Array.isArray(project.stack) ? project.stack.join(", ") : project.stack}
                    </small>
                  </div>
                  <div className="d-flex flex-row justify-content-center">
                    <button className="custom-btn text-start mx-1">Live</button>
                    <button className="custom-btn text-start mx-1">GitHub</button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div> 
  </section> 
  
  )
}

export default Projects