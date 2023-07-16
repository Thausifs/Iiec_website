import React from "react";
import "../../../styles/pagescss/usaj1interasistance.css";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import Navbar from "../../../components/navbar";
import StudyAbroad from "../../../components/studyabroad";
import YourNextStep from "../../../components/yournextstep";

const IntAssisMalaysia = () => {
  return (
    <div className="page">
      <Header />
      <Navbar />
      <div className="dis_flex">
        <div className="flex-container">
          <p className="mainhead">Internship Assistance Malaysia </p>
          <p className="pagepara">
            Study at Malaysia certificate in Hospitality Management (18 months).
          </p>
          <p className="pagebold">Business Management (12 months).</p>
          <ul>
            <li className="pagepara">
              Study only for 1 month 17/11 months paid internship
            </li>
            <li className="pagepara">17/11 months paid internship</li>
          </ul>
          <p className="pagebold">After 1 year student has below benefits</p>
          <ul className="pagepara">
            <li>
              Studying for Bachelors in USA (check attached visas) (TILL DATE WE
              HAVE 100% SUCCESS RATIO OF VISAS FOR STUDENT APPLYING TO USA FOR
              THEIR FURTHER STUDIES.) Transferring to Australia with highest
              success rate of visa as both as college in Malaysia and Australia
              are same.
            </li>
          </ul>
          <p className="pagebold">Program details and fess structure</p>
          <ul className="pagepara">
            <li>
              Hospitality-Duration 1 year and 6 months (1 month study + 17
              months paid internship). Fees structure: RM 13,100(RM 1800
              registration fees + RM 11,300 tuition fees)
            </li>
            <li>No IELTS, No INTERVIEW, No Bank Balance to show.</li>
          </ul>
          <p className="pagebold">Important features of program</p>
          <ul className="pagepara">
            <li>100% paid Internship after 1 month study.</li>
            <li>
              Accommodation meals on duty provided during internship at Kuala
              Lumpur.
            </li>
            <li>
              1200(Malaysian Ringgit) salary per month during internship for 9
              hours.
            </li>
            <li>1st month full time study at college.</li>
            <li>Internship certificate will be issued at the end of OJT.</li>
            <li>
              Student need to attend college 9 hours weekly compulsory during
              internship otherwise visa will be cancelled.
            </li>
          </ul>
        </div>
        <div className="flex-container">
          <StudyAbroad hgt="120vw" />
        </div>
      </div>
      <div className="pagebtmcon"></div>
      <div className="dis_flex  pd_lt_rt " style={{ gap: "2vw" }}></div>

      <YourNextStep />
      <Footer />
    </div>
  );
};
export default IntAssisMalaysia;
