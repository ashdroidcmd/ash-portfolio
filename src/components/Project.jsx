import '../App.css'
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const Projects = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "projects"));
        const projectList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // console.log("Fetched Projects:", projectList);
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

      <div className="row row-cols-1 g-4">
        {projects.length === 0 ? (
          <p className="text-center text-white">No projects found.</p>
        ) : (
          projects.map((project) => (
            <div className="col" key={project.id}>
              <div className="card h-100 border-danger bg-black custom-card">
                <Swiper
                    style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                    }}
                    spaceBetween={0}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="productSwiper1 "
                >
                    {project.images && project.images.map((imgSrc, index) => (
                    <SwiperSlide key={index}>
                        <img
                        className="img-fluid"
                        src={`${import.meta.env.BASE_URL}${encodeURI(imgSrc)}`}
                        alt={`Project ${index + 1}`}
                        />
                    </SwiperSlide>
                    ))}
                </Swiper>
                
                <div className="card-body bg-black rounded">
                  <h3 className="card-title text-danger text-center">{project.name}</h3>
                  <p className="m-0 text-white text-center">{project.description}</p>
                  <div className="d-flex justify-content-center">
                    <small className="border px-2 py-1 m-2 rounded text-white">
                      {Array.isArray(project.stack) ? project.stack.join(", ") : project.stack}
                    </small>
                  </div>
                  <div className="d-flex flex-row justify-content-center">
                    <a href={project.slug} target="_blank"><button className="custom-btn text-start mx-1">Live</button></a>
                    <a href={project.github} target="_blank"><button className="custom-btn text-start mx-1">Repo</button></a>
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