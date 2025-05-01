import React, { useState, useRef, useCallback } from "react";
import Avatar from "../public/assets/avatar.gif";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import styles from "../css/contactForm.module.css";

const ContactForm = () => {
  const [status, setStatus] = useState("");
  const form = useRef();

  const handleOnSubmit = useCallback((e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vfhjlfq",
        "template_bjd1ys6",
        form.current,
        "xb23kWtrN2m00CfkR"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent Successfully!");
          setStatus("Message Sent Successfully!");
          // Reset the form after successful submission.
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus("Something went wrong. Please try again.");
        }
      );

    e.target.reset();
  }, []);

  const addClass = useCallback(() => {
    document.body.classList.add("sent");
  }, []);

  return (
    <div className={styles.contactForm}>
      <div className={styles.container}>
        <div className={styles.avatarForm}>
          <div className={styles.avatarDiv}>
            <img src={Avatar} alt="avatar" />
          </div>

          <div className={styles.formH2}>
            <h2>&bull; Keep in Touch &bull;</h2>
            <form ref={form} onSubmit={handleOnSubmit} className={styles.contactFormForm}>
              <div className={styles.name}>
                <label htmlFor="name_input"></label>
                <input
                  type="text"
                  placeholder="My name is"
                  name="from_name"
                  id="name_input"
                  required
                />
              </div>
              <div className={styles.email}>
                <label htmlFor="email_input"></label>
                <input
                  type="email"
                  placeholder="My e-mail is"
                  name="email"
                  id="email_input"
                  required
                />
              </div>
              <div className={styles.telephone}>
                <label htmlFor="telephone_input"></label>
                <input
                  type="text"
                  placeholder="My number is"
                  name="telephone"
                  id="telephone_input"
                  required
                />
              </div>
              <div className={styles.subject}>
                <label htmlFor="subject_input"></label>
                <select
                  placeholder="Subject line"
                  name="subject"
                  id="subject_input"
                  required
                >
                  <option disabled hidden value="">
                    Subject line
                  </option>
                  <option>I'd like to start a project</option>
                  <option>I'd like to ask a question</option>
                  <option>I'd like to make a proposal</option>
                </select>
              </div>
              <div className={styles.message}>
                <label htmlFor="message_input"></label>
                <textarea
                  name="message"
                  placeholder="I'd like to chat about"
                  id="message_input"
                  cols="30"
                  rows="5"
                  required
                ></textarea>
              </div>
              <div className={styles.submit}>
                <input
                  type="submit"
                  value="Send Message"
                  id="form_button"
                  onClick={addClass}
                />
              
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
