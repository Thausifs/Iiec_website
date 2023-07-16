import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import StudyAbroad from "../../components/studyabroad";
import YourNextStep from "../../components/yournextstep";
import Card2 from "../../components/card2";

const InternshipAssistance = () => {
  return (
    <div className="page">
      <Header />
      <Navbar />
      <div className="dis_flex">
        <div className="flex-container">
          <Card2
            icon="USAJ1"
            title="USA J ‐ 1"
            content="The world has reinvented itself into a global village, and globalization has turned geographical boundaries into trading blocks. Advances in technology, breakthroughs in transportation systems, and the creation of a seamless global business have created a tremendous demand for sophisticated businesspeople to go out and grow without bound. "
            link="/USAJ1intassistance"
          />
          <Card2
            icon="USAJ1_summer"
            title="USA J1 SUMMER WORK & TRAVEL"
            content="Canada is a Country made up of immigrants who have immigrated to Canada from all Countries around the world. Canada's success is largely due to the contribution of new immigrants. "
            link="/USAJ1summer&travel"
          />
          <Card2
            icon="USAJ1_caretaker"
            title="USA J1 CARETAKER"
            content="Get your Intership in USA"
            link="/USAJ1caretaker"
          />
          <Card2
            icon="Malaysia"
            title="Malaysia"
            content="Get your Intership in USA"
            link="/intassismalaysia"
          />
        </div>
        <div className="flex-container">
          <StudyAbroad hgt="110vw" />
        </div>
      </div>
      <div className="dis_flex  pd_lt_rt " style={{ gap: "2vw" }}></div>

      <YourNextStep />
      <Footer />
    </div>
  );
};
export default InternshipAssistance;
