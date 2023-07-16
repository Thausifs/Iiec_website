import React from "react";
// import "../../styles/pagescss/studyabroadpg/guidetostudyabroad.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import StudyAbroad from "../../components/studyabroad";
import Card from "../../components/card.js";
import YourNextStep from "../../components/yournextstep";
import BottomBannerfirst from "../../components/bottombannerfirst";

const LetsPrepYouUp = () => {
  return (
    <div className="page">
      <Header />
      <Navbar />
      <div className="dis_flex">
        <div className="flex-container">
          <p className="mainhead">Let’s prep you up!</p>
          <p className="pagepara">
            So you have chosen your course. Now is the time to gear up your
            life-changing International educational experience. Numerous factor
            come into play when moving to your new Country – Visas, insurance,
            financial support, housing and work opportunities.
          </p>
          <p className="pagepara">
            As all this may seem overwhelming, IIEC advisors are dedicated to
            supporting you throughout your journey.
          </p>
          <p className="mainhead">Social advice for International students</p>
          <Card
            icon="studytips"
            title="Study tips"
            content="As an International student, it is important to understand how to maintain and balance your academic and social life. These tips will help you avoid last-minute stress."
            link="/courseadvice"
          ></Card>
          <Card
            icon="Managingmoney"
            title="Managing money"
            content="Managing your expenses and budget on your own is a task. Our financial survival guide is here to help you plan well for your money."
          ></Card>
          <Card
            icon="wanttopack"
            title="What to pack"
            content="Being organized is the key while packing. It will save your time and trouble in new Country. Our checklist will make sure you don't miss a thing."
          ></Card>
          <Card
            icon="NetworkingandSocialising"
            title="Networking and socialising"
            content="Learn how to connect and socialize for a successful professional life. These simple tips will get you around."
          ></Card>
        </div>
        <div className="flex-container">
          <StudyAbroad hgt="121vw" />
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
export default LetsPrepYouUp;
