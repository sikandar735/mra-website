import React from "react";
import Marquee from "react-fast-marquee";
const MarqueeOne = () => {
  return (
    <div className="marquee-area bg-smoke">
      <div className="container-fluid p-0 overflow-hidden">
        <div className="slider__marquee">
          <div className="marquee_mode">
            <Marquee speed={50}>
              <div className="item">
               
                  <img src="assets/img/icon/marquee-icon-1-2.svg" alt="img" />
                  <span className="text-stroke">Breaking Barriers</span>
               
              </div>
              <div className="item">
               
                  <img src="assets/img/icon/marquee-icon-1-1.svg" alt="img" />
                  <span>New Park Opening in Downtown Milton</span>
               
              </div>
              <div className="item">
               
                  <img src="assets/img/icon/marquee-icon-1-2.svg" alt="img" />
                  <span className="text-stroke">Milton High School Achieves Record Exam Results</span>
               
              </div>
              <div className="item">
               
                  <img src="assets/img/icon/marquee-icon-1-1.svg" alt="img" />
                  <span>Local  MRA Expo to be Held Next Month</span>
               
              </div>
              <div className="item">
               
                  <img src="assets/img/icon/marquee-icon-1-1.svg" alt="img" />
                  <span>Milton Charity Run Raises Funds for Community Projects</span>
               
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarqueeOne;
