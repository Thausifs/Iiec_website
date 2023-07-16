import React from "react";
import "../../styles/pagescss/studyabroadpg/guidetostudyabroad.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import StudyAbroad from "../../components/studyabroad";
import Card from "../../components/card.js";
import YourNextStep from "../../components/yournextstep";

const GuideforParents = () => {
  return (
    <div className="page">
      <Header />
      <Navbar />
      <div className="dis_flex">
        <div className="flex-container guidetostdmaindiv">
          <p className="mainhead">Parents Guide </p>
          <p className="pagebold">
            Before sending your child to Study Abroad , Get to Know this .
          </p>
          <p className="pagepara">
            Absolutely, its going to be the courageous decision you’ll ever
            make, and yes, the most decisive one for your child to. While
            Stydying Abroad your child will have access to the best faculties,
            world-class education and a global mindset .
          </p>
          <p className="pagepara">
            {" "}
            As a parent, it is your duty to support your child in this
            decision.So, be prepared to be a part of this wonderful journey.
          </p>
          <p className="pagebold pageboldsm">Parents Tasks</p>
          <p className="pagepara">
            As a parent you havee to be an crucial part of their decision-making
            procedure to support them and ensure they take the right steps in
            their life.
          </p>
          <p className="pagebold pageboldsm">1. Goals Dicussion </p>
          <p className="pagepara">
            Make some time and speak with your child to know why your child
            wants to go abroad – whether it is career-driven or personal. It is
            significant to know what exactly your child seeks in life to be able
            to guide and support them.
          </p>
          <p className="pagebold pageboldsm">2. Be knowledgeable </p>
          <p className="pagepara">
            Do some research about the courses they are interested in,
            universities they have been talking about and the kind of lifestyle
            they would be willing to adobt.
          </p>
          <p className="pagepara">
            This research should also include information on campus life ,
            course curriculum and accommodations options available abroad.
          </p>
          <p className="pagebold pageboldsm">
            3. Ponder about your challenges{" "}
          </p>
          <p className="pagepara">
            Connect with your friends and family whose children have gone
            abroad.Ask them about the challenges you are likely to face and
            figure out how to deal with them.Be as specific as you can and ask
            all your queries.
          </p>
          <p className="pagebold pageboldsm">
            4. Know about the cost you will spend{" "}
          </p>
          <p className="pagepara">
            In order to take correct decisions , an estimate of the costs
            involved in sending your kids abroad is crucial . Always take into
            consideration that its not only the Tuition Fees also consider other
            expenses such as accommodation, food, health coverage, communication
            and travel as well!.
          </p>
          <p className="pagebold pageboldsm">
            5. Seek Expereinced Counsellors{" "}
          </p>
          <p className="pagepara">
            IIEC has been helping students pursue their international education
            dreams for more than the last 17 years.If you have any doubts or
            concerns, we are more than happy to help you.
          </p>
          <p className="pagebold pageboldsm">6.Prioritize Health </p>
          <p className="pagepara">
            Please make sure you to get your child’s general physical
            examination, dental check-up, and a gynaecological check-up (if
            applicable). If required, ensure they have all the relevant shots
            and boosters .
          </p>
          <p className="pagebold pageboldsm">7.Ensure Travel Safety </p>
          <p className="pagepara">
            Ensure your child is insured before they leave and sign up for a
            safety program because sending your child abroad is an worrisome
            activity.
          </p>
          <p className="pagebold pageboldsm">8.Create a Detailed Plan </p>
          <p className="pagepara">
            After having an overview about cost , course details etc make a
            detailed plan about where he has to study , which course he has to
            study , Financial limitation for spending etc..
          </p>
        </div>

        <div className="flex-container">
          <StudyAbroad hgt="120vw" />
        </div>
      </div>
      <div className="pagebtmcon">
        <p className="pagebold pageboldsm">9. Be in Touch and plan visits </p>
        <p className="pagepara">
          It is crucial to stay connected with your child abroad as settling in
          a new country can be quite overwhelming. You have to give them both
          emotional support and as well as your guidance properly .Once your
          child has settled abroad, discuss with them and plan your visit abroad
          so that you can help you spend some quality time and also give them
          that emotional support they need while adjusting in another country.
        </p>
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
          title="Timeline for 2022 intakes "
          content="Below is a list of resources for parents to support and prepare your child for study abroad."
          link="/timelinefor2022intakes"
        ></Card>
      </div>
      <YourNextStep />
      <Footer />
    </div>
  );
};
export default GuideforParents;
