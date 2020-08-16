import React from "react";
import illustration from "../../images/illustration-intro.svg";
import "./style.css";

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing-text">
        <h1>Bring everyone together to build better products.</h1>
        <p>
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <button>Get Started</button>
      </div>
      <div className="landing-image">
        <img src={illustration} alt="Illustration intro" />
      </div>
    </div>
  );
};

export default Landing;
