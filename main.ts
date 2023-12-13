import { TimeNow } from './src/Time_Now.ts';
import { Event_CountUpTime } from "./src/CountingUp_time.ts";
import { Get_Elem_Acc_Detect, Element_Gone } from "./src/func_helps.ts";
import {Event_CountDown} from './src/Alarm_Clock.ts';

//npm run dev

window.onload = function () {
  Event_CountUpTime();
  setInterval(TimeNow, 1 * 1000); //1000ms=1s
  EventToDisappear()
  Event_CountDown();
}
function EventToDisappear() {//event to disappear=אירוע כדי להיעלם
  //הפונקציה הזאתי קיימת רק לעזרה אישית
  Hide_Elem(`#btn-hide-CountUp`, '.app-count-up');
  Hide_Elem(`btn-hide-CountDown`, 'app-count-down');
  Hide_Elem(`btn-hide-now`, 'app-time-now');
}
function Hide_Elem(id_btn: string, means: string) {
  //means= [class="." or id = "#" or tag = ''] אמצעי זיהוי .
  const hide: any = document.querySelector(Get_Elem_Acc_Detect(means))
    , stat_display: string = hide.style.display;
  // if (Get_Elem_Acc_Detect(id_btn) == '') {
  //   return false;
  // }
  id_btn = Get_Elem_Acc_Detect(id_btn);
  const btn = document.querySelector(`${id_btn}`); if (!btn) { return undefined; }
  if (btn != undefined) {
    if (hide) {
      btn.addEventListener('click', () => {
        console.info(`Button recognition: ${id_btn}`);//Button recognition=זיהוי כפתורים/זיהוי לחצן
        return Element_Gone(hide, stat_display);
      });
    }
  }
  return false;
}
