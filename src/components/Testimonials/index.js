import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

const Testimonials = () => {
  const settings = {
    className: "center",
    infinite: true,
    slidesToShow: 3,
    swipeToSlide: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          swipeToSlide: true,
          arrows: false,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div id="testimonials">
      <h1>What they've said</h1>
      <Slider {...settings}>
        <div className="slide">
          <img
            src={require("../../images/avatar-anisha.png")}
            alt=""
            className="avatar"
          />
          <div className="card">
            <p>Anisha Li</p>
            <div className="talk">
              “Manage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </div>
          </div>
        </div>
        <div className="slide">
          <img
            src={require("../../images/avatar-ali.png")}
            alt=""
            className="avatar"
          />
          <div className="card">
            <p>Ali Bravo</p>
            <div className="talk">
              “We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused.”
            </div>
          </div>
        </div>
        <div className="slide">
          <img
            src={require("../../images/avatar-richard.png")}
            alt=""
            className="avatar"
          />
          <div className="card">
            <p>Richard Watts</p>
            <div className="talk">
              “Manage allows us to provide structure and process. It keeps us
              organized and focused. I can’t stop recommending them to everyone
              I talk to!”
            </div>
          </div>
        </div>
        <div className="slide">
          <img
            src={require("../../images/avatar-shanai.png")}
            alt=""
            className="avatar"
          />
          <div className="card">
            <p>Shanai Gough</p>
            <div className="talk">
              “Their software allows us to track, manage and collaborate on our
              projects from anywhere. It keeps the whole team in-sync without
              being intrusive.”
            </div>
          </div>
        </div>
      </Slider>
      <div className="start-testi">
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default Testimonials;
