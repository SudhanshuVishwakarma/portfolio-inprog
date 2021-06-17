import React from "react";
import "./portfolio.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

function portfolio() {
  AOS.init();
  return (
    <div className="top">
      <ul
        data-aos="fade-down"
        data-aos-duration="900"
        id="nav_style"
        class="nav justify-content-center"
      >
        <li data-aos="fade-down" data-aos-duration="1100" class="content">
          <a className="font_apple">About</a>
        </li>
        <li data-aos="fade-down" data-aos-duration="1200" class="content">
          <a className="font_apple">Work</a>
        </li>
        <li data-aos="fade-down" data-aos-duration="1300" class="content">
          <a className="font_apple">Skills</a>
        </li>
        <li data-aos="fade-down" data-aos-duration="1300" class="content">
          <a className="font_apple">Servises</a>
        </li>
        <li data-aos="fade-down" data-aos-duration="1400" class="content">
          <a className="font_apple">Contact</a>
        </li>
      </ul>
      {/* <section className="banner"></section> */}
      {/* <div className="qoute">
        <h1>Blast past fast.</h1>
      </div> */}
    </div>
  );
}

export default portfolio;
