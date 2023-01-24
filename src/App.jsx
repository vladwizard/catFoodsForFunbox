import { useState } from "react";

import "./App.css";
import Card from "./Card/Card";

import cards from "./Cards.json";

export default function App() {
  return (
    <div className="App">
      <div className="title">Ты сегодня покормил кота?</div>
      <div className="cards">
        {cards.map((card, index) => (
          <Card key={index} card={card}></Card>
        ))}
      </div>
    </div>
  );
}
