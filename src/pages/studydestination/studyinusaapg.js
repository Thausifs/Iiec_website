import React from "react";
// import "../../styles/pagescss/studyabroadpg/guidetostudyabroad.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import StudyAbroad from "../../components/studyabroad";
import YourNextStep from "../../components/yournextstep";
import Card2 from "../../components/card2";

const StudyinUSA = () => {
  return (
    <div className="page">
      <Header />
      <Navbar />
      <div className="dis_flex">
        <div className="flex-container">
          <p className="mainhead">Study in USA</p>
          <p className="pagebold">STUDYING IN USA</p>
          <p className="pagepara">
            The United States of America will continue to be the most popular
            study destination for Indian and international students. It's not
            difficult to see why.
          </p>
          <p className="pagepara">
            The quality of teaching, wide range of subjects, flexibility, large
            campus, friendly professors, funding, and international
            opportunities are some of the reasons why the United States attracts
            the most students from around the world. It's no surprise that the
            United States claims to be "a country with a million opportunities"
          </p>
          <p className="pagepara">
            There are over 3,800 colleges and Universities in the United States,
            many of which offer a variety of education, from short-term
            certificate programs to postdoctoral degrees. Most students prefer
            to study either the Bachelor's or Master's level.
          </p>
          <p className="pagepara">
            The master's degree is most popular among Indian students pursuing
            higher education careers. More than 78% of Indian students apply to
            U.S. universities for a master's degree.
          </p>
          <p className="pagepara">
            At the master's level, engineering and specializations (MS) are the
            most popular, followed by other subjects such as management (MBA)
            and pharmacy, public health, physical therapy, and other programs.
          </p>
          <p className="pagepara">
            Each field of study has its own typical application requirements,
            admission procedures, and rules and regulations for further study in
            the US.
          </p>
          <p className="pagepara">
            At IIEC, we're leading experts in all aspects of application and
            admission to American colleges and universities.
          </p>
          <Card2
            icon="Gre"
            title="BACHELORS IN USA"
            content="Under Graduate education in the United States usually begins after completing 12 years of primary and secondary education. Therefore, education beyond class XII is also known as higher education in the United States."
            link="bachelorinusa"
          />
          <Card2
            icon="studyinnewzealand"
            title="MBA IN USA"
            content="The United States is considered the birthplace of professional management. Other Countries may have professional controls at various stages of development,"
            link="mbainusa"
          />
          <Card2
            icon="studyinnewzealand"
            title="MASTERS IN USA"
            content="Master of Science and Master of Engineering programs at US Universities are unmatched in terms of specialization, quality, and popularity.."
            link="mastersinusa"
          />
        </div>
        <div className="flex-container">
          <StudyAbroad hgt="134vw" />
        </div>
      </div>
      <div className="pagebtmcon"></div>
      <div className="dis_flex  pd_lt_rt " style={{ gap: "2vw" }}></div>

      <YourNextStep />
      <Footer />
    </div>
  );
};
export default StudyinUSA;
