import React from "react";
// import "../../styles/pagescss/studyabroadpg/guidetostudyabroad.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import StudyAbroad from "../../components/studyabroad";
import YourNextStep from "../../components/yournextstep";
import Card2 from "../../components/card2";

const StudyAbroadDestinations = () => {
  return (
    <div className="page">
      <Header />
      <Navbar />
      <div className="dis_flex">
        <div className="flex-container gp_1">
          <p className="mainhead">Study abroad destinations</p>
          <p className="pagebold">
            Study abroad destinations where we partner with over 700 quality
            Institutions.
          </p>
          <p className="pagepara">
            You probably already know the qualities you are looking for in your
            study abroad destination. Now all you have to do is find the right
            one! To help you find your perfect destination, simply browse the
            Countries here and learn more about what it's like to study and live
            there!
          </p>
          <Card2
            icon="Ielts"
            title="Study in Korea"
            content="Korea is a very prosperous Country on the Asian continent. Most of India's technology-related supply comes from South Korea. It is a global leader in the technology and industrial sectors, and offers a wide range of employment opportunities in the same fields. Korea is famous for its perfect education system"
            link="/studyinkorea"
          ></Card2>
          <Card2
            icon="Studyintheusa"
            title="Study in the USA"
            content="The United States of America will always be the most popular destination for Indian and International students. It is not difficult to determine why. Quality education, diverse majors, flexibility, large campus, friendly teachers, funding and International opportunities are just some of the reasons that attract the largest number of students from all over the world. gender. It was then rightly asserted that the United States was “the land of a million opportunities.”"
            link="/studyinusa"
          />
          <Card2
            icon="Bachelorsinusa"
            title="Study in the Australia"
            content="Australia, the land of the ocean, is a great place to enjoy a world-class education and outstanding quality of life. It offers a wide variety of study options for International students, with over 1,100 Institutions and 22,000 courses to choose from."
            link="/studyinaustralia"
          />
          <Card2
            icon="Studyincanada"
            title="Study in Canada"
            content="Academic excellence, affordable costs, quality of life and adventure – Canada stands out as a great place to study. In 2017, Canada had nearly 500,000 International students studying at all levels in this Country; This explains its popularity worldwide."
            link=""
          />
        </div>
        <div className="flex-container">
          <StudyAbroad hgt="118vw" />
        </div>
      </div>
      <div className="pagebtmcon"></div>
      <div className="dis_flex  pd_lt_rt " style={{ gap: "2vw" }}>
        <Card2
          icon="Studyinmalaysia"
          title="Study in Malaysia"
          content="In this peaceful, diverse and modern society, Malaysia, located in Southeast Asia, is a testament to the world of what it can offer academically, socially, ethnically, culturally and in all other aspects of life to make any International student's stay worth their time, money and effort. It is a fascinating and enchanting Country."
          link="studyinmalaysia"
        />
        <Card2
          icon="Studyinsingapore"
          title="Study in Singapore"
          content="Without a doubt, studying in Singapore will serve as the foundation for a brighter future. Driven by excellence, educational Institutions in Singapore offer a broad curriculum and global perspective to equip students with the right qualifications and training to succeed in a competitive environment. painting. As a result, educational Institutions provide the latest and greatest educational tools and technologies."
          link="studyinsingapore"
        />
      </div>
      <div className="dis_flex  pd_lt_rt " style={{ gap: "2vw" }}>
        <Card2
          icon="Studyineurope"
          title="Study in Europe"
          content="We believe that education abroad is not an expense but an investment with a lifetime return."
          link="studyineurope"
        />
        <Card2
          icon="Studyinuk"
          title="Study in UK"
          content="The UK is a gateway to Europe! Despite being a small continent, Europe is diverse and fascinating."
          link="studyinuk"
        />
      </div>
      <div className="dis_flex  pd_lt_rt " style={{ gap: "2vw" }}>
        <Card2
          icon="studyinnewzealand"
          title="Study in New Zealand"
          content="Ranked second in the 2018 Global Peace Index, New Zealand is one of the safest Countries for International students. With the right combination of opportunities, culture, economy and climate, this Country will offer you an unforgettable experience."
          link="studyinnewzealand"
        />
      </div>
      <YourNextStep />
      <Footer />
    </div>
  );
};
export default StudyAbroadDestinations;
