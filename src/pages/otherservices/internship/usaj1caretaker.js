import React from "react";
import "../../../styles/pagescss/usaj1interasistance.css";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import Navbar from "../../../components/navbar";
import StudyAbroad from "../../../components/studyabroad";
import YourNextStep from "../../../components/yournextstep";

const USAJ1CareTaker = () => {
  return (
    <div className="page">
      <Header />
      <Navbar />
      <div className="dis_flex">
        <div className="flex-container">
          <p className="mainhead">USA J1 CARETAKER</p>
          <p className="pagebold">PROGRAM DETAILS </p>
          <ul>
            <li className="pagepara">
              The Au Pair category of the J-1 Exchange Visitor Program allows a
              caring live-in childcare provider between the ages of 18 and 26 to
              live as an extended member of a host family in exchange for room,
              board, and a stipend. Whilst the main priority of a successful
              applicant will be to take care of the kids, they should also have
              free time to enjoy life in the U.S.
            </li>
            <li className="pagepara">
              The Au Pair program offers an amazing intercultural experience for
              both participants and host families. For the participants, this is
              an opportunity to continue their education while living with an
              American family and become part of the family. On the other hand,
              the hosts benefit from having a reliable and responsible childcare
              provider. It is truly a mutually rewarding experience.
            </li>
          </ul>
          <div className="darkeddiv">
            <div className="darkeddivfirst">
              <p className="pagepara">Name</p>
              <p className="pagepara">DURATION</p>
              <p className="pagepara">VISA TYPE</p>
              <p className="pagepara marginbtmelligiusaj1care">ELLIGIBILITY</p>
              <p className="pagepara marbtmselectionusajicare">SELECTION</p>
              <p className="pagepara marbtmfeaturesusaj1care">FEATURES</p>
              <p className="pagepara marbtmpgearnusaj1care">PROGRAM EARNINGS</p>
              <p className="pagepara marbtmpjurusaj1care">JURISDICTION</p>
              <p className="pagepara">NOTE</p>
            </div>
            <div>
              <p className="pagepara">USA INTERN / TRAINEE PROGRAM</p>
              <p className="pagepara">12 Months (extendable upto 12 months)</p>
              <p className="pagepara">J1</p>
              <p className="pagepara">Age 18 - 26 years</p>
              <p className="pagepara">
                12th Pass / Early Day Care Center / Co-ordinator in Junior
                Schools / Midwifery / Nursing
              </p>
              <p className="pagepara">
                Good/Pleasing personality and a positive & enthusiastic approach
                to work is a must.
              </p>
              <p className="pagepara">
                Knowledge of four wheel drive and swimming is an added
                advantage.
              </p>
              <p className="pagepara">
                Successful in passing a background investigation that includes
                verification of school, three, non-family related personal and
                employment references, a criminal background check or its
                recognized equivalent and a personality profile. Such
                personality profile will be based upon a psychometric test
                designed to measure differences in characteristics among
                applicants against those characteristics considered most
                important to successfully participate in the au pair program.
              </p>
              <p className="pagepara">
                Minimum One Year of experience as an Care Taker for Child,
                Nurse, Teacher, Co-ordinator in day care center.
              </p>
              <p className="pagepara">
                Minimum Two reference of previous employers is a must with
                photographs of onsite job.
              </p>
              <p className="pagepara">
                Sponsor & Employer Interview Of The Candidate via Skype/Phone.
              </p>
              <p className="pagepara">
                {" "}
                Opportunity to gain exposure of US Culture.
              </p>
              <p className="pagepara">Expansion of Horizon</p>
              <p className="pagepara">Assured placement</p>
              <p className="pagepara">International work experience</p>
              <p className="pagepara">
                Low program cost in comparison with Student Visa.
              </p>
              <p className="pagepara">
                No Hassle’s of Bank Balance. Minimum 3 lakh bank balance
                required.
              </p>
              <p className="pagepara">No IELTS / TOEFL score</p>
              <p className="pagepara">Will avail Social Security Number</p>
              <p className="pagepara">
                Jobs in families staying in US (Care Taker for Elderly Parents,
                Infant or Children below 7 years of age)
              </p>
              <p className="pagepara">
                $ 1000 / - per month. Food & Accommodation with the family.
                Weekly 40 hours Earning For The Duration of Program is $12,000/-
                (Twelve Thousand US Dollars/-) approximately Over Time Extra If
                Available.
              </p>
              <p className="pagepara">
                {" "}
                Any dispute is subject to Ahmedabad jurisdiction.
              </p>
              <p className="pagepara">
                The visa issuance is at sole discretion of Visa Officer at the
                relevant United States Consultancy . We do not assure any visa.
              </p>
            </div>
          </div>
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
export default USAJ1CareTaker;
