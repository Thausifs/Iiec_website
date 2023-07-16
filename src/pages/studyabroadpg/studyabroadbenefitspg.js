import React from "react";
import Navbar from "../../components/navbar";
import Card from "../../components/card.js";
import Header from "../../components/header";
import StudyAbroad from "../../components/studyabroad";
import "../../styles/pagescss/studyabroadpg/studyabroadbenefitspg.css";
import Footer from "../../components/footer";
import YourNextStep from "../../components/yournextstep";

const StudyAbdBenefits = () => {
  return (
    <div className="page">
      <Header />
      <Navbar />
      <div className="dis_flex">
        <div className="flex-container">
          <p className="mainhead">Benefits of studying abroad </p>
          <p className="pagepara">Beyond education lies an adventure:</p>
          <p className="pagepara">
            Studying abroad is a holistic experience that expands your horizons
            both personally and professionally.
          </p>
          <p className="pagepara">
            Here's why you should embark on this transformative journey:
          </p>
          <p className="pagebold">1. Explore endless possibilities </p>
          <p className="pagepara">
            Studying abroad offers a wider variety of courses, including some
            that include research and skills-based training options. This
            broadens your horizons and opens up new educational opportunities
            that might not be available in your home country.
          </p>
          <p className="pagepara">
            Some programs abroad also allow you to take multiple courses at the
            same time, giving you the flexibility to pursue your interests in
            multiple subjects. With IIEC cooperating with over 700 leading
            universities and schools worldwide, you are sure to find the best
            program to suit your needs and interests.
          </p>
          <p className="pagebold">2.Enhances your employability</p>
          <p className="pagepara">
            Enhancing your employability, you increase your chances of getting
            hired or promoted and being successful in your career. This can be
            achieved through acquiring new skills, gaining relevant experience,
            improving language proficiency, and demonstrating a positive
            attitude and adaptability.
          </p>
          <p className="pagebold">
            3.Immerse yourself in language and culture.
          </p>

          <p className="pagepara">
            By immersing yourself in an English-speaking environment, you will
            have numerous opportunities to practice speaking, reading, writing,
            and understanding the language. This not only helps you become more
            confident and fluent in English but also opens up new doors for
            academic and professional advancement.
          </p>
          <p className="pagepara">
            {" "}
            Additionally, making friends from diverse cultures can broaden your
            network and provide valuable connections for your future career.
          </p>
          <p className="pagebold">4. Expands your global exposure</p>
          <p className="pagepara">
            Studying abroad enables you to learn new methods of tackling diverse
            situations, balancing your study and part-time work, exploring
            international teaching styles, and interacting with diverse
            international communities. It also deepens your understanding of the
            subject matter and broadens your perspective on life in general
          </p>
          <p className="pagebold">5.See the world from a new angle . </p>
          <p className="pagepara">
            By studying abroad, you foster a mindset of understanding and
            open-mindedness towards other cultures and people. Regardless of
            your field of study - be it science, politics or finance, the
            ability to think from a multinational perspective will help you meet
            modern challenges and provides innovative solutions for the future.
          </p>
          <p className="pagepara">
            You will graduate with a richer set of experiences that allow you to
            think more openly and creatively. As you learn to see the world
            through different lenses, you will also learn new things about your
            own Country and culture.
          </p>
        </div>
        <div className="flex-container">
          <StudyAbroad hgt="120vw" />
        </div>
      </div>
      <div className="pagebtmcon">
        <p className="pagebold">6.Create memories that last a lifetime</p>
        <p className="pagepara">
          Your study abroad experience extends beyond the classroom. During your
          free time, you'll have the chance to visit popular tourist
          destinations or explore the local areas of the country you're in.
        </p>
        <p className="pagepara">
          This provides the opportunity to discover new parts of the world and
          gain new experiences that you can share with friends and family. You
          might even discover a new passion or hobby that could lead to a future
          career.
        </p>
        <p className="pagebold pagepara">
          Benefits of pursuing an Under Graduate degree abroad
        </p>
        <p className="pagepara">
          As a student just out of school, it gives you an edge because:
        </p>
        <p className="pagepara ml_2">
          {" "}
          You are exposed to the new way of studying and working
          Internationally, right from the very beginning.
        </p>
        <p className="pagepara ml_2">
          {" "}
          Your understanding of various cultures is nourished/Culturally
          enriched .
        </p>
        <p className="pagepara ml_2"> Widens your scope of career options.</p>
        <p className="pagebold pagepara">
          Benefits of pursuing a Post Graduate degree abroad.
        </p>
        <p className="pagepara">This reinstates that you are committed to:</p>
        <p className="pagepara ml_2">Enhance your technical skills.</p>
        <p className="pagepara ml_2"> Elevate your professional profile.</p>
        <p className="pagepara ml_2">
          Develop your social and professional network.
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

export default StudyAbdBenefits;
