import React from "react";
import Navbar from "../../components/navbar";
// import Card from '../../components/card.js';
import Header from "../../components/header";
import StudyAbroad from "../../components/studyabroad";

import "../../styles/pagescss/studyabroadpg/areyoureadytoapplypg.css";
import Footer from "../../components/footer";
import Card from "../../components/card.js";
import YourNextStep from "../../components/yournextstep";

const AreYouReadytoApply = () => {
  return (
    <div className="page">
      <Header />
      <Navbar />
      <div className="dis_flex">
        <div className="flex-container ">
          <p className="mainhead">
            Ready to turn your dreams into reality? Let's start by submitting
            your application today!
          </p>
          <p className="pagebold">
            Determining whether you are truly prepared to study abroad is
            crucial. While pursuing an international education can be a
            life-changing opportunity, it requires careful consideration and
            planning.
          </p>
          <p className="pagepara">
            At IIEC, we understand that studying abroad is a monumental decision
            that can change your life. The experiences of exploring London's
            largest library, studying alongside students from over 90 countries,
            taking a study tour of Blarney Castle in Ireland, or participating
            in a dedicated activity in Whanganui are not everyday occurrences.
            However, for us, it's part of our daily life. Our expertise lies in
            providing Indian students with the perfect combination of premium
            education, enriching life experiences, and promising career
            prospects.
          </p>
          <p className="pagepara">
            As an education consulting firm, we receive numerous inquiries from
            students like you regarding studying abroad.
          </p>
          <p className="pagepara">
            Here are answers to some of the most common questions we encounter:
          </p>
          <p className="pagebold">Are you really ready to study abroad?</p>
          <p className="pagepara">
            Starting a new course abroad can be a major step, and it's
            completely normal to feel nervous. All students are nervous when
            starting a new course, but for International students it also means
            getting to know a new Country, a new city and potentially a new
            language.
          </p>
          <p className="pagepara">
            It is important to have open and honest discussions about any
            worries you may have with your family and one of our advisors before
            submitting your application. This will help ensure that you are
            fully confident and prepared to move forward. Additionally, speaking
            with a friend or educator who has studied abroad can provide
            valuable insights and advice for you to consider.
          </p>
          <p className="pagebold">What kind of services does IIEC offer ?</p>
          <p className="pagepara">
            We help students every step of the way in their study abroad
            journey, from choosing the perfect university to enrolling in
            classes.
          </p>
          <p className="pagepara">
            Our experts also provide guidance on accommodation options, visa
            processes, and can connect you with additional resources, such as
            educational loan providers, rental agencies, and student/alumni
            groups.
          </p>
          <p className="pagebold">Which Countries can I choose from?</p>
          <p className="pagepara">
            Unlock your global education opportunities with our top university
            partners across Australia, Canada, New Zealand, UK, Ireland, South
            Korea, Malaysia, Dubai and the US!.
          </p>
          <p className="pagebold">How do I apply?</p>
          <p className="pagepara">
            With the support of our knowledgeable advisors, you will put
            together a complete application and gather the necessary supporting
            documents. Your advisor will then submit your application to the
            college or institution of your choice on your behalf.
          </p>
          <p className="pagebold">
            Do I need to make an appointment to meet an IIEC counsellor?
          </p>
          <p className="pagepara">
            You can schedule an appointment with one of our advisors by filling
            out our online inquiry form. We also welcome visits from Monday
            through Saturday from 9:00 am to 5:30 pm.
          </p>
        </div>
        <div className="flex-container">
          <StudyAbroad hgt="120vw" />
        </div>
      </div>
      <div className="pagebtmcon RdytoApplymaindiv">
        <p className="pagebold">
          What certificates and other documents should I bring to my
          appointment?
        </p>
        <p className="pagepara">
          You will need to bring documents to verify your identity (valid
          passport ) and your educational qualifications - high school,
          intermediate and graduation (if applicable). This will help counsellor
          streamline your request.
        </p>
        <p className="pagebold">
          Which Universities and colleges do you partner with?
        </p>
        <p className="pagepara">
          As a part of the largest network of institutions in India, IIEC
          represents over 700 universities and colleges globally. You have the
          opportunity to apply to a wide range of institutions in various
          countries including 38 public universities in Australia (including
          Group of 8 Universities), 8 universities in New Zealand, a significant
          number of universities in the UK (including the prestigious Russell
          Group), top universities in Ireland, universities in the US, and
          numerous high-quality Canadian institutions.
        </p>
        <p className="pagebold">
          Do I have to pay for a UCAS application for UK Universities?
        </p>
        <p className="pagepara">
          You can avoid paying the UCAS application fee when you apply for UK
          course through IIEC. Discuss this with your IIEC counsellor.
        </p>
        <p className="pagebold">How long do applications take to process?</p>
        <p className="pagepara">
          It takes four to six weeks to process a course request. May take
          longer if during peak times or holidays. We will continue to contact
          you during this time to help you.
        </p>
        <p className="pagebold">How much does IIEC charge for its services?</p>
        <p className="pagepara">
          IIEC does not charge any agency fees for applications, so you will get
          support for free. Many Universities and colleges also waive the
          application fee when you apply through us.
        </p>
      </div>
      <div className="dis_flex  pd_lt_rt " style={{ gap: "2vw" }}>
        <Card
          icon="timelinefor2022intakes"
          title="Timeline for 2023 intakes"
          content="Plan ahead and be ready to learn. We have outlined a specific timetable for you to start and realize your dream of studying abroad."
          link="/timelinefor2022intakes"
        ></Card>
        <Card
          icon="canadauniversity"
          title="Canada University rankings"
          content="Here is the list of Canadian Universities with their rankings."
        ></Card>
      </div>
      <YourNextStep />
      <Footer />
    </div>
  );
};

export default AreYouReadytoApply;
