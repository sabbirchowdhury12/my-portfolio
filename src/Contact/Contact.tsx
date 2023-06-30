import { FC } from "react";
import "./Contact.css";
import Button from "../components/Button/Button";

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
      <h2 className="section__title">Get in touch</h2>
      <p className="section__subtitle"> contact me </p>

      <div className="contact_container">
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
      </div>
    </section>
  );
};

export default Contact;
