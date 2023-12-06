
/**
 * Set up a timer that updates the current time every second.
 *
 * @param {function} TimeNow - a callback function to update the current time
 * @return {void} This function does not return a value
 */
export async function TimeNow() {
  // const TimeNow = function () {
  const d: Date = new Date();
  const time_now: string = d.toLocaleTimeString();
  const elem = document.querySelector('#time-now');
  if (elem) {
    elem.innerHTML = `השעה עכשיו: <b>${time_now}</b>`; // Add emphasis to the time
  }
 
}

