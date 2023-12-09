/**
 * Returns a string representation of the given number with a leading zero if the number is less than 10.
 *
 * @param {number} num - The number to pad.
 * @return {string} - The padded string representation of the number.
 */
export function Look_Time(num: number) {

  return (num < 10 ? "0" : "") + num;
  
}
/**
 * Converts a given time value in seconds to a string representation of days, hours, minutes, and seconds.
 *
 * @param {number} timer_sec - The time value in seconds to be converted.
 * @return {string} - The string representation of the time value in the format "d : h : m : s".
 */
export function Timers_To_String(timer_sec:number):string {//לשים לב שבקריאה הפונקציה אני הופך את זה לשניות
  timer_sec < 0 ? (timer_sec = 0) : (timer_sec = timer_sec); // בודק שהוא לא מספר שלילי
  const second = Look_Time(Math.floor(timer_sec) % 60),//שנוית
    minutes = Look_Time(Math.floor(timer_sec / 60) % 60),//דקות
    hours = Look_Time(Math.floor(timer_sec / 60 / 60) % 24),//שעות
    day = Look_Time(Math.floor(timer_sec / 60 / 60 / 24));//ימים
  return `${day}d : ${hours}h : ${minutes}m : ${second}s`;
}

