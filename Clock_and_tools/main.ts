import { EventStupor } from "./src/Counting_Time";
import { Get_TimeNow } from "./src/Time_Now";

//npm run dev

window.onload = function () {
  EventStupor();
  setInterval(Get_TimeNow, 1 * 1000); //1000ms=1s

}
// function EventStupor() {
//   let start = document.querySelector('#start');
//   start?.addEventListener('click', Start);
//   let stop = document.querySelector('#stop');
//   stop?.addEventListener('click', Stop);
//   let reset = document.querySelector('#reset');
//   reset?.addEventListener('click', Reset);
// }
// function Start() {
//   console.log('start');

//   if (stop_interval) {
//     console.log("השעון פועל ");
//     return;
//   }
//   let count_time:number = 0;
//   stop_interval = setInterval(function () {
//     count_time += delta_mS;
//     if (timers_elem) {
//       timers_elem.innerHTML = Timers_To_String(count_time / delta_mS);//count_time ms/1000=שנוית 
//     }
//   }, delta_mS)
//   console.log('start');
// }

// function Stop() {
//   console.log('stop');
//   clearInterval(stop_interval);
//   stop_interval = undefined;
// }

// function Reset() {
//   console.log('reset');
//   Stop();
//   if (timers_elem) {
//     timers_elem.innerHTML = Timers_To_String(0);
//   }
// }



// function Timers_To_String(timers) {//לשים לב שבקריאה הפונקציה אני הופך את זה לשניות
//   timers < 0 ? (timers = 0) : (timers = timers); // בודק שהוא לא מספר שלילי
//   const sec = Look_Time(Math.floor(timers) % 60),//שנוית
//     minutes = Look_Time(Math.floor(timers / 60) % 60),//דקות
//     hours = Look_Time(Math.floor(timers / 60 / 60) % 24),//שעות
//     date = Look_Time(Math.floor(timers / 60 / 60 / 24));//ימים
//   return `${date}d : ${hours}h : ${minutes}m : ${sec}s`;
// }
