import React from "react";
import "../styles/componentscss/navbar.css";

const Navbar = () => {
 

  

  return (
    <div className="navbar">
      <div className="dropdown ">
        <button className="dropbtn">Study Abroad</button>
        <div className="dropdown-content">
          <a href="/stepbystepguidepg">Step-by-step guide</a>
          <a href="/studyabroadbenefits">Benefits of studying abroad </a>
          <a href="/guideforparents">Guide for parents</a>
          <a href="/areyoureadytoapply">Are you ready to apply?</a>
          <a href="/timelinefor2022intakes">Timeline for 2023 intakes</a>
          <a href="/costtostudyabroad">
            How much does it cost to study abroad?
          </a>
          <a href="/lateststudyabroad">Latest Study Abroad Updates</a>
          <a href="/studyingabroadFAQs">Studying Abroad FAQs</a>
        </div>
      </div>

      <div className="dropdown dropdown12">
        <button className="dropbtn dropbtnn2" id="seconddropdown">
          What We do ?
        </button>
        <div className="dropdown-contentsecond">
          <a href="/letsprepyouup">Let’s prep you up!</a>
          <a href="/whatwedo">What we do</a>
          <a href="/sixreasonstoiiec">Reasons to choose IIEC</a>
          <a href="/freestudyabroad">Study abroad counselling</a>
          <a href="/courseadvice">Course advice </a>
          <a href="/studentvisaapplication">
            Student Visa application assistance{" "}
          </a>
          <a href="/predeparturesupport">Pre-departure support</a>
          <a href="/Aboutiiec">About us</a>
        </div>
      </div>
      <span className="glider"></span>
      <div className="dropdown">
        <button className="dropbtn">Study Destination</button>
        <div className="dropdown-contentthird">
          <a href="/studyinkorea">Study in Korea</a>
          <a href="/studyinusa">Study in USA</a>
          <a href="/studyincanada">Study in Canada</a>
          <a href="/studyinaustralia">Study in Australia</a>
          <a href="/studyinmalaysia">Study in Malaysia</a>
          <a href="/studyinsingapore">Study in Singapore</a>
          <a href="/studyineurope">Study in Europe</a>
          <a href="/studyinuk">Study in UK</a>
          <a href="/studyinnewzealand">Study in New Zealand</a>
          <a href="/wanttobecomeadoctor">Want to become a doctor ? </a>
          <a href="/studyhtm">Want to Study Hotel And Tourism managment ?</a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">Other Services</button>
        <div className="dropdown-contentfourth">
          <a href="/visa">Visa</a>
          <a href="/immigrationservices">Immigration</a>
          <a href="/internshipassistance">Intership Assistance</a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">Training</button>
        <div className="dropdown-contentfifth">
          <a href="/ielts">IELTS</a>
          <a href="/toefl">TOEFL</a>
          <a href="/pte">PTE</a>
          <a href="/gmat">GMAT</a>
          <a href="/sat">SAT</a>
          <a href="/gretraining">GRE</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
