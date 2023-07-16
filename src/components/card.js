import React from "react";
import "../styles/componentscss/card.css";

const Card = ({ icon, title, content, fdsz, link, title2, title3 }) => {
  return (
    <div className="cardmaindiv">
      <div className="cardcomponents">
        {" "}
        <div className="cardimgdiv">
          <a href={link}>
            {" "}
            <img
              className="cardimg"
              src={require(`../Asserts/images/${icon}.png`)}
              alt=""
            ></img>
          </a>{" "}
        </div>
        <p className="cardone " style={{ height: "10vw" }}>
          {title}
        </p>
        <p className="cardone textdec_sm" style={{ height: "10vw" }}>
          {title3}
        </p>
        <p className="cardtwo">{content}</p>
        <p className="cardone txdecnone " style={{ height: "10vw" }}>
          {title2}
        </p>
      </div>
    </div>
  );
};

export default Card;
