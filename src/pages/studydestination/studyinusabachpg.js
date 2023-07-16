import React from "react";
// import "../../styles/pagescss/studyabroadpg/guidetostudyabroad.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import StudyAbroad from "../../components/studyabroad";
import YourNextStep from "../../components/yournextstep";

const BachelorinUSA = () => {
  return (
    <div className="page">
      <Header />
      <Navbar />
      <div className="dis_flex">
        <div className="flex-container">
          <p className="mainhead">Study in USA</p>
          <p className="pagebold">BACHELORS IN USA</p>
          <p className="pagepara">
            Higher education in the United States generally begins after
            completion of 12 years of elementary and secondary education.
            Therefore, education beyond grade XII is also referred to as "higher
            education" in the United States.
          </p>
          <p className="pagepara">
            Bachelor's degree programs last four years and are offered by
            various types of universities.
          </p>
          <p className="pagepara">
            Liberal arts colleges provide a general education in the arts and
            sciences that develops general knowledge and thinking skills. Most
            of these colleges are private and have a limited number of programs.
          </p>
          <p className="pagepara">
            Sixth Form Colleges are colleges that offer the final two years of
            various undergraduate degree programs with specializations. Several
            community colleges offer two-year associate's degrees. After
            completing such a two-year associate's degree, students can attend
            either a college or college and earn a bachelor's degree in the
            remaining two years. Most community colleges are public, offer
            technical programs to prepare students to enter the workforce, and
            offer certificate and diploma programs that last from six months to
            one year.
          </p>
          <p className="pagepara">
            Specialized programs, such as engineering, are also offered that are
            equivalent to the first two years of a bachelor's degree. These are
            known as "transfer" programs.
          </p>
          <p className="pagepara">
            The college offers a wide range of undergraduate and graduate
            programs. Universities vary greatly in size, ranging from a two-room
            apartment to a campus covering thousands of acres! The scope and
            diversity of programs are enormous. Research activities are only
            possible at universities and not at other types of universities.
          </p>
          <p className="pagebold">Admission</p>
          <p className="pagepara">
            Most universities offer unbiased admission opportunities to
            international students. In their admissions decisions, some may
            consider early admission for students who have not yet completed
            their bachelor's degree in their third year. Some colleges offer
            early admission, which requires the admitted student to commit to
            being admitted to the university. Typically, such universities take
            "early action" by notifying students of an "early decision," based
            on which students must accept an offer of admission and post a
            deposit.
          </p>
          <p className="pagepara">
            In addition to very good academic performance in grades 10-12,
            international applicants should have very good TOEFL and SAT scores
            to be admitted to a decent U.S. university at the undergraduate
            level. Some of the better colleges even require a SAT subject test
            before making an admissions decision. See TOEFL, SAT for more
            information on these tests. There are other questions about US
            bachelor's degree programmes - location, size, courses offered,
            admission requirements, deadlines, costs, financial aid, housing,
            student life, academic programmes, modern campus, etc.
          </p>
          <p className="pagebold">Cost of Education</p>
          <p className="pagepara">
            {" "}
            A bachelor's degree costs more than a master's degree in the United
            States. Students are expected to earn more credits per semester,
            resulting in higher costs.
          </p>
          <p className="pagepara">
            The average cost of tuition is approximately $ 10,000-20,000 per
            year, depending on the program, institution, and location. Living
            expenses are another $8,000-10,000 per year, depending on the
            student's lifestyle.
          </p>
          <p className="pagepara">
            {" "}
            Financial aid is very rare for our international students at the
            undergraduate level. There are some opportunities for domestic
            students, such as the Federal Stafford Loan, but these opportunities
            are not available to international applicants.
          </p>
          <p className="pagepara">
            A bachelor's degree is a four-year program, so the total cost is
            usually quite high. This is one of the reasons why most students
            prefer to pursue a master's degree in the United States or
            elsewhere. Of all international students, only 19% chose the
            bachelor's program, while 79% chose the master's program.
          </p>
        </div>
        <div className="flex-container">
          <StudyAbroad hgt="120vw" />
        </div>
      </div>
      <div className="pagebtmcon">
        <p className="pagepara">
          {" "}
          The program is intensive and students have little time to work while
          studying, so it is not easy to stay afloat with part-time jobs. In
          addition, teaching and research assistants are available at the
          master's level but not at the bachelor's level. Therefore, part-time
          employment opportunities are limited and earnings are low.
        </p>
        <p className="pagepara">
          To help offset costs, IIEC supports programs like IELI with
          educational loans. Organizations like IELI offer education loans worth
          up to $45,000 annually without mortgages or guarantors. Contact us if
          you would like to learn more about this exciting loan program.
        </p>
        <p className="pagebold">Accreditation</p>
        <p className="pagepara">
          Accreditation of a college/college is very important in choosing the
          right educational institution as it ensures consistency of curriculum,
          proper course design, fulfillment of infrastructure requirements,
          appropriate departments and facilities, etc. The Six Regional
          Accreditation Association accredits in six regions of the United
          States (Central State, New England, North Central, Northwest, South
          and West).
        </p>
        <p className="pagepara">
          National accrediting associations such as ACICS, AABC, ATS, and DETC
          offer specialized accreditation for a variety of programs such as
          technology, biblical studies, and distance education. Visa Application
        </p>
        <p className="pagepara">
          After you have been admitted to a college, you will need to apply for
          a visa. A U.S. visa is relatively easy to obtain. If you have the
          necessary documents and an interview prepared, the process is simple.
          However, professional advice and careful planning of the entire
          process are very important for success.
        </p>
        <p className="pagepara">
          When it comes to personalized action plans for obtaining an F-1 visa
          and earning a bachelor's degree in the United States, IIEC's resources
          are second to none. Visit our office and contact a counselor in
          person, online, or by phone who will be happy to help you get into the
          big leagues.
        </p>
      </div>
      <div className="dis_flex  pd_lt_rt " style={{ gap: "2vw" }}></div>

      <YourNextStep />
      <Footer />
    </div>
  );
};
export default BachelorinUSA;
