import "./Card.scss";
import React from "react";

export default function Component({ card }) {
  const [isHover, setIsHover] = React.useState(false);
  const [selected, setSelected] = React.useState(false);
  const [leaveWhenSelected, setLeaveWhenSelected] = React.useState(false);
  function handleSelect() {
    setSelected(!selected);
    if (selected) setLeaveWhenSelected(false);
  }
  return (
    <div
      disabled={card.disabled}
      className={"card_block" + (card.disabled ? " disabled" : "")}
      style={{
        // backgroundImage: `url(${card.image})`,
        "--border-color": selected
          ? isHover
            ? "#E52E7A"
            : "#D91667"
          : isHover
          ? "#2EA8E6"
          : "#1698d9",
      }}
    >
      <main
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => {
          setIsHover(false);
          if (selected) setLeaveWhenSelected(true);
        }}
        onClick={handleSelect}
      >
        <img src={card.image} />
        <header>
          {leaveWhenSelected ? (
            <div className="category" style={{ color: "var(--border-color)" }}>
              Котэ не одобряет?
            </div>
          ) : (
            <div className="category">{card.category}</div>
          )}

          <div className="title">{card.title}</div>
          <div className="taste">{card.taste}</div>
          <div className="info">{card.info}</div>
        </header>

        <div className="weight">
          <div>{card.weight}</div>
          <div>кг</div>
        </div>
      </main>

      <div className="description">
        {card.disabled ? (
          <div>{`Печалька, ${card.taste} закончился.`}</div>
        ) : selected ? (
          <>{card.description}</>
        ) : (
          <>
            Чего сидишь? Порадуй котэ,{" "}
            <span className="buy" onClick={handleSelect}>
              купи
            </span>
            <span>.</span>
          </>
        )}
      </div>
    </div>
  );
}
