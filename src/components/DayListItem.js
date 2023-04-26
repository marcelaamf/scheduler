import React from "react";
import classNames from "classnames";
import "./DayListItem.scss";

export default function DayListItem({ name, selected, spots, setDay }) {
  const handleClick = () => {
    setDay(name);
  };

  let dayClass = classNames("day-list__item", {
    " day-list__item--selected": selected,
    " day-list__item--full": spots === 0,
  });

  const formatSpots = () => {
    if (spots === 0) {
      return <>no spots remaining</>;
    } else if (spots === 1) {
      return <>{spots} spot remaining</>;
    } else {
      return <>{} spots remaining</>;
    }
  };

  return (
    <li data-testid="day" onClick={handleClick} className={dayClass}>
      <h2 className="text--regular">{name}</h2>
      <h3 className="text--light">{formatSpots()}</h3>
    </li>
  );
}
