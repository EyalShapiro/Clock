import { Get_Elem_Acc_Detect, Timers_To_String } from "./func_helps";

//npm run dev
let interval_timer: number | undefined;//interval=הפסקה
const delta_sec: number = 1000;//1s
let select_up: string = 'Count-Up';
let action: boolean = false;
export function Event_CountUpTime() {
  console.log("השעון פועל ");
  Reset();//בשביל המרעה
  let start = document.querySelector('#start');
  start?.addEventListener('click', Start);
  let stop = document.querySelector('#stop');
  stop?.addEventListener('click', Stop);
  let reset = document.querySelector('#reset');
  reset?.addEventListener('click', Reset);
}

/**
 * The function `Set_Time_InHtml` updates the content of an HTML element with a timer value.
 * @param {number} count - The `count` parameter is a number that represents the time in seconds. It is
 * used to calculate the time to be displayed in the HTML element.
 * @param {string} select - The `select` parameter is a string that represents the selector for the
 * HTML element where the time will be displayed. It is optional and has a default value of
 * `'select_up'`.
 */
async function Set_Time_InHtml(count: number, select: string = select_up) {
  console.log(`select: ${select}`);

  //select :הוספתי כדי שתהיה אופציה לשדרג
  let time_up_elem: HTMLElement | null;
  if (Get_Elem_Acc_Detect(select) != '') {
    select = Get_Elem_Acc_Detect(select);
  }
  time_up_elem = document.querySelector(select);

  if (time_up_elem) {
    time_up_elem.innerHTML = Timers_To_String(count / delta_sec);
  } else {  // אם לא האלמנט נמצא, מעדכן את תוכן שלו
    const time_up_elem = document.createElement('p');
    time_up_elem.innerHTML = Timers_To_String(count / delta_sec);
    time_up_elem.className = 'timer';
    time_up_elem.id = 'time-up';
    select_up = 'time-up';
    document.querySelector('.app-count-up')?.appendChild(time_up_elem)
  }
}

/**
 * The `Start` function is an asynchronous function that starts a timer and logs "start" to the
 * console.
 */
async function Start() {
  action = true;
  let count_time: number = 0;
  interval_timer = setInterval(function () {
    count_time += delta_sec;
    Set_Time_InHtml(count_time, select_up)
  }, delta_sec)

  console.log('start');
}

/**
 * The function `Stop` stops a timer and sets a variable `action` to false.
 */
async function Stop() {
  action = false;
  console.log('stop');
  clearInterval(interval_timer);
  interval_timer = undefined;
}



/**
 * This code is written in TypeScript.
 * It contains an asynchronous function named Reset that logs 'reset', stops a process, and sets the time in HTML to 0.
 */


async function Reset() {
  console.log('reset');
  Stop();
  Set_Time_InHtml(0);
}

