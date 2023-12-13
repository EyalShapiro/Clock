import { Timers_To_String, Get_Elem_Acc_Detect } from "./func_helps";
//Alarm Clock=שעון מעורר
//stopwatch=סטופר /שעון עצר
//בודקר על js בגלל ביות
type t = HTMLButtonElement | null;
let delta_sec: number = 1000
const btn_down: t = document.querySelector<HTMLButtonElement>('#alarm-time');
const are_inp: t = document.querySelector(Get_Elem_Acc_Detect('Count-Down-inp'));
let time_down_elem: t = document.querySelector(Get_Elem_Acc_Detect('Count-Down'));
let we_started: boolean = true;
export function Event_CountDown() {
    btn_down?.addEventListener('click', () => {
        if (btn_down.innerHTML == `איפוס`) {
            we_started = false;
            Back();
        }
        else {
            we_started = true;
            Start_Count();

            Start();

        }
    });
}
function Start() {
    if (time_down_elem) { time_down_elem.style.display = 'flex'; }
    if (are_inp) { are_inp.style.display = 'none'; }
    if (btn_down) { btn_down.innerHTML = `איפוס`; }

}
function Back() {
    if (time_down_elem) { time_down_elem.style.display = 'none'; }
    if (are_inp) { are_inp.style.display = 'flex'; }
    if (btn_down) {
        btn_down.innerHTML = `התחלה`;
    }
    Set_Time_InHtml(0)
}


/**
 * This function starts counting down a specified time interval and performs certain actions based on the countdown progress.
 *
 * @return {boolean} Returns true if the countdown is completed successfully, false otherwise.
 */
function Start_Count(): boolean {//רק סיפה לאחור גם בלי עדכון 
    let count_time: any = GetSumTimeInp();
    console.log(count_time);
    const interval_time = setInterval(function () {
        if (count_time > 0 && we_started) {
            console.log(count_time);
            count_time -= delta_sec;
            Set_Time_InHtml(count_time)
        }
        else {// if (!interval_time) 
            clearInterval(interval_time);
            PlaySound();//הפעלת צליל
            return true;
        }
    }, delta_sec);
    return false;//עם זה מגיעה לכאן כנראה יש בעיה
}
/**
 * Calculates the sum of the input time values and returns the result in milliseconds.
 *
 * @return {number} The sum of the input time values in milliseconds.
 */
function GetSumTimeInp(): Number {
    const inp = {
        sec: document.querySelector<HTMLInputElement>('#sec-inp'),
        minut: document.querySelector<HTMLInputElement>('#minut-inp'),
        hour: document.querySelector<HTMLInputElement>('#hour-inp'),
        day: document.querySelector<HTMLInputElement>('#day-inp'),
    }
    let sum_time: number = 0;
    if (inp.day) {
        sum_time += Number(inp.day.value) * 60 * 60 * 24;
        console.log(`day:\t${inp.day.value}`);
        inp.day.value = '';
    }
    if (inp.hour) {
        sum_time += Number(inp.hour.value) * 60 * 60;
        console.log(`hour:\t${inp.hour.value}`);
        inp.hour.value = '';
    }
    if (inp.minut) {
        sum_time += Number(inp.minut.value) * 60;
        console.log(`minut:\t${inp.minut.value}`);
        inp.minut.value = '';
    }
    if (inp.sec) {
        sum_time += Number(inp.sec.value);
        console.log(`sec:\t${inp.sec.value}`);
        inp.sec.value = '';
    }
    console.log('sum time', sum_time);
    sum_time *= 1000;
    return Number(sum_time);
}
/**
 * Sets the time in the HTML element.
 *
 * @param {number} count - The time count.
 */
function Set_Time_InHtml(count: number) {
    if (time_down_elem) {
        time_down_elem.innerHTML = Timers_To_String(count / delta_sec);
    } else {  // אם לא האלמנט נמצא, מעדכן את תוכן שלו
        console.log('createElement');
        const time_up_elem = document.createElement('p');
        time_up_elem.innerHTML = Timers_To_String(count / delta_sec);
        time_up_elem.className = 'timer';
        time_up_elem.id = 'time-down';
        document.querySelector('.app-count-down')?.appendChild(time_up_elem)
    }
}
/**
 * Plays a sound.
 * @return {undefined} No return value.
 */
function PlaySound() {
    let beat = new Audio('./public/horse.mp3');
    // Play the beat
    beat.play();
}