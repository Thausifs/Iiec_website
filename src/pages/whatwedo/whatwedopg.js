import React from "react";
// import "../../styles/pagescss/studyabroadpg/guidetostudyabroad.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import StudyAbroad from "../../components/studyabroad";
import Card from "../../components/card.js";
import YourNextStep from "../../components/yournextstep";
import BottomBannerfirst from "../../components/bottombannerfirst";

const WhatWeDo = () => {
  return (
    <div className="page">
      <Header />
      <Navbar />
      <div className="dis_flex">
        <div className="flex-container">
          <p className="mainhead">What we do</p>
          <p className="pageparabold">
            Study abroad with someone who knows the way.
          </p>
          <p className="pagepara">
            IIEC is a reputable worldwide supplier of international education
            services with almost 50 years of experience in the industry.
          </p>
          <p className="pagepara">
            {" "}
            With our expert staff and established position, we are well-equipped
            to assist you in achieving your study abroad goals and ensure a
            bright and fulfilling international future.
          </p>
          <p className="mainhead">Student Essential Services</p>
          <Card
            icon="Courseadvice"
            title="Course advice"
            content="Choosing a major and college can be overwhelming with so many options available. Allow us to assist you in finding a course that aligns with your career objectives."
            link="/courseadvice"
          ></Card>
          <Card
            icon="visaapplicationassistance"
            title="Visa application assistance"
            content="We will assist you with the application process and provide guidance on preparing the necessary documents for your visa application."
            link="/studentvisaapplication"
          ></Card>
          <Card
            icon="wanttopack"
            title="Prepare for departure"
            content="Our pre-flight assistance service is designed to help you feel confident and prepared for your study abroad journey. We provide you with all the necessary information about your destination country, including visa requirements, customs and immigration procedures, and transportation options. "
          ></Card>
          <Card
            icon="NetworkingandSocialising"
            title="Free study abroad counselling"
            content="Our team of advisors are experienced professionals in international education and are dedicated to assisting you in finding the right course and country to achieve your academic goals. The best part is that all of our advisory sessions are completely free."
            link="/freestudyabroad"
          ></Card>
        </div>
        <div className="flex-container">
          <StudyAbroad hgt="123vw" />
        </div>
      </div>
      <div className="pagebtmcon">
        <BottomBannerfirst />
      </div>

      <YourNextStep />
      <Footer />
    </div>
  );
};
export default WhatWeDo;
