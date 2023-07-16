import React from "react";
import "../../styles/pagescss/studyabroadpg/costtostudyabroadpg.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import StudyAbroad from "../../components/studyabroad";
import Card from "../../components/card.js";
import YourNextStep from "../../components/yournextstep";

const GuidetoStudyAbroad = () => {
  return (
    <div className="page">
      <Header />
      <Navbar />
      <div className="dis_flex">
        <div className="flex-container">
          <p className="mainhead">How much does it cost to study abroad?</p>
          <p className="pageparabold">
            Wondering how much money you need? We'll help you budget!
          </p>
          <p className="pagepara">
            You've decided to study abroad and explore the world, that's great!
            A comprehensive list of estimates for all basic expenses such as
            accommodation, food, health insurance, communication, and travel is
            essential.
          </p>
          <p className="pagepara">
            {" "}
            Our guide will provide you with the tools you need to create a
            budget, manage your finances effectively, and explore the world with
            confidence, without having to worry about money.
          </p>
          <p className="pagebold">1. Tuition fee is your primary expense</p>
          <p className="pagepara">
            This is the largest and most significant part of your study abroad
            costs and totally depends on the type of degree and Institution you
            choose. Here is a quick overview of tuition fees for different
            programs in our top destinations.
          </p>
          <table className="tablediv">
            <tr>
              <th className="costtostudythtablediv">Destination</th>
              <th className="costtostudythtablediv">
                Under Graduate Program (annually)
              </th>
              <th className="costtostudythtablediv">
                Post Graduate master's degree (annually)
              </th>
              <th className="costtostudythtablediv">
                Doctoral degree (annually)
              </th>
            </tr>
            <tr className="trdashed">
              <td className="costtostudytdtablediv">Canada</td>
              <td className="costtostudytdtablediv">
                CAD 13,000 to CAD 20,000
              </td>
              <td className="costtostudytdtablediv">
                CAD 17,000 to CAD 25,000
              </td>
              <td className="costtostudytdtablediv">CAD 7,000 to CAD 15,000</td>
            </tr>
            <tr>
              <td className="costtostudytdtablediv">New Zealand</td>
              <td className="costtostudytdtablediv">
                NZD 20,500 to NZD 25,000
              </td>
              <td className="costtostudytdtablediv">
                NZD 19,000 to NZD 29,000
              </td>
              <td className="costtostudytdtablediv">NZD 6,500 to NZD 9,000</td>
            </tr>
            <tr className="trdashed">
              <td className="costtostudytdtablediv">Australia</td>
              <td className="costtostudytdtablediv">
                AUD 15,000 to AUD 33,000
              </td>
              <td className="costtostudytdtablediv">
                AUD 20,000 to AUD 42,000
              </td>
              <td className="costtostudytdtablediv">
                AUD 20,000 to AUD 42,000
              </td>
            </tr>
            <tr>
              <td className="costtostudytdtablediv">UK</td>
              <td className="costtostudytdtablediv">£10,000 to £20,000</td>
              <td className="costtostudytdtablediv">£10,000 to £20,000</td>
              <td className="costtostudytdtablediv">£15,000 to £24,000</td>
            </tr>
            <tr className="trdashed">
              <td className="costtostudytdtablediv">US</td>
              <td className="costtostudytdtablediv">
                USD 20,000 to USD 40,000
              </td>
              <td className="costtostudytdtablediv">
                USD 20,000 to USD 45,000
              </td>
              <td className="costtostudytdtablediv">
                USD 28,000 to USD 55,000
              </td>
            </tr>
            <tr>
              <td className="costtostudytdtablediv">Ireland</td>
              <td className="costtostudytdtablediv">€9,850 to €25,500 </td>
              <td className="costtostudytdtablediv">€9,500 to €34,500 </td>
              <td className="costtostudytdtablediv">€9,500 to €34,500</td>
            </tr>
          </table>
          <p className="pagepara">
            You can always apply for different scholarships for Indian students
            to reduce your study costs while studying abroad.
          </p>
          <p className="pagebold">2. Where will you stay?</p>
          <p className="pagepara">
            You can choose from on-campus residence halls if your Institution
            offers one, otherwise off-campus housing options include shared
            apartments with an Indian. Keeping in mind the rent varies from
            region to region. Your IIEC advisor can help you to explore the
            different accommodation options available in your your study
            destination.
          </p>
          <p className="pagebold">3. Know your student visa cost</p>
          <p className="pagepara">
            Each country has its own visa rules and costs for international
            students. Speak to your IIEC advisor for the latest updates on the
            student Visa process for your study destination.
          </p>
          <p className="pagepara">
            Know more about student Visa procedures in
            <br />
            Canada | New Zealand | Australia | UK | US | Ireland{" "}
          </p>
        </div>
        <div className="flex-container">
          <StudyAbroad hgt="120vw" />
        </div>
      </div>
      <div className="pagebtmcon">
        <p className="pagebold">4. Don’t ignore your living expenses</p>
        <p className="pagepara">
          When you arrive in a new Country, you adopt its cultures and ways of
          life, and sometimes this comes at a cost. Set aside money for living
          expenses, groceries, communication expenses (data and calls ),
          stationery, utilities, social activities , emergencies , study
          materials and your books .{" "}
        </p>
        <p className="pagepara">
          For a rough idea of ​​your living costs while studying abroad, try our
          cost of living calculator.
        </p>
        <p className="pagebold">5. Health support is important</p>
        <p className="pagepara">
          Make sure you have health insurance before starting your program,
          which is a must for all students traveling abroad! For example, the
          average cost of health insurance in Canada ranges from 300 CAD to CAD
          800 per year (symbolic only).{" "}
        </p>
        <p className="pagepara">
          Just know that as an International student of India, you will have
          access to an extensive range of various medical and support services
          in each destination. Your advisor will help you find the right health
          insurance coverage for you{" "}
        </p>
        <p className="pagepara">
          Know more about health and support services in
          <br />
          Canada | New Zealand | Australia | UK | US | Ireland
        </p>
        <p className="pagebold">6. You’ll have to commute</p>
        <p className="pagepara">
          Figure out if your facility offers shuttle service. Otherwise go for
          public transport. Locally, you can use regional trains, buses and
          metros, schedule available on the web or government listings. Getting
          cards monthly to go to your facility is an affordable option.
        </p>
        <p className="pagebold">7. When you earn, you pay taxes</p>
        <p className="pagepara">
          Indian students studying abroad are allowed to work hours per week
          (approximately 20 hours) during their studies and full time during
          vacations. Remember that when you work, you will also have to pay tax.
          Make sure the terms of your Visa allow you to work and check with your
          advisor about such opportunities.{" "}
        </p>
        <p className="pagepara">
          Be aware of changes in exchange rates as they can also affect the
          budget . You should look for part-time work or look for scholarships
          to reduce the cost of studying abroad.{" "}
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

export default GuidetoStudyAbroad;
