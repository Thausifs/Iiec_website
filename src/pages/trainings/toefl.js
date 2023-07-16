import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import StudyAbroad from '../../components/studyabroad';
import YourNextStep from '../../components/yournextstep';



const  TOEFL =() =>{
  return (
    <div className="page">
      <Header />
      <Navbar />
      <div className="dis_flex">
        <div className="flex-container">
          <h1 className="mainhead">TOEFL:</h1>
          <h2 className="mainhead">TOEFL COACHING AND TRAINING @ IIEC</h2>
          <p className="pagepara">
            The TOEFL course provides comprehensive coverage of all topics. Our
            trainers examine the most important basics, correct approaches,
            effective solutions and testing strategies. No stone will be left
            unturned! Expect Plenty of interaction and practice from leading
            TOEFL specialist.
          </p>
          <p className="pagepara">
            We are so confident in our TOEFL preparation program that we
            guarantee that your official TOEFL score will increase by at least
            20 points after completing our proven program.
          </p>

          <p className="pagepara">
            A team of professional instructors with the necessary work
            experience and education will train you. Our fully trained,
            full-time test prep experts also have an extremely high TOEFL score
            are extremely popular with students, and have an excellent track
            record of getting the highest score out of students.
          </p>

          <p className="pagepara">
            You will get all the study materials needed to pass the TOEFL exam,
            access to detailed notes, cheat sheets, practice questions, practice
            tests and vocabulary lists. Our learning system is constantly
            updated by our experienced in-house R&D team.
          </p>
          <p className="pagepara">
            {" "}
            So you can rest assured that you will be exposed to the latest
            techniques and testing trends . We maintain a complete library of
            resources to which our students have full access.{" "}
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
export default TOEFL ; 