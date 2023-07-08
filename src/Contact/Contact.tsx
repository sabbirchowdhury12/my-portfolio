import { FC, useRef } from "react";
import "./Contact.css";
import { Slide } from "react-awesome-reveal";
import emailjs from "@emailjs/browser";
import { contactInfoData } from "../utiles/data";
import toast, { Toaster } from "react-hot-toast";

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
            (e.target as HTMLFormElement).reset();
            toast.success("email send successfully");
          },
          (error) => {
            console.log(error.text);
            toast.error("something wrong");
          }
        );
    }
  };
  return (
    <section className="container" id="contact">
      <Toaster position="top-center" reverseOrder={false} />
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
              {contactInfoData.map((info, ind) => {
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
                required
              />
              <input
                className="contact_form_input"
                type="email"
                name="from_email"
                placeholder="your email"
                required
              />

              <textarea
                name="message"
                className="contact_form_input"
                placeholder="write something"
                required
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
