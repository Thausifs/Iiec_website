import React from "react";
// import "../../styles/pagescss/studyabroadpg/guidetostudyabroad.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import StudyAbroad from "../../components/studyabroad";
import Card from "../../components/card.js";
import YourNextStep from "../../components/yournextstep";

const FreeStudyAbroad = () => {
  return (
    <div className="page">
      <Header />
      <Navbar />
      <div className="dis_flex">
        <div className="flex-container">
          <p className="mainhead">Free study abroad counselling</p>
          <p className="pagebold">
            Planning a better future? Build it by studying abroad with IIEC.
          </p>
          <p className="pagepara">
            • IIEC is the global leader in International student services and is
            proud to be the co-owner of IELTS (International English Language
            Testing System). We help students to study in English speaking
            Countries like Australia, New Zealand, Canada, Ireland, UK and USA.
          </p>
          <p className="pagepara">
            {" "}
            Our operations have spanned nearly 50 years, creating an extensive
            opportunity network with offices in 30 Countries. Our vast network
            of accessible professionals helps you identify and ensure the right
            organization.
          </p>
          <p className="pagebold">
            We don’t charge for counselling and guidance.
          </p>

          <p className="pagepara">
            With a team of over 700 experienced advisors located worldwide, we
            offer free consultations and make every effort to streamline your
            overseas application process. We assist with everything from
            university and course selection to visa processing, invitation
            letters, and pre-departure notifications.
          </p>
          <p className="pagepara">
            Our track record speaks for itself: we've helped over 17,000
            students find the right course of study in their dream destinations.
            Book a free appointment by visiting one of our 34 offices in India
            or filling out an inquiry form.
          </p>

          <p className="pagepara">
            . On the day of your appointment, bring your wish list and class
            options as a starting point. Your IIEC Advisor will discuss your
            background, interests and budget in detail to help you identify your
            opportunities at potential Universities.
          </p>
          <p className="pagebold">At IIEC, we support you with: </p>

          <p className="pagepara">
            Unbiased and expert counselling via personal interview.
          </p>
          <p className="pagepara">Assistance in application submission.</p>
          <p className="pagepara">
            Registration and preparation guidance for IELTS.
          </p>
          <p className="pagepara">Guidance on offer letters.</p>
          <p className="pagepara">
            Assistance with health insurance and accommodation.
          </p>
          <p className="pagepara">Welcome events in study Country.</p>
          <p className="pagepara">
            Our team of professionally certified advisors includes many former
            international students. When you are appointed an advisor, they will
            review all the details and processes to ensure that you are best
            suited for your future college and major.
          </p>
          <p className="pagepara">How can I book an appointment?</p>
          <p className="pagepara">
            You may either call us on 1800 102 2233 or walk in to your nearest
            IIEC office in India. You may also book an appointment online.
          </p>
          <p className="pagepara">
            Our support doesn't stop with your acceptance letter. We will be
            there to help you even after you arrive in your new Country. Come
            see us at – Free!
          </p>
          <p className="pagebold"></p>
        </div>
        <div className="flex-container">
          <StudyAbroad hgt="120vw" />
        </div>
      </div>
      <div className="dis_flex  pd_lt_rt " style={{ gap: "2vw" }}>
        <Card
          icon="Studyabroadintakes"
          title="Course advice"
          content="Can't decide which course to take? Course selection involves assessing personal aspirations, career goals, employability, deadlines, budget, etc. Come see us, we'll help you assess your strengths and find the right course for you."
        ></Card>
        <Card
          icon="Applyfor2022intakes"
          title="IIEC’s guide to study abroad"
          content="Just do it for you. Here is a step-by-step guide to help you get started on your study abroad journey."
        ></Card>
      </div>
      <YourNextStep />
      <Footer />
    </div>
  );
};
export default FreeStudyAbroad;
