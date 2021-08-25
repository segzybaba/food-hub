import React from "react";

const Home = () => {
  return (
    <>
      <div className="home">
        <h1 className="logo">
          {" "}
          <span>food hub</span>{" "}
        </h1>

        <marquee behavior="scroll" direction="">
          <h1>
            welcome to <span>food hub</span>{" "}
          </h1>
        </marquee>
      </div>
    </>
  );
};
export default Home;
