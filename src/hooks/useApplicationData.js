import { useState, useEffect } from "react";
import axios from "axios";
export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = (day) => {
    setState({ ...state, day });
  };

  const bookInterview = function (id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    return axios
      .put(`/api/appointments/${id}`, appointment)
      .then(() => setState((prev) => ({ ...prev, appointments, days: spotsRemaining(appointments, id) })))
      .catch((error) => console.log(error));
  };

  const cancelInterview = function (id) {
    const appointment = { ...state.appointments[id], interview: null };
    const appointments = { ...state.appointments, [id]: appointment };
    console.log("canceling interview");

    return axios
      .delete(`/api/appointments/${id}`)
      .then(() => setState((prev) => ({ ...prev, appointments, days: spotsRemaining(appointments, id) })))
      .catch((error) => console.log(error));
  };

  //Update Spots

  const spotsRemaining = function (appointments, appointmentId) {
    const specificDay = state.days.find(d => d.appointments.includes(appointmentId)) // find the day that has the correct appointment id
    const spots = specificDay.appointments.filter(id => appointments[id].interview === null).length
    return state.days.map(d => d.appointments.includes(appointmentId) ? {...d, spots} : d) 
  };
   
 

  //API Requests
  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ])
      .then((response) => {
        setState((prev) => ({
          ...prev,
          days: response[0].data,
          appointments: response[1].data,
          interviewers: response[2].data,
        }));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return {
    state,
    setDay,
    cancelInterview,
    bookInterview,
  };
}
