import React from "react";
import twitter from "../src/images/twitter.png";
import facebook from "../src/images/facebook.png";
import instagram from "../src/images/instagram.png";
import gmail from "../src/images/gmail.png";
import whatsapp from "../src/images/whatsapp.png";
import phone from "../src/images/ringing-phone-icon.png";

const Home = () => {
  return (
    <>
      <div className="home">
        <h1 className="logo">
          {" "}
          <span>food hub</span>{" "}
        </h1>
        <div className="header-icon">
          <a href="#">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="#">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="#">
            <img src={instagram} alt="instagram" />
          </a>
          <a href="#">
            <img src={gmail} alt="gmail" />
          </a>
          <a href="#">
            <img src={whatsapp} alt="whatsapp" />
          </a>
          <a href="#">
            <img src={phone} alt="phone" className="phone-ring" />
          </a>
        </div>

        <h1>
          welcome to <span>food hub</span>{" "}
        </h1>
        {/* <marquee behavior="scroll" direction=""></marquee> */}
      </div>
    </>
  );
};
export default Home;
