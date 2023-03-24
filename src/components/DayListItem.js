import React, {useState} from "react";
import classNames from "classnames";
import "./DayListItem.scss";

export default function DayListItem(props) {

  const handleClick = () => {
    props.setDay(props.name)
  }

  let dayClass = classNames("day-list__item", {
    " day-list__item--selected" : props.selected,
    " day-list__item--full" : props.spots === 0
 });

 const formatSpots = () => {
  if (props.spots === 0) {
    return <>no spots remaining</>;
  } else if (props.spots === 1) {
    return <>{props.spots} spot remaining</>;
  } else {
    return <>{props.spots} spots remaining</>;
  }
};

  return (
    <li onClick = {handleClick} className={dayClass}>
      <h2  className="text--regular">{props.name}</h2> 
      <h3 className="text--light">{formatSpots()}</h3>
    </li>
  );
}