import { FC, useRef } from "react";
import "./Contact.css";
import { Slide } from "react-awesome-reveal";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: "fa-regular fa-envelope",
    name: "Email",
    address: "email@gmail.com",
    link: "mailto:sabbirchowdhury40854@gmail.com",
  },
  {
    icon: "fa-brands fa-whatsapp",
    name: "Whatsapp",
    address: "+8801989969238",
    link: "https://api.whatsapp.com/send?phone=01989969238&text=Hello",
  },
  {
    icon: "fa-brands fa-facebook-messenger",
    name: "Messenger",
    address: "Sabbir Chowdhury",
    link: "https://www.facebook.com/profile.php?id=100075403486886",
  },
];

const Contact: FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_h28znwb",
          "template_qpz5u3f",
          form.current,
          "V15ccPObia6iwywnZ"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };
  return (
    <section className="container" id="contact">
      <Slide direction="left" triggerOnce>
        <h2 className="section__title">Get in touch</h2>
      </Slide>
      <Slide direction="right" triggerOnce>
        <p className="section__subtitle"> contact me </p>
      </Slide>

      <div className="contact_container">
        <Slide direction="left" triggerOnce>
          {" "}
          <div className="contact_content">
            <div className="contact_title">
              <h2>Contact Info</h2>
            </div>

            <div className="contact_info">
              {contactInfo.map((info, ind) => {
                return (
                  <div key={ind} className="contact_card">
                    <i className={`${info.icon} contact_icon`}></i>
                    <h3 className="card_title">{info.name}</h3>
                    <p className="card_address">{info.address}</p>
                    <p className="message-btn">
                      <a target="_blank" href={info.link}>
                        Send Message <i className="fa-solid fa-arrow-right"></i>
                      </a>
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Slide>

        <Slide direction="right" triggerOnce>
          <div className="contact_form">
            <div className="contact_title">
              <h2>Talk to me</h2>
            </div>

            <form ref={form} onSubmit={sendEmail}>
              <input
                className="contact_form_input"
                type="text"
                name="from_name"
                placeholder="your name"
              />
              <input
                className="contact_form_input"
                type="email"
                name="from_email"
                placeholder="your email"
              />

              <textarea
                name="message"
                className="contact_form_input"
                placeholder="write something"
              ></textarea>

              <input className="button" type="submit" value="Send" />
            </form>
          </div>
        </Slide>
      </div>
    </section>
  );
};

export default Contact;
