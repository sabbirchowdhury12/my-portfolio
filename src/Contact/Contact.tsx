import { FC } from "react";
import "./Contact.css";
import Button from "../components/Button/Button";
import { Slide } from "react-awesome-reveal";

const contactInfo = [
  {
    name: "Email",
    email: "email@gmail.com",
  },
  {
    name: "Email",
    email: "email@gmail.com",
  },
  {
    name: "Email",
    email: "email@gmail.com",
  },
];

const Contact: FC = () => {
  return (
    <section>
      <Slide direction="left">
        <h2 className="section__title">Get in touch</h2>
      </Slide>
      <Slide direction="right">
        <p className="section__subtitle"> contact me </p>
      </Slide>

      <div className="contact_container">
        <Slide direction="left">
          {" "}
          <div className="contact_content">
            <div className="contact_title">
              <h2>Talk to me</h2>
            </div>

            <div className="contact_info">
              {contactInfo.map((info, ind) => {
                return (
                  <div key={ind} className="contact_card">
                    <h3>{info.name}</h3>
                    <p className="card_title">{info.email}</p>
                    <p>write me --</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Slide>

        <Slide direction="right">
          <div className="contact_form">
            <div className="contact_title">
              <h2>Talk to me</h2>
            </div>

            <form action="">
              <input
                className="contact_form_input"
                type="text"
                placeholder="your name"
              />
              <input
                className="contact_form_input"
                type="email"
                placeholder="your email"
              />

              <textarea
                className="contact_form_input"
                placeholder="write something"
              ></textarea>

              <Button />
            </form>
          </div>
        </Slide>
      </div>
    </section>
  );
};

export default Contact;
