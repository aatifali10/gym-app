import React from "react";
import "./plans.css";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";
const Plans = () => {
  return (
    <>
      <div className="plans-container" id="plans">
        <div className="blur blur-p-1"></div>
        <div className="blur blur-p-2"></div>
        <div className="programs-header" style={{ gap: "2rem" }}>
          <span className="stroke-text">Ready to start</span>
          <span>Your journey</span>
          <span className="stroke-text">Now withus</span>
        </div>
      </div>
      {/* Plans Card */}
      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>

            <div className="features">
              {plan.features.map((features, i) => (
                <div className="feature">
                  <img src={whiteTick} alt="" />
                  <span key={i}>{features}</span>
                </div>
              ))}
            </div>
            <div>
              <span>See more benefits --></span>
            </div>
            <button className="btn">Join now</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Plans;
