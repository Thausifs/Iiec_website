import React from "react";
import "../styles/componentscss/topbanner.css";
import Studyabroadicon from "../Asserts/images/Studyabroadicon.png";
import Immigrationicon from "../Asserts/images/Immigrationicon.png";
import Trainingicon from "../Asserts/images/Trainingicon.png";
import Visaguidance from "../Asserts/images/Visaguidance.png";

const TopBanner = () => {
  return (
    <div className="topbanner">
      <div className="topbanner_studyabroad">
        <div className="h2topbanner">
          <span>
            <img className="Studyabroadicon" src={Studyabroadicon}></img>
          </span>
          Study Abroad
        </div>
        <hr className="hrlines"></hr>
        <p className="ptopbanner">
          We have over a decade of proven excellence in educating International
          students.
        </p>
      </div>
      <div className="topbanner_immigration">
        <div className="h2topbanner">
          <span>
            <img className="Immigrationicon" src={Immigrationicon} alt=""></img>
          </span>
          Immigration
        </div>
        <hr className="hrlineimmigra"></hr>
        <p className="ptopbanner">
          Our team of experts come up with strategies for 100% Visa and PR
          success rates.
        </p>
      </div>
      <div className="topbanner_training">
        <div className="h2topbanner">
          <span>
            <img className="Trainingicon" src={Trainingicon} alt=""></img>
          </span>
          Training
        </div>
        <hr className="hrlinetrain"></hr>
        <p className="ptopbanner">
          We train for qualifying exams like IELTS & GRE and Foreign languages
          etc.
        </p>
      </div>
      <div className="topbanner_visaguidances">
        <div className="h2topbanner">
          <span>
            <img className="Visaguidance" src={Visaguidance} alt=""></img>
          </span>
          Visa Guidance
        </div>
        <hr className="hrlinevisas"></hr>
        <p className="ptopbanner">
          We provide expert advice for all types of Visas.
        </p>
      </div>
    </div>
  );
};

export default TopBanner;
