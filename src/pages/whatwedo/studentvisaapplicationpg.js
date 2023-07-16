import React from "react";
// import "../../styles/pagescss/studyabroadpg/guidetostudyabroad.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import StudyAbroad from "../../components/studyabroad";
import Card from "../../components/card.js";
import YourNextStep from "../../components/yournextstep";

const StudentVisaApplication = () => {
  return (
    <div className="page">
      <Header />
      <Navbar />
      <div className="dis_flex">
        <div className="flex-container">
          <p className="mainhead">
            Student Visa Application Assistance By IIEC
          </p>
          <p className="pageparabold">
            Need to apply for a visa? Here’s all you need to know{" "}
          </p>
          <p className="pagepara">
            A student visa is an endorsement on your passport by the immigration
            authority, indicating that you are permitted to enter and stay in a
            country for a certain period of time to study.
          </p>
          <p className="pagebold">When should I apply for my student visa?</p>
          <p className="pagepara">
            Once you have received confirmation that you have enrolled in your
            chosen university or institution, you can begin your student visa
            application. It is recommended to apply as soon as possible,
            regardless of your program start date, as visa processing times vary
            by country.If you plan to apply for financial assistance (in the
            form of scholarships and education loans) to avail financial
            assistance, then it should be initiated before as it is a time
            consuming process.
          </p>

          <p className="pagebold">How do I apply for a student visa?</p>
          <p className="pagepara">
            There are several steps you need to follow while applying for a
            student visa. The order of these steps is a tedious process and
            requirements may vary depending on the Country you are studying in.
          </p>

          <p className="pagebold">Most students will require evidence of: </p>
          <p className="pagepara">
            Enrolment in a recognised educational Institution.
          </p>
          <p className="pagepara">
            Proof of your ability to cover airfare, course fees , and living
            expenses for you (and your dependents) for the duration of your
            residency.
          </p>
          <p className="pagepara">
            Passport size photos and a passport valid for at least six months
            beyond your period of stay.
          </p>
          <p className="pagepara">
            In some Countries, proof of English proficiency may be required, or
            you may be required to undergo a medical examination or police
            examination.
          </p>

          <p className="pagebold">
            How can IIEC help in your visa applications?
          </p>
          <p className="pagepara">
            For IIEC students who have received an offer letter from one of our
            700 partner Institutions in Australia, Ireland, Canada, New Zealand,
            UK or the USA, we can advise you on the entire process.
          </p>
          <p className="pagepara">
            We will keep you well informed of the latest requirements and
            conditions of your visa. It also helps you prepare with the correct
            document for submission.
          </p>
          <p className="pagepara">
            Our team of experts will direct you to the official website and
            licensed immigration agents to get the latest application forms and
            guides. To make things easier, can also help with document
            notarization, translation and courier services.
          </p>

          <Card
            icon="Studyabroadintakes"
            title="Study abroad intakes"
            content="Did you know that overseas Universities and Indian Universities have different grades? Most colleges offer her two main admissions for students wishing to study abroad: spring admission and fall admission. Let me help you learn it all."
            link="/studyingabroadFAQs"
          ></Card>
        </div>
        <div className="flex-container">
          <StudyAbroad hgt="124vw" />
        </div>
      </div>

      <YourNextStep />
      <Footer />
    </div>
  );
};
export default StudentVisaApplication;
