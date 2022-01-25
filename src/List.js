import React from "react";
import Card from "./Card";
import "./List.css";

function List(params) {
  let cards = params.cards.map((card, i) => {
    return <Card key={i} title={card.title} content={card.content} />;
  });
  return (
    <section className="List">
      <header className="List-header">{params.header}</header>
      <div className="List-cards">{cards}</div>
    </section>
  );
}

export default List;
