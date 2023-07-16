import React, { useState } from "react";
import "../styles/pagescss/home.css";
// import IIEC_logo from "../Asserts/images/IIEC_logo.png";
import map from "../Asserts/images/Map.png";
import Marker from "../Asserts/images/Marker.png";
import Dubai from "../Asserts/images/dubai.png";
import Chennai from "../Asserts/images/chennai.png"
import Header from "../components/header";
import Footer from "../components/footer";
// import YourNextStep from '../components/yournextstep';
import StudyAbroad from "../components/studyabroad";
import WhyStudyAbroad from "../components/whystudyabroad";
import Navbar from "../components/navbar";
import TopBanner from "../components/topbanner";
import BottomBannerfirst from "../components/bottombannerfirst";
import BottomBannertwo from "../components/bottombannertwo";
import PopularCourses from "../components/popularcourse";
import YourNextStep from "../components/yournextstep";
import Card from "../components/card";
import Australia from "../Asserts/images/Australia.png";

const Home = () => {
  
  const [dxbaddresspopup, setdxbaddresspopup] = useState(false);
  const [CHNaddresspopup, setCHNaddresspopup] = useState(false);
   const [AUSaddresspopup, setAUSaddresspopup] = useState(false);
  
  const disblock = () => {
    if (dxbaddresspopup === false) {
      setdxbaddresspopup(true);
    } else {
      setdxbaddresspopup(false);
    }
  };
  const disblock2 = () => {
    setdxbaddresspopup(true);
  };
  const disblock3 = () => {
    setdxbaddresspopup(false);
  };
   
  const Chnaddshow = () => {
    if (CHNaddresspopup === false) {
      setCHNaddresspopup(true);
    } else {
      setCHNaddresspopup(false);
    }
  };
  const Chnaddshow2 = () => {
    setCHNaddresspopup(true);
  };
  const Chnaddshow3 = () => {
    setCHNaddresspopup(false);
  };

   const Ausaddshow = () => {
     if (AUSaddresspopup === false) {
       setAUSaddresspopup(true);
     } else {
       setAUSaddresspopup(false);
     }
   };
   const Ausaddshow2 = () => {
     setAUSaddresspopup(true);
   };
   const Ausaddshow3 = () => {
     setAUSaddresspopup(false);
   };
  return (
    <div className="homepage">
      <Header></Header>
      <div className="navbar_mapdiv">
        <Navbar></Navbar>
        <div className="imagesmap">
          <img src={map} alt=""></img>
          <img
            className="markerimg1"
            id="markeroneid"
            src={Marker}
            onMouseOver={() => Chnaddshow2()}
            onClick={() => Chnaddshow()}
            onMouseOut={() => Chnaddshow3()}
            alt=""
          ></img>
          <img
            className="markerimg2"
            src={Marker}
            onMouseOver={() => disblock2()}
            onClick={() => disblock()}
            onMouseOut={() => disblock3()}
            alt=""
          ></img>
          <img
            className="markerimg3"
            src={Marker}
            onMouseOver={() => Ausaddshow2()}
            onClick={() => Ausaddshow()}
            onMouseOut={() => Ausaddshow3()}
            alt=""
          ></img>
          {dxbaddresspopup && (
            <div className="dxbaddress" id="dxbaddressid">
              <img src={Dubai} alt=""></img>
              <p>26th floor , Office no 25 </p>
              <p>Aspin tower , Sheikh Zayed Road</p>

              <p>Dubai</p>
            </div>
          )}
          {CHNaddresspopup && (
            <div className="chnaddress" id="chnaddressid">
              <img src={Chennai} alt=""></img>
              <p>No.78, 1st Floor, V.V.Koil Street, </p>
              <p> Thiruvaleeswarar Nagar , </p>
              <p>Thirumangalam, Anna Nagar West,</p>
              <p>Chennai – 600 040, Tamil Nadu, India.</p>
            </div>
          )}
          {AUSaddresspopup && (
            <div className="ausaddress" id="ausaddressid">
              <img src={Australia} alt=""></img>
              <p>755 Sandy Bay Road Hobart, </p>
              <p> Tasmania, </p>
              <p>Australia 7005</p>
            </div>
          )}
        </div>
      </div>
      <div className="topbannerhome">
        {" "}
        <TopBanner></TopBanner> <WhyStudyAbroad />
        <Card
          icon="Studyabroadintakes"
          title="Study abroad intakes"
          content="The term Intake refers to the start of admission process of Various different program. Basically divided into two – Fall intake and Spring Intake. Come and Let’s Plan."
          link="/studyingabroadFAQs"
        ></Card>
        <Card
          icon="EmploymentProspectsabroad"
          title="Employment Prospects abroad"
          content="Knowing what type of Employment prospects are available and ways to find them."
          link="/studyingabroadFAQs"
        ></Card>
      </div>

      <div className="studyabroadhome">
        {" "}
        <StudyAbroad hgt="105vw"></StudyAbroad>
      </div>

      <div className="homepagesecond">
        <div className="homepagesecondcomponents">
          <Card
            icon="Benefitsofstudyingabroad"
            title="Benefits of studying abroad"
            content="Increasing chances of finding better Employment prospects/Job with high quality education."
            link="/studyabroadbenefits"
          ></Card>
        </div>
        <div className="homepagesecondcomponents">
          <Card
            icon="StudyAbroadparentresources"
            title=" Study Abroad Parent Resources"
            content="Below is a list of resources for parents to support and prepare your child for study abroad."
            link="/guidetostudyabroad"
          ></Card>
        </div>
        <div className="homepagesecondcomponents">
          <Card
            icon="IIECguidetostudyingabroad"
            title=" IIEC’s guide to studying abroad"
            content="We have the expertise and resources to help you find the perfect fit. From helping you choose your right course and Country to guiding you through the paperwork, we'll make it happen. This step-by-step guide will help you get started on your study abroad journey."
            link="/guidetostudyabroad"
          ></Card>
        </div>
        <div className="homepagesecondcomponents">
          <Card
            id="typesofofferlettersid"
            icon="Typesofofferletters"
            title2=" Understand the difference/contrasting elements between conditional and unconditional offer letters."
          ></Card>
        </div>
      </div>
      <BottomBannerfirst></BottomBannerfirst>
      <BottomBannertwo></BottomBannertwo>
      <PopularCourses />

      <h1 className="yournextstephead">Your Next Steps</h1>

      <YourNextStep />
      <Footer></Footer>
    </div>
  );
};

export default Home;
