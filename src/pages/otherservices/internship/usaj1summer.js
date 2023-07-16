import React from "react";
import "../../../styles/pagescss/usaj1interasistance.css";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import Navbar from "../../../components/navbar";
import StudyAbroad from "../../../components/studyabroad";
import YourNextStep from "../../../components/yournextstep";

const USAJ1SummerTravel = () => {
  return (
    <div className="page">
      <Header />
      <Navbar />
      <div className="dis_flex">
        <div className="flex-container">
          <p className="mainhead">USA J1 SUMMER WORK & TRAVEL</p>
          <p className="pagebold">PROGRAM DETAILS</p>
          <ul>
            <li className="pagepara">
              J1 Cultural Exchange Programs offer students, university graduates
              and young professionals an enriching opportunity to enhance their
              lives and careers with the experience of living and working in the
              United States.
            </li>
            <li className="pagepara">
              • The J-1 Visa provides countless opportunity for international
              candidates to visit the United States and gain valuable
              experience. This program offers a wide range of options for
              foreign nationals, including teaching, studying, researching,
              demonstrating special skills, and receiving on-the-job training.
              Depending on the type of program, individuals can stay in the U.S.
              for a few weeks or up to several years. This visa is a great way
              to expand one's knowledge and experience, and open the door to a
              variety of new possibilities.
            </li>
          </ul>
          <div className="darkeddiv">
            <div className="darkeddivfirst">
              <p className="pagepara">Name</p>
              <p className="pagepara">DURATION</p>
              <p className="pagepara">VISA TYPE</p>
              <p className="pagepara marginbtmelligiusaj1sum">ELLIGIBILITY</p>
              <p className="pagepara marbtmselectionusajisum">SELECTION</p>
              <p className="pagepara marbtmfeaturesusaj1sum">FEATURES</p>
              <p className="pagepara">PROGRAM EARNINGS</p>
            </div>
            <div>
              <p className="pagepara">USA INTERN / TRAINEE PROGRAM</p>
              <p className="pagepara">
                12 to 18 months (Extendable upto 3 Years)
              </p>
              <p className="pagepara">J1</p>
              <p className="pagepara">Age 19-24 years</p>
              <p className="pagepara">Full Time Student is a must.</p>
              <p className="pagepara">
                - 1st & 2nd Year Student in Under Graduate Course
              </p>
              <p className="pagepara">
                - 1st Year Student in Post Graduate Course (All stream are
                eligible).
              </p>
              <p className="pagepara">Photograph of full face.</p>
              <p className="pagepara">
                Good/Pleasing personality and a positive & enthusiastic approach
                to work is a must.
              </p>
              <p className="pagepara">
                Excellent English Speaking & Writing abilities is must.
              </p>
              <p className="pagepara">
                Sponsor & Employer Interview Of The Candidate via Skype/Phone.
              </p>
              <p className="pagepara">
                {" "}
                Opportunity to gain exposure of US Culture.
              </p>
              <p className="pagepara">Expansion of Horizon.</p>
              <p className="pagepara">Assured placement.</p>
              <p className="pagepara">International work experience.</p>
              <p className="pagepara">
                Low program cost in comparison with Student Visa.
              </p>
              <p className="pagepara">
                No Hassle’s of Bank Balance. Minimum 3 lakh bank balance
                required.
              </p>
              <p className="pagepara">No IELTS / TOEFL score</p>
              <p className="pagepara">Will avail Social Security Number</p>
              <p className="pagepara">
                Summer jobs at theme parks, clubs & beach resorts, amusement
                parks, casino’s, hotel, food chains like subway, 9/11, theatres,
                etc…
              </p>
              <p className="pagepara">
                $ 8 to $ 12 per hour Weekly Minimum 40 hours Minimum Total
                Earning Per Annum $15,360 /‐ approximately Over Time Extra.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-container">
          <StudyAbroad hgt="120vw" />
        </div>
      </div>
      <div className="pagebtmcon"></div>
      <div className="dis_flex  pd_lt_rt " style={{ gap: "2vw" }}></div>

      <YourNextStep />
      <Footer />
    </div>
  );
};
export default USAJ1SummerTravel;
