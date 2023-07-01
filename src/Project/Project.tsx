import { Slide } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./Project.css";

export const data = [
  {
    id: 1,
    title: "Chat GPT-3 AI",
    img_url: "",
    link: "https://chat-gpt-clone-gilt.vercel.app/",
    gitHub: "https://github.com/tijanisylla/chat-gpt",
  },
  {
    id: 2,
    title: "Movie App",
    img_url: "",
    link: "https://tijanisylla.github.io/movie-app",
    gitHub: "https://github.com/tijanisylla/movie-app",
  },

  {
    id: 3,
    title: "Calculator",
    img_url: "",
    link: "https://calculator-sylla.netlify.app",
    gitHub: "https://github.com/tijanisylla",
  },
  {
    id: 4,
    title: "Snake",
    img_url: "",
    link: "https://snake-sylla.netlify.app",
    gitHub: "https://github.com/tijanisylla",
  },
];
const Project = () => {
  return (
    <section className="projects " id="projects">
      <Slide direction="left" triggerOnce>
        <h2 className="section__title">Projects</h2>
      </Slide>
      <Slide direction="right" triggerOnce>
        <p className="section__subtitle">Check my projects</p>
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
            992: {
              slidesPerView: 3,
              spaceBetween: 48,
            },
          }}
          modules={[Pagination]}
        >
          {data.map(({ id, title, img_url, link }) => {
            return (
              <SwiperSlide className="projects_card" key={id}>
                <h3 className="projects_name">{title}</h3>
                <img src={img_url} alt="img" className="projects_img" />

                <div>
                  <a
                    href={`${link}`}
                    className="projects_social_icon"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="uil uil-globe"></i>
                  </a>
                  <a
                    href="https://github.com/tijanisylla"
                    className="projects_social-icon"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="uil uil-github-alt"></i>
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
