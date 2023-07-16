import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import StudyAbroad from "../../components/studyabroad";
import YourNextStep from "../../components/yournextstep";

const PTE = () => {
  return (
    <div className="page">
      <Header />
      <Navbar />
      <div className="dis_flex">
        <div className="flex-container">
          <p className="mainhead">PTE COACHING AND TRAINING @ IIEC</p>

          <p className="pagepara">
            The PTE course provides comprehensive coverage of all PTE test
            topics. Trainers examine the most important basics, correct
            approaches, effective solutions, and testing strategies. Killing two
            birds with one stone. Expect lots of interaction and practice from
            our learning PTE specialists.
          </p>
          <p className="pagepara">
            We are so confident in the quality of our SAT prep programs that we
            guarantee you'll increase your official SAT score by when you
            complete our proven program.
          </p>

          <p className="pagepara">
            A team of professional trainers with the requisite professional
            experience and education will guide you. Exam Prep Specialist has
            also achieved very high SAT score , is loved by students and has an
            excellent track record of producing high performing students.
          </p>

          <p className="mainhead">Structure of PTE</p>
          <p className="pagepara">
            PTE General (formerly London Tests of English) is a International
            English language test for speakers of English as a Foreign Language
            (EFL). Developed by Pearson Language Tests and maintained by
            Edexcel. The exam is accredited by the QCA, Qualification and
            Curriculum Authority. In some Countries (Poland, Greece) oral
            dialogue is scored by locally trained raters , while in other
            Countries (France, Italy) it is scored entirely in London.
          </p>
          <p className="pagepara">
            The PTE General is a topic-based exam designed to test how well
            learners communicate in authentic, real-life situations, rather than
            how well they remember formal vocabulary and structures. For this
            reason, the tests use real scenarios instead of grammar exercises.
          </p>
          <p className="pagepara">
            {" "}
            They test skills: reading, writing, listening and speaking. There
            are 6 levels corresponding to the Common European Framework of
            Reference for Languages. The Framework was developed by the Council
            of Europe to enable a language learner, teacher, University or
            prospective employer to compare and correlate language
            qualifications by level.
          </p>
          <p className="pagepara">
            Reading, writing, listening and speaking are tested at all levels.
            Alignment of the London Tests of English with the CEFR was achieved
            by mapping test specifications to CEFR descriptors. This mapping
            process has been subject to external review by the University of
            Westminster.
          </p>
          <p className="pagepara">
            {" "}
            Work is underway to further improve the robustness of the alignment
            using empirical data . Levels 4 and 5 of the PTE General are
            admitted to UK Universities and a wide range of International
            companies. The London Tests of English are officially accredited by
            the Qualifications and Curriculum Authority (QCA)
          </p>
          <p className="pagepara">
            PTE Young Learners (formerly LTEfC) is the International English
            exam for young children (ages 7-12) learning English as a Foreign
            Language (EFL) . Test four skills: Reading, Writing, Listening and
            Speaking.
          </p>
          <p className="pagepara">
            The PTE Young Learners exam is based on , the delightful adventures
            of the Brown family. The exams are themed and designed to be fun and
            motivating. At low levels, we want to test how well children use
            language structures, and at high levels, we want to test how well
            they use language to accomplish communicative tasks. , the tests use
            real scenarios rather than grammar exercises.
          </p>
          <p className="pagepara">There are four PTE Young Learners levels</p>

          <p className="mainhead">History</p>
          <p className="pagepara">
            PTE General was originally developed in 1982 by the University of
            London Schools Examination Board. The Examination Board, in 1996
            merged with the Business & Technological Council (BTEC) to form
            Edexcel, , the UK's largest academic and professional education
            examination body.
          </p>
        </div>
        <div className="flex-container">
          <StudyAbroad hgt="120vw" />
        </div>
      </div>
      <div className="pagebtmcon">
        <p className="mainhead">Schema Theory</p>

        <p className="pagepara">
          PTE General was one of the first ESOL exams to apply
          Notional-Functional Syllabus and Schema Theory to language testing.
          The schema theory was developed by psychologists such as R.C. Anderson
          and Frederick Bartlett. A schema (plural of schema) is a learning
          model that proposes relationships between objects and helps structure
          future learning.
        </p>
        <p className="pagepara">
          PTE-General Tasks are linked by common themes and allow candidates to
          activate different areas of knowledge acquired and further improve
          second language acquisition. It also provides a coherent common thread
          for candidates to guide them through different challenges.
        </p>
        <p className="pagepara">
          Tasks can be related to each other by common themes or scenarios where
          different tasks "build" stories and integrate different language
          skills.
        </p>
      </div>

      <YourNextStep />
      <Footer />
    </div>
  );
};
export default PTE;
