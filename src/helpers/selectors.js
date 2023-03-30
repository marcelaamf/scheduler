
export function getAppointmentsForDay(state, day) {
let appointmentsList = []

 for (let dayEntry of state.days) {
  if (dayEntry.name === day) {
    appointmentsList = [...dayEntry.appointments]
  }
 }

const dayAppointments = appointmentsList.map((appointmentId) => {
  return state.appointments[appointmentId]
 })
  return dayAppointments
};

export function getInterview(state, interview) {
  if (!interview) { 
    return null; 
  }
  const interviewerId = {...interview}.interviewer
  const selectedInterviewer = state.interviewers[interviewerId]
  const interviewData = {...interview, interviewer: selectedInterviewer}
// console.log ("interviewerId:", interviewerId )
// console.log ("selectedInterviewer:", selectedInterviewer)
// console.log ("InterviewData:", interviewData)
  return interviewData;
}

