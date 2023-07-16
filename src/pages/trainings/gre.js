import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import StudyAbroad from '../../components/studyabroad';
import YourNextStep from '../../components/yournextstep';



const  GRE =() =>{
  return (
    <div className="page">
      <Header />
      <Navbar />
      <div className="dis_flex">
        <div className="flex-container">
          <p className="mainhead">GRE TRAINING @ IIEC </p>
          <p className="pagepara">
            The IIEC offers comprehensive classroom training for the GRE.
            Courses were designed and prepared by leading educational experts.
            Our goal is to provide the best possible support to help you achieve
            a competitive GRE score, which is an important part of the graduate
            admissions process.
          </p>
          <p className="pagepara">
            Our center offers an intensive course in the NEW FORMAT of the GRE.
            The GRE class includes training for the GRE AWA on the GRE Quant,
            GRE Verbal, and GRE General Test.
          </p>
          <p className="pagepara">
            Course material is provided to students. The GRE Prep course is
            designed to provide additional benefits for high GRE test scores.
            Program includes practice tests that can be scheduled at a time of
            your choosing outside of class.
          </p>
        </div>
        <div className="flex-container">
          <StudyAbroad hgt="110vw" />
        </div>
      </div>

      <YourNextStep />
      <Footer />
    </div>
  );
} 
export default GRE ; 