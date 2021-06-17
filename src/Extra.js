import React from "react";
import "./Extra.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Extra() {
  AOS.init();
  return (
    <div>
      <div className="gap_extra"></div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <div className="extra_container">
          <div className="extra_set">
            <h1>Gallary</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Extra;
