import React from "react";
import "./Card.css";

function Card(params) {
  return (
    <div className="Card">
      <h3>{params.title}</h3>
      <p>{params.content}</p>
    </div>
  );
}

export default Card;
