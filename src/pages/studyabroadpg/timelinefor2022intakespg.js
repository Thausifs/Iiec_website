import React from "react";
import Navbar from "../../components/navbar";
import Card from "../../components/card.js";
import Header from "../../components/header";
import StudyAbroad from "../../components/studyabroad";
import "../../styles/pagescss/studyabroadpg/timelinefor2022intakespg.css";
import Footer from "../../components/footer";
import YourNextStep from "../../components/yournextstep";

const Timelinefor2022Intakes = () => {
  return (
    <div className="page">
      <Header />
      <Navbar />
      <div className="dis_flex">
        <div className="flex-container">
          <p className="mainhead">Timeline for 2023 intakes</p>
          <p className="pageparabold">
            Are you uncertain about when to initiate your application process?
          </p>
          <p className="pageparabold">
            You may utilize the step-by-step guide provided by the International
            Institute of Executive Careers (IIEC).{" "}
          </p>
          <p className="pagepara">
            The process of applying to colleges and universities abroad may
            differ significantly from what Indian students are accustomed to.
            Most of the International Institutions offer two intakes around
            September and April, while some may also accept a third intake
            around April or April.
          </p>
          <p className="pagepara">
            However, you should discuss your case with an International
            education expert who can guide you best.
          </p>
          <p className="pagepara">
            It is normal not to know when to start the registration process.So,
            here’s some help if you are applying for the upcoming 2023-24
            intakes.
          </p>
          <p className="pagebold">
            Plan ahead, succeed abroad: Kick off your research journey 10 to 12
            months in advance.
          </p>
          <ul className="unorderedlist ht_20px">
            <li className="pagepara">
              Better to start as soon as possible. Start by figuring out the
              course that is best for you - write down your strengths and
              interests, and research the courses available at current level.
            </li>
            <br />
            <li className="pagepara">
              Visit the websites of the relevant Universities, research their
              procedures, requirements, application deadlines and tuition fees .
              Get acquainted with the financial aids and scholarships available
              and their applications. In short, have all your research papers
              ready
            </li>
          </ul>

          <p className="pagebold">
            Score high, soar higher: Take the standardized tests 9 to 10 months
            before your application deadline.
          </p>
          <ul className="unorderedlist ht_20px">
            <li className="pagepara">
              Almost all Universities and colleges require the results of an
              approved English proficiency test, such as IELTS.
            </li>
            <br />
            <li className="pagepara">
              Some programs may also require GRE, GMAT, or SAT scores. It is
              recommended that you verify which test scores are accepted by the
              institutions you intend to apply to.
            </li>
            <li className="pagepara">
              It is advisable to commence early with the preparation of the
              necessary standardized tests.
            </li>
            <li className="pagepara">
              It's always wise to allocate some extra time in your schedule,
              just in case you need to retake the test.
            </li>
          </ul>
          <p className="mainhead">
            Craft your story, stand out from the crowd: Gear up your application
            preparation 7 to 8 months ahead of time
          </p>
          <ul className="unorderedlist ht_10px">
            <li className="pagepara">
              {" "}
              Shortlisted Universities: Once you bring your score, you know
              where you stand. Shortlist Universities accordingly. Also,
              consider your preferences, budget and location.
            </li>
            <li className="pagepara">
              Prepare your application, start collecting all your documents so
              that everything is done on time.
            </li>
          </ul>

          <p className="mainhead">
            Anticipation builds, dreams come true: Get ready for admission
            decisions 3 to 4 months prior to your program start date.
          </p>
          <ul className="unorderedlist ht_30px">
            <li className="pagepara">
              After submitting your application, you will receive an email from
              the institution indicating whether you have been accepted based on
              your eligibility.
            </li>
            <li className="pagepara">
              Consider your options carefully before replying to an acceptance
              email. It’s recommended to speak with an international education
              expert at IIEC who can provide guidance and support throughout the
              weighing process. Don't forget to remind yourself of your
              available options.
            </li>
            <li className="pagepara">
              Respond your final acceptance in time as your interview session
              depends on it .
            </li>
            <li className="pagepara">
              Once you have received your final acceptance from the University,
              make a well thought out decision after discussion with your
              advisor and deposit the minimum amount to confirm your admission.
            </li>
            <li className="pagepara">
              Apply for scholarships (if you are eligible) and other funding
              options to ease off your finances.
            </li>
          </ul>
        </div>
        <div className="flex-container">
          <StudyAbroad hgt="120vw" />
        </div>
      </div>
      <div className="pagebtmcon">
        <p className="mainhead">
          Ready, set, go abroad: Begin your visa preparation 2 to 3 months
          before you take off on your international adventure.
        </p>
        <ul className="unorderedlist">
          <li className="pagepara">
            In several countries, it is possible to apply for a visa up to three
            months before your intended arrival date. Collect all the required
            documents and begin completing the paperwork. Your IIEC advisor can
            assist you with obtaining the necessary documents.
          </li>
          <li className="pagepara">
            Apply for your Visa well in time to avoid any last-minute delays
          </li>
        </ul>
        <p className="mainhead">
          Pack your bags and chase your dreams: Get set for pre-departure
          preparations 1 to 2 months before you embark on your academic journey.
        </p>
        <ul className="unorderedlist">
          <li className="pagepara">
            Make arrangements for your health insurance and accommodation.
          </li>
          <li className="pagepara">
            Book your flight tickets in advance to avoid last minute hassles.
            Also, if you delay, the ticket will become more expensive.
          </li>
          <li className="pagepara">
            Get an International debit/credit card to help survive your first
            few days.
          </li>
          <li className="pagepara">
            Gather all the documents and copies you need , also be prepared well
            ahead of time.
          </li>
        </ul>
        <p className="pagepara">
          Read more:<a href=" ">Your packing checklist when flying abroad</a>
        </p>
        <p className="pagepara">
          We host a variety of pre-departure orientation sessions for our
          students, where we introduce you to your life in your new destination
          so you are fully equipped and ready for adventures ahead.
        </p>

        <div className="bluebox">
          <p className="pagepara ">
            Note: Given the current COVID-19 situation, there might be some
            changes in the 2023/2024 intakes. Don’t worry, our International
            education experts are here to guide you with the latest updates to
            help you apply to your desired course and Institution. Feel free to
            connect with our experts for a free counselling session and keep
            posted about the latest COVID- 19 updates.{" "}
          </p>
        </div>
      </div>
      <div className="dis_flex  pd_lt_rt " style={{ gap: "2vw" }}>
        <Card
          icon="Statementofpurpose"
          title="Statement of Purpose (SOP)"
          content="The SOP is the decision maker for your request. This helps the admissions committee assess whether the course structure is in line with your career goals, beliefs, knowledge and vision. Know how to write that perfect SOP."
        ></Card>
        <Card
          icon="usaapplication"
          title="Letter of Recommendation (LOR)"
          content="LOR gives the admissions committee a detailed look at your life and suitability for referrals, but there are some guidelines to keep in mind while getting this great deal. Read on to learn more. "
        ></Card>
      </div>
      <YourNextStep />
      <Footer />
    </div>
  );
};

export default Timelinefor2022Intakes;
