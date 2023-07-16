import React from "react";
import "../styles/componentscss/bottombannerfirst.css";
import Paveyourpathtosuccess from "../Asserts/images/Paveyourpathtosuccess.png";
import LetsHelp from "../Asserts/images/LetsHelp.png";
import Studyabroadexpenses from "../Asserts/images/Studyabroadexpenses.png";
import weansweryourqueries from "../Asserts/images/weansweryourqueries.png";

const BottomBannerfirst = () => {
  return (
    <div>
      <div className="bottombannerfirstconbb">
        <div className="bottombannerfirstone">
          <img
            className="paveyourpathtosuccessimg"
            src={Paveyourpathtosuccess}
            alt=""
          ></img>
          <p className="firstparaheadingbb">Pave your path to success</p>
          <p className="firstparabb ">
            We will lead you every step of the way, from start to finish, in the
            registration process.
          </p>
        </div>
        <div className="bottombannerfirsttwo">
          <img className="paveyourpathtosuccessimg" src={LetsHelp} alt=""></img>
          <p className="firstparaheadingbb">Let's help you study abroad</p>
          <p className="firstparabb">
            Join the growing list of successful students finding their ideal
            study destination every 15 minutes. Be the next.
          </p>
        </div>
        <div className="bottombannerfirstthree">
          {" "}
          <img
            className="paveyourpathtosuccessimg"
            src={weansweryourqueries}
            alt=""
          ></img>
          <p className="firstparaheadingbb">We answer your queries</p>
          <p className="firstparabb">
            We are your go-to source for anything and everything related to
            studying abroad.
          </p>
        </div>
        <div className="bottombannerfirstfour">
          {" "}
          <img
            className="paveyourpathtosuccessimg"
            src={Studyabroadexpenses}
            alt=""
          ></img>
          <p className="firstparaheadingbb">Study abroad expenses</p>
          <p className="firstparabb">
            Determine a realistic budget of studying and living in a new
            Country.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BottomBannerfirst;
