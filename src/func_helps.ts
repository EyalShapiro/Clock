
/**
 * A function that adds a leading zero to a number if it is less than 10.
 *
 * @param {number} num - The number to add a leading zero to.
 * @return {string} The modified number as a string.
 */
export function Look_Time_TwoDigit (num: number): string {//Look Time Two Digit =תראה זמן דו ספרתי
//עם זה מספר אחד אז הוא מחזיר מוסיף 0 
  return (num < 10 ? "0"+num :`${num}`);
  
}
/**
 * Converts a given time value in seconds to a string representation of days, hours, minutes, and seconds.
 *
 * @param {number} timer_sec - The time value in seconds to be converted.
 * @return {string} - The string representation of the time value in the format "d : h : m : s".
 */
export function Timers_To_String(timer_sec:number):string {//לשים לב שבקריאה הפונקציה אני הופך את זה לשניות
  timer_sec < 0 ? (timer_sec = 0) : (timer_sec = timer_sec); // בודק שהוא לא מספר שלילי
  const second = Look_Time_TwoDigit (Math.floor(timer_sec) % 60),//שנוית
    minutes = Look_Time_TwoDigit (Math.floor(timer_sec / 60) % 60),//דקות
    hours = Look_Time_TwoDigit (Math.floor(timer_sec / 60 / 60) % 24),//שעות
    day = Look_Time_TwoDigit (Math.floor(timer_sec / 60 / 60 / 24));//ימים
  return `${day}d : ${hours}h : ${minutes}m : ${second}s`;
}


/**
 * Toggles the display style of an element between "none" and a specified value.
 * @TranslateNames func:Element Gone=האלמנט נעלם,param: Element unknown:אלמנט נעלם
 * @param {HTMLElement} elem_unknown - The element to toggle the display style of.
 * @param {string} [display='flex'] - The value to set the display style to when the element is hidden.
 * @return {boolean} Returns true if the element is visible after the toggle, false otherwise.
 */
export  async function Element_Gone(elem_unknown:HTMLElement,display:string='flex' ): Promise<boolean>{
    if (elem_unknown.style.display == "none")
    {
      elem_unknown.style.display = display;//עכשיו נירא
    }
    else {
      elem_unknown.style.display = "none";//עכשיו מוסתר
  }
  return !(elem_unknown.style.display === "none")
}



/**
 * Retrieves an element based on the specified means.
 * @TranslateName element access detection=זיהוי גישה לאלמנטים
 * @param {string} means - The means used to search for the element.
 * @return {string} - The element found using the specified means, or an empty string if no element is found.
 */
export function Get_Elem_Acc_Detect(means: string): string  {
  means = means.trim();
  if (means[0] == '.' || means[0] == '#') { return means; }
  // ID מחפש את האלמנט לפי 
  else if (document.getElementById(means)) { return '#' + means; }
  //class מחפש את האלמנט לפי 
  else if (document.getElementsByClassName(means)[0]) { return'.' + means; }
  // tag מחפש את האלמנט לפי 
  else if (document.getElementsByTagName(means)[0]) { return means; }
  else { return ''; }
}