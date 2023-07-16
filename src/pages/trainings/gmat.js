import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import StudyAbroad from '../../components/studyabroad';
import YourNextStep from '../../components/yournextstep';



const  GMAT =() =>{
  return (
    <div className="page">
      <Header />
      <Navbar />
      <div className="dis_flex">
        <div className="flex-container">
          <p className="mainhead">GMAT:</p>

          <p className="mainhead">GMAT COACHING AND TRAINING @ IIEC</p>
          <p className="pagepara">
            We offer GMAT Coaching with comprehensive coverage of all GMAT test
            topics. Trainers examine students on the most important basics,
            correct approaches, effective solving techniques, and testing
            strategies. Our one-on-one training strategy ensures full
            interaction and hands-on learning with our expert GMAT trainers.
          </p>
          <p className="pagepara">
            We are confident that you will achieve excellent results by taking
            our quality GMAT Preparation Coaching Program. Our proven Commodity
            and Training Techniques course expands on your core knowledge and
            builds the foundational strengths that translate your into excellent
            scores on the GMAT exam.
          </p>

          <p className="pagepara">
            We are confident that you will achieve excellent results by taking
            our quality GMAT Preparation Coaching Program.
          </p>

          <p className="pagepara">
            Our proven Commodity and Training Techniques course expands on your
            core knowledge and builds the foundational strengths that translate
            your into excellent scores on the GMAT exam.
          </p>
          <p className="pagepara">
            Our exceptional team of professional trainers have experience and
            educational backgrounds to provide the most comprehensive coaching.
            Our highly qualified full-time specialist personally attended his
            exam and achieved a very high GMAT score.
          </p>
          <p className="pagepara">
            {" "}
            This is a coveted advantage for an instructor with a stellar track
            record who is extremely popular with students and has produced top
            candidates.
          </p>
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
} 
export default GMAT ; 