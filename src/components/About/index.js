import React from "react";
import "./style.css";

const About = () => {
  return (
    <div id="about">
      <div className="about-text">
        <h1>What's different about Manage?</h1>
        <p>
          Manage provides all the functionality your team needs, without
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>
      <div className="stepper">
        <div className="step">
          <div className="tambahan">
            <span className="num">01</span>
            <div className="title">Track company-wide progress </div>
          </div>
          <p>
            See how your day-to-day tasks fit into the wider vision. Go from
            tracking progress at the milestone level all the way done to the
            smallest of details. Never lose sight of the bigger picture again.
          </p>
        </div>
        <div className="step">
          <div className="tambahan">
            <span className="num">02</span>
            <div className="title">Advanced built-in reports </div>
          </div>
          <p>
            Set internal delivery estimates and track progress toward company
            goals. Our customisable dashboard helps you build out the reports
            you need to keep key stakeholders informed.
          </p>
        </div>
        <div className="step">
          <div className="tambahan">
            <span className="num">03</span>
            <div className="title">Everything you need in one place </div>
          </div>
          <p>
            Stop jumping from one service to another to communicate, store
            files, track tasks and share documents. Manage offers an all-in-one
            team productivity solution.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
