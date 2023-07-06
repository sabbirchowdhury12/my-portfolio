import { FC } from "react";
import { Slide } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Project.css";
import { Pagination } from "swiper";
import { projectData } from "../utiles/data";

const Project: FC = () => {
  return (
    <section className="projects container" id="projects">
      <Slide direction="left" triggerOnce>
        <h2 className="section__title">Projects</h2>
      </Slide>
      <Slide direction="right" triggerOnce>
        <p className="section__subtitle">my projects</p>
      </Slide>
      <Slide direction="left" triggerOnce>
        <Swiper
          loop={true}
          grabCursor={true}
          spaceBetween={24}
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 48,
            },
          }}
          modules={[Pagination]}
        >
          {projectData.map(
            ({ id, title, img_url, live, name, client, server }) => {
              return (
                <SwiperSlide className="projects_card" key={id}>
                  <h3 className="projects_name">{title}</h3>
                  <div className=" projects_img">
                    <img src={img_url} alt="img" />
                  </div>

                  <div>
                    <div className="project_info">
                      <p className="project_info_name">{name} (Full-Stack)</p>
                    </div>
                    <a
                      href={`${client}`}
                      className="projects_social_icon"
                      target="_blank"
                      rel="noreferrer"
                      title="client side"
                    >
                      <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                      href={`${server}`}
                      className="projects_social_icon"
                      target="_blank"
                      rel="noreferrer"
                      title="server side"
                    >
                      <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                      href={`${live}`}
                      className="projects_social_icon"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa-sharp fa-solid fa-up-right-from-square"></i>
                    </a>
                  </div>
                </SwiperSlide>
              );
            }
          )}
        </Swiper>
      </Slide>
    </section>
  );
};

export default Project;
