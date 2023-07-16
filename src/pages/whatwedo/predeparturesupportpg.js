import React from "react";
// import "../../styles/pagescss/studyabroadpg/guidetostudyabroad.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import StudyAbroad from "../../components/studyabroad";

import YourNextStep from "../../components/yournextstep";

const Predeparturesupport = () => {
  return (
    <div className="page">
      <Header />
      <Navbar />
      <div className="dis_flex">
        <div className="flex-container">
          <p className="mainhead">Pre-departure support</p>
          <p className="pagebold">
            Worried about settling in a new Country? Don't, we're here to help
          </p>
          <p className="pagepara">
            That's wonderful! Starting a new adventure can be both exciting and
            a little scary, but it's important to remember that you are taking a
            big step towards a brighter future.
          </p>
          <p className="pagepara">
            {" "}
            The best is yet to come and with IIEC's support, you'll be able to
            tackle any challenges that come your way with confidence.
            Congratulations on this exciting journey, and I wish you all the
            best!.
          </p>
          <p className="pagepara">
            To help you prepare for life in your new Country, we host some
            pre-departure sessions throughout the year. Come to us we will
            dissolve all your worries.
          </p>
          <p className="pageparabold">From visiting to belonging</p>
          <p className="pagepara">
            Our pre-departure sessions will help you in guiding the personal and
            cultural development opportunities during your time abroad.
          </p>
          <p className="pageparabold">
            Here’s advice we’ll give you at pre-departure sessions
          </p>
          <p className="pageparabold">What to pack?</p>
          <p className="pagepara">
            Being organized is the key when packing will save you a lot of time
            and trouble in your new Country. That's why we help you with a
            checklist ready to consult before you leave India.
          </p>

          <p className="pageparabold">Arrival in a new Country</p>
          <p className="pagepara">
            So you just landed in your new host city, now what? During our
            sessions, we will guide you through immigration control, customs
            control and easy ways to get to your school from the airport.
          </p>
          <p className="pageparabold">Banking and foreign exchange.</p>

          <p className="pagepara">
            Opening a local bank account is a top priority upon arrival in your
            new study abroad country. This will make managing your finances
            easier and allow for seamless payment of housing, tuition, and
            living expenses.
          </p>
          <p className="pagepara">
            {" "}
            Plus, if you plan to work during or after your studies, your
            employer can directly deposit your earnings into the account. IIEC
            will support you with the steps to get your finances set up in your
            new location.
          </p>
          <p className="pageparabold">Insights into the local culture</p>
          <p className="pagepara">
            Having some knowledge of local culture and customs before entering
            to your Country of study. This makes it easy to convert you to the
            community and helps you interact more effectively with your new
            classmates.
          </p>
          <p className="pagepara">
            Half the fun of going abroad is learning new things that people from
            other cultures do differently. We'll tell you all about the culture,
            activities, life as a local, and even some colloquial terms that
            will come in handy in your new city.
          </p>
          <p className="pageparabold">Student life in your new Country</p>
          <p className="pagepara">
            while studying abroad, you will have to adjust to new study
            environment and familiarize yourself with new cultural norms as a
            student . Our lessons will guide you through different styles.
            different learning styles, classes and expectations.
          </p>
          <p className="pageparabold">Culture shock.</p>

          <p className="pagepara">
            At IIEC, we educate students on the topic of culture shock and
            provide coping techniques. Our study sessions cover the stages of
            culture shock and help students understand and manage the
            experience.
          </p>
          <p className="pagepara">
            The goal is to support students in their successful adaptation to a
            new culture.
          </p>

          <p className="pageparabold">
            Support and well-being in your new Country.
          </p>
          <p className="pagepara">
            Whether it's academic support, English language assistance or visa
            advice, we outline some practical support available to International
            students.
          </p>
        </div>
        <div className="flex-container">
          <StudyAbroad hgt="120vw" />
        </div>
      </div>
      <div className="pagebtmcon">
        <p className="pageparabold">
          Working while studying and internship advice.
        </p>
        <p className="pagepara">
          Part-time jobs can help supplement your knowledge and life experience.
          We will discuss how to comply with your student visa regulations and
          will give you some advice on finding a good student job.
        </p>
        <p className="pageparabold">Tackling homesickness</p>
        <p className="pagepara">
          We know it's hard to be away from family and friends, but we'll give
          you some tips on how to deal with feelings of homesickness when you
          arrive in your study abroad Country.
        </p>

        <p className="pageparabold">Brush up on legalities.</p>
        <p className="pagepara">
          We'll tell you the do's and don'ts in the Country you're studying in
          and the rights you have as an International student , plus some
          practical advice and lots of support.
        </p>
        <p className="pageparabold">A network of advice.</p>
        <p className="pagepara">
          You will also have the opportunity to question IIEC alumni and connect
          with current and future students like you.
        </p>
      </div>

      <YourNextStep />
      <Footer />
    </div>
  );
};
export default Predeparturesupport;
