import React from 'react';
import "../styles/componentscss/card.css";


const Card = ({icon,title,content,link}) => {

 
  return (
    <div  className='cardmaindiv'>
      <div className="cardcomponents">
        {" "}
       <div className='cardimgdiv'> <a href={link} > <img className='cardimg' src={require(`../Asserts/images/${icon}.png`)} ></img></a>{" "}</div>
        <p className="cardone " style={{height:"10vw"}}>{title}</p>
        <p className='cardtwo mt_6'>{content}</p>
      </div>{" "}
    </div>
  );
};

export default Card;


