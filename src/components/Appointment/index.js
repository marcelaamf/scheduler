import React from "react";

import "./styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";

import useVisualMode from "../../hooks/useVisualMode";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING";
const CONFIRMDELETE = "CONFIRMDELETE";

export default function Appointment(props) {
  console.log("props", props);
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = { student: name, interviewer };
    transition(SAVING);
    console.log("props.bookInterview", props.bookInterview);
    props.bookInterview(props.id, interview).then(() => {
      transition(SHOW);
    });
  }

  function onDelete() {
    transition(CONFIRMDELETE);
  }

  function deleteAppointment() {
    transition(DELETING, true);
    props.cancelInterview(props.id).then(() => {
      transition(EMPTY);
    });
  }

  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={onDelete}
        />
      )}
      {mode === CREATE && (
        <Form
          interviewers={props.interviewers}
          onSave={save}
          onCancel={() => back(EMPTY)}
        />
      )}
      {mode === SAVING && <Status message={"Saving"} />}
      {mode === CONFIRMDELETE && (
        <Confirm
          message={"Are you sure you would like to delete?"}
          onCancel={back}
          onConfirm={deleteAppointment}
        />
      )}
      {mode === DELETING && <Status message={"Deleting"} />}
    </article>
  );
}
