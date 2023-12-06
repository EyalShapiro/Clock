import { TimeNow } from "./src/Time_Now";
//npm run dev
window.onload = function () {
  EventStupor();
  setInterval(TimeNow, 1 * 1000); //1000ms=1s

}



let stop_interval;
const delta_mS = 100;

function EventStupor() {
  let start = document.querySelector('#start')
  start.addEventListener('click', Start)
  let stop = document.querySelector('#stop')
  stop.addEventListener('click', Stop)

  let reset = document.querySelector('#reset')
  reset.addEventListener('click', Reset)
}

function Start() {
  console.log('start');

  if (stop_interval) {
    console.log("השעון פועל ");
    return;
  }
  let count_time = 0;
  stop_interval = setInterval(function () {

    count_time += 100;
    document.querySelector('#timers').innerHTML = Timers_To_String(count_time);

  }, delta_mS)
  console.log('start');
}

function Stop() {
  console.log('stop');
  clearInterval(stop_interval);
  stop_interval = undefined;
}

function Reset() {
  console.log('reset');
  Stop()

  document.querySelector('#timers').innerHTML = Timers_To_String(0);

}

function Timers_To_String(timers) {
  const timersObj = {
    miles: (timers / 100) % 10,
    sec: Math.floor(timers / 1000) % 60,
    minutes: Math.floor(timers / 1000 / 60)
    // : Math.floor(timers);
  }

  return `${timersObj.miles}: ${timersObj.sec}: ${timersObj.minutes}`;
}