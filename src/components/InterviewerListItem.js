import React from "react";
import classNames from "classnames";
import './InterviewerListItem.scss'

export default function InterviewerListItem(props) {
  

  let dayClass = classNames("interviewers__item", {
    " interviewers__item--selected" : props.selected,
  });

  const interviewer = () => {
    if (props.selected) {
    return <>{props.name} </>
    } else {
      return <></>
    }
  }

  return (
    <li className={dayClass} onClick={props.setInterviewer}>
    <img
      className="interviewers__item-image"
      src={props.avatar}
      alt={props.name}
    />
    <>{interviewer()}</>
  </li>
  );
}