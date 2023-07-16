import React from "react";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import Navbar from "../../../components/navbar";
import StudyAbroad from "../../../components/studyabroad";
import YourNextStep from "../../../components/yournextstep";

const TouristVISA = () => {
  return (
    <div className="page">
      <Header />
      <Navbar />
      <div className="dis_flex">
        <div className="flex-container">
          <h1 className="mainhead">Tourist VISA</h1>
          <p className="pagepara">
            Also known as Visitor Visa – For applicants who intend to travel
            anywhere in the world such as Canada, Australia, Europe, UK, New
            Zealand as Tourist. A Visitor Visa or Temporary Stay Permit (TRV) is
            country-specific and can be used for single entry, multiple entries,
            or transit, and is generally renewable for six months.
          </p>
          <p></p>

          <h2 className="pagebold">PRE AND POST LANDING SERVICES</h2>
          <ul className="pagepara">
            <li>Evaluation and Assessment</li>
            <li>Preparation of Client’s File</li>
            <li>Interview Preparation (where required)</li>
            <li>
              Providing orientation session regarding that particular Country
              and its life-style.
            </li>
            <li>Personal Guidance for updating your profile.</li>
            <li>Formalities at Port of Entry.</li>
            <li>Airport pickup</li>
            <li>Stay at Nominal Cost</li>
            <li>
              Assistance for post landing documentation and extensive job search
              / placement assistance.{" "}
            </li>
            <br />
          </ul>

          <p className="pagebold">BENEFITS TO IMMIGRANTS :</p>
          <ul className="pagepara">
            <li>Recognition of dual citizenship</li>
            <li>Live and work in any skill</li>
            <li>Citizenship benefits to permanent residents</li>
            <li>Medical, education and social benefits</li>
            <li>Basic health care free</li>
            <li>Education up to Secondary level free</li>
            <li>Very small tuition fee for Post Secondary Education</li>
            <li>Unemployment allowance after certain period. </li>
          </ul>
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
export default TouristVISA;
