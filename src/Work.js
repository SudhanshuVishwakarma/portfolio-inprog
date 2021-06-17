import React from "react";
import "./Work.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Work() {
  AOS.init();
  return (
    <div className="work">
      <div className="gap"></div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <div className="bg_work">
          <div className="work_container">
            <p>This is my work on web development</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
