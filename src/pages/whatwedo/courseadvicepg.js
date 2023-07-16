import React from "react";
// import "../../styles/pagescss/studyabroadpg/guidetostudyabroad.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import StudyAbroad from "../../components/studyabroad";
import Card from "../../components/card.js";
import YourNextStep from "../../components/yournextstep";

const CourseAdvice = () => {
  return (
    <div className="page">
      <Header />
      <Navbar />
      <div className="dis_flex">
        <div className="flex-container">
          <p className="mainhead">
            Course Advice To Find What’s Best For You IIEC
          </p>
          <p className="pagebold">
            Our objective is to aid you in selecting the perfect program that
            fits your professional ambitions.
          </p>
          <p className="pagepara">
            Whether you're still considering possible courses, juggling between
            two fields of study, or unsure of what career you want to pursue, we
            can help you find the best course and organize your application into
            University.
          </p>
          <p className="pageparabold">Let’s find your best fit </p>
          <p className="pagepara">
            With so many courses and Universities to choose from, deciding where
            and what to study abroad can be a difficult task. Don’t fret, we're
            here to hold your hand through the whole process.
          </p>
          <p className="pagepara">
            We are Powered by a cutting-edge knowledge database, our groups are
            kept informed with the most up-to-date information on our partner
            institutions, including English language schools, vocational
            schools, colleges, and universities.
          </p>
          <p className="pageparabold">
            Nurture your aspirations with our support
          </p>
          <p className="pagepara">
            This may seem obvious, but your education, experience and interests
            are the first steps to finding your dream course. Furthermore, the
            course you have chosen will set you on a path to a career you will
            love for a lifetime .
          </p>
          <p className="pagepara">
            Our IIEC advisor will assist you in creating a curated list of
            courses, exploring the curriculum and subject matter in depth. Once
            you have made a decision on your desired course, we will assist in
            selecting the ideal location and facilitate the enrollment process.
          </p>
          <p className="pageparabold">
            Struggling to choose a course? find the right one
          </p>
          <p className="pageparabold">Consider the timelines and budgets</p>
          <p className="pagepara">
            Costs and budget are crucial considerations when making decisions
            about your studies. Understanding the expenses involved in a course
            and determining what you can realistically afford to spend on your
            education are key components in determining where and what to study.
          </p>
          <p className="pagepara">
            Think carefully about the academic year and the enrolment you want
            to apply for. Remember that each Country has its own admissions
            proces and you need to time your application process.
          </p>
          <p className="pageparabold">Explore study abroad intakes</p>
          <p className="pagepara">
            "Your IIEC advisor will also provide comprehensive support in
            navigating the application process, including answering questions
            about timing, location, and the steps involved in starting your
            course in your chosen destination."
          </p>
          <p className="pageparabold">Course experience and campus life</p>
          <p className="pagepara">
            The environment and social culture of a University are important
            factors in determining your level of satisfaction and happiness with
            your course. Each student's interests are different. You may thrive
            in a bustling urban campus or you may prefer a smaller rural
            location. You may want a campus with cultural diversity or a campus
            with active clubs and societies. We'll take all of this into account
            as we help you choose.
          </p>
          <p className="pageparabold">
            Explore campus life, facilities, infrastructure and more of your
            dream college.
          </p>
          <p className="pageparabold">Study abroad scholarships </p>
          <p className="pagepara">
            "Financing your overseas education can be a challenge, but with a
            range of scholarships available for eligible students, it doesn't
            have to be. Your IIEC advisor will assist in finding the most
            suitable scholarship opportunities, making it easier for you to
            manage the costs of your education."
          </p>
          <p className="pageparabold">Explore scholarships</p>
        </div>
        <div className="flex-container">
          <StudyAbroad hgt="120vw" />
        </div>
      </div>
      <div className="pagebtmcon">
        <p className="pageparabold">
          Apply with confidence, we’ve got your back
        </p>
        <p className="pagepara">
          We make it easy for you to submit your college and school applications
          . Your designated IIEC advisor will submit application on your behalf.
        </p>
        <p className="pagepara">
          "Our dedicated team will provide support with completing course
          registration paperwork, organizing your application materials,
          verifying required documentation, and submitting your application
          directly to the desired university or institution of your choice."
        </p>
        <p className="mainhead">Application assessment and acceptance</p>
        <p className="pagepara">
          Most Universities and institutes will respond within 2-6 weeks of
          submitting your application and if they offer you a place in course
          you will receive an official offer letter. You can also attend our
          various education seminars and fairs, where representatives from top
          Universities will interact face-to-face and assess course eligibility.
        </p>
        <p className="pagebold">Explore virtual events by IIEC</p>
        <p className="pagebold">The final frontier: Acceptance and Payment</p>

        <p className="pagepara">
          If there are no conditions in the offer letter that you must meet, you
          may accept the offer immediately. Examples of conditions that may be
          assigned include the submission of new IELTS test results, your
          transcript from recently completed research or some certified
          documents.
        </p>
        <p className="pagepara">
          If you want to save time and hassle, you can accept your letter of
          offer at the nearest IIEC office by paying the specified deposit.
        </p>
        <p className="pagepara">
          If your tuition payment is in the form of a bank draft, pay to your
          Institution and we can help you send it.
        </p>
      </div>
      <div className="dis_flex  pd_lt_rt " style={{ gap: "2vw" }}>
        <Card
          icon="Studyabroadintakes"
          title="Course advice"
          content="Can't decide which course to take? Course selection involves assessing personal aspirations, career goals, employability, deadlines, budget, etc. Come see us, we'll help you assess your strengths and find the right course for you."
          link="/courseadvice"
        ></Card>
        <Card
          icon="Applyfor2022intakes"
          title="IIEC’s guide to study abroad"
          content="Just do it for you. Here is a step-by-step guide to help you get started on your study abroad journey."
          link="/guidetostudyabroad"
        ></Card>
      </div>

      <YourNextStep />
      <Footer />
    </div>
  );
};
export default CourseAdvice;
