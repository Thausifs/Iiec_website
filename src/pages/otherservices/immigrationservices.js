import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import StudyAbroad from "../../components/studyabroad";
import YourNextStep from "../../components/yournextstep";
import Card2 from "../../components/card2";

const ImmigrationServices = () => {
  return (
    <div className="page">
      <Header />
      <Navbar />
      <div className="dis_flex">
        <div className="flex-container">
          <Card2
            icon="Studyincanada"
            title="Canada"
            content="The world has reinvented itself into a global village, and globalization has turned geographical boundaries into trading blocks. Advances in technology, breakthroughs in transportation systems, and the creation of a seamless global business have created a tremendous demand for sophisticated business people to go out and grow without bound. "
            link=""
          />
          <Card2
            icon="australiaimmigration"
            title="Australia"
            content="Canada is a Country made up of immigrants from all over the world. Canada's success is largely due to the contribution of new immigrants. "
            link="/immigrationaus"
          />
          <Card2
            icon="southafricaimmigration"
            title="South Africa"
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
export default ImmigrationServices;
