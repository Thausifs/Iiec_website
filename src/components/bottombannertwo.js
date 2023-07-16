import React from "react";
import "../styles/componentscss/bottombannertwo.css";
import Applyfor2022intakes from "../Asserts/images/Applyfor2022intakes.png";
import ImportantDocumentstoStudyAbroad from "../Asserts/images/ImportantDocumentstoStudyAbroad.png";
import Explorescholarships from "../Asserts/images/Explorescholarships.png";
import TimeHigher from "../Asserts/images/TimeHigher.png";

const BottomBannertwo = () => {
  return (
    <div>
      <div className="bottombannersecondconbb">
        <div className="bottombannersecondonebb">
          <img
            className="bottombannersecondimg"
            src={Explorescholarships}
            alt=""
          ></img>
          <p className="secondparaheading">Explore Scholarships</p>
          <p className="secondpara">
            Lower your expenses by applying for grants, scholarships and
            fellowships.
          </p>
        </div>
        <div className="bottombannersecondtwobb">
          <img
            className="bottombannersecondimg"
            src={ImportantDocumentstoStudyAbroad}
            alt=""
          ></img>
          <p className="secondparaheading  td_sm">
            Important Documents to Study Abroad
          </p>
          <p className="secondparatwo">
            Here is an overview of the main documents you will need to apply
            for.
          </p>
        </div>
        <div className="bottombannersecondthreebb">
          {" "}
          <img
            className="bottombannersecondimg"
            src={Applyfor2022intakes}
            alt=""
          ></img>
          <p className="secondparaheading">Apply for 2023 intakes</p>
          <p className="secondpara">
            We have prepared a timetable for you to start your study abroad
            trip.
          </p>
        </div>
        <div className="bottombannersecondfourbb">
          {" "}
          <img className="bottombannersecondimg" src={TimeHigher} alt=""></img>
          <p className="secondparaheading ul_none">
            {" "}
            Times Higher Education World University Rankings
          </p>
        </div>
      </div>
    </div>
  );
};

export default BottomBannertwo;
