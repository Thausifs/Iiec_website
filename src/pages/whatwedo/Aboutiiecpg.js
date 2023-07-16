import React from "react";
// import "../../styles/pagescss/studyabroadpg/guidetostudyabroad.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import StudyAbroad from "../../components/studyabroad";
import YourNextStep from "../../components/yournextstep";

const AboutIIEC = () => {
  return (
    <div className="page">
      <Header />
      <Navbar />
      <div className="dis_flex">
        <div className="flex-container">
          <p className="mainhead">About IIEC</p>
          
          <p className="pagepara">
            IIEC is an ISO 9001:2015 compliant International education
            organization and immigration consultant, founded by a dynamic team
            of skilled and dynamic advisors who have given wings to the dreams
            of more than 9000 students and migrants to find their rightful place
            in the world.{" "}
          </p>
          <p className="pagepara">
            {" "}
            We are proud to be a strategic partner of IIEC and the British
            Council for the IELTS program and we are proud to have one of the
            most comprehensive in-house education centers supported by a network
            of resources and many types of qualifying exams like TOEFL, PTE,
            SAT, GRE, GMAT and ELT to name a few. Our ONE STOP immigration
            program has helped people from various industries and professions to
            immigrate in many Countries around the world with ease and comfort.
            IIEC is an associate of a registered and very permanent member of
            CSIC/CCIC/CAPIC, the government-licensed Canadian education agency
            and immigration consultant based in Canada .
          </p>
          <p className="pagepara">
            We are one of the most sought after immigration specialists in India
            to ensure success for permanent residency through EEP, PNP and
            Skilled Migration Visas. IIEC's expertise extends to all immigration
            areas and we specialize in dependent visas, investor visas, business
            visas, J1 programs, internships and primarily visas pupil.
          </p>
          <p className="pagebold">Why IIEC?</p>

          <ul className="pageul pagepara">
            <li>
              {" "}
              IIEC has helped hundreds of students and families find the right
              Universities, colleges and boarding schools in the US, Canada, UK,
              Australia and more.
            </li>
            <li>
              IIEC has strategic alliances with some of the best academic
              Institutions on all Continents of the world and our staff has
              extensive experience in identifying the best academic Institution
              for Students.
            </li>
            <li>
              Our longstanding excellence in education placements based on best
              practices has made us a leader in educating International
              students.
            </li>
            <li>
              Our staff, with their professional skills and friendly demeanor,
              will assist you in making the best choice of university or
              academic institution. We offer top efficiency in the industry,
              simplifying the registration process and recommending up-to-date,
              personalized solutions for trip planning, health and travel
              insurance, financial arrangements, and accommodation in your
              destination country.
            </li>
          </ul>
          <p className="pagebold">Our Services Include:</p>
          <ul className="pageul pagepara">
            <li>
              Professional advice based on years of experience from
              International student programs.
            </li>
            <li>
              The advice focuses on students in choosing courses, colleges and
              Universities.
            </li>
            <li>
              Top quality coaching and training in IELTS, TOEFL, PTE, SAT, GRE,
              GMAT and more. with exceptional in-house facilities and trained by
              reputable and highly regarded industry experts.
            </li>
            <li>
              Guaranteed admission to top courses at top colleges and
              Universities in many Countries.
            </li>
            <li>
              The most thorough and flawless visa application and orientation
              process leads to a consistent history of successful applications.
            </li>
            <li>Finding accommodation upon reaching your destination.</li>
            <li>
              Excellent job placements through our tie up with top HR firms.
            </li>
            <li>
              Very comprehensive services for getting guaranteed bank loans.
            </li>
            <li>
              Migration and resettlement services to many interesting
              destinations around the world.
            </li>
            <li>
              Work permit processing, permanent residence through EEP, PNP and
              other visas leading to the best lifestyle .
            </li>
          </ul>

          <p className="pagepara"></p>
          <p className="pagebold"></p>
          <p className="pageparabold"></p>
        </div>
        <div className="flex-container">
          <StudyAbroad hgt="120vw" />
        </div>
      </div>
      <div className="pagebtmcon"></div>

      <YourNextStep />
      <Footer />
    </div>
  );
};
export default AboutIIEC;
