import React from "react";
// import "../../styles/pagescss/studyabroadpg/guidetostudyabroad.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import StudyAbroad from "../../components/studyabroad";
import YourNextStep from "../../components/yournextstep";

const StudyHTM = () => {
  return (
    <div className="page">
      <Header />
      <Navbar />
      <div className="dis_flex">
        <div className="flex-container">
          <p className="mainhead">
            Want to Study Hotel And Tourism managment ?
          </p>
          <h2 className="mainhead">STUDY IN HTMI</h2>
          <p className="studyhtmpara pagepara">
            Quality of education made possible in Dubai.
          </p>
          <p className="studyhtmpara pagepara">
            Join HTMI Dubai and gain world-class experience in global
            hospitality and tourism management.
          </p>
          <p className="studyhtmpara pagepara">
            IIEC is proud to be the master agent globally for HTMI Dubai.
          </p>
          <p className="studyhtmpara pagepara">
            Register your name on success by registering with IIEC.
          </p>

          <p className="mainhead">Advantages of joining HTMI Dubai</p>
          <ul className="studyhtmpara pagepara">
            <li>
              75% of HTMI graduates join Major International hotel chains.
            </li>
            <li>
              Brand new modern campus in the heart of Dubai at Studio One Hotel.
            </li>
            <li>
              Approved and endorsed by the Agency for Knowledge and Human
              Development in the United Arab Emirates.
            </li>
            <li>
              International learning path to HTMI global campuses in Singapore
              and Switzerland.
            </li>

            <li>
              Global hospitality network for Internships and work placements.
            </li>
            <p>
              80% of HTMI graduates get a full-time position before completing
              final semesters.
            </p>
          </ul>
          <p className="mainhead">Get only the best in Dubai </p>
          <ul className="studyhtmpara pagepara">
            <li>Soak into the luxury of Dubai</li>
            <li>Many Cultures in One Location</li>
            <li>Explore All Seven Emirates Countries</li>
            <li>Gateway to Europe</li>
            <li>Known for the luxury hotels and resorts</li>
            <li>Part-time jobs for students </li>
          </ul>
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
export default StudyHTM;
