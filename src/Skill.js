import React, { useState, useEffect } from "react";
import "./Skill.css";
import AOS from "aos";
import "aos/dist/aos.css";

function skill() {
  AOS.init();
  return (
    <div data-aos="fade-up" data-aos-duration="1000">
      <div className="gap_skill"></div>
      <div className="skill_container">
        <div className="skill_set">
          <h1>SKILL</h1>
        </div>
      </div>
    </div>
  );
}

export default skill;
