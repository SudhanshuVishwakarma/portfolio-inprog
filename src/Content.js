import React from "react";
import "./Content.css";
import AOS from "aos";
import "aos/dist/aos.css";

function content() {
  AOS.init();
  return (
    <div>
      <div className="bg_color">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1000"
        >
          <div className="About_container">
            <h1>
              <a>A</a>
              <a>b</a>
              <a>o</a>
              <a>u</a>
              <a>t</a>
            </h1>
            <h2>
              The definition of a portfolio is a flat case used for carrying
              loose sheets of paper or a combination of investments or samples
              of completed works.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default content;
