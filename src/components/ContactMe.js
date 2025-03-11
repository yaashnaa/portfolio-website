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

// Extracted style object outside of the component to improve performance.
const iconStyle = { color: "#ffffff" };
const ContactForm = () => {
  const [status, setStatus] = useState("");
  const form = useRef();

 // Memoize the submit handler to avoid unnecessary re-creations.
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

        // added error handling
        (error) => {
          console.log(error.text);
          setStatus("Something went wrong. Please try again.");
        }
      );

    e.target.reset();
  });

 // Memoize the function that adds a class to the document body.
 const addClass = useCallback(() => {
  document.body.classList.add("sent");
}, []);

  return (
    <div className="contact-form">
      <div id="container">
        <div className="avatar-form">
          <div className="avatar-div">
            <img src={Avatar} alt="avatar" />
          </div>

          <div className="form-h2">
            <h2>&bull; Keep in Touch &bull;</h2>
            <form ref={form} onSubmit={handleOnSubmit} id="contact_form">
              <div className="name">
                <label for="name"></label>
                <input
                  type="text"
                  placeholder="My name is"
                  name="from_name"
                  id="name_input"
                  required
                />
              </div>
              <div className="email">
                <label for="email"></label>
                <input
                  type="email"
                  placeholder="My e-mail is"
                  name="email"
                  id="email_input"
                  required
                />
              </div>
              <div className="telephone">
                <label for="name"></label>
                <input
                  type="text"
                  placeholder="My number is"
                  name="telephone"
                  id="telephone_input"
                  required
                />
              </div>
              <div className="subject">
                <label for="subject"></label>
                <select
                  placeholder="Subject line"
                  name="subject"
                  id="subject_input"
                  required
                >
                  <option disabled hidden selected>
                    Subject line
                  </option>
                  <option>I'd like to start a project</option>
                  <option>I'd like to ask a question</option>
                  <option>I'd like to make a proposal</option>
                </select>
              </div>
              <div className="message">
                <label for="message"></label>
                <textarea
                  name="message"
                  placeholder="I'd like to chat about"
                  id="message_input"
                  cols="30"
                  rows="5"
                  required
                ></textarea>
              </div>
              <div className="submit">
                <input
                  type="submit"
                  value="Send Message"
                  id="form_button"
                  onClick={addClass()}
                />
                <div className="icons">
                  <a
                    href="https://www.linkedin.com/in/yaashna-gupta-a78473237"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      size="2xl"
                      style={{ color: "#ffffff" }}
                    />
                  </a>

                  <a
                    href="https://github.com/yg2348"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      size="2x"
                      style={{ color: "#ffffff" }}
                    />
                  </a>
                  <a
                    href="https://drive.google.com/file/d/19fdjmJTiLdouylxjFgCNV1AmufeNcoRf/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faFile}
                      size="2x"
                      style={{ color: "#ffffff" }}
                    />{" "}
                  </a>
                  <a
                    href="https://www.instagram.com/_.yaashna._/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FontAwesomeIcon
                      icon={faInstagram}
                      size="2x"
                      style={{ color: "#ffffff" }}
                    />
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
