import { Look_Time } from "./func_helps";



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
export async function TimeNow() {
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
    time_in_html: function (): string {
      if (this) {
        return `השעה עכשיו:<b>${this.hour}h : ${this.minutes}m : ${this.sec}s </b><br>אתריך של היום:<b>${this.get_date()}</b>`
      } 
      else {
        return `השעה עכשיו: <b>00h : 00m :00s </b><br>אתריך של היום:<b>0/0/0</b>`
      }
    }
  }
    
  if (elem) {
    // elem.innerHTML = `השעה עכשיו: <b>${time_now}</b>`; // Add emphasis to the time
        elem.innerHTML = ` ${obj_time.time_in_html()}`; // Add emphasis to the time
  }
  return obj_time;
 
}


