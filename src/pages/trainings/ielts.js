import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import StudyAbroad from "../../components/studyabroad";
import YourNextStep from "../../components/yournextstep";

const IELTS = () => {
  return (
    <div className="page">
      <Header />
      <Navbar />
      <div className="dis_flex">
        <div className="flex-container">
          <p className="mainhead">WHY IELTS?</p>
          <p className="pagepara">
            The IIEC is an accredited IELTS test registration center for the
            British Council and the IIEC. We have extensive resources, online
            content, highly qualified and trained trainers, and an excellent
            in-house training facility with the highest standards of training
            materials.
          </p>
          <p className="mainhead">WHAT WE OFFER :</p>
          <ul className="pagepara">
            <li>
              {" "}
              IIEC is an authorized IELTS partner of the British council and
              IIEC.
            </li>
            <li>
              British Council Certified trainers with more than 15 years of
              excellence in training experience.
            </li>
            <li>
              Trainers are highly experienced professionals who have personally
              surpassed the IELTS exams.
            </li>
            <li>
              Personalized One on One coaching to give individual care and
              mentoring.
            </li>
            <li>
              Periodical mock tests and assessments that replicate the actual
              exam.
            </li>
            <li>Free IELTS materials and E-books.</li>
            <li>
              Language Lab with good collection for mastering the IELTS speaking
              module.
            </li>
          </ul>

          <p className="mainhead">ABOUT IELTS:</p>
          <p className="pagepara">
            IELTS is accepted by most Institutions in Australia, the United
            Kingdom, Canada and New Zealand and over 3,000 Institutions in the
            United States. It is also his most coveted certification exam,
            demanded by various professional bodies around the world.
          </p>

          <p className="pagepara">
            IELTS is the only secure English language test endorsed by UK Visas
            and Immigration (UKVI) for Visa customers applying for in the UK and
            abroad. It is also a requirement for immigration to Australia, New
            Zealand and Canada.
          </p>
        </div>
        <div className="flex-container">
          <StudyAbroad hgt="110vw" />
        </div>
      </div>
      <div className="pagebtmcon"></div>
      <div className="dis_flex  pd_lt_rt " style={{ gap: "2vw" }}></div>

      <YourNextStep />
      <Footer />
    </div>
  );
};
export default IELTS;
