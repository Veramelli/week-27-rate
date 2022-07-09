import React from "react";
import s from "./card.module.css";

function Card(props) {
  return (
    <div className={s.card + (props.card.isSelected ? " " + s.selected : "")}>
      <div
        className={s.title}
        style={{ backgroundColor: props.card.titleColor }}>
        <div>{props.card.title}</div>
      </div>
      <div className={s.wrapper} style={{ backgroundColor: props.card.priceColor }}>
        
          <div>руб</div>
          <div className={s.price}> {props.card.price} </div>
          <div>/мес</div>
        
      </div>
      <div className={s.speed}>до{props.card.speed}Мбит/сек</div>
      <div className={s.footer}>
        <p className={s.footer_text}>{props.card.description}</p>
      </div>
    </div>
  );
}

export default Card;
