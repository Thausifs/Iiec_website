import React from 'react';
import '../styles/componentscss/yournextstep.css';
import subject from "../Asserts/images/subject.png";
import Abroad from "../Asserts/images/Abroad.png";


const YourNextStep = () =>{
    return (
      <div className="yournextstepcon">
        <div className="yournextstepsubject">
          <img className="imagessub" src={subject} alt=""></img>
          <div className="yournextstepinner">
            <p className="yournextstepara">
              Choose a topic and we'll find courses that match your criteria.
            </p>
          </div>
        </div>
        <div className="yournextstepdreams">
          <img className="imagesabd" src={Abroad} alt=""></img>
          <div className="yournextstepinnertext">
            <p className="yournextstepara">
              We will help you make your dream of studying abroad come true.
              Find how?
            </p>
          </div>
        </div>
      </div>
    );
}
export default YourNextStep ;