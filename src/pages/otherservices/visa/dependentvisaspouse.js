import React from 'react';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import Navbar from '../../../components/navbar';
import StudyAbroad from '../../../components/studyabroad';
import YourNextStep from '../../../components/yournextstep';



const  DependentVISASpouse =() =>{
  return(
   <div className="page">
    <Header/>
    <Navbar/>
    <div className='dis_flex'>
        <div className="flex-container">
       


        </div>
        <div className='flex-container'><StudyAbroad hgt="110vw"/></div>
    </div>
    
      
    
        <YourNextStep/>
        <Footer/>

   </div>


  )
} 
export default DependentVISASpouse ; 