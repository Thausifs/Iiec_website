import React from "react";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import Navbar from "../../../components/navbar";
import StudyAbroad from "../../../components/studyabroad";
import YourNextStep from "../../../components/yournextstep";

const EB5VISA = () => {
  return (
    <div className="page">
      <Header />
      <Navbar />
      <div className="dis_flex">
        <div className="flex-container">
          <h1 className="mainhead">EB5 VISA </h1>
          <h2 className="pagebold">
            EB-5 Investor Visa Program applies to Investing in the U.S.A.
          </h2>
          <ul className="pagepara">
            <li>
              Direct route to permanent residency in the United States for
              Investors, their spouse and their children under the age of 21.
            </li>
            <li>
              Freedom for Investors and their family to live, work and retire
              anywhere in the United States.
            </li>
            <li>
              Investors and their family can enter and exit the United States
              without the need for a visa.
            </li>
            <li>
              U.S. citizenship option for the Investors and their family after
              five years of permanent residency.
            </li>
            <li>Investors can sponsor green cards for family members.</li>
            <li>
              Investors are eligible for all the benefits of U.S. permanent
              residency status.{" "}
            </li>
            <br />
          </ul>

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

          <ul className="pagebold">
            <p className="pagebold">BENEFITS TO IMMIGRANTS :</p>

            <li className="pagepara">Recognition of dual citizenship</li>
            <li className="pagepara">Live and work in any skill</li>
            <li className="pagepara">
              Citizenship benefits to permanent residents
            </li>
            <li className="pagepara">Medical, education and social benefits</li>
            <li className="pagepara">Basic health care free</li>
            <li className="pagepara">Education up to Secondary level free</li>
            <li className="pagepara">
              Very small tuition fee for Post Secondary Education
            </li>
            <li className="pagepara">
              Unemployment allowance after certain period.{" "}
            </li>
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
export default EB5VISA;
