import React from "react";
import about from "../src/images/about.jpg";
import story from "../src/images/story.jpeg";

function About() {
  return (
    <section className="about section-padding">
      <div className="grid-container grid-container-medium-2">
        <article className="about-container">
          <div className="section-title">
            <div className="section-title-name">our story</div>
            <div className="section-underline"></div>
            <p className="section-title-text">
              Chef Jaytee and Vera are sisters and <span>Food Hub</span> is
              their greatest endeavor. out of Chef Jaytee passion and skills in
              cooking and Vera business acumen, <span>Food Hub</span> was born.
              Built on the foundation of sisters.
            </p>
          </div>

          <div className="about_img ">
            <img src={about} alt="about-meal" className="about-img-item" />
          </div>
        </article>

        <article className="about-container">
          <div className="section-title">
            <div className="section-title-name">our vision</div>
            <div className="section-underline"></div>
            <p className="section-title-text">
              Our aim is to forever grow, improve and build more wonderful
              moments to as many people as we can and to endlessly create happy
              memories through excellent food and exceptional service, with an
              experience of comfort, gratification delight.
            </p>
          </div>

          <div className="about_img about-img-special">
            <img src={story} alt="about-meal" className="about-img-item" />
          </div>
        </article>
      </div>
    </section>
  );
}

export default About;
