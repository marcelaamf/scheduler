
export function getAppointmentsForDay(state, day) {
let appointmentsList = []

 for (let dayEntry of state.days) {
  if (dayEntry.name === day) {
    appointmentsList = [...dayEntry.appointments]
  }
 }

const dailyAppointments = appointmentsList.map((appointmentId) => {
  return state.appointments[appointmentId]
 })
  return dailyAppointments

} 
