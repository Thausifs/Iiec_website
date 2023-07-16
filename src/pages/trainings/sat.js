import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import StudyAbroad from "../../components/studyabroad";
import YourNextStep from "../../components/yournextstep";

const SAT = () => {
  return (
    <div className="page">
      <Header />
      <Navbar />
      <div className="dis_flex">
        <div className="flex-container">
          <p className="mainhead">SAT</p>
          <p className="pagepara">
            The SAT course provides comprehensive coverage of all SAT test
            topics. Trainers examine the most important basics, correct
            approaches, effective solutions, and testing strategies. Killing two
            birds with one stone. Expect lots of interaction and practice from
            our Learning GMAT Specialists.
          </p>
          <p className="pagepara">
            We are so confident in the quality of our SAT prep programs that we
            guarantee that your official SAT score will increase by after
            completing our proven program.
          </p>
          <p className="pagepara">
            A team of professional trainers with the requisite professional
            experience and education will guide you. Our excellent His Exam Prep
            Specialist has also achieved a very high His SAT score of , is loved
            by students and has an excellent track record of producing
            outstanding students. .
          </p>
          <h2 className="mainhead">Reading Test</h2>
          <p className="pagepara">
            The SAT Reading Test consists of 52, question sections with a time
            limit of 65 minutes. All questions are multiple choice questions and
            are based on reading the text. Tables, graphs, and figures may
            accompany some texts, but mathematics is not required to correctly
            answer the relevant questions. The Reading Test has five passages
            (up to two of which may be pairs of smaller passages), with 10-11
            questions per passage or pair of passages. SAT reading passages in
            relate to three main areas of history, social studies and science.
          </p>
          <p className="pagepara">
            Each SAT reading test always includes: Sections from US or
            International Literature Sections from US founding documents or
            related texts. A passage about economics, psychology, sociology, or
            other social sciences. Two scholarly writings . Answers to all
            questions are based solely on what is stated or implied in one or
            two sentences.
          </p>
          <h2 className="mainhead">Writing Test</h2>
          <p className="pagepara">
            The SAT Writing and Language Test consists of Section , with 44
            multiple-choice questions and a time limit of 35 minutes. As with
            reading comprehension tests, all questions are based on reading
            comprehension sentences accompanied by tables, graphs and charts.
            Candidates are asked to read the text, find mistakes and weaknesses
            in the text, and correct or improve it.
          </p>
          <p className="pagepara">
            The content of the reading passages of this test ranges from
            discussion of topics to factual stories on various subjects. The
            skills evaluated include: Improved word selection. Improve the
            analysis of social studies and science subjects. Change the
            structure of sentences or words to increase the quality of
            organization and the impact of your writing. Correction or
            improvement of sentence structure, word usage and punctuation.
          </p>
          <h1 className="mainhead">Mathematics</h1>
          <p className="pagepara">
            The math portion of the SAT is divided into two sections: Math Test
            – Calculator and Math Test – No Calculator. In total, the SAT math
            tests are 80 minutes long and contain 58 questions. A multiple
            choice question has four possible answers. Grid-in question is
            open-ended and requires a response from the candidate.
          </p>
          <ul className="pagepara">
            <li>
              The Math Test – No Calculator section has 20 questions (15
              multiple choice and 5 grid-in) and lasts 25 minutes.
            </li>
            <li>
              The Math Test – Calculator section has 38 questions (30 multiple
              choice and 8 grid-in) and lasts 55 minutes.
            </li>
          </ul>
          <p className="pagepara">
            In mathematics tests, several scores are provided to the test taker.
            A sub score (on a scale of 1 to 15) is reported for each of three
            categories of math content: “Heart of Algebra” (linear equations,
            systems of linear equations, and linear functions), “Problem Solving
            and Data Analysis” (statistics, modelling, and problem-solving
            skills), and “Passport to Advanced Math” (non-linear expressions,
            radicals, exponentials and other topics that form the basis of more
            advanced math).
          </p>
          <p className="pagepara">
            {" "}
            Test scores for math tests are reported on a scale ranging from 10
            to 40, and section scores (equal to test scores multiplied by 20)
            are reported on a 200 to 800 scale.
          </p>
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
export default SAT;
