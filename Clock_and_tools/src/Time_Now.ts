


/**
 * Retrieves the current time and date and displays it on the webpage.
 *
 * @return {Object} - An object containing the current time and date.
 *                   The object has the following properties:
 *                   - miles: The milliseconds of the current time.
 *                   - sec: The seconds of the current time.
 *                   - minutes: The minutes of the current time.
 *                   - hour: The hours of the current time.
 *                   - get_date: A function that returns the current date as a string.
 *                   - time_in_html: A function that returns a formatted string
 *                                   with the current time and date.
 */
export async function Get_TimeNow() {
  const d: Date = new Date();
  const elem = document.querySelector('#time-now');
  const obj_time = {
    miles: Look_Time(d.getMilliseconds()),//מיל שנוית
    sec: Look_Time(d.getSeconds()),//שניות
    minutes: Look_Time(d.getMinutes()),//דקות
    hour: Look_Time(d.getHours()),//שעות
    get_date: function Get_DateNow(): string {
      let data_now: string = d.toLocaleDateString();
      return data_now;
    },
   time_in_html:function ():string {
          return `${this.hour}h : ${this.minutes}m : ${this.sec}s |אתריך של היום:${this.get_date()}`} 
  }
    
  if (elem) {
    // elem.innerHTML = `השעה עכשיו: <b>${time_now}</b>`; // Add emphasis to the time
        elem.innerHTML = `השעה עכשיו: <b>${obj_time.time_in_html()}</b>`; // Add emphasis to the time
  }
  return obj_time;
 
}


/**
 * Returns a string representation of the given number with a leading zero if the number is less than 10.
 *
 * @param {number} num - The number to pad.
 * @return {string} - The padded string representation of the number.
 */
export function Look_Time(num: number) {

  return (num < 10 ? "0" : "") + num;
  
}