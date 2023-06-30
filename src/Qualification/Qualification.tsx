import { Slide } from "react-awesome-reveal";

import "./Qualification.css";

const Qualification = () => {
  return (
    <section id="qualification">
      <Slide direction="left" triggerOnce>
        <h2 className="section__title">Qualification</h2>
      </Slide>
      <Slide direction="right" triggerOnce>
        <p className="section__subtitle">My personal journey</p>
      </Slide>
      <div className="qualification__container container">
        {/* START BUTTON */}
        <div className="qualification__tabs">
          <div className="qualification__button  qualification__active button--flex">
            {/* <i className="uil uil-graduation-cap qualification__icon"></i> */}
            Education
          </div>
        </div>
        {/* END BUTTON */}

        {/* Content 1 */}
        <Slide direction="left" triggerOnce>
          <div className="qualification__sections">
            {/* GRP 1 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualififaction__title">UIC</h3>
                <span className="qualification__subtitle">
                  Fullstack developement{" "}
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender"></i>
                  2021 - 2021
                </div>
              </div>
              <div>
                <span className="qualifaction__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            {/* GRP 2 */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualifaction__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualififaction__title">Lycée des nations</h3>
                <span className="qualification__subtitle">
                  High School Diploma - Mauritania
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender"></i>
                  2009 - 2013
                </div>
              </div>
            </div>
            {/* GRP 3 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualififaction__title">Spanish</h3>
                <span className="qualification__subtitle">
                  Spanish course in Sevilla Acoje - Spain
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender"></i>
                  2015 - 2016
                </div>
              </div>
              <div>
                <span className="qualifaction__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            {/* GRP 4 */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualifaction__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualififaction__title">Polyglot</h3>
                <span className="qualification__subtitle">
                  I speak 6 Languages
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender"></i>
                  2021 - present
                </div>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </section>
  );
};

export default Qualification;
