import React from 'react';
import "../styles/componentscss/popularcourse.css";
import Explorescholarships from "../Asserts/images/Explorescholarships.png";

const PopularCourses = () => {
    return (
      <div className="popularcoursesmaincon">
        <h1 className="popularcourseshead"> Popular courses</h1>
        <div className="popularcoursescons">
          <div className="popularcoursesdivsone">
            <img className="images" src={Explorescholarships} alt=""></img>
            <h2 className="headings">Masters of Science</h2>
          </div>
          <div className="popularcoursesdivstwo">
            <img className="images" src={Explorescholarships} alt=""></img>
            <h2 className="headings">Masters </h2>
          </div>
          <div className="popularcoursesdivsthree">
            <img className="images" src={Explorescholarships} alt=""></img>
            <h2 className="headings">Engineering </h2>
          </div>
          <div className="popularcoursesdivsfour">
            <img className="images" src={Explorescholarships} alt=""></img>
            <h2 className="headings">Management </h2>
          </div>
        </div>
      </div>
    );}

export default  PopularCourses  