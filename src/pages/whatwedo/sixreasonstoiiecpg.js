import React from "react";
// import "../../styles/pagescss/studyabroadpg/guidetostudyabroad.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import StudyAbroad from "../../components/studyabroad";
import Card from "../../components/card.js";
import YourNextStep from "../../components/yournextstep";

const SixReasonstoIIEC = () => {
  return (
    <div className="page">
      <Header />
      <Navbar />
      <div className="dis_flex">
        <div className="flex-container">
          <p className="mainhead">Six reasons to choose IIEC</p>
          <p className="pagebold">
            Let Us Guide You: Study Overseas with Our Expert Assistance{" "}
          </p>
          <p className="pagepara">
            IIEC is a global leader in International education services. We
            support International students to study in English speaking
            Countries. "At IIEC, we believe that the key to student success is
            finding the perfect fit- course, school, country.We've been
            operating for close to 50 years, creating a huge network of
            opportunity with offices in over 30 Countries.
          </p>

          <p className="pagebold">
            Embark on your global career with our expert guidance!.
          </p>
          <p className="pagepara">
            We work closely with you to help you realize your dream of studying
            abroad for professional and personal growth. We combine experience
            and technology to help you make the most informed decision possible.
          </p>
          <p className="pagebold">1. At IIEC, our top priority is you.</p>
          <p className="pagepara">
            Need help finding the best course, submitting your college
            application, or advice on your visa process? Our extensive network
            of experienced advisors helps you identify and protect the college
            or University where you can thrive.
          </p>
          <p className="pagepara">
            Your dedicated IIEC advisor will work closely with you, supporting
            you and your family throughout your study abroad journey.
          </p>

          <p className="pagebold">
            2. Your study abroad journey just got easier with our friendly
            international education experts.
          </p>
          <p className="pagepara">
            We have over 700 educational advisors around the world. Many of our
            advisors are also International students, and will do whatever it
            takes to help you find the right course and Country .
          </p>
          <p className="pagepara">
            {" "}
            They are experts in the field of International education, willing to
            go the extra mile and being a friendly face "having been there and
            doing it" and willing to share what they've learned. Our advisors
            are the greatest .
          </p>

          <p className="pagebold">
            3. With us, you're never alone. Our support is with you every step
            of the way.
          </p>
          <p className="pagepara">
            Providing support throughout the entire academic journey, from
            before the student even arrives at the university, shows a
            dedication to the success and well-being of the students.
          </p>
          <p className="pagepara">
            Offering a full suite of services, such as IELTS testing, visa
            assistance, and pre-departure advice, is very comprehensive and
            helps to alleviate some of the stress and worries that can come with
            studying abroad. It's also great to hear that the services are
            constantly evolving to better support the students.
          </p>

          <p className="pagebold">
            4.IELTS ownership - Our pride and your advantage
          </p>
          <p className="pagepara">
            As co-owners of IELTS, we can help you register and prepare for
            IELTS . Recognized by more than 10,000 organizations worldwide,
            IELTS is the world's leading English test for study, work and
            migration purposes. Our IELTS network spans ,450 locations in 55
            Countries.
          </p>

          <p className="pagebold">
            5.Join Our Global Network of Students and Alumni for Personalized
            Support and Connections
          </p>
          <p className="pagepara">
            At IIEC, you will have the opportunity to connect with alumni or
            current students who have already experienced studying in the place
            you are interested in. This gives you a chance to hear firsthand
            accounts of what it's like and gain valuable insights from people
            who have been in your shoes.
          </p>
          <p className="pagepara">
            As a direct network of students, alumni, and employers operating
            globally, IIEC provides a strong support system for its students.
            When you arrive in your new Country, we will connect you with other
            IIEC students through welcome events to help you settle into life.
          </p>
          <p className="pagebold">6. Let's turn your dreams into reality </p>
          <p className="pagepara">
            If you are thinking about your study abroad options, let's find the
            best Country, University and course for you . Schedule an
            appointment with one of our team so we can start planning your
            journey from your current location to your desired location.
          </p>
        </div>
        <div className="flex-container">
          <StudyAbroad hgt="120vw" />
        </div>
      </div>

      <div className="dis_flex  pd_lt_rt " style={{ gap: "2vw" }}>
        <Card
          icon="Studyabroadintakes"
          title3="Come to our free counselling sessions"
          content="Studying abroad is a big step to take. Let's answer some basic questions so you can understand if you're ready to get an International degree."
          link="/freestudyabroad"
        ></Card>
        <Card
          icon="Applyfor2022intakes"
          title="Course Advice"
          content="Can't decide which course to take? Course selection involves assessing personal aspirations, career goals, employability, deadlines, budget, etc. Come see us, we'll help you assess your strengths and find the right course for you."
          link="/courseadvice"
        ></Card>
      </div>

      <YourNextStep />
      <Footer />
    </div>
  );
};
export default SixReasonstoIIEC;
