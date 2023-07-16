import React from "react";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import Navbar from "../../../components/navbar";
import StudyAbroad from "../../../components/studyabroad";
import YourNextStep from "../../../components/yournextstep";

const BusinessVISA = () => {
  return (
    <div className="page">
      <Header />
      <Navbar />
      <div className="dis_flex">
        <div className="flex-container">
          <h1 className="mainhead">Business VISA</h1>
          <h2 className="pagebold">Business Immigration</h2>
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
            becoming global business leaders. A businessman and entrepreneur
            with a proven track record aspiring to leave an indelible mark on
            the forefront of global business, readily migrating abroad and
            making the global economic world his showcase can be At IIEC, we
            help realize his dream of creating an International company that
            will rewrite his benchmark standard for world trade.
          </p>
          <h2 className="pagebold">IIEC Services include:</h2>
          <h2 className="pagebold">
            PRE-DEPARTURE AND POST LANDING SERVICES :
          </h2>
          <ul className="pagepara">
            <li>Evaluation and Assessment of eligibility.</li>
            <li>Preparation of Client’s File.</li>
            <li>Preparing thoroughly for interviews. (Where required)</li>
            <li>
              Providing orientation sessions about the Country and its
              lifestyle.
            </li>
            <li>
              Personal guidance to update your profile and resume to be able to
              sell worldwide.
            </li>
            <li>Formalities at the Port of Entry.</li>
            <li>Airport pickup at destination.</li>
            <li>Initial stay at a Nominal Cost at the destination.</li>
            <li>
              Post-landing document preparation support and wide-ranging job
              search activities /Employment support.
            </li>
          </ul>

          <h2 className="pagebold">BENEFITS TO IMMIGRANTS :</h2>
          <ul className="pagepara">
            <li>Recognition of dual citizenship.</li>
            <li>Live and work in any occupation of your choice.</li>
            <li>Several Citizenship Benefits to permanent residents.</li>
            <li>Medical, education and social benefits.</li>
            <li>FREE Basic Comprehensive Health care.</li>
            <li>FREE Education up to Secondary level.</li>
            <li>
              Very low post-secondary tuition fees for the self-employed and
              dependents.
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
export default BusinessVISA;
