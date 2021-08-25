import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

// import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMapMarkerAlt,
  faEnvelope,
  faMobileAlt,
  faPhoneAlt,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <section className="contact section-padding">
      <div className="title">
        <h1>contact us</h1>
        <div className="underline"></div>
      </div>
      <article className="contact-items">
        <p className="contact-text">
          We're a Lagos based food delivery and catering service. Do you need
          tasty meals like Jollof and fried rice, Efo riro, etc. in a small and
          large quantities ? Do you like what you see ? Please feel free to
          contact us and also follow us on our social media handles for updates
          and promo.{" "}
        </p>
        <div className="contact-item">
          <h1>
            {" "}
            <FontAwesomeIcon
              className="contact-icon"
              icon={faMapMarkerAlt}
            />{" "}
            address :
          </h1>
          <h4>
            74, Ikejiani Road, Railway Compound, Ebute Metta, Lagos. Nigeria.{" "}
          </h4>
        </div>

        <div className="contact-item">
          <h1>
            {" "}
            <FontAwesomeIcon className="contact-icon" icon={faEnvelope} /> email
            :
          </h1>
          <h4>foodhut@gmail.com </h4>
        </div>

        <div className="contact-item">
          <h1>
            {" "}
            <FontAwesomeIcon className="contact-icon" icon={faMobileAlt} />{" "}
            mobile :
          </h1>
          <h4>+2348132269961 </h4>
        </div>

        <div className="contact-item">
          <h1>
            {" "}
            <FontAwesomeIcon className="contact-icon" icon={faPhoneAlt} /> phone
            :
          </h1>
          <h4>+2348059737342 </h4>
        </div>

        <div className="contact-item">
          <h1>
            {" "}
            <FontAwesomeIcon className="contact-icon" icon={faClock} /> opening
            hours :
          </h1>
          <h4>Mon - Fri 9am - 5pm </h4>
          <h4>Sat - Sun 11am - 4pm</h4>
        </div>

        <div className="social-icons">
          <a href="#" className="link-icon">
            {" "}
            <FaTwitter className="twitter" />
          </a>
          <a href="#" className="link-icon">
            <FaFacebook className="facebook" />
          </a>
          <a href="#" className="link-icon">
            <FaInstagram className="instagram" />
          </a>
          <a href="#" className="link-icon">
            <FaWhatsapp className="whatsapp" />
          </a>
        </div>
      </article>
    </section>
  );
};

export default Contact;
