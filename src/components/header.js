import React from 'react';
import '../styles/componentscss/header.css';
import IIEC_logo from "../Asserts/images/IIEC_logo.png";
// import Navbar from './navbar';
// import SearchIcon from "../Asserts/images/searchicon.png";
import Locationvector from "../Asserts/images/Locationvector.png";
import EventIcons from "../Asserts/images/Eventicons.png";






const Header = () => {

  const enquirtsectionbtn = () => {
      window.scrollTo(0, document.body.scrollHeight);
   }  

      return (
        <div className="header">
          <div className="headerdiv">
            {/*  <ul className='headerul'>
                  <li className='header_logo' ><a href="/" alt="logoddd"><img className='headerlogo' src={IIEC_logo}></img></a></li>
                  <li> <input id="searchimputplaceholder" className='header_placeholder' placeholder='Search' ></input>  </li>
                  <li className='event'><span><img className='eventvectorss' src={EventIcons}></img></span>Event</li>
                  <li className='findus'><span><img className='locationvector' src={Locationvector}></img></span>Find us </li>
                  <li><button className='enquirebtn' >Enquire</button></li>
              </ul>

            </div> */}
            <ul className="headerul">
              <li className="lione">
                <a href="/" alt="logoddd">
                  <img className="headerlogosd" src={IIEC_logo} alt=""></img>
                </a>
              </li>
              <li className="litwo">
                <input
                  id="searchimputplaceholdersd"
                  className="header_placeholdersd"
                  placeholder="Search"
                ></input>
              </li>
              <li className="lithree eventsd">
                <span>
                  <img
                    className="eventvectorsssd"
                    src={EventIcons}
                    alt=""
                  ></img>
                </span>
                Event
              </li>
              <li className="lifour findussd">
                <span>
                  <img
                    className="locationvectorsd"
                    src={Locationvector}
                    alt=""
                  ></img>
                </span>
                Find us
              </li>
              <li className="lifive">
                <button className="enquirebtnsd" onClick={enquirtsectionbtn}>
                  Enquire
                </button>
              </li>
            </ul>
          </div>
        </div>
      );}


export default Header ;