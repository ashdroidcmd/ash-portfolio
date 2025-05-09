import '../App.css'
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';

const Projects = () => {
  const [thumbsSwiper] = useState(null);
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
        <h1 className="text-danger text-center mb-2">PROJECTS</h1>

        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            }
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper p-4"
        >
          {projects.length === 0 ? (
            <p className="text-center text-white">No projects found.</p>
          ) : (
            projects.map((project) => (
              <SwiperSlide key={project.id}>
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
                    className="productSwiper1"
                  >
                    {project.images &&
                      project.images.map((imgSrc, index) => (
                        <SwiperSlide key={index}>
                          <img
                            src={`${import.meta.env.BASE_URL.replace(/\/$/, '')}${imgSrc}`}
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
                        {Array.isArray(project.stack)
                          ? project.stack.join(', ')
                          : project.stack}
                      </small>
                    </div>
                    <div className="d-flex flex-row justify-content-center">
                      <a href={project.slug} target="_blank" rel="noopener noreferrer">
                        <button className="custom-btn text-start mx-1">Live</button>
                      </a>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <button className="custom-btn text-start mx-1">Repo</button>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </div>
    </section>

  )
}

export default Projects