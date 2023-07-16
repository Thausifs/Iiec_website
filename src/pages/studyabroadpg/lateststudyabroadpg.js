import React from "react";
// import "../../styles/pagescss/studyabroadpg/guidetostudyabroad.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import StudyAbroad from "../../components/studyabroad";
import Card from "../../components/card.js";
import YourNextStep from "../../components/yournextstep";

const LatestStudyAbroad = () => {
  return (
    <div className="page">
      <Header />
      <Navbar />
      <div className="dis_flex">
        <div className="flex-container">
          <p className="mainhead">Latest Study Abroad Updates</p>
          <p className="pagebold">
            IIEC will always be there to help you relive your dreams. We are in
            this together
          </p>
          <p className="pagepara">
            International education is a dream come true. We strive to keep you
            informed about the latest developments regarding your preferred
            study abroad locations." Here's everything you need to know!
          </p>
          <div className="lateststudaybuttons ">
            {" "}
            <button className="buttonsone">Australia</button>
            <button className="buttonsone ">Canada</button>
            <button className="buttonsone">UK</button>
            <button className="buttonsone">US</button>
            <button className="buttonsone">New Zealand</button>
            <button className="buttonsone">Ireland</button>
          </div>
          <p className="pagebold">Free study abroad counselling</p>
          <p className="pagepara">
            As always, all of our counselling sessions are free and our goal is
            to guarantee that you have the necessary information, assistance,
            and attention to ensure your well-being.You can visit our nearest
            IIEC branch or schedule a free online appointment.{" "}
          </p>
          <button className="buttonstwo">
            Book my virtual counselling session
          </button>
          <p className="pagebold">Study abroad virtual fairs </p>

          <p className="pagepara">
            By participating in our virtual fairs, you can access free online
            consultations with our international education experts, connect with
            top institutions' representatives for personal interaction, and even
            complete your applications on the spot.
          </p>
          <p className="pagepara">
            These events also provide the chance to learn about your internship
            and scholarship options, have your study abroad inquiries addressed,
            and receive a waiver of your application fee.
          </p>
          <button className="buttonsthree">Show me all virtual events</button>
          <p className="pagebold">
            International English Language Testing System (IELTS)
          </p>
          <p className="pagepara">
            When you're at home, we want to make sure your IELTS preparation
            isn't affected, so here's a range of resources to help you pass your
            test. Go ahead, use these free resources to get a higher score in
            your IELTS test.{" "}
          </p>
        </div>

        <div className="flex-container">
          <StudyAbroad hgt="120vw" />
        </div>
      </div>
      <div className="pagebtmcon ">
        <table className="tabledivlatest">
          <tr>
            <th>Free practice tests </th>
            <th>Free 30-day prep course </th>
            <th>Familiarisation tests </th>
            <th>Videos from experts and top scorers </th>
          </tr>

          <tr className="trdashedlatest">
            <th>
              At home, you can practice mock tests to know what questions would
              look like on a real test.
            </th>
            <th>
              As a subscriber, you have free access to this course which focuses
              on enhancing all four skills - listening, reading, writing, and
              speaking - required for the IELTS exam. The curriculum is designed
              to prepare you for the entire test or you can choose to
              concentrate on improving your weakest IELTS skill.
            </th>
            <th>
              It is always best to go well prepared. Familiarize yourself with
              the test format so you know what to expect on test day.
            </th>
            <th>
              Our YouTube channel is full of expert videos on tips and tricks to
              improve your IELTS score. You can also listen to the experiences
              of other test takers and find out what helped them score high.
            </th>
          </tr>
        </table>
      </div>
      <div className="dis_flex  pd_lt_rt " style={{ gap: "2vw" }}>
        <Card
          icon="Studyabroadintakes"
          title="Study abroad intakes"
          content="Did you know that the years of study at Universities abroad are different from those in India? Most Universities offer two main intakes for students who want to study abroad – spring and fall. Let us help you figure it all out."
          link="/studyingabroadFAQs"
        ></Card>
        <Card
          icon="timelinefor2022intakes"
          title="Timeline for 2023 intakes "
          content="Below is a list of resources for parents to support and prepare your child for study abroad."
          link="/timelinefor2022intakes"
        ></Card>
      </div>
      <YourNextStep />
      <Footer />
    </div>
  );
};
export default LatestStudyAbroad;
