import { Slide } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./Project.css";

import img1 from "../assets/phone.png";
import img2 from "../assets/tour.png";
import img3 from "../assets/chat.png";

export const data = [
  {
    id: 1,
    title: "Resale Phone",
    img_url: img1,
    client:
      "https://github.com/sabbirchowdhury12/sabbirchowdhury12-mern-stack-repair-resale-phone-client",
    server:
      "https://github.com/sabbirchowdhury12/mern-stack-Repair-Resale-Phone-server",
    live: "https://resale-repair-phone.web.app/",
    name: "Resale and Buy Phone",
  },
  {
    id: 2,
    title: "Tour Website",
    img_url: img2,
    client:
      "https://github.com/sabbirchowdhury12/mern-stack-tourist-service-website-client",
    server:
      "https://github.com/sabbirchowdhury12/mern-stack-tourist-service-website-server",
    live: "https://world-tourist-website.web.app/",
    name: "Tour Website",
  },

  {
    id: 3,
    title: "Chat App",
    img_url: img3,
    client:
      "https://github.com/sabbirchowdhury12/-mern-stack-chat-application-client-side",
    server:
      "https://github.com/sabbirchowdhury12/mern-stack-chat-application-server-side",
    live: "https://mern-stack-chat-app.netlify.app/profile",
    name: "Chat Application",
  },
];
const Project = () => {
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
          {data.map(({ id, title, img_url, live, name, client, server }) => {
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
          })}
        </Swiper>
      </Slide>
    </section>
  );
};

export default Project;
