import { Look_Time, Timers_To_String } from "./func_helps";
//Alarm Clock=שעון מעורר
//stopwatch=סטופר /שעון עצר

export function Event_CountDown() {

}
function Count_Down(inp, delta = 1000) {//רק סיפה לאחור גם בלי עדכון 
    var interval_time = setInterval(function () {
        if (inp > 0) {
            console.log(inp);
            inp -= delta;
        }
        else {// if (!interval_time) 
            clearInterval(interval_time)
            //כאן תצריך להוסיף הפעלת צליל 
            return true;
        }


    }, delta);
}
function AccessToHtml() {
    const sec_inp = document.querySelector('#sec-inp'),
        minut_inp = document.querySelector('#minut-inp'),
        hour_inp = document.querySelector('#hors-inp'),
        dey_inp = document.querySelector('#day-inp');
    let sum_time = 0;
    if (dey_inp) {
        sum_time += Number(dey_inp.value) * 60 * 60 * 24;
    }
    if (hour_inp) {
        sum_time += Number(hour_inp.value) * 60 * 60;
    }

    if (minut_inp) {
        sum_time += minut_inp.value * 60;
    }

    if (sec_inp) {
        sum_time += parseInt(sec_inp.value);
    }
    console.log('sum time', sum_time);
    Count_Down(sum_time * 1000);
    console.log(sec_inp?.ariaValueMax);


}
