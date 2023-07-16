import React from "react";
// import "../../styles/pagescss/studyabroadpg/guidetostudyabroad.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import StudyAbroad from "../../components/studyabroad";
import YourNextStep from "../../components/yournextstep";

const WanttoBecomeaDoctor = () => {
  return (
    <div className="page">
      <Header />
      <Navbar />
      <div className="dis_flex">
        <div className="flex-container">
          <p className="mainhead">Want to become a doctor ?</p>
          <p className="pagebold">
            A stethoscope around your neck and a lab coat over your shoulder are
            just a click away. Register with IIEC to register your future in
            safe hands.
          </p>
          <p className="pagepara">
            If you are reading this, you have already written your dream as a
            doctor. The IIEC offers the opportunity to study MBBS abroad with
            its hassle-free admission process. There are many opportunities
            waiting for you around the world.
          </p>
          <p className="mainhead">Philippines</p>
          <ul className="pagepara">
            <li className="">
              Experience top-tier education with world-class facilities.
            </li>
            <li className="">Adopts the American education model.</li>
            <li className="">
              Offers tuition fees 65% lower than those of private medical
              colleges in India.
            </li>
            <li className="">English is the medium of instruction.</li>
            <li className="">Provides access to Indian cuisine. </li>
            <li className="">
              Boasts a diverse community of over 20,000 international students.{" "}
            </li>
          </ul>

          <p className="mainhead">KYRGYZSTAN</p>
          <ul className="pagepara">
            <li> Recognized for medical studies in Central Asia.</li>
            <li>Instruction is in English. </li>
            <li>Lower fees compared to private medical colleges in India</li>
            <li>Produced numerous doctors from India.</li>
            <li>Increased job placement opportunities. </li>
            <li>
              Located strategically close to China and Russia, providing
              opportunities to practice in those countries.
            </li>
            <li>Opportunities for student mobility worldwide. </li>
          </ul>
          <p className="mainhead">Ukraine</p>
          <ul className="pagepara">
            <li>
              Home to some of the world's oldest universities with a rich
              academic history.
            </li>
            <li>Boasts experienced and knowledgeable professors. </li>
            <li>English is the medium of instruction.</li>
            <li>
              Location offers close proximity to the European Union, providing
              opportunities for future prospects in the EU.
            </li>
            <li>A safe country with a low crime rate.</li>
            <li>
              Offers lower fees compared to private medical colleges in India.{" "}
            </li>
          </ul>

          <p className="mainhead">Georgia</p>
          <ul className="pagepara">
            <li>
              Excellent education facilities with practical training
              opportunities.
            </li>
            <li>Lower fees compared to Indian private medical colleges.</li>
            <li>Affordable cost of living.</li>
            <li>Availability of Indian food.</li>
            <li>100% visa approval rate.</li>
            <li>Rewarding career opportunities for medical graduates.</li>
            <li>Safe and peaceful study environment.</li>
            <li>
              English medium instruction for international medical students.{" "}
            </li>
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
export default WanttoBecomeaDoctor;
