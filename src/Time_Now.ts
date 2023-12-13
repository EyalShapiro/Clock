import { Look_Time_TwoDigit } from "./func_helps";



/**
 * The TimeNow function gets the current time, creates a time object, and updates the HTML element with
 * the current time.
 * @returns the `obj_time` object.
 */
export  function TimeNow() {
  const d: Date = new Date();
  const elem = document.querySelector('#time-now');
  const obj_time = CreateTimeObj(d);
  if (elem) {
    elem.innerHTML = obj_time.time_in_html(); // Add emphasis to the time
  }
  return obj_time;

}

const CreateTimeObj = function (d: Date) {
  return {
    miles: Look_Time_TwoDigit(d.getMilliseconds()), //מיל שנוית
    sec: Look_Time_TwoDigit(d.getSeconds()), //שניות
    minutes: Look_Time_TwoDigit(d.getMinutes()), //דקות
    hour: Look_Time_TwoDigit(d.getHours()), //שעות
    get_date: function Get_DateNow(): string {
      let data_now: string = d.toLocaleDateString();
      return data_now;
    },
    time_in_html: function (): string {
      if (this) {
        return `השעה עכשיו:<b>${this.hour}h : ${this.minutes}m : ${this.sec}s </b><br>אתריך של היום:<b>${this.get_date()}</b>`;
      }
      else {
        return `השעה עכשיו: <b>00h : 00m :00s </b><br>אתריך של היום:<b>0/0/0</b>`;
      }
    }
  };
}

