
export function getAppointmentsForDay(state, day) {
 const dayEntry = state.days.find((element) => element.name === day);
  if (!dayEntry) {
    return [];
  }

const appointmentsList = (dayEntry.appointments).map((appointmentId) => {
  return state.appointments[appointmentId]
 })
  return appointmentsList
};

export function getInterview(state, interview) {
  if (!interview) { 
    return null; 
  }
  const interviewerId = {...interview}.interviewer
  const selectedInterviewer = state.interviewers[interviewerId]
  const interviewData = {...interview, interviewer: selectedInterviewer}

  return interviewData;
}


export function getInterviewersForDay (state, day) {

  const dayEntry = state.days.find((element) => element.name === day);
  if (!dayEntry) {
    return [];
  }
    const interviewerAppointments = (dayEntry.interviewers).map((interviewerId) => {
    return state.interviewers[interviewerId];
  });

  return interviewerAppointments;
}
