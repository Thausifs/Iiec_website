import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import StudyAbroad from "../../components/studyabroad";
import YourNextStep from "../../components/yournextstep";
import Card2 from "../../components/card2";

const Visa = () => {
  return (
    <div className="page">
      <Header />
      <Navbar />
      <div className="dis_flex">
        <div className="flex-container">
          <Card2
            icon="businessvisa"
            title="Business Visa"
            content="J1's Cultural Exchange Program provides students, recent graduates, and young professionals with rich opportunities to improve their lives and careers through the experience of living and working in the United States."
            link="businessvisa"
          />
          <Card2
            icon="dependentvisa"
            title="Dependent Visa "
            content="Canada is a Country made up of immigrants who have immigrated to Canada from all Countries around the world. Canada's success is largely due to the contribution of new immigrants."
            link="dependentvisa"
          />
          <Card2
            icon="ebsvisa"
            title="EB5 Visa"
            content="Get your Intership in USA"
            link="eb5visa"
          />
          <Card2
            icon="H1Bvisa"
            title="H1B Alternative"
            content="Get your Intership in USA"
            link="h1balternative"
          />
          <Card2
            icon="touristvisa"
            title="Tourist Visa"
            content="Get your Intership in USA"
            link="touristvisa"
          />
          <Card2
            icon="visarefusal"
            title="Visa Refusal"
            content="Get your Intership in USA"
            link=""
          />
        </div>
        <div className="flex-container">
          <StudyAbroad hgt="110vw" />
        </div>
      </div>

      <YourNextStep />
      <Footer />
    </div>
  );
};
export default Visa;
