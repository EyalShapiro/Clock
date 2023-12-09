import { Timers_To_String } from "./func_helps";

//npm run dev
let interval_timer: number | undefined;//interval=הפסקה
const delta_sec: number = 1000;//1s


export function Event_CountTime() {
  console.log("השעון פועל ");

  Reset();//בשביל המרעה
  let start = document.querySelector('#start');
  start?.addEventListener('click', Start);
  let stop = document.querySelector('#stop');
  stop?.addEventListener('click', Stop);
  let reset = document.querySelector('#reset');
  reset?.addEventListener('click', Reset);
}
function Set_Time_InHtml(count:number) {
  const timers_elem = document.querySelector('#count-time');//html גישה ל
  if (timers_elem) {
      timers_elem.innerHTML = Timers_To_String(count / delta_sec);//count_time ms/1000=שנוית 
    }
}

function Start() {
  console.log('start');

  if (interval_timer) {//מאיוטר אין צורך
    console.log(interval_timer);
    
    return;
  }
  let count_time:number = 0;
  interval_timer = setInterval(function () {
    count_time += delta_sec;
    Set_Time_InHtml(count_time)
  }, delta_sec)

  console.log('start');
}

function Stop() {
  console.log('stop');
  clearInterval(interval_timer);
  interval_timer = undefined;
}

function Reset() {
  console.log('reset');
  Stop();
  Set_Time_InHtml(0);
}



