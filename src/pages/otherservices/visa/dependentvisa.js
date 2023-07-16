import React from "react";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import Navbar from "../../../components/navbar";
import StudyAbroad from "../../../components/studyabroad";
import YourNextStep from "../../../components/yournextstep";

const DependentVISA = () => {
  return (
    <div className="page">
      <Header />
      <Navbar />
      <div className="dis_flex">
        <div className="flex-container">
          <p className="mainhead">Dependent VISA</p>
          <p className="pagebold">Business Immigration</p>
          <p className="pagepara">
            Globalization has transformed the world into a global village,
            creating huge opportunities for businesses to expand
            internationally. Many developed countries, including Canada, the
            USA, and European nations, offer great potential for investors to
            start new businesses or expand their existing ones.
          </p>
          <p className="pagepara">
            At IIEC, we help entrepreneurs with a proven track record to
            establish their international companies and achieve their dream of
            becoming global business leaders. . At IIEC, we help you to realize
            your dream of creating an International company that will rewrite
            benchmark standard for world trade.
          </p>
          <p className="pagebold">IIEC Services include:</p>
          <p className="pagebold">PRE-DEPARTURE AND POST LANDING SERVICES :</p>
          <ul className="pagepara">
            <li>Evaluation and Assessment of eligibility.</li>
            <li>Preparation of Client’s File.</li>
            <li>Preparing thoroughly for interviews. (Where required)</li>
            <li>
              Providing orientation sessions about the destination Country and
              its life-style.
            </li>
            <li>
              Personal Guidance on updating client's profile and resume to make
              it marketable worldwide.
            </li>
            <li>Formalities at the Port of Entry.</li>
            <li>Airport pickup at destination.</li>
            <li>Initial stay at a Nominal Cost at the destination.</li>
            <li>
              Assistance for post landing documentation and extensive job search
              / placement assistance.
            </li>
          </ul>

          <p className="pagebold">BENEFITS TO IMMIGRANTS :</p>
          <ul className="pagepara">
            <li>Recognition of dual citizenship.</li>
            <li>Live and work in any occupation of your choice.</li>
            <li>Several Citizenship Benefits to permanent residents.</li>
            <li>Medical, education and social benefits.</li>
            <li>FREE Basic Comprehensive Health care.</li>
            <li>FREE Education up to Secondary level.</li>
            <li>
              Very small tuition fees for Post Secondary Education for Self and
              Dependents.
            </li>
            <li>Unemployment Allowance after a certain period. </li>
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
export default DependentVISA;
