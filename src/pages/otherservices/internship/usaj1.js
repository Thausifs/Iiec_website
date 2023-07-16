import React from "react";
import "../../../styles/pagescss/usaj1interasistance.css";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import Navbar from "../../../components/navbar";
import StudyAbroad from "../../../components/studyabroad";
import YourNextStep from "../../../components/yournextstep";

const USAJ1intAssistance = () => {
  return (
    <div className="page">
      <Header />
      <Navbar />
      <div className="dis_flex">
        <div className="flex-container">
          <p className="mainhead">USA J ‐ 1</p>
          <p className="pagebold">PROGRAM DETAILS</p>
          <ul>
            <li className="pagepara">
              J1 Cultural Exchange Programs offer students, university graduates
              and young professionals an enriching opportunity to enhance their
              lives and careers with the experience of living and working in the
              United States.
            </li>
            <li className="pagepara">
              The J‐1 Visa is a great opportunity for international candidates
              to travel and gain valuable experience in the United States. It
              offers a variety of programs that allow foreign nationals to come
              to the US to teach, study, conduct research, demonstrate their
              special skills, and receive on the job training for a period
              ranging from a few weeks to multiple years. This visa can thus
              open up incredible possibilities for internationals to enhance
              their knowledge and experience.
            </li>
          </ul>
          <div className="darkeddiv">
            <div className="darkeddivfirst">
              <p className="pagepara">Name</p>
              <p className="pagepara">DURATION</p>
              <p className="pagepara">VISA TYPE</p>
              <p className="pagepara marginbtmelligi">ELLIGIBILITY</p>
              <p className="pagepara marbtmselection">SELECTION</p>
              <p className="pagepara marbtmfeatures">FEATURES</p>
              <p className="pagepara">PROGRAM EARNINGS</p>
            </div>
            <div>
              <p className="pagepara">USA INTERN / TRAINEE PROGRAM</p>
              <p className="pagepara">
                12 to 18 months (Extendable upto 3 Years)
              </p>
              <p className="pagepara">J1</p>
              <p className="pagepara">
                Age 18‐27 years Diploma/Graduate/Post Graduate ‐ In Commerce /
                Arts / Science/ Management/ Finance / Computer / Hotel
                Management
              </p>
              <p className="pagepara">
                1. Intern: A foreign national who is currently enrolled in and
                pursuing studies at a degree‐ or‐certificate granting
                post-secondary Institution. Graduated from such an Institution
                no more than 12 months prior to the program begin date .
              </p>
              <p className="pagepara">
                2. Trainee: A foreign national who has either a degree or
                professional certificate from a post-secondary academic
                Institution and at least one year of prior related work
                experience in his/her occupational field acquired outside the
                United States. Five years of work experience outside the United
                States in his/her occupational field, in his/her specific field.
              </p>
              <p className="pagepara">
                Good/Pleasing personality and a positive & enthusiastic approach
                to work is a must. Excellent English Speaking & Writing
                abilities is must.
              </p>
              <p className="pagepara">
                Sponsor & Employer Interview of the Candidate via Skype/Phone.
              </p>
              <p className="pagepara">
                Opportunity to GAIN EXPOSURE of US Culture Expansion of Horizon
                Assured placement International work experience Low program cost
                in comparison with Student Visa No Hassle’s of Bank Balance.
                Minimum 3 lakh bank balance required. No IELTS / TOEFL score
                12th pass with 5+ years experience can apply Excellent earning.
              </p>
              <p className="pagepara">
                $ 8 to $ 12 per hour Weekly Minimum 40 hours Minimum Total
                Earning Per Annum $15,360 /‐ approximately Over Time Extra
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
export default USAJ1intAssistance;
