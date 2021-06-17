import React from "react";
import "./Main.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Main() {
  AOS.init();
  return (
    <div className="main">
      <h1 data-aos="fade-up" data-aos-duration="1000" className="font ">
        HELLO, <br></br>I'M SUDHANSHU
      </h1>
    </div>
  );
}

export default Main;
