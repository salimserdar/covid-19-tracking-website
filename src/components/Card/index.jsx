import React from "react";
import './Card.scss';

const Card = (props) => {
  const { cases, deaths, recovered } = props.totalData;
  return (
    <div className="cardWrapper">
        <div className="cardWrapper__item"><span>Cases:</span>{cases}</div>
        <div className="cardWrapper__item"><span>Deaths:</span>{deaths}</div>
        <div className="cardWrapper__item"><span>Recovered:</span>{recovered}</div>
    </div>
  );
};

export default Card;
