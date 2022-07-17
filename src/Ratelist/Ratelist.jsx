import React from "react";
import Card from "../Card/Card";
import styles from "./Ratelist.module.css"

const cards = [
  { title: "Безлимитный 300", price: "300", speed:"10", description: "Объем включенного траффика не ограничен", titleColor:"rgb(78, 210, 142)", priceColor:"rgb(138, 224, 175)"},
  { title: "Безлимитный 450", price: "450", speed:"50", description: "Объем включенного траффика не ограничен", titleColor:"rgb(220, 74, 184)", priceColor:"rgb(255, 168, 233)"},
  { title: "Безлимитный 550", price: "550", speed:"100", description: "Объем включенного траффика не ограничен", titleColor:"rgb(236, 93, 93)", priceColor:"rgb(255, 183, 183)"},
  { title: "Безлимитный 1000", price: "1000", speed:"1000", description: "Объем включенного траффика не ограничен", titleColor:"rgb(170, 117, 184)",priceColor:"rgb(225, 186, 236)"}
];

function RateList() {
  return (
    <div className={styles.ratelist}>
        {cards.map(el =><Card card={el}/>)}
    </div>
  );
}

export default RateList;