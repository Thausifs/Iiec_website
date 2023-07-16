import React from "react";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import Navbar from "../../../components/navbar";
import StudyAbroad from "../../../components/studyabroad";
import YourNextStep from "../../../components/yournextstep";

const H1BAlternative = () => {
  return (
    <div className="page">
      <Header />
      <Navbar />
      <div className="dis_flex">
        <div className="flex-container">
          <p className="mainhead">H1B Alternative</p>
          <p className="pagepara">
            An H1B visa allows students to legally reside in the United States
            and work full-time. Most of the students choose this visa after
            completing their studies in USA. Candidates with good work
            experience equivalent to a degree can also apply for this visa.
          </p>
          <p className="pagepara">
            Students can work full-time and are paid for their work on the
            market-based salary scale. A great option to build and grow your
            career while working towards a more permanent residency category
            like a green card.
          </p>
          <p className="pagepara">
            For students who worked under the CPT (Curricular Practical
            Training) option during their Under Graduate studies, the H1B visa
            is the next best option for them to stay in the U.S., continue to
            work legally full-time, and have promising careers around the world.
          </p>

          <p className="pagepara">
            Through our office in Chennai, we have placed hundreds of students
            and professionals in the best colleges and Universities in the
            United States. We help you make the US a home destination for you .
          </p>
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
export default H1BAlternative;
