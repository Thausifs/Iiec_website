import React from "react";
// import "../../styles/pagescss/studyabroadpg/guidetostudyabroad.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import StudyAbroad from "../../components/studyabroad";
import YourNextStep from "../../components/yournextstep";

const ImmigrationAUS = () => {
  return (
    <div className="page">
      <Header />
      <Navbar />
      <div className="dis_flex">
        <div className="flex-container">
          <p className="pagepara"></p>
          <p className="mainhead">Immigrate To Australia</p>
          <p className="pagepara">
            Australia is a growing land with job opportunities and welcomes a
            large number of skilled migrants every year. All skilled worker
            visas (except subclass 457) require applicants to be under 50 years
            of age, unless exempt. The Skilled Worker Visa is divided into
            subclasses based on the different eligibility factors and occupation
            type:
          </p>
          <p className="pagebold">
            Temporary Work(Skilled) Visa(subclass 457):
          </p>
          <p className="pagepara">
            This visa allows skilled work for a period of 4 years in country . A
            skilled worker whose occupation is listed on the “Consolidated
            Skilled Occupations List” is the primary requirement for this Visa.
            Funding from a legitimate business in Australia is also required .
          </p>
          <p className="pagebold">
            Employer Nomination Scheme(ENS) Visa(subclass 186):
          </p>
          <p className="pagepara">
            This is a permanent residency program that requires passing the
            Australian Government's skills test and three years of previous work
            experience . The visa applicant must have received a salary equal to
            or higher than that of salary of an Australian in the same
            occupation. As in the case of the temporary work Visa, the
            occupation must be listed on Australia's "Consolidated List of
            Skilled Occupations".
          </p>
          <p className="pagebold">
            Regional Sponsored Migration Scheme Visa (RSMS)(subclass 187):
          </p>
          <p className="pagepara">
            RSMS offers a permanent residency program for skilled workers who
            want to work in one of the country's regions. The three
            sub-categories of this visa include Transition to Temporary
            Residence, Direct Entry Stream and Agreement Stream. Occupations in
            the region must be made available to the candidate by the respective
            employer in the regional area. The Visa applicant must receive a
            salary of equivalent or higher as an Australian in the same
            occupation.
          </p>
          <p className="pagebold">Skilled Independent Visa(subclass 189):</p>
          <p className="pagepara">
            This Visa requires applicants to score 60 on their proficiency
            assessment and pass the Australian government's skills test. This
            visa has the advantage of allowing visa holders to live and work
            anywhere in the country without receiving sponsorship from an
            Australian employer.
          </p>
          <p className="pagebold">Skilled Nominated Visa(subclass 190):</p>
          <p className="pagepara">
            An applicant for this visa must have a sufficient score on their
            eligibility assessment and be nominated by one of the Australian
            states/territories. A specific state/territory sponsors visa holders
            and they are granted specific privileges in that state/territory,
            such as permanent residency for family members.
          </p>
          <p className="pagebold">
            Skilled Regional(Provisional) Visa(subclass 489):
          </p>
          <p className="pagepara">
            This visa allows individuals to work in areas/peripherals of
            Australia for up to four years. Person is nominated by the
            region/periphery or is sponsored by a person who lives in the area
            in which the candidate is proposed. Applicants will be tested on a
            scale and will have to pass the Australian authorities' skills
            assessment.
          </p>
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
export default ImmigrationAUS;
