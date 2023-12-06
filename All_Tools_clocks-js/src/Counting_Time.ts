


let stop_interval;
const delta_mS = 100;
let timers_ms = 0;

function EventStupor() {
    const start = document.querySelector('#start')
  start.addEventListener('click', Start);
  const stop = document.querySelector('#stop')
  stop.addEventListener('click', Stop)

  const reset = document.querySelector('#reset')
  reset.addEventListener('click', Reset)
}
const check_elem=function (elem:) {
    
}

function Start() {
  console.log('start');

  if (stop_interval) {
    console.log("השעון פועל ");
    return;
  }
  stop_interval = setInterval(function () {
    timers_ms += 100;
    document.querySelector('#timers').innerHTML = Timers_To_String();

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
  timers_ms = 0;
  Stop()
  document.querySelector('#timers').innerHTML = Timers_To_String();

}

function Timers_To_String() {
  const milsec = (timers_ms / 100) % 10;
  const sec = Math.floor(timers_ms / 1000) % 60;
  const minutes = Math.floor(timers_ms / 1000 / 60)
  // return `${minutes}: ${sec}: ${milsec}`; //עם זה אנגלית
  return `${milsec}: ${sec}: ${minutes}`;
}